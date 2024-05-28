// TODO: 결제 요청 및 확인 API 작성
/**
 * 결제 요청 및 처리 후 결과에 따라 콜백 함수를 호출하는 함수
 * @param onLoading
 * @param onSuccess
 * @param onError
 * @param onLoadingDone
 */
export const checkoutWithCallback = async (
	onLoading: () => void,
	onSuccess: () => void,
	onError: (error: any) => void,
	onLoadingDone: () => void,
) => {
	try {
		onLoading()
		// 결제 API 호출
		onSuccess() // 결제 결과 반환
	} catch (error) {
		onError(error)
	} finally {
		onLoadingDone()
	}
}
