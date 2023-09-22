'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string'
import { useDebounce } from 'rooks'

import { PlusIcon } from '@/components/icons/plus-icon'
import { SearchIcon } from '@/components/icons/search-icon'
import { Button } from '@/components/inputs/button'
import { Select } from '@/components/inputs/select'
import { TextInput } from '@/components/inputs/text-input'
import { Box } from '@/components/layout/box'

import { departments, employmentTypes, offices, superiors } from './data'

export const Inputs = () => {
	const searchParams = useSearchParams()
	const router = useRouter()

	const handleFilterChange = (filter: string, value: string) => {
		const current = qs.parse(searchParams.toString())
		const query = { ...current, [filter]: value }
		const url = qs.stringifyUrl(
			{
				url: window.location.href,
				query
			},
			{ skipEmptyString: true }
		)

		router.push(url, { scroll: false })
	}

	const debouncedFilterChange = useDebounce(handleFilterChange, 300)

	return (
		<Box display="flex" justify="space-between" gap={4}>
			<Box display="flex" gap={4} style={{ alignSelf: 'flex-end' }}>
				<Select
					name="department"
					value={searchParams.get('department') || ''}
					options={departments}
					onChange={({ target: { name, value } }) => handleFilterChange(name, value)}
				/>
				<Select
					name="office"
					value={searchParams.get('office') || ''}
					options={offices}
					onChange={({ target: { name, value } }) => handleFilterChange(name, value)}
				/>
				<Select
					name="superior"
					value={searchParams.get('superior') || ''}
					options={superiors}
					onChange={({ target: { name, value } }) => handleFilterChange(name, value)}
				/>
				<Select
					name="employmentType"
					value={searchParams.get('employmentType') || ''}
					options={employmentTypes}
					onChange={({ target: { name, value } }) => handleFilterChange(name, value)}
				/>
				<div style={{ minWidth: '320px' }}>
					<TextInput
						name="searchKey"
						defaultValue={searchParams.get('searchKey') || ''}
						placeholder="Search Employee"
						startIcon={<SearchIcon color="primary.500" />}
						onChange={({ target: { name, value } }) => debouncedFilterChange(name, value)}
					/>
				</div>
			</Box>
			<Button onClick={() => router.push('/people/add')}>
				<PlusIcon />
				Add employee
			</Button>
		</Box>
	)
}
