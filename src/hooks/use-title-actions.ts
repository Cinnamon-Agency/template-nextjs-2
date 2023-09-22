import { create } from 'zustand'

interface TitleActionsStore {
	overriddenTitle: string | undefined
	enableBack: boolean
	setEnableBack: (enable: boolean) => void
	setOverriddenTitle: (title: string | undefined) => void
}

export const useTitleActionsStore = create<TitleActionsStore>(set => ({
	overriddenTitle: undefined,
	enableBack: false,
	setEnableBack: enableBack => set({ enableBack }),
	setOverriddenTitle: overriddenTitle => set({ overriddenTitle })
}))
