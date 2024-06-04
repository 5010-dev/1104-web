import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import { RadioButtonProps } from './radio-button.types'
import { RadioButtonContainer } from './radio-button.styles'

export default function RadioButton(props: RadioButtonProps) {
	const { id, className, name, value, text, isChecked, handleChange } = props

	return (
		<RadioButtonContainer $isChecked={isChecked ? isChecked : false}>
			<input
				id={id}
				className={className}
				name={name}
				type="radio"
				value={value}
				onChange={handleChange}
				checked={isChecked}
			/>
			<span>{text}</span>
			{isChecked ? <FontAwesomeIcon icon={faCircleCheck} id="icon" /> : null}
		</RadioButtonContainer>
	)
}
