import axios from 'axios'
import axiosInstance from '../../api/api'

import { handleError } from '../service-error'

import { Product } from './payment-service.types'

// TODO: 결제 요청 및 확인 API 작성 + 콜백에서 프로미스로 변경 필요!!!
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
