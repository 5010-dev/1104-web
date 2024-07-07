import { FormattedNumberingProps } from './formatted-numbering.types'

import { useDeviceTypeStore } from '../../../../store/layout/device-type.store'

import { ReactComponent as NumFrameSvg } from '../../../../assets/svg/formatted-numbering/formatted-numbering-frame.svg'
import { ReactComponent as NumSvg } from '../../../../assets/svg/formatted-numbering/formatted-numbering-num.svg'

import { FormattedNumberingContainer } from './formatted-numbering.styles'

export default function FormattedNumbering(props: FormattedNumberingProps) {
	const { num } = props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<FormattedNumberingContainer $deviceType={deviceType}>
			<NumFrameSvg className="formatted-numbering-frame" />
			<div className="formatted-numbering-num-container">
				{[...Array(num + 1)].map((_, index) => (
					<NumSvg key={index} className="formatted-numbering-num" />
				))}
			</div>
		</FormattedNumberingContainer>
	)
}
