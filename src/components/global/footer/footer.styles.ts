import styled, { css } from 'styled-components'

import { DeviceTypeStyledProp } from '../../../types/deviceType'

export const FooterContainer = styled.div<DeviceTypeStyledProp>`
	width: ${({ theme }) => theme.layout.page.width};

	display: flex;
	justify-content: center;
	gap: 0.25rem;

	${(props) =>
		props.$deviceType === 'desktop' &&
		css`
			padding: ${({ theme }) => theme.layout.page.padding.tablet}
				${({ theme }) => theme.layout.page.padding.desktop};
		`}
	${(props) =>
		props.$deviceType === 'tablet' &&
		css`
			padding: ${({ theme }) => theme.layout.page.padding.tablet};
		`}
      ${(props) =>
		props.$deviceType === 'mobile' &&
		css`
			padding: ${({ theme }) => theme.layout.page.padding.mobile};
		`}

	font-family: ${({ theme }) => theme.typo.caption.typeface};
	font-size: ${({ theme }) => theme.typo.caption.size};
	font-weight: ${({ theme }) => theme.typo.caption.weight};
	line-height: ${({ theme }) => theme.typo.caption.leading};
	letter-spacing: ${({ theme }) => theme.typo.caption.kerning};
	color: ${({ theme }) => theme.colour.neutral.secondary.inactive};

	span {
		font-weight: bold;
	}
`
