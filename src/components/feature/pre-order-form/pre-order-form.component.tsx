import { useState, FormEvent, ChangeEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { PreOrderFormContainer } from './pre-order-form.styles'

import Input from '../../global/input/input.component'
import Button from '../../global/button/button.component'

export default function PreOrderForm() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	const [email, setEmail] = useState<string>('')
	const [isValid, setIsValid] = useState<boolean>(false)

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value

		setEmail(inputValue)
		setIsValid(validateInput(inputValue, emailRegex))
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/

	const validateInput = (input: string, regex: RegExp): boolean =>
		regex.test(input)

	return (
		<PreOrderFormContainer $deviceType={deviceType} onSubmit={handleSubmit}>
			<div id="pre-order-form-contents-container">
				<div id="pre-order-form-text-container">
					<span id="pre-order-form-caption">
						Devloped & Provided by 1104 R&I
					</span>
					<h1 id="pre-order-form-heading">르네상스 퀀트 솔루션</h1>
					<span id="pre-order-form-subheading">사전예약 진행중</span>
					<p className="pre-order-form-body">
						1104 R&I가 새롭게 선보이는 르네상스 퀀트 솔루션은 리스크 관리에
						초점을 맞춘 개량적 투자 전략과 자동 매매 시스템을 제공합니다.
					</p>
					<p className="pre-order-form-body">
						저위험 및 스윙 전략을 통해 안정적인 복리 수익을 달성하고, 장기적인
						관점에서의 투자를 지향합니다.
					</p>
				</div>

				<div id="quant-pre-order-input-container">
					<Input
						id="quant-pre-order-input"
						type="email"
						name="email"
						placeholder="이메일을 입력해 주세요."
						hierarchy="secondary"
						value={email}
						handleChange={handleInputChange}
						isValid={email.length === 0 || isValid}
					/>
					<Button
						id="quant-pre-order-button"
						type="submit"
						accessibleName="quant-logo-section-contents-container"
						text="사전예약 신청하기"
						appearance="accent"
						hierarchy="primary"
						stroke="filled"
						shape="rounding"
						disabled={!isValid}
					/>
				</div>
			</div>
		</PreOrderFormContainer>
	)
}
