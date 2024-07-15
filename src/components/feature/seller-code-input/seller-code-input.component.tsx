import { useState, useEffect, ChangeEvent, MouseEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useAuthDataStore } from '../../../store/data/auth-data/auth-data.store'
import { validateWithRegex } from '../../../utils/regex.utils'

import { SellerCodeInputContainer } from './seller-code-input.styles'

import Accordion from '../../global/accordion/accordion.component'
import Input from '../../global/input/input.component'

export default function SellerCodeInput() {
	const { sellerCode, updateAuthData } = useAuthDataStore()
	const [isValid, setIsValid] = useState<boolean>(false)
	const [searchParams] = useSearchParams()

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const inputName = e.target.name

		updateAuthData(inputName, inputValue)
		setIsValid(validateWithRegex('number', inputValue))
	}

	const handleReset = (e: MouseEvent<SVGSVGElement>) => {
		updateAuthData('sellerCode', '')
		setIsValid(false)
	}

	// TODO: login 및 signup 관련하여 라우팅 로직 변경 필요 (외부에서 코드가 포함된 url을 통해 접근해야 하므로)
	// 기존의 state.mode 방식에서 아예 분리된 라우트로 접근해야 할 지도. 그렇게 된다면, signup / login / password-reset 모두 다 라우팅을 쪼개거나, 또는 쿼리 형태로 변경할 필요가 있음 (예. https://1104.kr?auth=signup&code=12345)
	useEffect(() => {
		const urlCode = searchParams.get('code')

		if (urlCode) {
			updateAuthData('sellerCode', urlCode)
		}
	}, [searchParams, updateAuthData])

	return (
		<SellerCodeInputContainer>
			<Accordion
				heading="추천인 코드 입력"
				body={
					<Input
						name="sellerCode"
						type="number"
						pattern="\d*"
						autoComplete={false}
						value={sellerCode}
						className="login-input"
						handleChange={handleChange}
						hierarchy="secondary"
						isValid={sellerCode.length === 0 || isValid}
						placeholder="추천인 코드를 입력해 주세요."
						handleReset={handleReset}
					/>
				}
				container={false}
				size="sm"
			/>
		</SellerCodeInputContainer>
	)
}
