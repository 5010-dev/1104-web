import axiosInstance from '../../api/api'

import { handleError } from '../service-error'

import {
	Product,
	CheckCouponResponse,
	CheckoutPayload,
	CheckoutResponse,
	SubscribedItem,
	PaidItem,
} from './payment-service.types'

/**
 * 상품 정보를 가져오는 비동기 함수
 * @returns {Promise<Product>} 상품 정보를 담은 Promise 객체
 */
export const getProduct = async (): Promise<Product> => {
	try {
		const response = await axiosInstance.get('/products')
		const { data } = response.data
		const { id, title, price, subscription_price, description } = data
		return {
			id: id,
			title: title,
			price: price,
			subscription_price: subscription_price,
			description: description,
		}
	} catch (error) {
		throw new Error(handleError(error))
	}
}

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
		const { product, coupon_id, number, total_price, status, created } = data
		return {
			product: product,
			coupon_id: coupon_id,
			number: number,
			total_price: total_price,
			status: status,
			created: created,
		}
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
