'use client'

import { ColumnDef } from '@tanstack/react-table'

import { Tag } from '@/components/custom/tag'

import { Actions } from './actions'

export type PeopleColumn = {
	id: string
	name: string
	office: string
	department: string
	superior: string
	startDate: string
	endDate: string
	employmentType: string
}

export const columns: Array<ColumnDef<PeopleColumn>> = [
	{
		accessorKey: 'name',
		header: 'Name'
	},
	{
		accessorKey: 'office',
		header: 'Office'
	},
	{
		accessorKey: 'department',
		header: 'Department',
		cell: ({ row }) => (
			<div>
				<Tag text={row.original.department} />
			</div>
		)
	},
	{
		accessorKey: 'superior',
		header: 'Superior'
	},
	{
		accessorKey: 'startDate',
		header: 'Start Date'
	},
	{
		accessorKey: 'endDate',
		header: 'End Date'
	},
	{
		accessorKey: 'employmentType',
		header: 'Employment Type'
	},
	{
		accessorKey: 'actions',
		header: 'Actions',
		cell: ({ row }) => <Actions data={row.original} />
	}
]
