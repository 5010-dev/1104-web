import { signIn, type SignInInput } from 'aws-amplify/auth'
import { useNavigate } from 'react-router-dom'

import { useAuthDataStore } from '../../../store/authDataStore'

import { SignupLinkContainer } from './login.styles'

import AuthLayout from '../../global/auth-layout/auth-layout.page'
import TextLink from '../../../components/global/text-link/text-link.component'

export default function Login() {
	const { email, password } = useAuthDataStore((state) => state)
	const username = email
	const navigate = useNavigate()

	const handleSignupLink = () => navigate('/signup')

	const handleSubmit = async ({ username, password }: SignInInput) => {
		try {
			const { isSignedIn, nextStep } = await signIn({ username, password })
			console.log(isSignedIn)
			console.log(nextStep)

			if (nextStep.signInStep === 'CONFIRM_SIGN_UP') {
				navigate(`/verification?email=${encodeURIComponent(email)}`)
				// 인증 링크가 메일로 전송 가능하게 되면, 인증번호 입력 화면 대신 인증 대기중 화면으로 변경
				// 라우팅은 지금과 동일하게, 인증 처리 및 인증 대기중 화면 구성은 /verification 에서 직접 진행
				// 인증 대기중 화면에는 '인증번호 재요청' 버튼 필요함
			}
		} catch (error) {
			console.log('error signing in', error)
		}
	}

	return (
		<AuthLayout
			heading="로그인"
			submitText="이메일로 로그인하기"
			handleAuthSubmit={() => handleSubmit({ username, password })}
		>
			<SignupLinkContainer id="signup-link-container">
				<span id="signup-text">아직 회원이 아니시라면, </span>
				<TextLink
					appearance="neutral"
					hierarchy="secondary"
					size="sm"
					underlined
					text="지금 가입하기"
					handleClick={handleSignupLink}
				/>
			</SignupLinkContainer>
		</AuthLayout>
	)
}
