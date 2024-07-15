/**
 * 다양한 입력 유효성 검사를 위한 정규식 객체
 */
const regexPatterns = {
	/** 2-4자리 한글 이름 */
	name: /^[가-힣]{2,4}$/,
	/** 01X-XXXX-XXXX 형식의 전화번호 */
	tel: /^01[0-9]-\d{4}-\d{4}$/,
	/** 한글, 영문, 숫자, 일부 특수문자를 포함한 조직명 */
	org: /^[가-힣a-zA-Z0-9\s&(),.'-]+$/,
	/** 표준 이메일 형식 */
	email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
	/** 이메일 제목에 적합한 문자열 (한글, 영문, 숫자, 특수문자 포함) */
	title: /^[가-힣a-zA-Z0-9\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/,
	/** 이메일 본문에 적합한 문자열 (한글, 영문, 숫자, 특수문자 포함) */
	body: /^[가-힣a-zA-Z0-9\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/,
	/** 숫자 값 확인 */
	number: /^[0-9]+$/,
	/** 비밀번호 양식 확인 */
	password: /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z]).{8,}$/,
}

/**
 * 정규식 패턴 키의 타입
 */
export type RegexKey = keyof typeof regexPatterns

/**
 * 주어진 키에 해당하는 정규식 패턴을 반환하는 함수
 * @param key - 정규식 패턴의 키
 * @returns 해당 키의 정규식 패턴
 * @throws 잘못된 키가 입력될 경우 에러를 던짐
 */
export function getRegexPattern(key: RegexKey): RegExp {
	const pattern = regexPatterns[key]
	if (!pattern) {
		throw new Error(`Invalid regex key: ${key}`)
	}
	return pattern
}

/**
 * 주어진 값이 지정된 정규식 패턴과 일치하는지 검사하는 함수
 * @param key - 정규식 패턴의 키
 * @param value - 검사할 값
 * @returns 패턴과 일치하면 true, 그렇지 않으면 false
 */
export function validateWithRegex(key: RegexKey, value: string): boolean {
	const pattern = getRegexPattern(key)
	return pattern.test(value)
}

/**
 * 숫자로만 이루어진 문자열을 전화번호 형식으로 변환하는 함수
 * @param numericNumber - 숫자로만 이루어진 전화번호 문자열
 * @returns 형식화된 전화번호 문자열
 */
export const formatTelNumber = (numericNumber: string): string => {
	if (numericNumber.length <= 3) {
		return numericNumber
	} else if (numericNumber.length <= 7) {
		return `${numericNumber.slice(0, 3)}-${numericNumber.slice(3)}`
	} else {
		return `${numericNumber.slice(0, 3)}-${numericNumber.slice(
			3,
			7,
		)}-${numericNumber.slice(7, 11)}`
	}
}

/**
 * 유효성 검사 상태 객체의 기본 타입 정의
 */
export type ValidityState = {
	name?: boolean
	tel?: boolean
	org?: boolean
	email?: boolean
	title?: boolean
	body?: boolean
	[key: string]: boolean | undefined
}

/**
 * 주어진 유효성 검사 상태 객체의 모든 값이 true인지 확인하는 함수
 * @param validityState - 유효성 검사 상태 객체
 * @returns 모든 포함된 항목이 true이면 true, 하나라도 false이면 false
 */
export const isAllValid = (validityState: ValidityState): boolean => {
	return Object.values(validityState).every((value) => value === true)
}

/**
 * 주어진 유효성 검사 상태 객체에서 특정 키들의 값이 모두 true인지 확인하는 함수
 * @param validityState - 유효성 검사 상태 객체
 * @param keys - 검사할 키들의 배열
 * @returns 지정된 모든 키의 값이 true이면 true, 하나라도 false이거나 키가 없으면 false
 */
export const areFieldsValid = (
	validityState: ValidityState,
	keys: string[],
): boolean => {
	return keys.every((key) => validityState[key] === true)
}
