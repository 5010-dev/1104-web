import { useState, ChangeEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { CheckoutCodeInputContainer } from './checkout-code-input.styles'

import Input from '../../global/input/input.component'
import Button from '../../global/button/button.component'

export default function CheckoutCodeInput() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const [code, setCode] = useState<string>('')

	const handleCodeInput = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		setCode(inputValue)
	}

	return (
		<CheckoutCodeInputContainer $deviceType={deviceType}>
			<div className="container-row">
				<h2 className="heading-2">할인 코드 입력</h2>
				<div className="item-row" id="code-input-container">
					<Input
						id="code-input"
						hierarchy="secondary"
						placeholder="할인 코드를 입력해 주세요."
						value={code}
						handleChange={handleCodeInput}
						isValid
					/>
					<Button
						accessibleName="code-input-container"
						id="code-button"
						appearance="neutral"
						hierarchy="secondary"
						stroke="filled"
						shape="rounded3"
						text="코드 적용"
						disabled={code.length === 0}
					/>
				</div>
			</div>
		</CheckoutCodeInputContainer>
	)
}
