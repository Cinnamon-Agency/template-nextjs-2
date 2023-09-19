import { ReactNode } from 'react'

import { Navbar } from '@/components/custom/navbar'
import { Sidebar } from '@/components/custom/sidebar/Sidebar'
import { Box } from '@/components/layout/box'
import { Divider } from '@/components/layout/divider'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	return (
		<Box display="flex">
			<Sidebar />
			<Box style={{ flexGrow: 1 }}>
				<Navbar />
				<Divider />
				<Box paddingX={6} paddingY={6}>
					{children}
				</Box>
			</Box>
		</Box>
	)
}

export default DashboardLayout
