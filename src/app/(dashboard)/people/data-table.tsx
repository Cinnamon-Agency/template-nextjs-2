import { DataTable } from '@/components/data-display/data-table'

import { getPeople } from './api'
import { PeopleColumn, columns } from './columns'

interface Props {
	peoplePromise: Promise<Array<PeopleColumn>>
	searchParams: {
		department: string
		office: string
		superior: string
		employmentType: string
		searchKey: string
	}
}

export const PeopleDataTable = async ({ searchParams }: Props) => {
	console.log(searchParams)
	const people = await getPeople(searchParams)
	return <DataTable columns={columns} data={people} />
}
