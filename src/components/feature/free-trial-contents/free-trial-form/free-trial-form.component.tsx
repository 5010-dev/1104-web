import { useState, FormEvent, MouseEvent, ChangeEvent } from 'react'
import { ROUTES } from '../../../../routes/routes'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../../store/deviceTypeStore'
import { useLoadingStore } from '../../../../store/loadingStore'
import { useToastMessageStore } from '../../../../store/globalUiStore'
import useNavigateWithScroll from '../../../../hooks/useNavigateWithScroll'

import { FreeTrialFormContainer } from './free-trial-form.styles'

import TermsModal from '../../../global/terms-modal/terms-modal.component'
import Input from '../../../global/input/input.component'
import TextLink from '../../../global/text-link/text-link.component'
import Button from '../../../global/button/button.component'

export default function FreeTrialForm() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { updateIsLoading } = useLoadingStore()
	const { updateToastMessage } = useToastMessageStore()
	const navigate = useNavigateWithScroll()

	const [email, setEmail] = useState<string>('')
	const [tel, setTel] = useState<string>('')
	const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
	const [isTelValid, setIsTelValid] = useState<boolean>(false)
	const [showTerms, setShowTerms] = useState<boolean>(false)

	const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value

		setEmail(inputValue)
		setIsEmailValid(validateInput(inputValue, emailRegex))
	}

	const handleTelInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const numericValue = inputValue.replace(/\D/g, '')
		const formattedValue = formatTelNumber(numericValue)

		setTel(formattedValue)
		setIsTelValid(validateInput(formattedValue, telRegex))
	}

	const handleShowTerms = (
		e:
			| MouseEvent<HTMLButtonElement>
			| MouseEvent<HTMLSpanElement>
			| KeyboardEvent,
	) => setShowTerms((state) => !state)

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		updateIsLoading(true)
		try {
			const response = await axios.post(
				`https://api.stibee.com/v1/lists/${process.env.REACT_APP_STIBEE_FREE_TRIAL_LIST_ID}/subscribers`,
				{
					eventOccurredBy: 'SUBSCRIBER',
					confirmEmailYN: 'N',
					subscribers: [
						{
							email: email,
							tel: tel,
							$ad_agreed: 'Y',
						},
					],
				},
				{
					headers: {
						AccessToken: process.env.REACT_APP_STIBEE_API_KEY,
					},
				},
			)
			if (response.status === 200 && response.data.Ok) {
				navigate(ROUTES.FREE_TRIAL, { replace: true, routeState: 'complete' })
			} else {
				updateToastMessage(
					'문제가 발생했습니다. 잠시 후 다시 시도하시거나, 고객 지원 센터로 연락주세요.',
				)
			}
		} catch (error: any) {
			updateToastMessage(error)
		}
		updateIsLoading(false)
	}

	const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/
	const telRegex = /^01[0-9]-\d{4}-\d{4}$/

	const validateInput = (input: string, regex: RegExp): boolean =>
		regex.test(input)

	const formatTelNumber = (numericNumber: string) => {
		if (numericNumber.length <= 3) {
			return numericNumber
		} else if (numericNumber.length <= 7) {
			return `${numericNumber.slice(0, 3)}-${numericNumber.slice(3)}`
		} else {
			return `${numericNumber.slice(0, 3)}-${numericNumber.slice(
				3,
				7,
			)}-${numericNumber.slice(7, 11)}`
		}
	}

	return (
		<FreeTrialFormContainer $deviceType={deviceType} onSubmit={handleSubmit}>
			{showTerms ? (
				<TermsModal
					title="개인정보 제공 동의"
					terms={'eventTerms'}
					handleClose={(e) => handleShowTerms(e)}
				/>
			) : null}
			<div id="free-trial-form-input-container">
				<FontAwesomeIcon
					icon={faEnvelopeCircleCheck}
					id="free-trial-form-icon"
				/>
				<p id="free-trial-form-body">
					원활한 이용을 위해 1:1 무료 상담 후 체험판을 제공해 드리고 있어요.
					연락 가능한 이메일과 핸드폰 번호를 남겨주세요!
				</p>
				<Input
					className="free-trial-form-input"
					type="email"
					name="email"
					placeholder="이메일을 입력해 주세요."
					hierarchy="secondary"
					value={email}
					handleChange={handleEmailInputChange}
					isValid={email.length === 0 || isEmailValid}
					isRequired
				/>
				<Input
					className="free-trial-form-input"
					type="tel"
					name="tel"
					placeholder="핸드폰 번호를 입력해 주세요."
					hierarchy="secondary"
					value={tel}
					handleChange={handleTelInputChange}
					isValid={tel.length === 0 || isTelValid}
					isRequired
				/>
				<TextLink
					id="pre-order-terms-see-details"
					size="sm"
					description="개인정보 제공 동의 : 1104 R&I 이벤트 "
					text="상세보기"
					handleClick={handleShowTerms}
					appearance="neutral"
					hierarchy="secondary"
					underlined
				/>

				<p id="quant-pre-oder-button-description">
					<FontAwesomeIcon
						icon={faCheck}
						id="quant-pre-oder-button-description-icon"
					/>{' '}
					체험판 신청 내용을 확인하였으며, 정보 제공 등에 동의합니다.
				</p>

				<Button
					id="free-trial-form-button"
					type="submit"
					accessibleName="quant-logo-section-contents-container"
					text="체험판 1:1 무료 상담 신청하기"
					appearance="accent"
					hierarchy="primary"
					stroke="filled"
					shape="rounding"
					disabled={!isEmailValid || !isTelValid}
				/>
			</div>
		</FreeTrialFormContainer>
	)
}
