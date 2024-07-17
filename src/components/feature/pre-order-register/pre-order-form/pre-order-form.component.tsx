import { useState, FormEvent, ChangeEvent, MouseEvent } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

import { useDeviceTypeStore } from '../../../../store/deviceTypeStore'
import { usePreOrderContentsStore } from '../../../../store/contents/preOrderContentsStore'
import { useToastMessageStore } from '../../../../store/globalUiStore'
import { useLoadingStore } from '../../../../store/loadingStore'
import { useEventReferralStore } from '../../../../store/eventReferralStore'
import useNavigateWithScroll from '../../../../hooks/useNavigateWithScroll'
import useFadeIn from '../../../../hooks/useFadeIn'

import { PreOrderFormContainer } from './pre-order-form.styles'

import Chip from '../../../global/chip/chip.component'
import Input from '../../../global/input/input.component'
import Button from '../../../global/button/button.component'
import TextLink from '../../../global/text-link/text-link.component'
import TermsModal from '../../../global/terms-modal/terms-modal.component'

export default function PreOrderForm() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const updateToastMessage = useToastMessageStore(
		(state) => state.updateToastMessage,
	)
	const updateIsLoading = useLoadingStore((state) => state.updateIsLoading)
	const { heading, body, terms, agreement, event } = usePreOrderContentsStore(
		(state) => state.formData,
	)
	const { code } = useEventReferralStore()
	const navigate = useNavigateWithScroll()

	const [email, setEmail] = useState<string>('')
	const [tel, setTel] = useState<string>('')
	const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
	const [isTelValid, setIsTelValid] = useState<boolean>(false)
	const [showTerms, setShowTerms] = useState<boolean>(false)

	const { ref, controls, fadeInVariants } = useFadeIn({
		threshold: 0.05,
	})

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

	const handleShowTerms = (e: MouseEvent<HTMLSpanElement> | KeyboardEvent) =>
		setShowTerms((state) => !state)

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		updateIsLoading(true)

		try {
			const emailList =
				code === '59420'
					? process.env.REACT_APP_STIBEE_CO_OP_EMAIL_LIST_ID
					: process.env.REACT_APP_STIBEE_EMAIL_LIST_ID

			const response = await axios.post(
				`https://api.stibee.com/v1/lists/${emailList}/subscribers`,
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
				// updateToastMessage('사전예약 신청이 완료되었습니다.')
				navigate('/success', { routeState: 'success' })
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
		<PreOrderFormContainer
			$deviceType={deviceType}
			onSubmit={handleSubmit}
			as={motion.form}
			ref={ref}
			variants={fadeInVariants}
			initial="hidden"
			animate={controls}
		>
			{showTerms ? (
				<TermsModal
					title="이벤트 개인정보 제공 동의"
					terms={'eventTerms'}
					handleClose={(e) => handleShowTerms(e)}
				/>
			) : null}

			<div id="pre-order-form-contents-container">
				<div id="pre-order-form-text-container">
					<h1 id="pre-order-form-heading">{heading}</h1>
					<p className="pre-order-form-body">{body}</p>
				</div>

				<div id="quant-pre-order-input-container">
					<Input
						className="quant-pre-order-input"
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
						className="quant-pre-order-input"
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
						description={terms}
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
						{agreement}
					</p>

					<Button
						id="quant-pre-order-button"
						type="submit"
						accessibleName="quant-logo-section-contents-container"
						text="이벤트 참여하기 →"
						appearance="accent"
						hierarchy="primary"
						stroke="filled"
						shape="rounding"
						disabled={!isEmailValid || !isTelValid}
					/>
				</div>

				<div id="quant-pre-order-event-container">
					{event.map((item, index) => (
						<div key={index} className="quant-pre-order-event">
							<Chip
								className="quant-pre-order-event-chip"
								appearance="accent"
								hierarchy="primary"
								stroke="filled"
								shape="rounded3"
								inverted
								text={`EVENT #${index + 1}.`}
							/>
							<div className="quant-pre-order-event-heading-container">
								<h3 className="quant-pre-order-event-heading">
									{item.heading}
								</h3>
								<span className="quant-pre-order-event-period">
									{item.period.start} - {item.period.end}
								</span>
							</div>
							<div className="quant-pre-order-event-subheading-container">
								{item.subheading.map((item, index) => (
									<span
										key={index}
										className="quant-pre-order-event-subheading"
									>
										{item}
									</span>
								))}
							</div>
							<ol className="quant-pre-order-event-option-list">
								{item.options.map((item, index) => (
									<li key={index} className="quant-pre-order-event-option">
										{item}
									</li>
								))}
							</ol>
							{item.caption ? (
								<>
									<hr className="quant-pre-order-event-caption-line" />
									<ul className="quant-pre-order-event-caption-list">
										{item.caption.map((item, index) => (
											<li key={index} className="quant-pre-order-event-caption">
												{item}
											</li>
										))}
									</ul>
								</>
							) : null}
						</div>
					))}
				</div>
			</div>
		</PreOrderFormContainer>
	)
}
