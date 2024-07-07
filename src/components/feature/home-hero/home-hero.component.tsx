import { MouseEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { useHomeContentsStore } from '../../../store/contents/home-contents/home-contents.store'
import { useScrollStore } from '../../../store/layout/global-ui.store'
import usePointerCoarseAndSafari from '../../../hooks/usePointerCoarseAndSafari'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'
// import { useBannerStore } from '../../../store/globalUiStore'

import { HomeHeroContainer } from './home-hero.styles'

import { ReactComponent as Icon } from '../../../assets/svg/telegram-icon.svg'
import Button from '../../global/button/button.component'
import TextLink from '../../global/text-link/text-link.component'

export default function HomeHero() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { image, text } = useHomeContentsStore((state) => state.home)
	const isPointerCoarseAndSafari = usePointerCoarseAndSafari()
	const navigate = useNavigateWithScroll()
	const location = useLocation()
	const updateScrollState = useScrollStore((state) => state.updateScrollState)
	// const isBannerOn = useBannerStore((state) => state.isBannerOn)

	const handleUseService = (e: MouseEvent<HTMLButtonElement>) => {
		navigate(ROUTES.HOME)
		location.pathname === ROUTES.HOME
			? updateScrollState('isSamePage', true)
			: updateScrollState('isSamePage', false)
		updateScrollState('isScrollToSubscription', true)
	}

	const handleFreeTrial = (e: MouseEvent<HTMLSpanElement>) =>
		navigate(ROUTES.FREE_TRIAL)

	return (
		<HomeHeroContainer
			$deviceType={deviceType}
			$imageUrl={image.backgroundImage}
			$isPointerCoarseAndSafari={isPointerCoarseAndSafari}
			// TODO: 추후 서비스 초기 세팅 자동화 시 다시 사용
			// $isBannerOn={isBannerOn}
			// HACK: 서비스 초기 세팅 자동화 전까지 값 강제 주입
			$isBannerOn={false}
		>
			<div id="text-container">
				<h1 id="display">{text.display}</h1>
				<h2 id="subheading">{text.subheading}</h2>
				<div id="buttons-container">
					<Button
						id="get-sample-button"
						type="button"
						appearance="neutral"
						hierarchy="secondary"
						stroke="filled"
						shape="rounding"
						size="md"
						text={text.ctaButtonText}
						handleClick={handleUseService}
					/>
					<TextLink
						appearance="neutral"
						hierarchy="secondary"
						size="sm"
						icon={<Icon id="link-icon" />}
						text={text.linkText}
						underlined
						handleClick={handleFreeTrial}
					/>
				</div>
			</div>
			<img id="mockup-image" src={image.mockupImage} alt={image.mockupImage} />
		</HomeHeroContainer>
	)
}
