import { useEffect, MouseEvent } from 'react'
import { ROUTES } from '../../../routes/routes'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { useAuthDataStore } from '../../../store/data/auth-data/auth-data.store'
import { useAccountDataStore } from '../../../store/data/account-data/account-data.store'
import { useLoadingStore } from '../../../store/layout/loading.store'
import useNavigateWithScroll from '../../../hooks/use-navigate-with-scroll'

import {
	getUserSubscribedItemData,
	getUserPaidItemData,
} from '../../../services/payment/payment-service'
import { getHelp } from '../../../utils/customer-service.utils'

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
		updatePaidItemData,
		updateIsPaidItemDataLoaded,
		resetPaidItem,
	} = useAccountDataStore()

	const handleCustomerServiceLink = (e: MouseEvent<HTMLSpanElement>) => {
		const subject = '회원 및 구독 관련 문의사항'
		getHelp(subject)
	}

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}, [])

	useEffect(() => {
		if (isUserDataLoaded && userId.length > 0) {
			const fetchUserData = async () => {
				try {
					updateIsLoading(true)

					const [subscribedItemData, paidItemData] = await Promise.all([
						getUserSubscribedItemData(),
						getUserPaidItemData(),
					])

					updateSubscribedItemData(subscribedItemData)
					updateIsSubscribedItemDataLoaded(true)

					updatePaidItemData(paidItemData)
					updateIsPaidItemDataLoaded(true)
				} catch (error: any) {
					console.error('데이터 fetch 중 오류 발생:', error.message)
					updateIsSubscribedItemDataLoaded(false)
					updateIsPaidItemDataLoaded(false)
				} finally {
					updateIsLoading(false)
				}
			}

			fetchUserData()
		} else if (userId.length === 0) {
			resetSubscribedItem()
			resetPaidItem()
			navigate(ROUTES.HOME)
		}
	}, [
		userId,
		navigate,
		isUserDataLoaded,
		updateSubscribedItemData,
		updateIsSubscribedItemDataLoaded,
		updateIsLoading,
		resetSubscribedItem,
		updatePaidItemData,
		updateIsPaidItemDataLoaded,
		resetPaidItem,
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
