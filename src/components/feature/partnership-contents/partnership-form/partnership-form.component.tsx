import { useState, FormEvent, ChangeEvent } from 'react'

import { useDeviceTypeStore } from '../../../../store/deviceTypeStore'
import { usePartnershipContentsStore } from '../../../../store/contents/partnershipContentsStore'

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

	const [formData, setFormData] = useState<FormData>({
		name: '',
		tel: '',
		org: '',
		email: '',
		title: '',
		body: '',
	})
	const [isValid, setIsValid] = useState({
		name: false,
		tel: false,
		org: false,
		email: false,
		title: false,
		body: false,
	})

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<PartnershipFormContainer $deviceType={deviceType}>
			<div id="partnership-form-contents-container">
				<div id="partnership-form-title-container">
					<h3 id="partnership-form-heading">{heading}</h3>
					<p id="partnership-form-body">{body}</p>
				</div>
				<form id="partnership-form-container" onClick={handleSubmit}>
					<div id="partnership-form-inputs-container">
						<Input
							className="partnership-form-input"
							type="text"
							name="name"
							placeholder="이름을 입력해 주세요."
							hierarchy="secondary"
							value={formData.name}
							handleChange={handleInputChange}
							isValid={formData.name.length === 0 || isValid.name}
							isRequired
						/>
						<Input
							className="partnership-form-input"
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
							className="partnership-form-input"
							type="tel"
							name="tel"
							placeholder="핸드폰 번호를 입력해 주세요."
							hierarchy="secondary"
							value={formData.tel}
							handleChange={handleInputChange}
							isValid={formData.tel.length === 0 || isValid.tel}
							isRequired
						/>
						<Input
							className="partnership-form-input"
							type="text"
							name="org"
							placeholder="회사 및 소속을 입력해 주세요 (선택)."
							hierarchy="secondary"
							value={formData.org}
							handleChange={handleInputChange}
							isValid={formData.org.length === 0 || isValid.org}
						/>
					</div>
					<div id="partnership-form-textarea-container">
						<Input
							className="partnership-form-input"
							type="text"
							name="title"
							placeholder="제목을 입력해 주세요. (50자 이내)"
							hierarchy="secondary"
							value={formData.title}
							handleChange={handleInputChange}
							maxLength={50}
							isValid={formData.title.length === 0 || isValid.title}
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