/**
 * 지정된 파일 경로에서 마크다운 파일의 내용을 가져옵니다.
 * @param filePath 마크다운 파일의 경로.
 * @returns 마크다운 파일의 내용을 문자열로 반환하는 Promise 객체.
 * @throws 파일 가져오기가 실패한 경우 에러를 발생시킵니다.
 */
export async function fetchMarkdownFile(filePath: string): Promise<string> {
	const response = await fetch(filePath)
	// 응답이 성공적인지 확인합니다 (상태 코드가 200-299 범위인 경우).
	if (!response.ok) {
		throw new Error(`Failed to fetch markdown file: ${filePath}`)
	}
	return await response.text()
}
