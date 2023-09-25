import { useEffect } from 'react'

import { useTitleActionsStore } from '@/hooks/use-title-actions'

export const useOverridePageTitle = (title: string, enableBack: boolean = true) => {
	const { setOverriddenTitle, setEnableBack } = useTitleActionsStore()

	useEffect(() => {
		setOverriddenTitle(title)
		setEnableBack(enableBack)

		return () => {
			setOverriddenTitle(undefined)
			setEnableBack(false)
		}
	}, [setOverriddenTitle, setEnableBack])
}
