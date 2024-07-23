import { useAccountDataStore } from '../../../../store/data/account-data/account-data.store'

import { BillingListContainer } from './billing-list.styles'

import WarningText from '../../warning-text/warning-text.component'
import BillingItem from './billing-item/billing-item.component'

export default function BillingList() {
	const { purchasesListData, isPurchasesListDataLoaded } = useAccountDataStore(
		(state) => state.purchasesList,
	)

	if (!isPurchasesListDataLoaded) {
		return (
			<WarningText message="오류가 발생했습니다. 새로고침 하시거나, 잠시 뒤 다시 시도해 주세요." />
		)
	}

	return (
		<BillingListContainer>
			{purchasesListData.length === 0 ? (
				<p id="billing-list-body">주문 내역이 없습니다.</p>
			) : (
				purchasesListData.map((item, index) => (
					<BillingItem key={index} item={item} />
				))
			)}
		</BillingListContainer>
	)
}
