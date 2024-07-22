import { useState, useEffect, ChangeEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { usePaymentStore } from '../../../store/payment/payment.store'
import { useServiceTermsStore } from '../../../store/terms/service-terms.store'
import { ServiceTermsList } from '../../../store/terms/service-terms.types'

import { CheckoutTermsProps } from './checkout-terms.types'
import { CheckoutTermsContainer } from './checkout-terms.styles'

import CheckBox from '../../../components/global/check-box/check-box.component'
import Accordion from '../../../components/global/accordion/accordion.component'
import ServiceTerms from '../../../components/feature/service-terms/service-terms.component'
import EventBanner from '../event-banner/event-banner.component'
import CheckoutTermsButton from './checkout-terms-button/checkout-terms-button.component'

export default function CheckoutTerms(props: CheckoutTermsProps) {
	const { handleCheckout } = props

	const [isAllChecked, setIsAllChecked] = useState<boolean>(false)

	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const {
		serviceTermsList,
		updateTermsAgreement,
		toggleAllTermsAgreement,
		resetServiceTermsStore,
	} = useServiceTermsStore()
	const { policyTerms, refundPolicy, privacyTerms } = serviceTermsList
	const { isValid } = usePaymentStore((state) => state.checkoutData)

	const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
		const inputName = e.target.name
		updateTermsAgreement(inputName as keyof ServiceTermsList, e.target.checked)
	}

	const checkAllTrue = () => toggleAllTermsAgreement(!isAllChecked)

	useEffect(() => {
		resetServiceTermsStore()
	}, [resetServiceTermsStore])

	useEffect(() => {
		if (
			privacyTerms.agreement &&
			policyTerms.agreement &&
			refundPolicy.agreement
		) {
			setIsAllChecked(true)
		} else setIsAllChecked(false)
	}, [privacyTerms.agreement, policyTerms.agreement, refundPolicy.agreement])

	return (
		<>
			<CheckoutTermsContainer $deviceType={deviceType}>
				<div className="container-row">
					<CheckBox
						hierarchy="secondary"
						name="allCheck"
						checked={isAllChecked}
						text="주문 내용을 확인하였으며, 정보 제공 및 이용약관 등에 동의합니다."
						handleCheck={checkAllTrue}
						isRequired
					/>
				</div>

				<div className="container-row" id="terms-container">
					<Accordion
						heading={
							<CheckBox
								hierarchy="secondary"
								size="sm"
								name="policyTerms"
								checked={policyTerms.agreement}
								text="서비스 이용약관 동의"
								handleCheck={handleCheck}
							/>
						}
						body={<ServiceTerms terms="policyTerms" height="8rem" />}
						container={false}
						size="sm"
					/>
					<Accordion
						heading={
							<CheckBox
								hierarchy="secondary"
								size="sm"
								name="privacyTerms"
								checked={privacyTerms.agreement}
								text="개인정보 수집 이용 및 제 3자 제공 동의"
								handleCheck={handleCheck}
							/>
						}
						body={<ServiceTerms terms="privacyTerms" height="8rem" />}
						container={false}
						size="sm"
					/>
					<Accordion
						heading={
							<CheckBox
								hierarchy="secondary"
								size="sm"
								name="refundPolicy"
								checked={refundPolicy.agreement}
								text="환불 및 취소 정책 동의"
								handleCheck={handleCheck}
							/>
						}
						body={<ServiceTerms terms="refundPolicy" height="8rem" />}
						container={false}
						size="sm"
					/>
				</div>
			</CheckoutTermsContainer>
			<EventBanner variants="inline" />
			<CheckoutTermsButton
				isDisabled={!isAllChecked || !isValid.name || !isValid.tel}
				handleCheckout={handleCheckout}
			/>
		</>
	)
}
