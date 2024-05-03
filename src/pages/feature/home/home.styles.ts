import styled from 'styled-components'
import PageLayoutContainer from '../../global/page-layout/page-layout.styles'

type HomeContainerProps = {
	$imageUrl: string
}

export const HomeContainer = styled(PageLayoutContainer)<HomeContainerProps>`
	position: relative;

	min-height: ${({ theme }) => theme.layout.component.minHeight};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding-bottom: 0;

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
		height: 100%;

		display: flex;
		flex-direction: column;
		gap: ${({ theme }) => theme.layout.section.gutter};

		z-index: 2;

		h1#display {
			font-family: ${({ theme }) => theme.typo.display.typeface};
			font-size: ${({ theme }) => theme.typo.display.size};
			font-weight: ${({ theme }) => theme.typo.display.weight};
			line-height: ${({ theme }) => theme.typo.display.leading};
			letter-spacing: ${({ theme }) => theme.typo.display.kerning};
			color: ${({ theme }) => theme.colour.neutral.secondary.active};
		}

		h3#subheading {
			font-family: ${({ theme }) => theme.typo.subheading.typeface};
			font-size: ${({ theme }) => theme.typo.subheading.size};
			font-weight: ${({ theme }) => theme.typo.subheading.weight};
			line-height: ${({ theme }) => theme.typo.subheading.leading};
			letter-spacing: ${({ theme }) => theme.typo.subheading.kerning};
			color: ${({ theme }) => theme.colour.neutral.secondary.active};
		}
	}
`
