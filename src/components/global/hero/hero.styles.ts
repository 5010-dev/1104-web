import styled, { css } from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'
import { getColour, hexToRgba } from '../../../utils/colour.utils'

import { HeroContainerProps } from './hero.types'

type Props = HeroContainerProps

export const HeroContainer = styled.div<Props>`
	position: relative;

	width: ${({ theme }) => theme.layout.section.width};
	min-height: ${({ theme }) => theme.layout.section.minHeight};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'section')};

	background-image: url(${({ $imageUrl }) => $imageUrl});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	background-attachment: ${({ $isPointerCoarseAndSafari }) =>
		$isPointerCoarseAndSafari ? 'scroll' : 'fixed'};

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: -1px;

		border: none;
		box-sizing: border-box;

		/* background-color: rgba(0, 0, 0, 0.15); */
		background: ${({ theme }) =>
			`linear-gradient(to bottom, ${hexToRgba(
				theme.colour.neutral.primary.active,
				0.15,
			)},  ${hexToRgba(theme.colour.neutral.primary.active, 0.2)}, ${hexToRgba(
				theme.colour.neutral.primary.active,
				1,
			)})`};

		z-index: 1;
	}

	#hero-anim {
		width: ${({ $deviceType }) =>
			$deviceType === 'mobile' ? '10rem' : '12rem'};

		z-index: 2;

		${({ theme }) => css`
			-webkit-filter: drop-shadow(
				0 0 0.25rem
					${hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.5)}
			);
			filter: drop-shadow(
				0 0 0.25rem
					${hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.5)}
			);
		`}
	}

	div#hero-text-container {
		width: ${({ theme }) => theme.layout.container.width};
		max-width: 40rem;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: ${({ theme }) => theme.layout.section.gutter};

		z-index: 2;

		& > * {
			${({ theme }) => css`
				-webkit-filter: drop-shadow(
					0 0 0.25rem
						${hexToRgba(
							getColour(theme, 'neutral', 'secondary', 'active'),
							0.5,
						)}
				);
				filter: drop-shadow(
					0 0 0.25rem
						${hexToRgba(
							getColour(theme, 'neutral', 'secondary', 'active'),
							0.5,
						)}
				);
			`}
		}

		h1#heading {
			${({ theme }) => getTypography(theme, 'display')}
			font-size: ${({ $deviceType }) =>
				$deviceType === 'mobile' ? '2.75rem' : '4rem'};
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}

		span#subheading {
			${({ theme }) => getTypography(theme, 'heading3')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}
	}

	div.container-row {
		height: 100%;
		width: 100%;
		flex: 1 0 auto;

		display: flex;
		justify-content: center;
		align-items: center;

		z-index: 2;

		#down-icon {
			font-size: 2rem;
			opacity: 0.5;
		}
	}
`
