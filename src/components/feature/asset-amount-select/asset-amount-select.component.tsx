import { useState, useEffect, FormEvent, ChangeEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { useAuthDataStore } from '../../../store/authDataStore'
import { useAssetOptionStore } from '../../../store/serviceDataStore'

import { AssetAmountSelectProps } from './asset-amount-select.types'
import { AssetAmountSelectContainer } from './asset-amount-select.styles'

import StyledHeading from '../../global/styled-heading/styled-heading.component'
import Input from '../../global/input/input.component'
import RadioButton from '../../global/radio-button/radio-button.component'
import Button from '../../global/button/button.component'
import WarningText from '../warning-text/warning-text.component'

export default function AssetAmountSelect(props: AssetAmountSelectProps) {
	const { onSubmitSuccess } = props
	const [isValid, setIsValid] = useState<boolean>(false)
	const [formattedValue, setFormattedValue] = useState<string>('')
	const [isCutsomInputValid, setIsCutsomInputValid] = useState<boolean>(false)

	const updateLoginUser = useAuthDataStore((state) => state.updateLoginUser)
	const asset = useAuthDataStore((state) => state.loginUser.asset)
	const assetOptions = useAssetOptionStore((state) => state.assetOptions)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		//TODO: 인디케이터 셋팅 데이터 전송 API

		onSubmitSuccess()
	}

	const formatNumber = (value: string): string => {
		const numericValue = value.replace(/[^0-9]/g, '')
		const length = numericValue.length

		if (length <= 3) {
			return numericValue
		} else if (length === 4) {
			return `${numericValue.slice(0, 1)},${numericValue.slice(1)}`
		} else {
			const billionDigits = numericValue.slice(0, -4)
			const millionDigits = numericValue.slice(-4)
			return `${billionDigits}억 ${millionDigits.slice(
				0,
				1,
			)},${millionDigits.slice(1)}`
		}
	}

	const isValidInput = (value: string): boolean => {
		const inputRegex = /^(200[1-9]|20[1-9]\d|2[1-9]\d{2}|[3-9]\d{3}|\d{5,})$/
		return inputRegex.test(value.replace(/[^0-9]/g, ''))
	}

	const updateCursorPosition = (
		inputElement: HTMLInputElement,
		position: number,
	) => {
		setTimeout(() => {
			inputElement.setSelectionRange(position, position)
		}, 0)
	}

	const handleInputTextChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const inputName = e.target.name
		const sanitizedValue = inputValue.replace(/[^0-9]/g, '')
		const formattedValue = formatNumber(inputValue)
		const modifiedValue = `${formattedValue}만 원`

		parseInt(sanitizedValue) <= 2000
			? setIsCutsomInputValid(false)
			: setIsCutsomInputValid(true)

		setFormattedValue(modifiedValue)
		updateLoginUser(
			inputName,
			isValidInput(sanitizedValue) ? sanitizedValue : '',
		)
		const inputElement = e.target
		updateCursorPosition(inputElement, formattedValue.length)
	}

	const handleInputRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const inputName = e.target.name

		updateLoginUser(inputName, inputValue)
	}

	useEffect(() => {
		const validateAsset = (): boolean => asset.length !== 0
		setIsValid(validateAsset)
	}, [asset])

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
			<div id="asset-input-container" className="input-items">
				{!isCutsomInputValid && !isValid && formattedValue.length !== 0 ? (
					<WarningText message="직접 입력은 2,000만 원 보다 높게(예. 2,001 만 원 이상) 입력해 주세요." />
				) : null}
				<Input
					hierarchy="secondary"
					name="asset"
					type="text"
					value={formattedValue}
					placeholder="2,000만 원 초과 직접 입력"
					isValid={isCutsomInputValid || asset.length === 0}
					handleChange={handleInputTextChange}
				/>
				{assetOptions.map((item, index) => (
					<RadioButton
						key={index}
						className="radio-button"
						name="asset"
						text={item.title}
						value={item.value}
						handleChange={handleInputRadioChange}
						isChecked={asset === item.value}
					/>
				))}
			</div>
			<Button
				id="submit-button"
				className="input-items"
				type="submit"
				accessibleName="asset-amount-select-form"
				appearance="accent"
				hierarchy="primary"
				stroke="filled"
				shape="rounding"
				icon={<FontAwesomeIcon icon={faCheck} />}
				text={'입력 완료'}
				disabled={!isValid || asset.length === 0}
			/>
		</AssetAmountSelectContainer>
	)
}
