import { useState, useEffect, useRef, MouseEvent } from 'react'

import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import useOnClickOutside from '../../../hooks/useOnClickOutside'
// import { useAuthDataStore } from '../../../store/authDataStore'
// import { useBannerStore } from '../../../store/globalUiStore'

import { NavigationContainer } from './navigation.styles'

import { ReactComponent as Logo } from '../../../assets/logo/1104-logo-white.svg'
import NavigationMenu from '../../feature/navigation-menu/navigation-menu.component'
// import RegistrationRequiredBanner from '../../feature/registration-required-banner/registration-required-banner.component'

const menuIconVariants = {
	closed: { rotate: 0 },
	open: { rotate: 180 },
}

export default function Navigation() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
	const [isScrolled, setIsScrolled] = useState<boolean>(false)

	const { scrollYProgress } = useScroll()
	// const { loginUser } = useAuthDataStore()
	// const { isBannerOn, updateBanerVisibility } = useBannerStore()
	const location = useLocation()

	const ref = useRef<HTMLDivElement>(null)

	const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>): void => {
		setIsMenuOpen(false)
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	const handleMenuClick = (e: MouseEvent<HTMLButtonElement>): void =>
		setIsMenuOpen((prevState) => !prevState)

	useEffect(() => {
		scrollYProgress.on('change', (latest) => {
			if (latest > 0.01) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		})
	}, [scrollYProgress])

	useEffect(() => {
		deviceType === 'desktop' && setIsMenuOpen(false)
	}, [deviceType])

	useEffect(() => {
		setIsMenuOpen(false)
	}, [location])

	// useEffect(() => {
	// 	if (
	// 		loginUser.userId &&
	// 		loginUser.tradingviewId.length === 0 &&
	// 		location.pathname === '/'
	// 	) {
	// 		updateBanerVisibility(true)
	// 	} else {
	// 		updateBanerVisibility(false)
	// 	}
	// }, [loginUser, updateBanerVisibility, location])

	useOnClickOutside(ref, () => setIsMenuOpen(false))

	return (
		<NavigationContainer
			$deviceType={deviceType}
			$isOverlaped={true}
			$isScrolled={isScrolled}
			$isMenuOpen={isMenuOpen}
			ref={ref}
		>
			<motion.div
				id="background-panel"
				layout
				transition={{ duration: 0.15 }}
			/>
			{/* TODO: 추후 서비스 초기 세팅 자동화 시 다시 사용 */}
			{/* {isBannerOn ? <RegistrationRequiredBanner /> : null} */}
			<div id="nav-bar">
				<div className="nav-bar-container" id="nav-bar-left-container">
					<Link id="home-link" to={ROUTES.HOME} onClick={handleLogoClick}>
						<Logo id="logo" />
					</Link>
				</div>

				<div className="nav-bar-container" id="nav-bar-right-container">
					{deviceType !== 'desktop' ? (
						<motion.button
							id="menu-icon"
							aria-label="nav-bar-right-container"
							onClick={handleMenuClick}
							variants={menuIconVariants}
							animate={isMenuOpen ? 'open' : 'closed'}
							transition={{ duration: 0.25 }}
							style={{ originX: 0.5, originY: 0.5 }}
						>
							<FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
						</motion.button>
					) : (
						<NavigationMenu />
					)}
				</div>
			</div>

			<AnimatePresence key={isMenuOpen ? 'menu-open' : 'menu-closed'}>
				{isMenuOpen && (
					<motion.div
						id="mobile-navigation-menu-container"
						layout
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -50 }}
					>
						<NavigationMenu />
					</motion.div>
				)}
			</AnimatePresence>
		</NavigationContainer>
	)
}
