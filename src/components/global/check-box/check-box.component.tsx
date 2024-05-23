import { useState, ChangeEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

import { CheckBoxProps } from './check-box.types'
import { CheckBoxContainer } from './check-box.styles'

export default function CheckBox(props: CheckBoxProps) {
	const { id, className, text, name, handleCheck } = props

	const [isChecked, setIsChecked] = useState<boolean>(false)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setIsChecked((state) => !state)
		handleCheck && handleCheck(e)
	}

	return (
		<CheckBoxContainer id={id} className={className} $isChecked={isChecked}>
			<input
				type="checkbox"
				name={name}
				checked={isChecked}
				onChange={handleChange}
			/>
			<span id="check-box-icon">
				<FontAwesomeIcon icon={isChecked ? faSquareCheck : faSquare} />
			</span>
			{text ? <span id="check-box-text">{text}</span> : null}
		</CheckBoxContainer>
	)
}
