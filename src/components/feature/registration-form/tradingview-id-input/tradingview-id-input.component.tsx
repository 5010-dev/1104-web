import { useState, useEffect, ChangeEvent, FormEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChild } from '@fortawesome/free-solid-svg-icons'

import { useAuthDataStore } from '../../../../store/data/auth-data/auth-data.store'

import { TradingviewIdInputProps } from './tradingview-id-input.types'
import { TradingviewIdInputContainer } from './tradingview-id-input.styles'

import StyledHeading from '../../../global/styled-heading/styled-heading.component'
import Input from '../../../global/input/input.component'
import TextLink from '../../../global/text-link/text-link.component'
import Button from '../../../global/button/button.component'
import WarningText from '../../warning-text/warning-text.component'
import NotionPage from '../../../global/notion-page/notion-page.component'
import Modal from '../../../global/modal/modal.component'
import Card from '../../../global/card/card.component'

export default function TradingviewIdInput(props: TradingviewIdInputProps) {
	const { onSubmitSuccess } = props
	const [isValid, setIsValid] = useState<boolean>(false)
	const [isGuideClicked, setIsGuideClicked] = useState<boolean>(false)
	const [isBeginnerClicked, setIsBeginnerClicked] = useState<boolean>(false)

	const updateLoginUser = useAuthDataStore((state) => state.updateLoginUser)
	const tradingviewId = useAuthDataStore(
		(state) => state.loginUser.tradingviewId,
	)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		//TODO: 인디케이터 셋팅 데이터 전송 API

		onSubmitSuccess()
	}

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const inputName = e.target.name

		updateLoginUser(inputName, inputValue)
		setIsValid(validateInput(inputValue))
	}

	const validateInput = (value: string): boolean => {
		const idRegex = /^[a-zA-Z0-9_-]+$/
		return idRegex.test(value)
	}

	useEffect(() => {
		updateLoginUser('tradingviewId', '')
	}, [updateLoginUser])

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'auto' })
	}, [])

	return (
		<TradingviewIdInputContainer
			id="tradingview-input-form"
			onSubmit={handleSubmit}
		>
			<StyledHeading
				heading="트레이딩뷰 ID 입력"
				subheading="인디케이터 셋팅"
			/>
			{isBeginnerClicked ? (
				<Modal
					title="트레이딩뷰 회원 가입 및 ID 확인"
					children={
						<>
							<Card>
								아래의 가이드를 따라 트레이딩뷰 가입을 진행해 주세요. 모두
								완료되면 아래의 버튼을 눌러 트레이딩뷰 ID 입력을 마무리 하세요.
							</Card>
							<NotionPage pageId="8599c75fae1740f1a5161fbbfcacd831" />
						</>
					}
					handleClose={() => setIsBeginnerClicked(false)}
					bottomButtonText="가이드에 따라 가입을 마쳤어요."
					handleBottomButtonClick={() => setIsBeginnerClicked(false)}
				/>
			) : null}
			{isGuideClicked ? (
				<Modal
					title="트레이딩뷰 ID 확인 방법"
					children={<NotionPage pageId="cba97c976e714a01a618fd19f69da947" />}
					handleClose={() => setIsGuideClicked(false)}
					bottomButtonText="가이드대로 확인했어요."
					handleBottomButtonClick={() => setIsGuideClicked(false)}
				/>
			) : null}
			<Button
				type="button"
				id="beginner-button"
				className="input-items"
				accessibleName="tradingview-input-form"
				appearance="neutral"
				hierarchy="tertiary"
				stroke="filled"
				shape="rounding"
				icon={<FontAwesomeIcon icon={faChild} id="beginner-icon" />}
				text="트레이딩뷰 사용이 처음이세요? 저희가 도와드릴게요!"
				handleClick={() => setIsBeginnerClicked(true)}
			/>
			{!isValid && tradingviewId.length !== 0 ? (
				<WarningText
					className="input-items"
					message="ID 형식이 올바르지 않습니다. ID 양식(영문 및 숫자, -, _만 가능)을
							확인해 주세요."
				/>
			) : null}
			<Input
				id="tradingview-id-input"
				className="input-items"
				type="text"
				name="tradingviewId"
				placeholder="트레이딩뷰 ID를 입력해 주세요."
				hierarchy="secondary"
				value={tradingviewId}
				handleChange={handleInputChange}
				isValid={tradingviewId.length === 0 || isValid}
			/>
			<TextLink
				id="guide-link"
				description="트레이딩뷰 ID 확인 방법"
				text="가이드 보기"
				appearance="neutral"
				hierarchy="secondary"
				size="sm"
				underlined
				handleClick={() => setIsGuideClicked(true)}
			/>
			<Button
				id="submit-button"
				className="input-items"
				type="submit"
				accessibleName="tradingview-input-form"
				appearance="accent"
				hierarchy="primary"
				stroke="filled"
				shape="rounding"
				text={'다음 단계로 →'}
				disabled={!isValid}
			/>
		</TradingviewIdInputContainer>
	)
}
