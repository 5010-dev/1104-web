import { ChangeEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

import { CheckBoxProps } from './check-box.types'
import { CheckBoxContainer } from './check-box.styles'

import Chip from '../chip/chip.component'

export default function CheckBox(props: CheckBoxProps) {
	const {
		id,
		className,
		text,
		name,
		checked,
		isRequired,
		hierarchy,
		handleCheck,
	} = props

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleCheck && handleCheck(e)
	}

	return (
		<CheckBoxContainer
			id={id}
			className={className}
			$hierarchy={hierarchy}
			$isChecked={checked}
		>
			<input
				type="checkbox"
				name={name}
				checked={checked}
				onChange={handleChange}
				required={isRequired}
			/>
			<span id="check-box-icon">
				<FontAwesomeIcon icon={checked ? faSquareCheck : faSquare} />
			</span>
			{text ? (
				<>
					<span id="check-box-text">
						{text}
						{isRequired ? (
							<Chip
								id="required-tag"
								appearance="neutral"
								hierarchy={hierarchy}
								stroke="filled"
								shape="rounded3"
								text="필수"
							/>
						) : null}
					</span>
				</>
			) : null}
		</CheckBoxContainer>
	)
}
