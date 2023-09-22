import { MinusIcon } from '@/components/icons/minus-icon'
import { PlusIcon } from '@/components/icons/plus-icon'
import { Box } from '@/components/layout/box'
import { Text } from '@/components/typography/text'

import * as styles from './Counter.css'

interface Props {
	value: number
	onChange: (newValue: number) => void
}

export const Counter = ({ value, onChange }: Props) => {
	const handleClick = (type: 'increment' | 'decrement') => {
		if (type === 'decrement') {
			if (value === 0) return
			onChange(value - 1)
		} else {
			onChange(value + 1)
		}
	}

	return (
		<Box display="flex" align="center" gap={4}>
			<button type="button" onClick={() => handleClick('decrement')} className={styles.button}>
				<MinusIcon />
			</button>
			<Text fontSize="small" color="neutral.500">
				{value}
			</Text>
			<button type="button" onClick={() => handleClick('increment')} className={styles.button}>
				<PlusIcon />
			</button>
		</Box>
	)
}
