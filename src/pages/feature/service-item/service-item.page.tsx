import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useServiceDataStore, Service } from '../../../store/serviceDataStore'
import { useToastMessageStore } from '../../../store/globalUiStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import { ServiceItemContainer } from './service-item.styles'

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
		const getServiceById = (id: number) => {
			const item = service.find((item) => item.id === id) ?? service[0]
			setItem(item)
		}

		if (id) {
			getServiceById(Number(id))
		} else {
			updateToastMessage('존재하지 않는 서비스 입니다.')
			navigate(ROUTES.HOME)
		}
	}, [id, service, updateToastMessage, navigate])

	return (
		<ServiceItemContainer $deviceType={deviceType}>
			<div id="service-item-contents-container">{item?.name}</div>
		</ServiceItemContainer>
	)
}
