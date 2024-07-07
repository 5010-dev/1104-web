import styled from 'styled-components'

import { DeviceType } from '../../../store/layout/device-type.store'
import { getDeviceTypePadding } from '../../../utils/device.utils'

type SectionContainerProps = {
	$deviceType: DeviceType
}

export const SectionContainer = styled.div<SectionContainerProps>`
	width: ${({ theme }) => theme.layout.section.width};

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: ${({ theme }) => theme.layout.section.gutter};

	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'section')};
`
