import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'

export const LoginUserContainer = styled.div`
	width: auto;
	height: 2.5rem;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: ${({ theme }) => theme.layout.component.gutter};

	#user-icon {
		font-size: 1.5rem;
	}

	#view-account-link {
		white-space: nowrap;
		${({ theme }) => getTypography(theme, 'body')}
	}
`
