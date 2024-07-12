import { useState, FormEvent, MouseEvent } from 'react'
import { ROUTES } from '../../../routes/routes'

import { signUp, sendVerification } from '../../../services/auth/auth-service'
import { useAuthDataStore } from '../../../store/data/auth-data/auth-data.store'
import { useLoadingStore } from '../../../store/layout/loading.store'
import { useToastMessageStore } from '../../../store/layout/global-ui.store'
import useNavigateWithScroll from '../../../hooks/use-navigate-with-scroll'

import {
	setAccessToken,
	getAccessToken,
	setRefreshToken,
} from '../../../utils/token.utils'

import AuthForm from '../../global/auth-form/auth-form.component'
import UserAgreement from './user-agreement/user-agreement.component'

export default function SignupForm() {
	const [isAgreed, setIsAgreed] = useState<boolean>(false)

	const { email, password, sellerCode } = useAuthDataStore()
	const updateIsLoading = useLoadingStore((state) => state.updateIsLoading)
	const { updateToastMessage } = useToastMessageStore()
	const navigate = useNavigateWithScroll()

	const handleLoginLink = (e: MouseEvent<HTMLSpanElement>) => {
		navigate(ROUTES.LOGIN, { replace: true, state: { mode: 'login' } })
	}

	const handleAgreeButton = (e: MouseEvent<HTMLButtonElement>) =>
		setIsAgreed(true)

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			updateIsLoading(true)

			const { token, email: signedUpEmail } = await signUp({
				email,
				password,
				referral_code: sellerCode,
			})
			setAccessToken(token.access)
			setRefreshToken(token.refresh)

			await sendVerification(getAccessToken())
			updateToastMessage('가입하신 이메일로 인증 코드를 전송했습니다.')
			navigate(`${ROUTES.VERIFICATION}?email=${signedUpEmail}`, {
				replace: true,
				state: { mode: 'signup' },
			})
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
