import { ReactNode } from 'react'

import { useDeviceTypeStore, DeviceType } from '../../../store/deviceTypeStore'

import styled, { css } from 'styled-components'
import { getDeviceTypePadding } from '../../../utils/device.utils'
import {
	ComponentAppearance,
	ComponentHierarchy,
	ComponentShape,
	ComponentSize,
	ComponentStroke,
} from '../../../styles/design-system/design-system.types'
import { getComponentVariants } from '../../../utils/style.utils'
import { getColour } from '../../../utils/colour.utils'

type CardProps = {
	children?: ReactNode | null
	size?: ComponentSize
	appearance?: ComponentAppearance
	hierarchy?: ComponentHierarchy
	stroke?: ComponentStroke
	shape?: ComponentShape
}

type CardContainerProps = {
	$deviceType: DeviceType
	$size: ComponentSize
	$appearance: ComponentAppearance
	$hierarchy: ComponentHierarchy
	$stroke: ComponentStroke
	$shape: ComponentShape
}

const CardContainer = styled.div<CardContainerProps>`
	width: ${({ theme }) => theme.layout.container.width};

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: ${({ theme }) => theme.layout.container.guttuer};
	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'container')};

	${({ theme, $appearance, $hierarchy, $stroke, $shape }) =>
		css`
			${getComponentVariants(theme, $appearance, $hierarchy, $stroke, $shape)}
		`}

	background-color: ${({ theme, $appearance, $hierarchy }) =>
		getColour(theme, $appearance, $hierarchy, 'inactive')};
`

export default function Card(props: CardProps) {
	const {
		children,
		size = 'md',
		appearance = 'neutral',
		hierarchy = 'primary',
		stroke = 'filled',
		shape = 'rounded2',
	} = props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<CardContainer
			$deviceType={deviceType}
			$size={size}
			$appearance={appearance}
			$hierarchy={hierarchy}
			$stroke={stroke}
			$shape={shape}
		>
			{children}
		</CardContainer>
	)
}
