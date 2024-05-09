import { useRef, useEffect, useCallback, useState } from 'react'
import { useMotionValue, useTransform } from 'framer-motion'

export function useScrollAnimation(enableMouseEvents = false) {
	const ref = useRef<HTMLDivElement>(null)
	const x = useMotionValue(0)
	const scrollX = useTransform(x, (value) => `${-value}px`)
	const [speed, setSpeed] = useState(1)

	// 스크롤 위치를 업데이트하는 함수
	const handleScroll = useCallback(() => {
		if (ref.current) {
			const maxX = ref.current.scrollWidth / 2
			const newX = (x.get() + speed) % maxX
			x.set(newX)

			// 무한 스크롤 효과를 위해 스크롤 위치를 맨 끝으로 이동
			if (newX === 0) {
				x.set(maxX)
			}
		}
	}, [x, speed])

	// 스크롤 애니메이션을 실행하는 useEffect
	useEffect(() => {
		let animationFrameId: number

		const animate = () => {
			handleScroll()
			animationFrameId = requestAnimationFrame(animate)
		}

		animationFrameId = requestAnimationFrame(animate)

		return () => {
			cancelAnimationFrame(animationFrameId)
		}
	}, [handleScroll])

	// 마우스 이벤트 처리 함수
	const handleMouseEnter = useCallback(() => {
		if (enableMouseEvents) {
			setSpeed(0.25) // 마우스 진입 시 스크롤 속도 변경
		}
	}, [enableMouseEvents])

	const handleMouseLeave = useCallback(() => {
		if (enableMouseEvents) {
			setSpeed(1) // 마우스 벗어날 때 스크롤 속도 복원
		}
	}, [enableMouseEvents])

	// ref, scrollX, 마우스 이벤트 처리 함수를 반환
	return { ref, scrollX, handleMouseEnter, handleMouseLeave }
}
