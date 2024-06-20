import { MouseEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useHomeContentsStore } from '../../../store/contents/homeContentsStore'
import usePointerCoarseAndSafari from '../../../hooks/usePointerCoarseAndSafari'
// import { useBannerStore } from '../../../store/globalUiStore'

import { HomeHeroContainer } from './home-hero.styles'

import { ReactComponent as Icon } from '../../../assets/svg/telegram-icon.svg'
import Button from '../../global/button/button.component'
import TextLink from '../../global/text-link/text-link.component'

export default function HomeHero() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { image, text } = useHomeContentsStore((state) => state.home)
	const isPointerCoarseAndSafari = usePointerCoarseAndSafari()
	// const isBannerOn = useBannerStore((state) => state.isBannerOn)

	const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {}
	const handleTextLinkClick = (e: MouseEvent<HTMLDivElement>) => {}

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
						handleClick={handleButtonClick}
					/>
					<TextLink
						appearance="neutral"
						hierarchy="secondary"
						size="sm"
						icon={<Icon id="link-icon" />}
						text="1:1 무료 상담받고 할인코드 받아가세요!"
						underlined
						handleClick={handleTextLinkClick}
					/>
				</div>
			</div>
			<img id="mockup-image" src={image.mockupImage} alt={image.mockupImage} />
		</HomeHeroContainer>
	)
}
