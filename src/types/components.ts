import { FC, PropsWithChildren } from 'react'

// https://blog.cristiana.tech/react-compound-component-typings
export type CompositeComponent<T, K extends string, C = object> = FC<PropsWithChildren<T>> & {
	[x in K]: FC<PropsWithChildren<C>>
}

export type ChildOnlyCompositeComponent<T, K extends string> = {
	[x in K]: FC<PropsWithChildren<T>>
}
