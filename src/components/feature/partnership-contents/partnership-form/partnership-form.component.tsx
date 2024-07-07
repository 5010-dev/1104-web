import { useState, FormEvent, ChangeEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser'

import { useDeviceTypeStore } from '../../../../store/layout/device-type.store'
import { usePartnershipContentsStore } from '../../../../store/contents/partnershipContentsStore'
import { useLoadingStore } from '../../../../store/layout/loading.store'
import { useToastMessageStore } from '../../../../store/layout/global-ui.store'

import {
	validateWithRegex,
	RegexKey,
	formatTelNumber,
	isAllValid,
} from '../../../../utils/regex.utils'

import { FormData } from './partnership-form.types'
import { PartnershipFormContainer } from './partnership-form.styles'

import Input from '../../../global/input/input.component'
import Button from '../../../global/button/button.component'

export default function PartnershipForm() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { caption } = usePartnershipContentsStore()
	const { heading, body } = usePartnershipContentsStore(
		(state) => state.contact,
	)
	const { updateIsLoading } = useLoadingStore()
	const { updateToastMessage } = useToastMessageStore()

	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		body: '',
	})
	const [isValid, setIsValid] = useState({
		name: false,
		email: false,
		body: false,
	})

	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const inputValue = e.target.value
		const inputName = e.target.name

		if (inputName === 'tel') {
			const numericValue = inputValue.replace(/\D/g, '')
			const formattedValue = formatTelNumber(numericValue)

			setFormData((state) => ({ ...state, tel: formattedValue }))
			setIsValid((state) => ({
				...state,
				[inputName]: validateWithRegex('tel', formattedValue),
			}))
			return
		}

		setFormData((state) => ({ ...state, [inputName]: inputValue }))
		setIsValid((state) => ({
			...state,
			[inputName]: validateWithRegex(inputName as RegexKey, inputValue),
		}))
	}

	const allFieldsValid = isAllValid(isValid)

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!allFieldsValid) return

		try {
			updateIsLoading(true)

			const result = await emailjs.send(
				process.env.REACT_APP_EMAILJS_SERVICE_ID!,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
				{
					name: formData.name,
					email: formData.email,
					body: formData.body,
				},
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
			)

			if (result.text === 'OK') {
				updateToastMessage('파트너십 문의가 성공적으로 전송되었습니다.')
				setFormData({ name: '', email: '', body: '' })
			}
		} catch (error: any) {
			updateToastMessage(error.message)
		} finally {
			updateIsLoading(false)
		}
	}

	return (
		<PartnershipFormContainer $deviceType={deviceType}>
			<div id="partnership-form-contents-container">
				<div id="partnership-form-title-container">
					<FontAwesomeIcon
						icon={faEnvelopeOpenText}
						id="partnership-form-icon"
					/>
					<h3 id="partnership-form-heading">{heading}</h3>
					<p id="partnership-form-body">{body}</p>
				</div>
				<form id="partnership-form-container" onClick={handleSubmit}>
					<div id="partnership-form-inputs-container">
						<Input
							className="partnership-form-input"
							type="text"
							name="name"
							placeholder="문의하시는 분의 이름을 입력해 주세요."
							hierarchy="primary"
							value={formData.name}
							handleChange={handleInputChange}
							isValid={formData.name.length === 0 || isValid.name}
							isRequired
						/>
						<Input
							className="partnership-form-input"
							type="email"
							name="email"
							placeholder="연락받으실 이메일을 입력해 주세요."
							hierarchy="primary"
							value={formData.email}
							handleChange={handleInputChange}
							isValid={formData.email.length === 0 || isValid.email}
							isRequired
						/>
						<Input
							className="partnership-form-input"
							isTextfield
							type="text"
							name="body"
							placeholder="500자 이내로 파트너십 문의 내용을 작성해 주세요."
							hierarchy="primary"
							value={formData.body}
							handleChange={handleInputChange}
							isValid={formData.body.length === 0 || isValid.body}
							isRequired
							maxLength={500}
						/>
					</div>
					<div id="partnership-form-button-container">
						<Button
							id="partnership-form-button"
							type="submit"
							accessibleName="quant-logo-section-contents-container"
							text="파트너십 문의하기"
							appearance="accent"
							hierarchy="primary"
							stroke="filled"
							shape="rounding"
							disabled={!allFieldsValid}
						/>
						<span id="partnership-form-button-caption">{caption}</span>
					</div>
				</form>
			</div>
		</PartnershipFormContainer>
	)
}
