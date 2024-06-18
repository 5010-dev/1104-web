import { useState, ChangeEvent, MouseEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { usePaymentStore } from '../../../store/paymentStore'
import { useToastMessageStore } from '../../../store/globalUiStore'
import { checkCoupon } from '../../../services/payment/payment-service'

import { CheckoutCodeInputContainer } from './checkout-code-input.styles'

import Input from '../../global/input/input.component'
import Button from '../../global/button/button.component'

export default function CheckoutCodeInput() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const updateCoupone = usePaymentStore((state) => state.updateCoupone)
	const { code, isValid } = usePaymentStore(
		(state) => state.checkoutItem.coupon,
	)
	const updateToastMessage = useToastMessageStore(
		(state) => state.updateToastMessage,
	)
	const [isChecking, setIsChecking] = useState<boolean>(false)

	const handleCodeInput = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value

		updateCoupone('code', inputValue)
	}

	const handleApplyCode = async (e: MouseEvent<HTMLButtonElement>) => {
		try {
			setIsChecking(true)
			const response = await checkCoupon(code)

			// TODO: Need to check later
			if (response.code) {
				updateCoupone('isValid', true)
			} else {
				updateCoupone('isValid', false)
			}
			console.log(response)
		} catch (error: any) {
			updateToastMessage(error.message)
		} finally {
			setIsChecking(false)
		}
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
						name="coupon"
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
						handleClick={handleApplyCode}
						disabled={code.length === 0 || isChecking}
					/>
					{/* isValid ? 코드 적용이 완료되었습니다. : null */}
				</div>
			</div>
		</CheckoutCodeInputContainer>
	)
}
