import styled from 'styled-components'

import { getTypography } from '../../../../utils/typo.utils'
import { getColour } from '../../../../utils/colour.utils'

export const UnregisterWarningModalContentsContainer = styled.div`
	width: ${({ theme }) => theme.layout.container.width};

	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.layout.section.gutter};

	/* margin: ${({ theme }) => `${theme.layout.component.gutter} 0`}; */
	/* margin-bottom: ${({ theme }) => theme.layout.component.gutter}; */
	margin-top: ${({ theme }) => theme.layout.component.gutter};

	div#unregister-warning-modal-text-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: ${({ theme }) => theme.layout.component.gutter};

		p#unregister-warning-modal-body {
			${({ theme }) => getTypography(theme, 'body')}
			color: ${({ theme }) => getColour(theme, 'neutral', 'primary', 'active')};
		}
	}

	div#unregister-warning-modal-buttons-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: ${({ theme }) => theme.layout.component.gutter};

		#unregister-confirm-button > span,
		#unregister-confirm-button-icon {
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')} !important;
		}
	}
`
