import { useEffect, useState } from 'react'

const useChromeBasedDetection = (): { isChromeBasedBrowser: boolean } => {
	const [isChromeBasedBrowser, setIsChromeBasedBrowser] = useState(false)

	useEffect(() => {
		const userAgent = navigator.userAgent.toLowerCase()
		setIsChromeBasedBrowser(
			/chrome/.test(userAgent) ||
				/edg/.test(userAgent) ||
				/opera/.test(userAgent) ||
				/firefox/.test(userAgent),
		)
	}, [])

	return { isChromeBasedBrowser }
}

export default useChromeBasedDetection
