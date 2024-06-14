import styled, { css } from 'styled-components'

import { FormattedNumberingContainerProps } from './formatted-numbering.types'

type Props = FormattedNumberingContainerProps

export const FormattedNumberingContainer = styled.div<Props>`
	${({ $deviceType }) =>
		$deviceType === 'mobile'
			? css`
					width: 2.5rem;
					height: 4rem;
					align-self: center;
					margin-top: ${({ theme }) => theme.layout.container.gutter};
			  `
			: css`
					width: 4rem;
					height: 6rem;
			  `}

	position: relative;

	margin-bottom: ${({ theme }) => theme.layout.container.gutter};

	.formatted-numbering-frame {
		position: absolute;

		width: 100%;
		height: auto;

		left: 0;
		bottom: 0;

		z-index: 5;
	}

	div.formatted-numbering-num-container {
		position: absolute;

		width: 100%;
		height: 100%;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: ${({ $deviceType }) =>
			$deviceType === 'mobile' ? '0.05rem' : '0.5rem'};

		.formatted-numbering-num {
			height: 100%;
		}
	}
`
