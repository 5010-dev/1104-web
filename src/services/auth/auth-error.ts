import axios from 'axios'

enum ErrorCode {
	GeneralErrorException = 'GeneralErrorException',
	NetworkErrorException = 'NetworkErrorException',
	UnknownErrorException = 'UnknownErrorException',
}

const errorMessages = {
	[ErrorCode.GeneralErrorException]:
		'오류가 발생했습니다. 잠시 후 다시 시도해 주세요.',
	[ErrorCode.NetworkErrorException]:
		'요청을 보내지 못했습니다. 잠시 후 다시 시도해 주세요.',
	[ErrorCode.UnknownErrorException]:
		'알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.',
}

export const handleError = (error: any): string => {
	if (axios.isAxiosError(error)) {
		if (error.response) {
			const errorData = error.response.data
			if (errorData.errors) {
				if (
					errorData.errors.non_field_errors &&
					errorData.errors.non_field_errors.length > 0
				) {
					return errorData.errors.non_field_errors[0]
				} else if (errorData.errors.field_errors) {
					const fieldName = Object.keys(errorData.errors.field_errors)[0]
					return errorData.errors.field_errors[fieldName][0]
				} else {
					return errorMessages[ErrorCode.GeneralErrorException]
				}
			} else {
				return errorMessages[ErrorCode.GeneralErrorException]
			}
		} else {
			return errorMessages[ErrorCode.NetworkErrorException]
		}
	} else {
		return errorMessages[ErrorCode.UnknownErrorException]
	}
}
