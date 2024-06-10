import { useState, FormEvent, MouseEvent } from 'react'

import {
	signUpWithCallback,
	sendVerification,
} from '../../../services/auth/auth-service'
import { useAuthDataStore } from '../../../store/authDataStore'
import { useLoadingStore } from '../../../store/loadingStore'
import { useToastMessageStore } from '../../../store/globalUiStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import { setAccessToken, getAccessToken } from '../../../utils/token.utils'

import AuthForm from '../../global/auth-form/auth-form.component'
import UserAgreement from './user-agreement/user-agreement.component'

export default function SignupForm() {
	const [isAgreed, setIsAgreed] = useState<boolean>(false)

	const { email, password } = useAuthDataStore()
	const updateIsLoading = useLoadingStore((state) => state.updateIsLoading)
	const { updateToastMessage } = useToastMessageStore()
	const navigate = useNavigateWithScroll()

	const handleLoginLink = (e: MouseEvent<HTMLSpanElement>) => {
		navigate('/login', { replace: true, routeState: 'login' })
	}

	const handleAgreeButton = (e: MouseEvent<HTMLButtonElement>) =>
		setIsAgreed(true)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		signUpWithCallback(
			{ email, password },
			() => updateIsLoading(true), // onLoading
			(token, signedUpEmail) => {
				setAccessToken(token.access_token)
				sendVerification(
					getAccessToken(),
					() => updateIsLoading(true),
					() =>
						updateToastMessage('가입하신 이메일로 인증 코드를 전송했습니다.'),
					(error) => {
						updateToastMessage(error)
					},
					() => updateIsLoading(false),
				)
				navigate(`/verification?email=${signedUpEmail}`, { replace: true })
			},
			(error) => {
				updateToastMessage(error)
			},
			() => updateIsLoading(false), // onLoadingDone
		)
	}

	return (
		<>
			{isAgreed ? (
				<AuthForm
					heading="회원 가입"
					submitText="이메일로 가입하기"
					handleAuthSubmit={handleSubmit}
					textLink={{
						descriptionMessage: '이미 회원이시라면',
						linkMessage: '로그인하기',
						handleTextLink: handleLoginLink,
					}}
				/>
			) : (
				<UserAgreement handleButtonClick={handleAgreeButton} />
			)}
		</>
	)
}
