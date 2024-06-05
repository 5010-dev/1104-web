import { useEffect, useState } from 'react'

import { NotionRenderer } from 'react-notion'
import 'react-notion/src/styles.css'

import { NotionPageProps } from './notion-page.types'
import { NotionPageContainer } from './notion-page.styles'

export default function NotionPage(props: NotionPageProps) {
	const { pageId } = props
	const [response, setResponse] = useState<any>(null)

	useEffect(() => {
		fetch(`https://notion-api.splitbee.io/v1/page/${pageId}`)
			.then((res) => res.json())
			.then((resJson) => {
				setResponse(resJson)
			})
	}, [pageId])

	return (
		<NotionPageContainer>
			{response ? (
				<NotionRenderer blockMap={response} fullPage={true} hideHeader />
			) : null}
		</NotionPageContainer>
	)
}
