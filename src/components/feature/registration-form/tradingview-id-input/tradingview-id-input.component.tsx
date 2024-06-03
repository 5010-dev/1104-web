import { useState, useEffect, ChangeEvent, FormEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChild } from '@fortawesome/free-solid-svg-icons'

import { useAuthDataStore } from '../../../../store/authDataStore'

import { TradingviewIdInputProps } from './tradingview-id-input.types'
import { TradingviewIdInputContainer } from './tradingview-id-input.styles'

import StyledHeading from '../../../global/styled-heading/styled-heading.component'
import Input from '../../../global/input/input.component'
import TextLink from '../../../global/text-link/text-link.component'
import Button from '../../../global/button/button.component'
import WarningText from '../../warning-text/warning-text.component'

export default function TradingviewIdInput(props: TradingviewIdInputProps) {
	const { onSubmitSuccess } = props
	const [isValid, setIsValid] = useState<boolean>(false)

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

	const handleGuideOpen = (url: string): Window | null =>
		window.open(url, '_blank', 'noopener,noreferrer')

	useEffect(() => {
		updateLoginUser('tradingviewId', '')
	}, [updateLoginUser])

	return (
		<TradingviewIdInputContainer
			id="tradingview-input-form"
			onSubmit={handleSubmit}
		>
			<StyledHeading
				heading="트레이딩뷰 ID 입력"
				subheading="인디케이터 셋팅"
			/>
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
				handleClick={() => {
					handleGuideOpen(
						'https://receptive-sleep-5a8.notion.site/ID-8599c75fae1740f1a5161fbbfcacd831',
					)
				}}
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
				handleClick={() =>
					handleGuideOpen(
						'https://receptive-sleep-5a8.notion.site/ID-cba97c976e714a01a618fd19f69da947',
					)
				}
			/>
			<Button
				id="submit-button"
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
