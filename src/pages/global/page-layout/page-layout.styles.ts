import styled, { css } from 'styled-components'

import { DeviceTypeStyledProp } from '../../../types/deviceType'

export const PageLayoutContainer = styled.div<DeviceTypeStyledProp>`
	width: 100%;
	min-width: ${({ theme }) => theme.layout.page.minWidth};
	/* min-height: calc(100vh - 4.25rem); */
	min-height: ${({ theme }) => theme.layout.page.height};

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: ${({ theme }) => theme.layout.page.gutter};

	${(props) =>
		props.$deviceType === 'desktop' &&
		css`
			padding: ${({ theme }) => theme.layout.page.padding.desktop};
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
`

export default PageLayoutContainer
