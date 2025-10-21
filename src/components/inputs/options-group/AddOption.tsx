import React, { useRef, useState } from 'react'

import { PlusIcon } from '@/components/icons/plus-icon'
import { Box } from '@/components/layout/box'

import { addOptionIconWrapper, addOptionInput } from './OptionGroup.css'
import { Button } from '../button'
import { Option } from '../option/Option'

interface Props {
	label: string
	handleAddOption: (option: string) => void
}

export const AddOption = ({ label, handleAddOption }: Props) => {
	const [optionEditing, setOptionEditing] = useState(false)
	const [inputValue, setInputValue] = useState<string>('')
	const addOptionIcon = <PlusIcon size="small" color="neutral.500" />

	const inputRef = useRef<HTMLInputElement | null>(null)

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && inputRef.current && inputRef.current === document.activeElement) {
			handleAddingOption()
		}
	}

	const handleAddingOption = () => {
		setOptionEditing(false)
		if (inputValue !== '') {
			handleAddOption(inputValue)
			setInputValue('')
		}
	}

	return (
		<Box>
			{optionEditing ? (
				<Box position="relative">
					<div className={addOptionIconWrapper}>
						<Button type="button" variant="adaptive" size="auto" onClick={handleAddingOption}>
							{addOptionIcon}
						</Button>
					</div>
					<input
						ref={inputRef}
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
						onKeyDown={handleKeyDown}
						placeholder={label}
						className={addOptionInput}
					/>
				</Box>
			) : (
				<Option icon={addOptionIcon} label={`Add ${label}`} variant="add" handleOption={() => setOptionEditing(true)} />
			)}
		</Box>
	)
}
