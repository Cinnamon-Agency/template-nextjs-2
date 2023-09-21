// import qs from 'query-string'

import { PeopleColumn } from './columns'
import { dummyPeople } from './data'

interface Query {
	department?: string
	office?: string
	superior?: string
	employmentType?: string
	searchKey?: string
}

export const getPeople = async (query: Query): Promise<Array<PeopleColumn>> => {
	console.log(query)
	// const url = qs.stringifyUrl({
	// 	url: 'API_BASE_URL',
	// 	query: {
	// 		department: query.department,
	// 		office: query.office,
	// 		superior: query.superior,
	// 		employmentType: query.employmentType,
	// 		searchKey: query.searchKey
	// 	}
	// })

	// console.log('URL -> ', url)
	// const response = await fetch(url)
	// return response.json()
	return dummyPeople
	// return new Promise(resolve => {
	// 	setTimeout(() => {
	// 		resolve(dummyPeople)
	// 	}, 3000)
	// })
}
