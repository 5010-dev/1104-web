import { useState, useEffect, ChangeEvent, FormEvent } from 'react'

import { ExchangeUidInputContainer } from './exchange-uid-input.styles'

import StyledHeading from '../../../global/styled-heading/styled-heading.component'

export default function ExchangeUidInput() {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		//TODO: 인디케이터 셋팅 데이터 전송 API

		// onSubmitSuccess()
	}

	return (
		<ExchangeUidInputContainer
			id="exchange-uid-input-form"
			onSubmit={handleSubmit}
		>
			<StyledHeading heading="거래소 UID 입력" subheading="인디케이터 셋팅" />
		</ExchangeUidInputContainer>
	)
}
