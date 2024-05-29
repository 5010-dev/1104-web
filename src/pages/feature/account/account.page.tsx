import { useEffect, MouseEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useAuthDataStore } from '../../../store/authDataStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import { AccountContainer } from './account.styles'

import MyAccount from '../../../components/feature/my-account/my-account.component'
import MySubscription from '../../../components/feature/my-subscription/my-subscription.component'
import CustomerService from '../../../components/feature/customer-service/customer-service.component'

export default function Account() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { userId } = useAuthDataStore((state) => state.loginUser)
	const navigate = useNavigateWithScroll()

	const handleCustomerServiceLink = (e: MouseEvent<HTMLSpanElement>) => {
		const subject = '회원 및 구독 관련 문의사항'
		const recipient = '5010.cs.kr@5010.tech'
		const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
			subject,
		)}`

		window.location.href = mailtoUrl
	}

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}, [])

	useEffect(() => {
		if (userId.length === 0) {
			navigate('/')
		}
	}, [userId, navigate])

	return (
		<AccountContainer $deviceType={deviceType}>
			<div id="contents-container">
				<h1 id="heading">내 정보</h1>
				<MyAccount userId={userId} />
				<MySubscription />
				<CustomerService handleTextLink={handleCustomerServiceLink} />
			</div>
		</AccountContainer>
	)
}
