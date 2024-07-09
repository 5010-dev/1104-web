/**
 * 지정된 주제로 도움말 요청 이메일을 생성하고 기본 메일 클라이언트를 엽니다.
 *
 * @param subject - 이메일 제목으로 사용될 도움말 주제
 */
export const getHelp = (subject: string) => {
	const recipient = '5010.cs.kr@5010.tech'
	const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}`

	window.location.href = mailtoUrl
}
