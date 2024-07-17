import { To, useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

interface NavigateOptions {
	replace?: boolean
	state?: {
		mode?: string
		from?: string
		status?: string
	}
	smooth?: boolean
}

/**
 * 주어진 경로로 이동하고 스크롤을 최상단으로 이동하는 커스텀 훅
 * @returns navigateWithScrollToTop 함수
 */
export default function useNavigateWithScroll() {
	const navigate = useNavigate()

	/**
	 * 주어진 경로로 이동하고 스크롤을 최상단으로 이동하는 함수
	 * @param to 이동할 경로 또는 히스토리 인덱스
	 * @param options 이동 옵션
	 */
	const navigateWithScroll = useCallback(
		(to: To | number, options: NavigateOptions = {}) => {
			const { replace = false, state, smooth = false } = options

			const navigateOptions: { replace?: boolean; state?: object } = { replace }
			if (state) navigateOptions.state = state

			if (typeof to === 'number') {
				navigate(to)
			} else {
				navigate(to, navigateOptions)
			}

			window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' })
		},
		[navigate],
	)

	return navigateWithScroll
}
