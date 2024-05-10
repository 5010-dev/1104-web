import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { NavigationMenuContainer } from './navigation-menu-styles'

export default function NavigationMenu() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<NavigationMenuContainer
			$deviceType={deviceType}
			as={motion.div}
			layout
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ duration: 0.5 }}
		>
			<Link className="menu-link" to="/">
				<span>ABOUT</span>
			</Link>
			<Link className="menu-link" to="/">
				<span>SERVICE</span>
			</Link>
			<Link className="menu-link" to="/">
				<span>PRICING</span>
			</Link>
			<Link className="menu-link" to="/">
				<span>PARTNERSHIP</span>
			</Link>
		</NavigationMenuContainer>
	)
}
