import { ROUTES } from '../routes/routes'
import useNavigateWithScroll from './use-navigate-with-scroll'

/**
 * 인증 후 네비게이션을 처리하는 커스텀 훅
 * @returns 인증 후 네비게이션을 수행하는 함수
 */
const useNavigateAfterAuth = () => {
	const navigateWithScroll = useNavigateWithScroll()

	/**
	 * 인증 후 적절한 경로로 네비게이션하는 함수
	 * @param authDestination 인증 후 이동할 목적지 URL (없을 경우 null)
	 */
	return (authDestination: string | null) => {
		if (authDestination) {
			navigateWithScroll(authDestination, { replace: true })
		} else if (window.history.length > 2) {
			navigateWithScroll(-1, { replace: true })
		} else {
			navigateWithScroll(ROUTES.HOME, { replace: true })
		}
	}
}

export default useNavigateAfterAuth
