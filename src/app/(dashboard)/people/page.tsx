import { DataTable } from '@/components/data-display/data-table/DataTable'
import { Stack } from '@/components/layout/stack'

import { getPeople } from './api'
import { columns } from './columns'
import { Inputs } from './inputs'

interface Props {
	searchParams: {
		department: string
		office: string
		superior: string
		employmentType: string
		searchKey: string
	}
}

export const revalidate = 0

const People = async ({ searchParams }: Props) => {
	const people = await getPeople(searchParams)

	return (
		<Stack gap={4}>
			<Inputs />
			<DataTable columns={columns} data={people} />
		</Stack>
	)
}

export default People
