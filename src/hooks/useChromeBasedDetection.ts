// import { useEffect, useState } from 'react'

// const useChromeBasedDetection = (): { isChromeBasedBrowser: boolean } => {
// 	const [isChromeBasedBrowser, setIsChromeBasedBrowser] = useState(false)

// 	useEffect(() => {
// 		const userAgent = navigator.userAgent.toLowerCase()
// 		setIsChromeBasedBrowser(
// 			/chrome/.test(userAgent) ||
// 				/edg/.test(userAgent) ||
// 				/opera/.test(userAgent) ||
// 				/firefox/.test(userAgent),
// 		)
// 	}, [])

// 	return { isChromeBasedBrowser }
// }

// export default useChromeBasedDetection

import { useState, useEffect } from 'react'

const usePointerCoarseAndSafari = (): boolean => {
	const [isPointerCoarseAndSafari, setIsPointerCoarseAndSafari] =
		useState(false)

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
	}, [])

	return isPointerCoarseAndSafari
}

export default usePointerCoarseAndSafari
