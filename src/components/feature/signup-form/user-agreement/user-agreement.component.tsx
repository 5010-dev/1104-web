import { useState, useEffect, ChangeEvent } from 'react'

import {
	ServiceTermsList,
	useServiceTermsStore,
} from '../../../../store/serviceTermsStore'

import { UserAgreementContainer } from './user-agreement.styles'

import ServiceTerms from '../../service-terms/service-terms.component'
import CheckBox from '../../../global/check-box/check-box.component'
import Button from '../../../global/button/button.component'

export default function UserAgreement() {
	const [isAllChecked, setIsAllChecked] = useState<boolean>(false)
	const {
		serviceTermsList,
		updateTermsAgreement,
		toggleAllTermsAgreement,
		resetServiceTermsStore,
	} = useServiceTermsStore()
	const { privacyAgreement, policyTerms, ageVerification } = serviceTermsList

	const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
		const inputName = e.target.name
		updateTermsAgreement(inputName as keyof ServiceTermsList, e.target.checked)
	}

	const checkAllTrue = () => toggleAllTermsAgreement(!isAllChecked)

	useEffect(() => {
		if (
			privacyAgreement.agreement &&
			policyTerms.agreement &&
			ageVerification.agreement
		) {
			setIsAllChecked(true)
		} else setIsAllChecked(false)
	}, [
		privacyAgreement.agreement,
		policyTerms.agreement,
		ageVerification.agreement,
	])

	return (
		<UserAgreementContainer>
			<ServiceTerms terms="policyTerms" height="10rem" />
			<CheckBox
				hierarchy="secondary"
				name="policyTerms"
				checked={policyTerms.agreement}
				text="이용약관 동의"
				isRequired
				handleCheck={handleCheck}
			/>
			<ServiceTerms terms="privacyAgreement" height="10rem" />
			<CheckBox
				hierarchy="secondary"
				name="privacyAgreement"
				checked={privacyAgreement.agreement}
				text="개인정보 수집 및 이용 동의"
				isRequired
				handleCheck={handleCheck}
			/>
			<CheckBox
				hierarchy="secondary"
				name="ageVerification"
				checked={ageVerification.agreement}
				text="만 14세 이상입니다."
				isRequired
				handleCheck={handleCheck}
			/>
			<CheckBox
				hierarchy="secondary"
				name="allCheck"
				checked={isAllChecked}
				text="이용약관, 개인정보 수집 및 이용에 모두 동의합니다."
				handleCheck={checkAllTrue}
			/>
			<Button
				id="registration-button"
				appearance="accent"
				hierarchy="primary"
				stroke="filled"
				shape="rounding"
				text="동의하고 회원 가입하기"
				disabled={!isAllChecked}
			/>
		</UserAgreementContainer>
	)
}
