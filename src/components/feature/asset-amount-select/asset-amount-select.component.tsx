import { useState, useEffect, FormEvent, ChangeEvent } from 'react'

import { useAuthDataStore } from '../../../store/authDataStore'

import { AssetAmountSelectProps } from './asset-amount-select.types'
import { AssetAmountSelectContainer } from './asset-amount-select.styles'

import StyledHeading from '../../global/styled-heading/styled-heading.component'
import Button from '../../global/button/button.component'

export default function AssetAmountSelect(props: AssetAmountSelectProps) {
	const { onSubmitSuccess } = props
	const [isValid, setIsValid] = useState<boolean>(false)

	const updateLoginUser = useAuthDataStore((state) => state.updateLoginUser)
	const asset = useAuthDataStore((state) => state.loginUser.asset)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		//TODO: 인디케이터 셋팅 데이터 전송 API

		onSubmitSuccess()
	}

	useEffect(() => {
		updateLoginUser('asset', '')
	}, [updateLoginUser])

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'auto' })
	}, [])

	return (
		<AssetAmountSelectContainer
			onSubmit={handleSubmit}
			id="asset-amount-select-form"
		>
			<StyledHeading
				heading="맞춤형 자산설계 선택"
				subheading="인디케이터 셋팅"
			/>
			<p className="body">예상되는 초기 투자 자금의 규모를 선택해 주세요.</p>
			<Button
				id="submit-button"
				className="input-items"
				type="submit"
				accessibleName="asset-amount-select-form"
				appearance="accent"
				hierarchy="primary"
				stroke="filled"
				shape="rounding"
				text={'다음 단계로 →'}
				disabled={!isValid || asset.length === 0}
			/>
		</AssetAmountSelectContainer>
	)
}
