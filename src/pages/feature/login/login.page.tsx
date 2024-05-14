import { useEffect, MouseEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useAuthDataStore } from '../../../store/authDataStore'

import { LoginContainer, AuthGlobalStyle } from './login.styles'

import logoUrl from '../../../assets/logo/1104-logo-white.svg'
import Card from '../../../components/global/card/card.component'
import LoginForm from '../../../components/feature/login-form/login-form.component'
import SignupForm from '../../../components/feature/signup-form/signup-form.component'

export default function Login() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { resetAuthData } = useAuthDataStore((state) => state)
	const navigate = useNavigate()
	const location = useLocation()
	const state = location.state as
		| { mode: 'login' | 'signup' | 'verification' }
		| undefined

	useEffect(() => {
		resetAuthData()
	}, [resetAuthData])

	const handleClose = (e: MouseEvent<HTMLButtonElement>) => navigate(-1)

	return (
		<LoginContainer $deviceType={deviceType}>
			<Helmet>
				<meta name="theme-color" content="#000000" />
			</Helmet>

			<AuthGlobalStyle />

			<Card
				id="login-card"
				appearance="neutral"
				hierarchy="primary"
				stroke="filled"
				shape="rounded2"
				opacity={1}
			>
				<div id="top-row">
					<img id="company-logo" src={logoUrl} alt="company-logo" />
					<button id="close-icon" aria-label="top-row" onClick={handleClose}>
						<FontAwesomeIcon icon={faXmark} />
					</button>
				</div>
				{state?.mode === 'login' ? <LoginForm /> : null}
				{state?.mode === 'signup' ? <SignupForm /> : null}

				{/* <AuthLayout
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
				</AuthLayout> */}
				{/* <AuthForm
					heading={heading}
					submitText={submitText}
					handleAuthSubmit={handleAuthSubmit}
				>
					{children}
				</AuthForm> */}
			</Card>
			<div id="login-panel"></div>
		</LoginContainer>
	)

	// const { email, password } = useAuthDataStore((state) => state)
	// const username = email
	// const navigate = useNavigate()
	// const handleSignupLink = () => navigate('/signup')
	// const handleSubmit = async ({ username, password }: SignInInput) => {
	// 	try {
	// 		const { isSignedIn, nextStep } = await signIn({ username, password })
	// 		console.log(isSignedIn)
	// 		console.log(nextStep)
	// 		if (nextStep.signInStep === 'CONFIRM_SIGN_UP') {
	// 			navigate(`/verification?email=${encodeURIComponent(email)}`)
	// 			// 인증 링크가 메일로 전송 가능하게 되면, 인증번호 입력 화면 대신 인증 대기중 화면으로 변경
	// 			// 라우팅은 지금과 동일하게, 인증 처리 및 인증 대기중 화면 구성은 /verification 에서 직접 진행
	// 			// 인증 대기중 화면에는 '인증번호 재요청' 버튼 필요함
	// 		}
	// 	} catch (error) {
	// 		console.log('error signing in', error)
	// 	}
	// }
	// return (
	// 	<AuthLayout
	// 		heading="로그인"
	// 		submitText="이메일로 로그인하기"
	// 		handleAuthSubmit={() => handleSubmit({ username, password })}
	// 	>
	// 		<SignupLinkContainer id="signup-link-container">
	// 			<span id="signup-text">아직 회원이 아니시라면, </span>
	// 			<TextLink
	// 				appearance="neutral"
	// 				hierarchy="secondary"
	// 				size="sm"
	// 				underlined
	// 				text="지금 가입하기"
	// 				handleClick={handleSignupLink}
	// 			/>
	// 		</SignupLinkContainer>
	// 	</AuthLayout>
	// )
}
