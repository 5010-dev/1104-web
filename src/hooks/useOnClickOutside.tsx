import { useEffect, RefObject } from 'react'

const useOnClickOutside = (
	ref: RefObject<HTMLElement>,
	handler: (event: MouseEvent | TouchEvent | WheelEvent) => void,
) => {
	useEffect(() => {
		const handleMouseDown = (event: MouseEvent) => {
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return
			}
			handler(event)
		}

		const handleTouchStart = (event: TouchEvent) => {
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return
			}
			handler(event)
		}

		const handleWheel = (event: WheelEvent) => {
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return
			}
			handler(event)
		}

		document.addEventListener('mousedown', handleMouseDown)
		document.addEventListener('touchstart', handleTouchStart)
		document.addEventListener('wheel', handleWheel)

		return () => {
			document.removeEventListener('mousedown', handleMouseDown)
			document.removeEventListener('touchstart', handleTouchStart)
			document.removeEventListener('wheel', handleWheel)
		}
	}, [ref, handler])
}

export default useOnClickOutside
