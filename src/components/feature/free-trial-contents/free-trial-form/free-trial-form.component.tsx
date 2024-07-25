import { useState, useEffect, FormEvent, MouseEvent, ChangeEvent } from 'react'
import { ROUTES } from '../../../../routes/routes'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../../store/layout/device-type.store'
import { useLoadingStore } from '../../../../store/layout/loading.store'
import { useToastMessageStore } from '../../../../store/layout/global-ui.store'
import useNavigateWithScroll from '../../../../hooks/use-navigate-with-scroll'

import {
	validateWithRegex,
	formatTelNumber,
} from '../../../../utils/regex.utils'

import { FreeTrialFormData } from './free-trial-form.types'
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

	const [formData, setFormData] = useState<FreeTrialFormData>({
		email: '',
		tel: '',
	})
	const [isValid, setIsValid] = useState({
		email: false,
		tel: false,
	})
	const [showTerms, setShowTerms] = useState<boolean>(false)

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const inputName = e.target.name

		if (inputName === 'tel') {
			const numericValue = inputValue.replace(/\D/g, '')
			const formattedValue = formatTelNumber(numericValue)

			setFormData((state) => ({ ...state, tel: formattedValue }))
			return
		}

		setFormData((state) => ({ ...state, [inputName]: inputValue }))
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
							email: formData.email,
							tel: formData.tel,
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
				navigate(ROUTES.FREE_TRIAL, {
					replace: true,
					state: { mode: 'complete' },
				})
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

	useEffect(() => {
		setIsValid({
			email:
				formData.email === ''
					? false
					: validateWithRegex('email', formData.email),
			tel: formData.tel === '' ? false : validateWithRegex('tel', formData.tel),
		})
	}, [formData])

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
				<Input
					className="free-trial-form-input"
					type="email"
					name="email"
					placeholder="이메일을 입력해 주세요."
					hierarchy="secondary"
					value={formData.email}
					handleChange={handleInputChange}
					isValid={formData.email.length === 0 || isValid.email}
					isRequired
				/>
				<Input
					className="free-trial-form-input"
					type="tel"
					name="tel"
					placeholder="핸드폰 번호를 입력해 주세요."
					hierarchy="secondary"
					value={formData.tel}
					handleChange={handleInputChange}
					isValid={formData.tel.length === 0 || isValid.tel}
					isRequired
				/>
				<TextLink
					id="pre-order-terms-see-details"
					size="sm"
					description="개인정보 제공 동의 : TEAM 5010 이벤트 "
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
					text="인디케이터 체험판 사용 신청하기"
					appearance="neutral"
					hierarchy="secondary"
					stroke="filled"
					shape="rounding"
					size="sm"
					disabled={!isValid.email || !isValid.tel}
				/>
			</div>
		</FreeTrialFormContainer>
	)
}
