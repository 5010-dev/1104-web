import { User } from '../store/data/auth-data/auth-data.types'

/**
 * 사용자 데이터를 처리하여 필요한 정보만 추출합니다.
 *
 * @param userData - 서버에서 받아온 원본 사용자 데이터
 * @returns 처리된 사용자 데이터 객체 또는 null (이메일이 미인증된 경우)
 */
export const processUserData = (userData: any): Partial<User> | null => {
	if (userData.is_email_verified) {
		return {
			userId: userData.email,
			isEmailVerified: userData.is_email_verified,
			seller: userData.seller.toString(),
			first_purchase_discount_percentage:
				userData.first_purchase_discount_percentage,
			is_first_purchased: userData.is_first_purchased,
		}
	}
	return null
}

/**
 * 처리된 사용자 데이터를 스토어에 업데이트합니다.
 *
 * @param processedData - processUserData 함수에서 반환된 처리된 사용자 데이터
 * @param updateLoginUser - 로그인 사용자 정보를 업데이트하는 스토어 함수
 * @param updateIsUserDataLoaded - 사용자 데이터 로드 상태를 업데이트하는 스토어 함수
 */
export const updateUserStore = (
	processedData: Partial<User>,
	updateLoginUser: (key: keyof User, value: any) => void,
	updateIsUserDataLoaded: (value: boolean) => void,
) => {
	Object.entries(processedData).forEach(([key, value]) => {
		updateLoginUser(key as keyof User, value)
	})
	updateIsUserDataLoaded(true)
}
