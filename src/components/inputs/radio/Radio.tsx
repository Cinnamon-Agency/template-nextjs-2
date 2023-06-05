import { InputHTMLAttributes } from 'react'

import { tokens } from 'style/theme.css'

import * as styles from './Radio.css'
import { Text } from '../../typography/text'

interface CustomProps {
	label?: string
}

type Props = InputHTMLAttributes<HTMLInputElement> & CustomProps

export const Radio = ({ label, value, id, name, checked, onChange }: Props) => {
	const color = checked ? tokens.colors['primary.500'] : tokens.colors['shades.100']

	return (
		<label htmlFor={id} className={styles.radioWrapper}>
			<span className={styles.radioField}>
				<input
					type="radio"
					id={id}
					name={name}
					value={value}
					checked={checked}
					className={styles.hiddenRadio}
					onChange={onChange}
				/>
				<div className={styles.radioDecorator} style={{ color }} />
				{checked && <div className={styles.checked} />}
			</span>
			<Text as="span" color="neutral.500">
				{label}
			</Text>
		</label>
	)
}
