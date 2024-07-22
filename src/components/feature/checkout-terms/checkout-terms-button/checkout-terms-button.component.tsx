import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

import { CheckoutTermsButtonProps } from './checkout-terms-button.types'
import { CheckoutTermsButtonConatiner } from './checkout-terms-button.styles'

import Button from '../../../global/button/button.component'

export default function CheckoutTermsButton(props: CheckoutTermsButtonProps) {
	const { isDisabled, handleCheckout } = props

	return (
		<CheckoutTermsButtonConatiner className="checkout-terms-button-container">
			<Button
				accessibleName="checkout-terms-button-container"
				id="checkout-button"
				appearance="accent"
				hierarchy="primary"
				stroke="filled"
				shape="rounding"
				icon={<FontAwesomeIcon icon={faCheck} />}
				text="주문 요청하기"
				disabled={isDisabled}
				handleClick={handleCheckout}
			/>
			{isDisabled ? (
				<span className="button-caption">
					<FontAwesomeIcon
						icon={faCircleExclamation}
						className="button-caption-icon"
					/>
					주문 요청을 위해 약관에 모두 동의하고
					<br />
					주문자 정보를 빠짐없이 기입해 주세요.
				</span>
			) : null}
		</CheckoutTermsButtonConatiner>
	)
}
