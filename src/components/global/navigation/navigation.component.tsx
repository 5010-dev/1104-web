import { useEffect, useRef, MouseEvent } from 'react'

import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useNavigationStore } from '../../../store/globalUiStore'
import useOnClickOutside from '../../../hooks/useOnClickOutside'

import { NavigationContainer } from './navigation.styles'

import { ReactComponent as Logo } from '../../../assets/logo/1104-logo-white.svg'
import NavigationMenu from '../../feature/navigation-menu/navigation-menu.component'

const menuIconVariants = {
	closed: { rotate: 0 },
	open: { rotate: 180 },
}

export default function Navigation() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	const { isMenuOpen, isScrolled, updateIsMenuOpen, updateIsScrolled } =
		useNavigationStore()
	const { scrollYProgress } = useScroll()

	const ref = useRef<HTMLDivElement>(null)

	const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>): void => {
		updateIsMenuOpen(false)
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	const handleMenuClick = (e: MouseEvent<HTMLButtonElement>): void =>
		updateIsMenuOpen(!isMenuOpen)

	useEffect(() => {
		scrollYProgress.on('change', (latest) => {
			if (latest > 0.01) {
				updateIsScrolled(true)
			} else {
				updateIsScrolled(false)
			}
		})
	}, [scrollYProgress, updateIsScrolled])

	useEffect(() => {
		deviceType === 'desktop' && updateIsMenuOpen(false)
	}, [deviceType, updateIsMenuOpen])

	useOnClickOutside(ref, () => isMenuOpen && updateIsMenuOpen(false))

	return (
		<NavigationContainer
			$deviceType={deviceType}
			$isOverlaped={true}
			$isScrolled={isScrolled}
			$isMenuOpen={isMenuOpen}
		>
			<motion.div
				id="background-panel"
				layout
				transition={{ duration: 0.15 }}
			/>
			<div id="nav-bar">
				<div className="nav-bar-container" id="nav-bar-left-container">
					<Link id="home-link" to="/" onClick={handleLogoClick}>
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
						ref={ref}
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
