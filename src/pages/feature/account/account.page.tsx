import { useEffect, MouseEvent } from 'react'
import { ROUTES } from '../../../routes/routes'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { useAuthDataStore } from '../../../store/data/auth-data/auth-data.store'
import { useAccountDataStore } from '../../../store/data/account-data/account-data.store'
import { useLoadingStore } from '../../../store/layout/loading.store'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import { getUserSubscribedItemData } from '../../../services/payment/payment-service'

import { AccountContainer } from './account.styles'

import MyAccount from '../../../components/feature/my-account/my-account.component'
import MySubscription from '../../../components/feature/my-subscription/my-subscription.component'
import CustomerService from '../../../components/feature/customer-service/customer-service.component'

export default function Account() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { isUserDataLoaded } = useAuthDataStore()
	const { userId } = useAuthDataStore((state) => state.loginUser)
	const { updateIsLoading } = useLoadingStore()
	const navigate = useNavigateWithScroll()

	const {
		updateSubscribedItemData,
		updateIsSubscribedItemDataLoaded,
		resetSubscribedItem,
	} = useAccountDataStore()

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
		if (isUserDataLoaded) {
			if (userId.length === 0) {
				resetSubscribedItem()
				navigate(ROUTES.HOME)
				return
			}

			const fetchUserSubscriptionItemData = async () => {
				try {
					updateIsLoading(true)

					const response = await getUserSubscribedItemData()

					updateSubscribedItemData(response)
					updateIsSubscribedItemDataLoaded(true)
				} catch (error: any) {
					console.log(error.message)
					updateIsSubscribedItemDataLoaded(false)
				} finally {
					updateIsLoading(false)
				}
			}

			fetchUserSubscriptionItemData()
		}
	}, [
		userId,
		navigate,
		isUserDataLoaded,
		updateSubscribedItemData,
		updateIsSubscribedItemDataLoaded,
		updateIsLoading,
		resetSubscribedItem,
	])

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
