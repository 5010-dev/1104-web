import { useState, ChangeEvent, MouseEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { usePaymentStore } from '../../../store/payment/payment.store'
import { useToastMessageStore } from '../../../store/layout/global-ui.store'
import { checkCoupon } from '../../../services/payment/payment-service'

import { CheckoutCodeInputContainer } from './checkout-code-input.styles'

import Input from '../../global/input/input.component'
import Button from '../../global/button/button.component'

export default function CheckoutCodeInput() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { updateCoupon, updateDiscount } = usePaymentStore()
	const { code, isValid } = usePaymentStore((state) => state.coupon)
	const updateToastMessage = useToastMessageStore(
		(state) => state.updateToastMessage,
	)
	const [isChecking, setIsChecking] = useState<boolean>(false)

	const handleCodeInput = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value

		updateCoupon('code', inputValue)
	}

	const handleApplyCode = async (e: MouseEvent<HTMLButtonElement>) => {
		try {
			setIsChecking(true)
			const { discount_price, discount_percentage } = await checkCoupon(code)
			updateCoupon('isValid', true)
			updateDiscount(Number(discount_price), Number(discount_percentage))
		} catch (error: any) {
			updateToastMessage(error.message)
			updateCoupon('isValid', false)
		} finally {
			setIsChecking(false)
		}
	}

	return (
		<CheckoutCodeInputContainer $deviceType={deviceType} $isValid={isValid}>
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
						isValid={isValid !== undefined ? isValid : true}
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
				</div>

				{isValid !== undefined ? (
					<div id="coupon-validity-container">
						<FontAwesomeIcon
							icon={isValid ? faCheck : faXmark}
							className="coupon-validity-caption"
						/>
						<span className="coupon-validity-caption">
							{isValid
								? '할인 코드 적용이 완료되었습니다.'
								: '잘못된 코드입니다. 코드를 다시 확인해 주세요.'}
						</span>
					</div>
				) : null}
			</div>
		</CheckoutCodeInputContainer>
	)
}
