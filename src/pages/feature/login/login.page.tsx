import Input from '../../../components/global/input/input.component'

export default function Login() {
	return (
		<div>
			<Input
				hierarchy="primary"
				isValid
				placeholder="이메일 주소를 입력해 주세요."
			/>
		</div>
	)
}
