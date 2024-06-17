import { useState, FormEvent, ChangeEvent } from 'react'
import axios from 'axios'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useToastMessageStore } from '../../../store/globalUiStore'
import { useLoadingStore } from '../../../store/loadingStore'

import { PreOrderFormContainer } from './pre-order-form.styles'

import Chip from '../../global/chip/chip.component'
import Input from '../../global/input/input.component'
import Button from '../../global/button/button.component'

export default function PreOrderForm() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const updateToastMessage = useToastMessageStore(
		(state) => state.updateToastMessage,
	)
	const updateIsLoading = useLoadingStore((state) => state.updateIsLoading)

	const [email, setEmail] = useState<string>('')
	const [isValid, setIsValid] = useState<boolean>(false)

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value

		setEmail(inputValue)
		setIsValid(validateInput(inputValue, emailRegex))
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		updateIsLoading(true)
		try {
			const response = await axios.post(
				`https://api.stibee.com/v1/lists/${process.env.REACT_APP_STIBEE_EMAIL_LIST_ID}/subscribers`,
				{
					eventOccurredBy: 'SUBSCRIBER',
					confirmEmailYN: 'N',
					subscribers: [
						{
							email: email,
							name: '',
							$ad_agreed: 'Y',
						},
					],
				},
				{
					headers: {
						AccessToken: process.env.REACT_APP_STIBEE_API_KEY,
					},
				},
			)
			if (response.status === 200 && response.data.Ok) {
				updateToastMessage('사전예약 신청이 완료되었습니다.')
			} else {
				updateToastMessage(
					'문제가 발생했습니다. 잠시 후 다시 시도하시거나, 고객 지원 센터로 연락주세요.',
				)
			}
		} catch (error: any) {
			updateToastMessage(error)
		}
		updateIsLoading(false)
	}

	const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/

	const validateInput = (input: string, regex: RegExp): boolean =>
		regex.test(input)

	return (
		<PreOrderFormContainer $deviceType={deviceType} onSubmit={handleSubmit}>
			<div id="pre-order-form-contents-container">
				<div id="pre-order-form-text-container">
					<Chip
						id="pre-order-form-chip"
						appearance="accent"
						hierarchy="primary"
						stroke="filled"
						shape="rounded3"
						text="사전예약 진행중"
						// inverted
					/>
					<h1 id="pre-order-form-heading">르네상스 퀀트 솔루션</h1>
					<span id="pre-order-form-subheading">
						Devloped & Provided by 1104 R&I
					</span>
					<p className="pre-order-form-body">
						1104 R&I가 새롭게 선보이는 르네상스 퀀트 솔루션은 리스크 관리에
						초점을 맞춘 개량적 투자 전략과 자동 매매 시스템을 제공합니다.
					</p>
					<p className="pre-order-form-body">
						저위험 및 스윙 전략을 통해 안정적인 복리 수익을 달성하고, 장기적인
						관점에서의 투자를 지향합니다.
					</p>
				</div>

				<div id="quant-pre-order-input-container">
					<Input
						id="quant-pre-order-input"
						type="email"
						name="email"
						placeholder="이메일을 입력해 주세요."
						hierarchy="secondary"
						value={email}
						handleChange={handleInputChange}
						isValid={email.length === 0 || isValid}
					/>
					{/* TODO: 사전예약 개인정보 이용약관 */}
					<Button
						id="quant-pre-order-button"
						type="submit"
						accessibleName="quant-logo-section-contents-container"
						text="동의하고 사전예약 신청하기"
						appearance="accent"
						hierarchy="primary"
						stroke="filled"
						shape="rounding"
						disabled={!isValid}
					/>
				</div>
			</div>
		</PreOrderFormContainer>
	)
}
