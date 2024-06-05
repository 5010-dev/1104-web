import { useState, useEffect, FormEvent, ChangeEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChild } from '@fortawesome/free-solid-svg-icons'

import { useExchangeDataStore } from '../../../../../store/exchangeDataStore'
import { useAuthDataStore } from '../../../../../store/authDataStore'

import { ExchangeSelectProps } from './exchange-select.types'
import { ExchangeSelectContainer } from './exchange-select.styles'

import StyledHeading from '../../../../global/styled-heading/styled-heading.component'
import Button from '../../../../global/button/button.component'
import RadioButton from '../../../../global/radio-button/radio-button.component'
import NotionPage from '../../../../global/notion-page/notion-page.component'

export default function ExchangeSelect(props: ExchangeSelectProps) {
	const { onSubmitSuccess, handleBeginnerRegistration } = props
	const [isValid, setIsValid] = useState<boolean>(false)
	const [isBeginnerClicked, setIsBeginnerClick] = useState<boolean>(false)

	const exchangeList = useExchangeDataStore((state) => state.exchangeList)
	const updateLoginUser = useAuthDataStore((state) => state.updateLoginUser)
	const exchange = useAuthDataStore((state) => state.loginUser.exchange)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		//TODO: 인디케이터 셋팅 데이터 전송 API

		onSubmitSuccess()
	}

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const inputName = e.target.name

		updateLoginUser(inputName, inputValue)
	}

	useEffect(() => {
		const validtaeExchange = (): boolean => exchange.length !== 0
		setIsValid(validtaeExchange)
	}, [exchange])

	useEffect(() => {
		updateLoginUser('exchange', '')
	}, [updateLoginUser])

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'auto' })
	}, [])

	return (
		<ExchangeSelectContainer onSubmit={handleSubmit} id="exchange-select-form">
			<StyledHeading heading="주거래소 선택" subheading="인디케이터 셋팅" />

			{isBeginnerClicked ? (
				<NotionPage pageId="a4c12b8eca0b40ab9aebde2a398d31c2" />
			) : null}

			<p className="body">현재 사용중이신 주거래소를 선택해 주세요.</p>
			<Button
				type="button"
				id="beginner-button"
				className="input-items"
				accessibleName="exchange-select-form"
				appearance="neutral"
				hierarchy="tertiary"
				stroke="filled"
				shape="rounding"
				icon={<FontAwesomeIcon icon={faChild} id="beginner-icon" />}
				text="선물 거래가 처음이신가요? 저희가 도와드릴게요!"
				handleClick={() => setIsBeginnerClick(true)}
			/>
			<div id="select-container" className="input-items">
				{exchangeList.map((item, index) => (
					<RadioButton
						key={index}
						className="radio-button"
						name="exchange"
						text={item.koName}
						value={item.name}
						handleChange={handleInputChange}
						isChecked={exchange === item.name}
					/>
				))}
			</div>
			<Button
				id="submit-button"
				className="input-items"
				type="submit"
				accessibleName="exchange-select-form"
				appearance="accent"
				hierarchy="primary"
				stroke="filled"
				shape="rounding"
				text={'다음 단계로 →'}
				disabled={!isValid}
			/>
		</ExchangeSelectContainer>
	)
}
