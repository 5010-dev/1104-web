import { useState, useEffect, MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ROUTES } from '../../../routes/routes'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import useNavigateWithScroll from '../../../hooks/use-navigate-with-scroll'
import { useLoadingStore } from '../../../store/layout/loading.store'
import { useToastMessageStore } from '../../../store/layout/global-ui.store'
import useFadeIn from '../../../hooks/use-fade-in'

import { getProductById } from '../../../services/product/product-service'
import { Product } from '../../../services/product/product-service.types'

import { ReactComponent as QuantLogoSm } from '../../../assets/svg/quant/quant-logo-sm.svg'

import {
	PreOrderDetailsContainer,
	PreOrderDetialsGlobalStyle,
} from './pre-order-details.styles'

// import PreOrderDetailsBody from './pre-order-details-body/pre-order-details-body.component'
import ServiceItemDetails from '../service-item-details/service-item-details.component'
import Button from '../../global/button/button.component'

export default function PreOrderDetails() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { updateIsLoading } = useLoadingStore()
	const updateToastMessage = useToastMessageStore(
		(state) => state.updateToastMessage,
	)
	const navigate = useNavigateWithScroll()
	const [item, setItem] = useState<Product>()

	const { ref, fadeInVariants, controls } = useFadeIn({ duration: 2 })

	const titleLeft = 'RENAISSANCE'
	const titleRight = 'QUANT SOLUTION'

	const titleLeftLetters = titleLeft.split('')
	const titleRightLetters = titleRight.split('')

	const handleRegister = (e: MouseEvent<HTMLButtonElement>) => {
		navigate(`${ROUTES.EVENT}/?register`)
	}

	useEffect(() => {
		window.scrollTo({ top: 0 })

		const fetchProductData = async () => {
			try {
				updateIsLoading(true)
				const foundItem = await getProductById(3)

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
	}, [updateToastMessage, navigate, updateIsLoading])

	return (
		<PreOrderDetailsContainer
			$deviceType={deviceType}
			as={motion.div}
			ref={ref}
			variants={fadeInVariants}
			initial="hidden"
			animate={controls}
		>
			<Helmet>
				<meta name="theme-color" content="#000000" />
			</Helmet>
			<PreOrderDetialsGlobalStyle />
			<div id="pre-order-details-contents-container">
				<div id="pre-order-details-title-container">
					<span className="title-span" id="left-title-span">
						{titleLeftLetters.map((letter, index) => (
							<span key={index} className="title-span-letter">
								{letter}
							</span>
						))}
					</span>
					<QuantLogoSm id="quant-logo" />
					<span className="title-span" id="right-title-span">
						{titleRightLetters.map((letter, index) => (
							<span key={index} className="title-span-letter">
								{letter}
							</span>
						))}
					</span>
				</div>
				{/* <PreOrderDetailsBody /> */}
				<ServiceItemDetails
					detailsImgUrls={item?.details ? item.details : []}
				/>
				<div id="pre-order-details-bottom-bar">
					<Button
						id="pre-order-to-register-button"
						accessibleName="pre-order-details-contents-container"
						appearance="accent"
						hierarchy="primary"
						stroke="filled"
						shape="rounding"
						text="← 이벤트 참여하러 가기"
						handleClick={handleRegister}
					/>
				</div>
			</div>
		</PreOrderDetailsContainer>
	)
}
