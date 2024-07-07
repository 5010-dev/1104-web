import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes'
import { Helmet } from 'react-helmet-async'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import {
	useToastMessageStore,
	useNavigationStore,
} from '../../../store/layout/global-ui.store'
import { useLoadingStore } from '../../../store/layout/loading.store'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import { getProductById } from '../../../services/product/product-service'
import { Product } from '../../../services/product/product-service.types'

import {
	ServiceItemContainer,
	ServiceItemDetialsGlobalStyle,
} from './service-item.styles'

import ServiceItemBar from '../../../components/feature/service-item-bar/service-item-bar.component'
import ServiceItemTop from '../../../components/feature/service-item-top/service-item-top.component'
import ServiceItemDetails from '../../../components/feature/service-item-details/service-item-details.component'
import ServiceItemNotes from '../../../components/feature/service-item-notes/service-item-notes.component'

export default function ServiceItem() {
	const { id } = useParams<{ id: string }>()
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { updateIsLoading } = useLoadingStore()
	const updateToastMessage = useToastMessageStore(
		(state) => state.updateToastMessage,
	)
	const { updateshowNavigation } = useNavigationStore()

	const navigate = useNavigateWithScroll()

	const [item, setItem] = useState<Product>()
	const [showBar, setShowBar] = useState<boolean>(false)
	const [elementAHeight, setElementAHeight] = useState(0)
	const [topElement, setTopElement] = useState<HTMLDivElement | null>(null)

	const refCallback = useCallback((node: HTMLDivElement) => {
		if (node !== null) {
			setTopElement(node)
			setElementAHeight(node.offsetHeight)
		}
	}, [])

	useEffect(() => {
		window.scrollTo({ top: 0 })
		const numberedId = Number(id)

		if (numberedId === 1) {
			updateToastMessage('서비스를 찾을 수 없습니다.')
			navigate(ROUTES.HOME)
			return
		}

		const fetchProductData = async () => {
			try {
				updateIsLoading(true)
				const foundItem = await getProductById(numberedId)

				if (foundItem) {
					setItem(foundItem)
				} else {
					updateToastMessage('서비스를 찾을 수 없습니다.')
					navigate(ROUTES.HOME)
				}
			} catch (error: any) {
				updateToastMessage(error)
			} finally {
				updateIsLoading(false)
			}
		}
		fetchProductData()
	}, [id, updateToastMessage, navigate, updateIsLoading])

	useEffect(() => {
		if (!topElement) return

		const updateHeight = () => {
			setElementAHeight(topElement.offsetHeight)
		}

		const resizeObserver = new ResizeObserver(updateHeight)
		resizeObserver.observe(topElement)

		const handleScroll = () => {
			const scrollPosition = window.scrollY
			setShowBar(scrollPosition > elementAHeight)
			updateshowNavigation(!(scrollPosition > elementAHeight))
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			resizeObserver.disconnect()
			window.removeEventListener('scroll', handleScroll)
			updateshowNavigation(true)
		}
	}, [topElement, elementAHeight, updateshowNavigation])

	if (!item) {
		return null
	}
	return (
		<ServiceItemContainer $deviceType={deviceType}>
			<Helmet>
				<meta name="theme-color" content="#000000" />
			</Helmet>
			<ServiceItemDetialsGlobalStyle />
			<ServiceItemBar item={item} showBar={showBar} />
			<ServiceItemTop item={item} ref={refCallback} />
			<ServiceItemDetails detailsImgUrls={item.details ? item.details : []} />
			<ServiceItemNotes />
		</ServiceItemContainer>
	)
}
