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
		const platform = navigator.platform

		const isSafari = /safari/.test(userAgent) && !/chrome/.test(userAgent)
		const isIOS =
			platform === 'iPad' || platform === 'iPhone' || platform === 'iPod'

		setIsSafariMobile(isSafari && isIOS && /mobile/.test(userAgent))
		setIsSafariTablet(isSafari && isIOS && /tablet/.test(userAgent))
	}, [])

	return { isSafariMobile, isSafariTablet }
}

export default useSafariDetection
