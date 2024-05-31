import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'

import { RegistrationFormContainerProps } from './registration-form.types'

type Props = RegistrationFormContainerProps

export const RegistrationFormContainer = styled.form<Props>`
	width: ${({ theme }) => theme.layout.section.width};

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: ${({ theme }) => theme.layout.section.gutter};

	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'section')};
`
