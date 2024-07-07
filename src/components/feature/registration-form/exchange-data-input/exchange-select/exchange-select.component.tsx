import { useState, useEffect, FormEvent, ChangeEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChild } from '@fortawesome/free-solid-svg-icons'

import { useExchangeDataStore } from '../../../../../store/exchangeDataStore'
import { useAuthDataStore } from '../../../../../store/data/auth-data/auth-data.store'

import { ExchangeSelectProps } from './exchange-select.types'
import { ExchangeSelectContainer } from './exchange-select.styles'

import StyledHeading from '../../../../global/styled-heading/styled-heading.component'
import Button from '../../../../global/button/button.component'
import RadioButton from '../../../../global/radio-button/radio-button.component'
import NotionPage from '../../../../global/notion-page/notion-page.component'
import Modal from '../../../../global/modal/modal.component'
import Card from '../../../../global/card/card.component'

export default function ExchangeSelect(props: ExchangeSelectProps) {
	const { onSubmitSuccess, handleBeginnerRegistration } = props
	const [isValid, setIsValid] = useState<boolean>(false)
	const [isBeginnerClicked, setIsBeginnerClick] = useState<boolean>(false)

	const exchangeList = useExchangeDataStore((state) => state.exchangeList)
	const updateLoginUser = useAuthDataStore((state) => state.updateLoginUser)
	const exchange = useAuthDataStore((state) => state.loginUser.exchange)
	const defaultExchange = useExchangeDataStore((state) => state.defaultExchange)

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
		const validateExchange = (): boolean => exchange.length !== 0
		setIsValid(validateExchange)
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
				<Modal
					title="해외 거래소 가입 절차"
					children={
						<>
							<Card>
								선물 거래를 시작하려면 먼저 해외 거래소부터 가입해야 합니다.
								아래의 가이드를 따라 해외 거래소 가입을 진행해 주세요.
							</Card>
							<NotionPage pageId="a1a546bdc9454ac08b0518cb689779ba" />
						</>
					}
					handleClose={() => setIsBeginnerClick(false)}
					bottomButtonText="가이드에 따라 가입을 마쳤어요."
					handleBottomButtonClick={(e) => {
						setIsBeginnerClick(false)
						handleBeginnerRegistration(e)
						updateLoginUser('exchange', defaultExchange)
					}}
				/>
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
