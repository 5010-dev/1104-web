import { useState, useEffect } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import {
	calculateRemainingTime,
	calculateDays,
	calculateHours,
	calculateMinutes,
	calculateSeconds,
} from '../../../utils/countdown.utils'

import { CountdownProps } from './countdown.types'
import { CountdownContainer } from './countdown.styles'

import CountdownUnit from './countdown-unit/countdown-unit.component'

export default function Countdown(props: CountdownProps) {
	const { targetDate, onComplete } = props
	const [remainingTime, setRemainingTime] = useState(0)

	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	useEffect(() => {
		const timer = setInterval(() => {
			const difference = calculateRemainingTime(targetDate)
			setRemainingTime(difference)

			if (difference === 0 && onComplete) {
				onComplete()
			}
		}, 1000)

		return () => clearInterval(timer)
	}, [targetDate, onComplete])

	const days = calculateDays(remainingTime)
	const hours = calculateHours(remainingTime)
	const minutes = calculateMinutes(remainingTime)
	const seconds = calculateSeconds(remainingTime)

	return (
		<CountdownContainer $deviceType={deviceType}>
			<CountdownUnit value={days} unit="Days" />
			<span className="quant-counter-separator">:</span>
			<CountdownUnit value={hours} unit="Hours" />
			<span className="quant-counter-separator">:</span>
			<CountdownUnit value={minutes} unit="Minutes" />
			<span className="quant-counter-separator">:</span>
			<CountdownUnit value={seconds} unit="Seconds" />
		</CountdownContainer>
	)
}
