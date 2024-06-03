import { useState, useEffect, ChangeEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import {
	ServiceTermsList,
	useServiceTermsStore,
} from '../../../store/serviceTermsStore'

import { CheckoutTermsProps } from './checkout-terms.types'
import { CheckoutTermsContainer } from './checkout-terms.styles'

import CheckBox from '../../../components/global/check-box/check-box.component'
import Accordion from '../../../components/global/accordion/accordion.component'
import ServiceTerms from '../../../components/feature/service-terms/service-terms.component'
import Button from '../../global/button/button.component'

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
	const { ecommerce, privacyThirdParty, purchaseAgreement, subscription } =
		serviceTermsList

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
			ecommerce.agreement &&
			privacyThirdParty.agreement &&
			purchaseAgreement.agreement &&
			subscription.agreement
		) {
			setIsAllChecked(true)
		} else setIsAllChecked(false)
	}, [
		ecommerce.agreement,
		privacyThirdParty.agreement,
		purchaseAgreement.agreement,
		subscription.agreement,
	])

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
								name="purchaseAgreement"
								checked={purchaseAgreement.agreement}
								text="구매조건 확인 및 결제진행 동의"
								handleCheck={handleCheck}
							/>
						}
						body={<ServiceTerms terms="purchaseAgreement" height="8rem" />}
						container={false}
						size="sm"
					/>
					<Accordion
						heading={
							<CheckBox
								hierarchy="secondary"
								size="sm"
								name="privacyThirdParty"
								checked={privacyThirdParty.agreement}
								text="개인정보 수집 이용 및 제 3자 제공 동의"
								handleCheck={handleCheck}
							/>
						}
						body={<ServiceTerms terms="privacyThirdParty" height="8rem" />}
						container={false}
						size="sm"
					/>
					<Accordion
						heading={
							<CheckBox
								hierarchy="secondary"
								size="sm"
								name="subscription"
								checked={subscription.agreement}
								text="정기과금 이용 동의"
								handleCheck={handleCheck}
							/>
						}
						body={<ServiceTerms terms="subscription" height="8rem" />}
						container={false}
						size="sm"
					/>
					<Accordion
						heading={
							<CheckBox
								hierarchy="secondary"
								size="sm"
								name="ecommerce"
								checked={ecommerce.agreement}
								text="전자금융거래 이용약관"
								handleCheck={handleCheck}
							/>
						}
						body={<ServiceTerms terms="ecommerce" height="8rem" />}
						container={false}
						size="sm"
					/>
				</div>
			</CheckoutTermsContainer>
			<Button
				accessibleName="item-column"
				id="checkout-button"
				appearance="accent"
				hierarchy="primary"
				stroke="filled"
				shape="rounding"
				icon={<FontAwesomeIcon icon={faCreditCard} />}
				text="결제하기"
				disabled={!isAllChecked}
				handleClick={handleCheckout}
			/>
		</>
	)
}
