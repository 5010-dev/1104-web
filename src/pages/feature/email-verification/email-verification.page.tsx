import { useLocation } from 'react-router-dom'

export default function EmailVerification() {
	const { search } = useLocation()
	const searchParams = new URLSearchParams(search)
	const email = searchParams.get('email')

	return (
		// 인증 링크가 메일로 전송 가능하게 되면, 인증번호 입력 화면 대신 인증 대기중 화면으로 변경
		// 인증 대기중 화면에는 '인증번호 재요청' 버튼 필요함
		// 파라미터에 따른 조건 분기 필요
		// 만약 이메일만 있다면, 인증 대기 화면 랜더링
		// 만약 이메일+코드까지 있다면, useEffect를 통해 바로 인증과정 진행
		// 관련하여, 파라미터 값을 useEffect의 의존성 배열에 추가 가능한지 체크 필요

		<div
			style={{
				width: '100%',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{email}
		</div>
	)
}
