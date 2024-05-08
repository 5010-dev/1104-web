import { useState, useEffect } from 'react'

/**
 * 포인터 디바이스가 coarse이고 사파리 브라우저인지 여부를 반환하는 커스텀 훅
 * @returns {boolean} 포인터 디바이스가 coarse이고 사파리 브라우저인지 여부
 */
const usePointerCoarseAndSafari = (): boolean => {
	const mediaQuery = '(pointer: coarse)'
	const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
	const [isPointerCoarseAndSafari, setIsPointerCoarseAndSafari] = useState(
		window.matchMedia(mediaQuery).matches && isSafari,
	)

	useEffect(() => {
		const mediaQuery = '(pointer: coarse)'
		const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

		const handleMediaQueryChange = (event: MediaQueryListEvent) => {
			setIsPointerCoarseAndSafari(event.matches && isSafari)
		}

		const mediaQueryList = window.matchMedia(mediaQuery)
		mediaQueryList.addEventListener('change', handleMediaQueryChange)

		// 초기 값 설정
		setIsPointerCoarseAndSafari(mediaQueryList.matches && isSafari)

		return () => {
			mediaQueryList.removeEventListener('change', handleMediaQueryChange)
		}
	}, []) // 컴포넌트 마운트 시에만 실행

	return isPointerCoarseAndSafari
}

export default usePointerCoarseAndSafari
