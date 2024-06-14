import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'

import { AboutUsIntroductionContainerProps } from './about-us-introduction.types'
import { AboutUsSectionContainer } from '../about-us-section/about-us-section.styles'

type Props = AboutUsIntroductionContainerProps
const baseContainer = AboutUsSectionContainer

export const AboutUsIntroductionContainer = styled(baseContainer)<Props>`
	#about-us-introdcution {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: ${({ theme }) => theme.layout.section.gutter};

		padding: ${({ theme, $deviceType }) =>
			`${theme.layout.section.padding.lg} ${getDeviceTypePadding(
				theme,
				$deviceType,
				'section',
			)}`};

		text-align: center;

		span#about-us-introduction-caption {
			align-self: center;

			${({ theme }) => getTypography(theme, 'display')}
			font-size: ${({ $deviceType }) => $deviceType === 'mobile' && '2.75rem'};

			background-image: url(${({ $displayImage }) => $displayImage});
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-attachment: ${({ $isPointerCoarseAndSafari }) =>
				$isPointerCoarseAndSafari ? 'scroll' : 'fixed'};

			margin-bottom: ${({ theme }) => theme.layout.container.gutter};
		}

		h3#about-us-introduction-heading {
			max-width: ${({ theme }) => theme.layout.container.maxWidth};

			${({ theme }) => getTypography(theme, 'heading3')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}
	}

	div#aobut-us-introduction-paragraph-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: ${({ theme }) => theme.layout.section.gutter};
	}
	div.about-us-introduction-paragraph {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: ${({ theme }) => theme.layout.component.gutter};

		h4.about-us-introduction-paragraph-heading {
			${({ theme }) => getTypography(theme, 'subheading')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
			text-align: left;
		}

		p.about-us-introduction-paragraph-body {
			${({ theme }) => getTypography(theme, 'body')}
			color: ${({ theme }) =>
				hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.75)};
			text-align: left;
		}
	}
`
