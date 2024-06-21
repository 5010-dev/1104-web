import { useState, FormEvent, MouseEvent } from 'react'

import { signUp, sendVerification } from '../../../services/auth/auth-service'
import { useAuthDataStore } from '../../../store/authDataStore'
import { useLoadingStore } from '../../../store/loadingStore'
import { useToastMessageStore } from '../../../store/globalUiStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import {
	setAccessToken,
	getAccessToken,
	setRefreshToken,
} from '../../../utils/token.utils'

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

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			updateIsLoading(true)

			const { token, email: signedUpEmail } = await signUp({ email, password })
			setAccessToken(token.access)
			setRefreshToken(token.refresh)

			await sendVerification(getAccessToken())
			updateToastMessage('가입하신 이메일로 인증 코드를 전송했습니다.')
			navigate(`/verification?email=${signedUpEmail}`, { replace: true })
		} catch (error: any) {
			updateToastMessage(error.message)
		} finally {
			updateIsLoading(false)
		}
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
				<UserAgreement
					handleButtonClick={handleAgreeButton}
					textLink={{
						descriptionMessage: '이미 회원이시라면',
						linkMessage: '로그인하기',
						handleTextLink: handleLoginLink,
					}}
				/>
			)}
		</>
	)
}
