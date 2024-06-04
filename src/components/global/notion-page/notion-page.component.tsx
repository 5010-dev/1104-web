import { useEffect, useState } from 'react'

import { NotionRenderer } from 'react-notion'
import 'react-notion/src/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import Button from '../button/button.component'
import Card from '../card/card.component'

import { NotionPageProps } from './notion-page.types'
import { NotionPageContainer } from './notion-page.styles'

export default function NotionPage(props: NotionPageProps) {
	const {
		pageId,
		handleCloseButtonClick,
		description,
		handleBottomButtonClick,
		bottomButtonText,
	} = props
	const [response, setResponse] = useState<any>({})

	useEffect(() => {
		fetch(`https://notion-api.splitbee.io/v1/page/${pageId}`)
			.then((res) => res.json())
			.then((resJson) => {
				setResponse(resJson)
			})
	}, [pageId])

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'auto' })
	}, [])

	return (
		<NotionPageContainer>
			<div id="body-container">
				<div id="top-bar">
					<div id="close-button-container">
						<Button
							accessibleName="top-bar"
							type="button"
							appearance="neutral"
							hierarchy="secondary"
							stroke="filled"
							shape="rounded3"
							handleClick={handleCloseButtonClick}
							icon={<FontAwesomeIcon icon={faXmark} />}
							id="close-button"
						/>
					</div>
				</div>

				{description && description.length !== 0 ? (
					<Card id="description-card">
						<h4>{description}</h4>
					</Card>
				) : null}

				<div id="notion-page">
					<NotionRenderer blockMap={response} fullPage={true} />
				</div>
				{bottomButtonText && bottomButtonText.length !== 0 ? (
					<div id="bottom-bar">
						<Button
							accessibleName="bottom-bar"
							type="button"
							appearance="neutral"
							hierarchy="primary"
							stroke="filled"
							shape="rounding"
							text={bottomButtonText}
							id="button"
							handleClick={handleBottomButtonClick}
						/>
					</div>
				) : null}
			</div>
		</NotionPageContainer>
	)
}
