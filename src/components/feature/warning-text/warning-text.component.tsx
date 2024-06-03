import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

import { WarningTextProps } from './warning-text.types'
import { WarningTextContainer } from './warning-text.styles'

export default function WarningText(props: WarningTextProps) {
	const { id, className, message } = props

	return (
		<WarningTextContainer id={id} className={className}>
			<FontAwesomeIcon icon={faCircleExclamation} id="icon" />
			{message}
		</WarningTextContainer>
	)
}
