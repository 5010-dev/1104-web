import { useState, useEffect, ChangeEvent, FormEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

import { useAuthDataStore } from '../../../../store/data/auth-data/auth-data.store'
import { useExchangeDataStore } from '../../../../store/exchangeDataStore'

import { ExchangeUidInputProps } from './exchange-uid-input.types'
import { ExchangeUidInputContainer } from './exchange-uid-input.styles'

import StyledHeading from '../../../global/styled-heading/styled-heading.component'
import Input from '../../../global/input/input.component'
import WarningText from '../../warning-text/warning-text.component'
import Button from '../../../global/button/button.component'
import TextLink from '../../../global/text-link/text-link.component'
import NotionPage from '../../../global/notion-page/notion-page.component'
import Modal from '../../../global/modal/modal.component'
import Card from '../../../global/card/card.component'

export default function ExchangeUidInput(props: ExchangeUidInputProps) {
	const { onSubmitSuccess } = props
	const [isValid, setIsValid] = useState<boolean>(false)
	const [isRegistrationClicked, setIsRegistrationClicked] =
		useState<boolean>(false)
	const [isGuideClicked, setIsGuideClicked] = useState<boolean>(false)

	const updateLoginUser = useAuthDataStore((state) => state.updateLoginUser)
	const uid = useAuthDataStore((state) => state.loginUser.uid)
	const defaultExchange = useExchangeDataStore((state) => state.defaultExchange)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		//TODO: 인디케이터 셋팅 데이터 전송 API

		onSubmitSuccess()
	}

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const inputName = e.target.name

		updateLoginUser(inputName, inputValue.replace(/[^0-9]/g, ''))
		setIsValid(validateUid(inputValue))
	}

	const validateUid = (uid: string): boolean => {
		const uidRegex = /^\d+$/
		return uidRegex.test(uid.replace(/[^0-9]/g, ''))
	}

	useEffect(() => {
		updateLoginUser('uid', '')
	}, [updateLoginUser])

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'auto' })
	}, [])

	return (
		<ExchangeUidInputContainer
			id="exchange-uid-input-form"
			onSubmit={handleSubmit}
		>
			{isRegistrationClicked ? (
				<Modal
					title="해외 거래소 가입 절차"
					children={
						<>
							<Card>
								1104 R&I에서 제공하는 혜택을 받기 위해서는 바이비트 거래소에
								가입해야 합니다. 아래의 가이드를 따라 바이비트 거래소 가입을
								진행해 주세요.
							</Card>
							<NotionPage pageId="a1a546bdc9454ac08b0518cb689779ba" />
						</>
					}
					handleClose={() => setIsRegistrationClicked(false)}
					bottomButtonText="가이드에 따라 가입을 마쳤어요."
					handleBottomButtonClick={() => setIsRegistrationClicked(false)}
				/>
			) : null}
			{isGuideClicked ? (
				<Modal
					title="UID 확인 방법"
					children={<NotionPage pageId="70883ab1b5a746db91797956a84338a0" />}
					handleClose={() => setIsGuideClicked(false)}
					bottomButtonText="가이드대로 확인했어요."
					handleBottomButtonClick={() => setIsGuideClicked(false)}
				/>
			) : null}

			<StyledHeading
				heading={`${defaultExchange.toUpperCase()} UID 입력`}
				subheading="인디케이터 셋팅"
			/>
			<Button
				type="button"
				id="exchange-registration-button"
				className="input-items"
				accessibleName="exchange-uid-input-form"
				appearance="neutral"
				hierarchy="tertiary"
				stroke="filled"
				shape="rounding"
				icon={
					<FontAwesomeIcon
						icon={faRightToBracket}
						id="exchange-registration-icon"
					/>
				}
				text={`${defaultExchange.toUpperCase()} 거래소 신규 가입하고 1104 R&I가 제공하는 혜택 받기`}
				handleClick={() => setIsRegistrationClicked(true)}
			/>
			{!isValid && uid.length !== 0 ? (
				<WarningText
					className="input-items"
					message="잘못된 UID 입니다. UID 양식(숫자로만 구성)을 확인해 주세요."
				/>
			) : null}
			<Input
				id="exchange-uid-input"
				className="input-items"
				name="uid"
				type="tel"
				pattern="\d*"
				autoComplete={false}
				placeholder={`${defaultExchange.toUpperCase()} UID를 입력해 주세요.`}
				hierarchy="secondary"
				value={uid}
				handleChange={handleInputChange}
				isValid={uid.length === 0 || isValid}
			/>
			<TextLink
				id="guide-link"
				description="거래소 UID 확인 방법"
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
				accessibleName="exchange-uid-input-form"
				appearance="accent"
				hierarchy="primary"
				stroke="filled"
				shape="rounding"
				text={'다음 단계로 →'}
				disabled={!isValid || uid.length === 0}
			/>
		</ExchangeUidInputContainer>
	)
}
