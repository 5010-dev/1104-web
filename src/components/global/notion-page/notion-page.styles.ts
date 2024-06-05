import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'

export const NotionPageContainer = styled.div`
	position: relative;

	width: ${({ theme }) => theme.layout.container.width};

	display: flex;
	flex-direction: column;

	text-align: left;

	* {
		${({ theme }) => getTypography(theme, 'body')}
		font-size: 0.875rem;
	}

	.notion-bookmark-description {
		${({ theme }) => getTypography(theme, 'caption')}
	}

	main.notion-page-offset {
		margin-top: ${({ theme }) => theme.layout.container.gutter};
	}

	img.notion-page-icon-cover {
		display: none;
	}

	div.notion-title {
		${({ theme }) => getTypography(theme, 'heading2')}
	}

	.notion-h1,
	.notion-h2 {
		${({ theme }) => getTypography(theme, 'heading3')}
	}

	.notion-h3 {
		${({ theme }) => getTypography(theme, 'subheading')}
	}

	.notion-text,
	#text {
		${({ theme }) => getTypography(theme, 'body')}
		font-size: 0.875rem;
	}

	.notion-bookmark-image {
		& > img {
			display: none;
		}
	}
`
