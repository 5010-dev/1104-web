import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes'
import { Helmet } from 'react-helmet-async'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useServiceDataStore, Service } from '../../../store/serviceDataStore'
import { useToastMessageStore } from '../../../store/globalUiStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import {
	ServiceItemContainer,
	ServiceItemDetialsGlobalStyle,
} from './service-item.styles'

import ServiceItemTop from '../../../components/feature/service-item-top/service-item-top.component'
import ServiceItemDetails from '../../../components/feature/service-item-details/service-item-details.component'
import ServiceItemNotes from '../../../components/feature/service-item-notes/service-item-notes.component'

export default function ServiceItem() {
	const { id } = useParams<{ id: string }>()
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { service } = useServiceDataStore()
	const updateToastMessage = useToastMessageStore(
		(state) => state.updateToastMessage,
	)
	const navigate = useNavigateWithScroll()

	const [item, setItem] = useState<Service>()

	useEffect(() => {
		const numberedId = Number(id)

		// HACK: D2C에서 5010 매매 전략 판매 전까지 강제 리디렉션 처리
		if (numberedId === 0 || numberedId === 999) {
			updateToastMessage('서비스를 찾을 수 없습니다.')
			navigate(ROUTES.HOME)
		}

		const foundItem = service.find((item) => item.id === numberedId)

		if (foundItem) {
			setItem(foundItem)
		} else {
			updateToastMessage('서비스를 찾을 수 없습니다.')
			navigate(ROUTES.HOME)
		}
	}, [id, service, updateToastMessage, navigate])

	if (!item) {
		return null
	}
	return (
		<ServiceItemContainer $deviceType={deviceType}>
			<Helmet>
				<meta name="theme-color" content="#000000" />
			</Helmet>
			<ServiceItemDetialsGlobalStyle />
			<ServiceItemTop item={item} />
			<ServiceItemDetails detailsImgUrls={item.details ? item.details : []} />
			<ServiceItemNotes item={item} />
		</ServiceItemContainer>
	)
}
