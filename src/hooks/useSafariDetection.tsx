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
} => {
	const [isSafariMobile, setIsSafariMobile] = useState(false)
	const [isSafariTablet, setIsSafariTablet] = useState(false)

	useEffect(() => {
		const userAgent = navigator.userAgent.toLowerCase()
		const isSafari = /safari/.test(userAgent) && !/chrome/.test(userAgent)
		const isIOS = /ipad|iphone|ipod/.test(userAgent)
		const isIPad = /ipad/.test(userAgent)

		setIsSafariMobile(isSafari && isIOS && !isIPad)
		setIsSafariTablet(isSafari && isIOS && isIPad)
	}, [])

	return { isSafariMobile, isSafariTablet }
}

export default useSafariDetection
