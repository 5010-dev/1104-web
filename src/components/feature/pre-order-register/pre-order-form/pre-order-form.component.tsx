import { useState, FormEvent, ChangeEvent, MouseEvent } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

import { useDeviceTypeStore } from '../../../../store/deviceTypeStore'
import { usePreOrderContentsStore } from '../../../../store/contents/preOrderContentsStore'
import { useToastMessageStore } from '../../../../store/globalUiStore'
import { useLoadingStore } from '../../../../store/loadingStore'
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
	const { caption, heading, subheading, body, event } =
		usePreOrderContentsStore((state) => state.formData)

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
			const response = await axios.post(
				`https://api.stibee.com/v1/lists/${process.env.REACT_APP_STIBEE_EMAIL_LIST_ID}/subscribers`,
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
				updateToastMessage('사전예약 신청이 완료되었습니다.')
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
					<Chip
						id="pre-order-form-chip"
						appearance="accent"
						hierarchy="primary"
						stroke="filled"
						shape="rounded3"
						text={caption}
						// inverted
					/>
					<h1 id="pre-order-form-heading">{heading}</h1>
					<span id="pre-order-form-subheading">{subheading}</span>
					{body.map((item, index) => (
						<p key={index} className="pre-order-form-body">
							{item}
						</p>
					))}
				</div>

				<div id="quant-pre-order-event-container">
					<span id="quant-pre-order-event-heading">
						사전 예약 신청자 중 <br /> {event.heading}
					</span>
					<ol id="quant-pre-order-event-option-list">
						{event.options.map((item, index) => (
							<li key={index} className="quant-pre-order-event-option">
								{item}
							</li>
						))}
					</ol>
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
						사전예약 내용을 확인하였으며, 정보 제공 등에 동의합니다.
					</p>

					<Button
						id="quant-pre-order-button"
						type="submit"
						accessibleName="quant-logo-section-contents-container"
						text="사전예약 신청하기"
						appearance="accent"
						hierarchy="primary"
						stroke="filled"
						shape="rounding"
						disabled={!isEmailValid || !isTelValid}
					/>
				</div>
			</div>
		</PreOrderFormContainer>
	)
}
