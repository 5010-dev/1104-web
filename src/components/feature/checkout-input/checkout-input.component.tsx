import { useEffect, ChangeEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { useAuthDataStore } from '../../../store/data/auth-data/auth-data.store'
import { usePaymentStore } from '../../../store/payment/payment.store'

import { validateWithRegex, formatTelNumber } from '../../../utils/regex.utils'

import { CheckoutInputContainer } from './checkout-input.styles'

import Input from '../../global/input/input.component'
import Chip from '../../global/chip/chip.component'

export default function CheckoutInput() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { userId } = useAuthDataStore((state) => state.loginUser)
	const {
		checkoutData,
		updateCheckoutData,
		updateCheckoutDataValidity,
		resetPaymentStore,
	} = usePaymentStore()
	const { data, isValid } = checkoutData

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const inputName = e.target.name

		if (inputName === 'tel') {
			const numericValue = inputValue.replace(/\D/g, '')
			const formattedValue = formatTelNumber(numericValue)
			updateCheckoutData(inputName, formattedValue)
		} else {
			updateCheckoutData(inputName, inputValue)
		}
	}

	const handleInputReset = (key: string) => updateCheckoutData(key, '')

	useEffect(() => {
		updateCheckoutDataValidity(
			'name',
			data.name === '' ? false : validateWithRegex('name', data.name),
		)
		updateCheckoutDataValidity(
			'tel',
			data.tel === '' ? false : validateWithRegex('tel', data.tel),
		)
	}, [updateCheckoutDataValidity, data.name, data.tel])

	useEffect(() => {
		return () => resetPaymentStore()
	}, [resetPaymentStore])

	return (
		<CheckoutInputContainer $deviceType={deviceType}>
			<div className="container-row">
				<h2 className="heading-2">주문자 정보 입력</h2>
				<div className="checkout-input-container">
					<h3 className="heading-3">{userId}</h3>
					<div className="checkout-inputs">
						<Input
							className="checkout-input"
							hierarchy="secondary"
							name="name"
							type="text"
							autoComplete={false}
							value={data.name}
							placeholder="주문자 이름을 입력해 주세요."
							handleChange={handleInputChange}
							isValid={isValid.name || data.name.length === 0}
							isRequired
							handleReset={() => handleInputReset('name')}
						/>
						<Input
							className="checkout-input"
							hierarchy="secondary"
							name="tel"
							type="tel"
							pattern="\d*"
							autoComplete={false}
							value={data.tel}
							placeholder="주문자 핸드폰 번호를 입력해 주세요."
							handleChange={handleInputChange}
							isValid={isValid.tel || data.tel.length === 0}
							isRequired
							handleReset={() => handleInputReset('tel')}
						/>
					</div>

					<span className="caption">
						<Chip
							className="caption-chip"
							appearance="neutral"
							hierarchy="secondary"
							text="주의"
						/>
						연락 가능한 전화번호를 남겨주셔야 주문 진행이 가능하니 꼭 확인해
						주세요.
					</span>
				</div>
			</div>
		</CheckoutInputContainer>
	)
}
