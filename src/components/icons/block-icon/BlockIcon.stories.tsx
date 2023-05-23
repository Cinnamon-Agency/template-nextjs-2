import { Inline } from 'components/layout/inline/Inline'

import CalendarIconAsset from './assets/calendar-icon.svg'
import { BlockIcon } from './BlockIcon'

export default {
	title: 'UI/Icons/BlockIcon',
	component: BlockIcon
}

export const Sizes = () => {
	return (
		<Inline gap="medium">
			<BlockIcon icon={CalendarIconAsset} size="small" />
			<BlockIcon icon={CalendarIconAsset} size="medium" />
			<BlockIcon icon={CalendarIconAsset} size="large" />
		</Inline>
	)
}

export const Colors = () => {
	return (
		<Inline gap="medium">
			<div style={{ color: 'red' }}>
				<BlockIcon icon={CalendarIconAsset} />
			</div>
			<div style={{ color: 'green' }}>
				<BlockIcon icon={CalendarIconAsset} />
			</div>
			<div style={{ color: 'blue' }}>
				<BlockIcon icon={CalendarIconAsset} />
			</div>
		</Inline>
	)
}
