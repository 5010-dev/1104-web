// import { useEffect, useState } from 'react'

// const useSafariDetection = (): {
// 	isSafariMobile: boolean
// 	isSafariTablet: boolean
// } => {
// 	const [isSafariMobile, setIsSafariMobile] = useState(false)
// 	const [isSafariTablet, setIsSafariTablet] = useState(false)

// 	useEffect(() => {
// 		const userAgent = navigator.userAgent.toLowerCase()
// 		setIsSafariMobile(
// 			/safari/.test(userAgent) &&
// 				/mobile/.test(userAgent) &&
// 				!/chrome/.test(userAgent),
// 		)
// 		setIsSafariTablet(
// 			/safari/.test(userAgent) &&
// 				/tablet/.test(userAgent) &&
// 				!/chrome/.test(userAgent),
// 		)
// 	}, [])

// 	return { isSafariMobile, isSafariTablet }
// }

// export default useSafariDetection

import { useEffect, useState } from 'react'

const useSafariDetection = (): {
	isSafariMobile: boolean
	isSafariTablet: boolean
	isSafariDesktop: boolean
} => {
	const [isSafariMobile, setIsSafariMobile] = useState(false)
	const [isSafariTablet, setIsSafariTablet] = useState(false)
	const [isSafariDesktop, setIsSafariDesktop] = useState(false)

	useEffect(() => {
		const userAgent = navigator.userAgent.toLowerCase()
		const isSafari = /safari/.test(userAgent) && !/chrome/.test(userAgent)
		const isIOS = /ipad|iphone|ipod/.test(userAgent)
		const isMacintosh = /macintosh/.test(userAgent)
		const isTouchSupported =
			'ontouchstart' in window || navigator.maxTouchPoints > 0

		const isMobileScreen = window.innerWidth < 768
		const isIPadProScreen =
			window.innerWidth >= 1024 && window.devicePixelRatio >= 2

		setIsSafariMobile(isSafari && isIOS && !isMacintosh && isMobileScreen)
		setIsSafariTablet(
			isSafari &&
				isIOS &&
				isMacintosh &&
				isTouchSupported &&
				!isMobileScreen &&
				!isIPadProScreen,
		)
		setIsSafariDesktop(
			isSafari && isMacintosh && !isTouchSupported && !isIPadProScreen,
		)
	}, [])

	return { isSafariMobile, isSafariTablet, isSafariDesktop }
}

export default useSafariDetection
