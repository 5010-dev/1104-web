import { useState, useEffect, MouseEvent } from 'react'

import { Link } from 'react-router-dom'
import { useScroll } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { ReactComponent as Logo } from '../../../assets/logo/1104-logo-white.svg'
import { NavigationContainer } from './navigation.styles'

export default function Navigation() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	const [isScrolled, setIsScrolled] = useState(false)
	const { scrollYProgress } = useScroll()

	const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>): void =>
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})

	const handleMenuClick = (e: MouseEvent<HTMLButtonElement>): void => {
		console.log('menu clicked')
	}

	useEffect(() => {
		scrollYProgress.on('change', (latest) => {
			if (latest > 0.01) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		})
	}, [scrollYProgress])

	return (
		<NavigationContainer
			$deviceType={deviceType}
			$isOverlaped={true}
			$isScrolled={isScrolled}
		>
			<div className="nav-bar-container" id="nav-bar-left-container">
				<Link id="home-link" to="/" onClick={handleLogoClick}>
					<Logo id="logo" />
				</Link>
			</div>
			<div className="nav-bar-container" id="nav-bar-right-container">
				{deviceType !== 'desktop' ? (
					<button
						id="menu-icon"
						aria-label="nav-bar-right-container"
						onClick={handleMenuClick}
					>
						<FontAwesomeIcon icon={faBars} />
					</button>
				) : null}
			</div>
		</NavigationContainer>
	)
}
