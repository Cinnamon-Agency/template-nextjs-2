import { ComponentProps } from 'react'

import SearchIconAsset from './search-icon.svg'
import { BlockIcon } from '../block-icon'

export const SearchIcon = (props: Omit<ComponentProps<typeof BlockIcon>, 'icon'>) => {
	return <BlockIcon icon={SearchIconAsset} {...props} />
}
