import { useEffect } from 'react'

/**
 * 이벤트 방지를 위한 커스텀 훅입니다.
 * 스크롤, 터치 이벤트, 클릭 이벤트, 우클릭 이벤트, 키보드 이벤트를 방지할 수 있습니다.
 *
 * @param {boolean} preventEvent - 이벤트 방지 여부를 결정하는 boolean 값
 */
const usePreventEvent = (preventEvent: boolean) => {
	useEffect(() => {
		if (preventEvent) {
			// 스크롤 이벤트를 방지하는 함수입니다.
			const preventScroll = (e: Event) => {
				e.preventDefault()
				e.stopPropagation()
			}

			// 클릭 이벤트를 방지하는 함수입니다.
			const preventClick = (e: Event) => {
				e.stopPropagation()
			}

			// 우클릭 이벤트를 방지하는 함수입니다.
			const preventContextMenu = (e: Event) => {
				e.preventDefault()
			}

			// 키보드 이벤트를 방지하는 함수입니다.
			const preventKeyDown = (e: KeyboardEvent) => {
				e.preventDefault()
				e.stopPropagation()
			}

			// 이벤트 리스너 등록
			document.addEventListener('wheel', preventScroll, { passive: false })
			document.addEventListener('touchmove', preventScroll, { passive: false })
			document.addEventListener('click', preventClick, { capture: true })
			document.addEventListener('contextmenu', preventContextMenu)
			document.addEventListener('keydown', preventKeyDown)

			// 이벤트 리스너 클린업 함수
			return () => {
				document.removeEventListener('wheel', preventScroll)
				document.removeEventListener('touchmove', preventScroll)
				document.removeEventListener('click', preventClick, { capture: true })
				document.removeEventListener('contextmenu', preventContextMenu)
				document.removeEventListener('keydown', preventKeyDown)
			}
		}
	}, [preventEvent])
}

export default usePreventEvent
