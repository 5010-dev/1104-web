import styled, { DefaultTheme } from 'styled-components'
import PageLayoutContainer from '../../global/page-layout/page-layout.styles'

import {
	Typography,
	TypographyVariant,
	Color,
	HomeContainerProps,
} from './home.types'

/**
 * 타이포그래피 속성을 설정하는 함수
 * @param theme 테마 객체
 * @param typography 타이포그래피 속성 객체
 * @param color 글자 색상
 * @returns 타이포그래피 속성이 적용된 CSS 코드
 */
const setTypography = (
	theme: DefaultTheme,
	typography: Typography[TypographyVariant],
	color: Color,
) => `
  font-family: ${typography.typeface};
  font-size: ${typography.size};
  font-weight: ${typography.weight};
  line-height: ${typography.leading};
  letter-spacing: ${typography.kerning};
  color: ${color};
`

export const HomeContainer = styled(PageLayoutContainer)<HomeContainerProps>`
	position: relative;

	min-height: ${({ theme }) => theme.layout.component.minHeight};

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;

	padding-bottom: 0;
	padding-top: 8rem;

	background-image: url(${(props) => props.$imageUrl});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.15);

		z-index: 1;
	}

	div#text-container {
		max-width: ${({ theme }) => theme.layout.section.maxWidth};
		height: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: ${({ theme }) => theme.layout.section.gutter};

		z-index: 2;

		h1#display {
			${({ theme }) =>
				setTypography(
					theme,
					theme.typo.display,
					theme.colour.neutral.secondary.active,
				)}
		}

		h3#subheading {
			${({ theme }) =>
				setTypography(
					theme,
					theme.typo.subheading,
					theme.colour.neutral.secondary.active,
				)}
		}
	}

	img#mockup-image {
		max-width: 100vw;
		min-width: ${({ theme }) => theme.layout.page.minWidth};
		height: 50vh;
		object-fit: cover;
		object-position: bottom;

		z-index: 2;
	}
`
