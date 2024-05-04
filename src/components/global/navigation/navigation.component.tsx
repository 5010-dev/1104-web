import { useState, useEffect } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { useScroll } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as Logo } from '../../../assets/logo/1104-logo-white.svg'
import { NavigationContainer } from './navigation.styles'

export default function Navigation() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	const [isScrolled, setIsScrolled] = useState(false)
	const { scrollYProgress } = useScroll()

	const handleClick = (): void => {
		console.log('menu cliecked')
	}

	useEffect(() => {
		scrollYProgress.on('change', (latest) => {
			if (latest > 0.1) {
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
				<Logo id="logo" />
			</div>
			<div className="nav-bar-container" id="nav-bar-right-container">
				{deviceType !== 'desktop' ? (
					<button id="menu-icon" aria-label="menu-button">
						<FontAwesomeIcon icon={faBars} onClick={handleClick} />
					</button>
				) : null}
			</div>
		</NavigationContainer>
	)
}
