import axiosInstance from '../../api/api'

import { handleError } from '../service-error'

import {
	CheckCouponResponse,
	CheckoutPayload,
	CheckoutResponse,
	ConfirmPaymentPayload,
	ConfirmPaymentResponse,
	ProceedPaymentPayload,
	SubscribedItem,
	PaidItem,
} from './payment-service.types'

/**
 * 쿠폰 코드를 확인하는 비동기 함수
 * @param {string} coupon - 확인할 쿠폰 코드
 * @returns {Promise<{ code: string }>} 확인된 쿠폰 ID 코드를 담은 Promise 객체
 */
export const checkCoupon = async (
	coupon: string,
): Promise<CheckCouponResponse> => {
	try {
		const response = await axiosInstance.post('/coupons/check', {
			code: coupon,
		})
		const { data } = response.data
		const { id, discount_price, discount_percentage } = data
		return {
			id: id,
			discount_price: discount_price,
			discount_percentage: discount_percentage,
		}
	} catch (error) {
		throw new Error(handleError(error))
	}
}

/**
 * 상품 결제를 진행하는 비동기 함수
 * @param {CheckoutPayload} { id, coupon } - 상품 ID와 쿠폰 정보를 담은 객체
 * @returns {Promise<CheckoutResponse>} 결제 응답 정보를 담은 Promise 객체
 */
export const checkoutProduct = async ({
	id,
	coupon,
}: CheckoutPayload): Promise<CheckoutResponse> => {
	try {
		const requestData = coupon ? { coupon_code: coupon } : {}
		const response = await axiosInstance.post(
			`/products/${id}/order`,
			requestData,
		)
		const { data } = response.data
		const { number, user_uuid, user_email, product_title, total_price } = data
		return {
			number: number,
			user_uuid: user_uuid,
			user_email: user_email,
			product_title: product_title,
			total_price: total_price,
		}
	} catch (error) {
		throw new Error(handleError(error))
	}
}

/**
 * 결제를 확인하고 처리합니다.
 *
 * @param {ConfirmPaymentPayload} payload - 결제 확인에 필요한 데이터
 * @param {string} payload.payment_key - 결제 키
 * @param {string} payload.order_number - 주문 번호
 * @param {number} payload.total_price - 총 결제 금액
 *
 * @returns {Promise<ConfirmPaymentResponse>} 결제 확인 결과를 담은 Promise 객체
 * @returns {string} response.code - 결제 확인 결과 코드
 * @returns {unknown} response.pg_data - PG사에서 반환한 결제 데이터
 *
 * @throws {Error} API 요청 실패 시 에러를 던집니다.
 */
export const confirmPayment = async ({
	payment_key,
	order_number,
	total_price,
}: ConfirmPaymentPayload): Promise<ConfirmPaymentResponse> => {
	try {
		const response = await axiosInstance.post('/payments/confirm', {
			payment_key: payment_key,
			order_number: order_number,
			total_price: total_price,
		})
		const { code, data } = response.data
		return { code: code, pg_data: data }
	} catch (error) {
		throw new Error(handleError(error))
	}
}

/**
 * 주문에 대한 결제를 진행합니다.
 *
 * @param {ProceedPaymentPayload} payload - 결제 진행에 필요한 데이터
 * @param {string} payload.number - 주문 번호
 * @param {string} payload.payment_key - 결제 키
 * @param {string} payload.status - 결제 상태
 * @param {unknown} payload.pg_data - PG사에서 반환한 결제 데이터
 *
 * @returns {Promise<number>} 결제 진행 결과 코드를 담은 Promise 객체
 *
 * @throws {Error} API 요청 실패 시 에러를 던집니다.
 */
export const proceedPayment = async ({
	number,
	payment_key,
	status,
	pg_data,
}: ProceedPaymentPayload): Promise<number> => {
	try {
		const response = await axiosInstance.post(`/orders/${number}/payment`, {
			payment_key: payment_key,
			status: status,
			pg_data: pg_data,
		})
		const { code } = response.data
		return code
	} catch (error) {
		throw new Error(handleError(error))
	}
}

/**
 * 사용자의 구독 아이템 정보를 가져옵니다.
 *
 * @returns {Promise<SubscribedItem>} 구독 아이템 정보를 담은 Promise 객체
 * @throws {Error} API 요청 실패 시 에러를 던집니다.
 */
export const getUserSubscribedItemData = async (): Promise<SubscribedItem> => {
	try {
		const response = await axiosInstance.get('/users/me/subscriptions')
		const { data } = response.data
		return data
	} catch (error) {
		throw new Error(handleError(error))
	}
}

/**
 * 사용자의 결제 아이템 목록을 가져옵니다.
 *
 * @returns {Promise<PaidItem[]>} 결제 아이템 목록을 담은 Promise 객체
 * @throws {Error} API 요청 실패 시 에러를 던집니다.
 */
export const getUserPaiedItemData = async (): Promise<PaidItem[]> => {
	try {
		const response = await axiosInstance.get('/users/me/payments')
		const { data } = response.data
		return data
	} catch (error) {
		throw new Error(handleError(error))
	}
}
