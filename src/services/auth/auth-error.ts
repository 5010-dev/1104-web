enum ErrorCode {
	CodeDeliveryFailureException = 'CodeDeliveryFailureException',
	ForbiddenException = 'ForbiddenException',
	InternalErrorException = 'InternalErrorException',
	InvalidEmailRoleAccessPolicyException = 'InvalidEmailRoleAccessPolicyException',
	InvalidLambdaResponseException = 'InvalidLambdaResponseException',
	InvalidParameterException = 'InvalidParameterException',
	InvalidPasswordException = 'InvalidPasswordException',
	InvalidSmsRoleAccessPolicyException = 'InvalidSmsRoleAccessPolicyException',
	InvalidSmsRoleTrustRelationshipException = 'InvalidSmsRoleTrustRelationshipException',
	NotAuthorizedException = 'NotAuthorizedException',
	ResourceNotFoundException = 'ResourceNotFoundException',
	TooManyRequestsException = 'TooManyRequestsException',
	UnexpectedLambdaException = 'UnexpectedLambdaException',
	UserLambdaValidationException = 'UserLambdaValidationException',
	UsernameExistsException = 'UsernameExistsException',
	UserNotFoundException = 'UserNotFoundException',
	LimitExceededException = 'LimitExceededException',
	UserAlreadyAuthenticatedException = 'UserAlreadyAuthenticatedException',
}

const errorMessages = {
	[ErrorCode.CodeDeliveryFailureException]: '인증 코드 전송에 실패하였습니다.',
	[ErrorCode.ForbiddenException]: '요청이 AWS WAF에 의해 허용되지 않습니다.',
	[ErrorCode.InternalErrorException]: '내부 서버 오류가 발생하였습니다.',
	[ErrorCode.InvalidEmailRoleAccessPolicyException]:
		'이메일 자격 증명 사용이 허용되지 않습니다.',
	[ErrorCode.InvalidLambdaResponseException]:
		'AWS Lambda로부터 잘못된 응답을 받았습니다.',
	[ErrorCode.InvalidParameterException]: '요청 파라미터가 잘못되었습니다.',
	[ErrorCode.InvalidPasswordException]: '잘못된 비밀번호입니다.',
	[ErrorCode.InvalidSmsRoleAccessPolicyException]:
		'SMS 구성에 제공된 역할에 Amazon SNS 발행 권한이 없습니다.',
	[ErrorCode.InvalidSmsRoleTrustRelationshipException]:
		'SMS 구성에 제공된 역할의 신뢰 관계가 잘못되었습니다.',
	[ErrorCode.NotAuthorizedException]: '아이디, 또는 비밀번호가 잘못되었습니다.',
	[ErrorCode.ResourceNotFoundException]: '요청한 리소스를 찾을 수 없습니다.',
	[ErrorCode.TooManyRequestsException]: '요청 횟수가 너무 많습니다.',
	[ErrorCode.UnexpectedLambdaException]:
		'AWS Lambda에서 예기치 않은 오류가 발생하였습니다.',
	[ErrorCode.UserLambdaValidationException]:
		'AWS Lambda 사용자 검증에 실패하였습니다.',
	[ErrorCode.UsernameExistsException]: '이미 사용중인 이메일 입니다.',
	[ErrorCode.UserNotFoundException]: '등록되지 않은 이메일 입니다.',
	[ErrorCode.LimitExceededException]:
		'요청 횟수를 초과했습니다. 잠시 후 다시 시도해 주세요.',
	[ErrorCode.UserAlreadyAuthenticatedException]: '이미 로그인 되어 있습니다.',
}

export { ErrorCode, errorMessages }
