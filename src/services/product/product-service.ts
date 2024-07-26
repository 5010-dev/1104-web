import axios from 'axios'
import axiosInstance from '../../api/api'

import { handleError } from '../service-error'

import {
	ProductListItem,
	Product,
	GetProductFaqsResponse,
} from './product-service.types'

const BASE_URL = process.env.REACT_APP_BASE_URL

/**
 * 전체 상품 목록을 가져옵니다.
 *
 * @returns {Promise<ProductListItem[]>} 상품 목록을 담은 Promise 객체
 * @throws {Error} API 요청 실패 시 에러를 던집니다.
 */
export const getProductList = async (): Promise<ProductListItem[]> => {
	try {
		const response = await axios.get(`${BASE_URL}/products`)
		const { data } = response.data
		return data
	} catch (error) {
		throw new Error(handleError(error))
	}
}

/**
 * 특정 ID의 상품 상세 정보를 가져옵니다.
 *
 * @param {number} id - 조회할 상품의 ID
 * @returns {Promise<Product>} 상품 상세 정보를 담은 Promise 객체
 * @throws {Error} API 요청 실패 시 에러를 던집니다.
 */
export const getProductById = async (id: number): Promise<Product> => {
	try {
		const response = await axiosInstance.get(`/products/${id}`)
		const { data } = response.data
		return data
	} catch (error) {
		throw new Error(handleError(error))
	}
}

/**
 * 특정 ID의 상품 Faq 정보를 가져옵니다.
 *
 * @param {number} id - 조회할 상품의 ID
 * @returns {Promise<GetProductFaqsResponse>} 상품 Faq 정보를 담은 Promise 객체
 * @throws {Error} API 요청 실패 시 에러를 던집니다.
 */
export const getProductFaqs = async (
	id: number,
): Promise<GetProductFaqsResponse> => {
	try {
		const response = await axios.get(`${BASE_URL}/products/${id}/faqs`)
		const { data } = response.data
		return data
	} catch (error) {
		throw new Error(handleError(error))
	}
}
