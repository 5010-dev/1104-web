import { useState, MouseEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from 'framer-motion'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { AccordionProps } from './accordion.types'
import { AccordionContainer } from './accordion.styles'

const handleIconVariants = {
	closed: { rotate: 45 },
	open: { rotate: 0 },
}

export default function Accordion(props: AccordionProps) {
	const { heading, body, details } = props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleOnOff = (e: MouseEvent<HTMLDivElement>) =>
		setIsOpen((state) => !state)

	return (
		<AccordionContainer $deviceType={deviceType} as={motion.div}>
			<motion.div
				id="background-container"
				layout
				transition={{ duration: 0.15 }}
			/>
			<div id="heading-container" onClick={handleOnOff}>
				<h3 id="heading">{heading}</h3>
				<motion.span
					id="handle-icon"
					variants={handleIconVariants}
					animate={isOpen ? 'open' : 'closed'}
					transition={{ duration: 0.15 }}
					style={{ originX: 0.5, originY: 0.5 }}
				>
					<FontAwesomeIcon icon={faXmark} />
				</motion.span>
			</div>
			<AnimatePresence key={isOpen ? 'accordion-open' : 'accordion-closed'}>
				{isOpen ? (
					<motion.div
						id="body-container"
						layout
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -50 }}
					>
						<p id="body">{body}</p>
						{details ? (
							<ul id="details-container">
								{details.map((item, index) => (
									<li key={index} className="detail-text">
										{item}
									</li>
								))}
							</ul>
						) : null}
					</motion.div>
				) : null}
			</AnimatePresence>
		</AccordionContainer>
	)
}
