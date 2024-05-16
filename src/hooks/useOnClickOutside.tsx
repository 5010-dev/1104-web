import { useEffect, useRef, RefObject } from 'react'

/**
 * useOnClickOutside 커스텀 훅
 * 참조된 요소 외부에서 클릭, 터치 또는 휠 이벤트가 발생했을 때 지정된 핸들러 함수를 실행합니다.
 * 휠 이벤트의 경우 한 번만 실행되도록 합니다.
 *
 * @param ref 클릭 이벤트를 감지할 요소에 대한 참조
 * @param handler 클릭 이벤트 발생 시 실행될 핸들러 함수
 */
const useOnClickOutside = (
	ref: RefObject<HTMLElement>,
	handler: (event: MouseEvent | TouchEvent | WheelEvent) => void,
) => {
	// 휠 이벤트 트리거 여부를 추적하는 변수
	const wheelEventTriggered = useRef(false)

	useEffect(() => {
		const eventHandler = (event: MouseEvent | TouchEvent | WheelEvent) => {
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return
			}

			// 휠 이벤트가 발생한 경우, 한 번만 실행되도록 처리
			if (event.type === 'wheel') {
				if (wheelEventTriggered.current) {
					return
				}
				wheelEventTriggered.current = true
				setTimeout(() => {
					wheelEventTriggered.current = false
				}, 0)
			}

			handler(event)
		}

		const eventTypes: (keyof DocumentEventMap)[] = [
			'mousedown',
			'touchstart',
			'wheel',
		]

		// 각 이벤트 타입에 대해 이벤트 리스너 등록
		eventTypes.forEach((type) =>
			document.addEventListener(type, eventHandler as EventListener),
		)

		// 클린업 함수: 컴포넌트 언마운트 시 등록된 이벤트 리스너 제거
		return () => {
			eventTypes.forEach((type) =>
				document.removeEventListener(type, eventHandler as EventListener),
			)
		}
	}, [ref, handler])
}

export default useOnClickOutside
