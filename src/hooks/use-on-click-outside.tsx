import { useEffect, RefObject } from 'react'

/**
 * useOnClickOutside 커스텀 훅
 * 참조된 요소 외부에서 클릭, 터치 또는 휠 이벤트가 발생했을 때 지정된 핸들러 함수를 실행합니다.
 *
 * @param ref 클릭 이벤트를 감지할 요소에 대한 참조
 * @param handler 클릭 이벤트 발생 시 실행될 핸들러 함수
 */
const useOnClickOutside = (
	ref: RefObject<HTMLElement>,
	handler: (event: MouseEvent | TouchEvent | WheelEvent) => void,
) => {
	useEffect(() => {
		// 이벤트 핸들러 함수: 참조된 요소 외부에서 이벤트가 발생했을 때 핸들러 함수를 실행
		const eventHandler = (event: MouseEvent | TouchEvent | WheelEvent) => {
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return
			}
			handler(event)
		}

		// 감지할 이벤트 타입 배열
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
	}, [ref, handler]) // 참조와 핸들러 함수가 변경될 때마다 이펙트 실행
}

export default useOnClickOutside
