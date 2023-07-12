/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image'
import Link from 'next/link'

import * as styles from './Navbar.css'
import { Button } from '../../../components/inputs/button'
import { Box } from '../../../components/layout/box'
import { Container } from '../../../components/layout/container'

export const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<Container>
				<Box display="flex" justifyContent="space-between" alignItems="center" gap="big">
					<Image src="/cinnamon-logo.svg" alt="Home" width={160} height={20} />
					<Box display="flex" alignItems="center" gap="big">
						<Link href="#" className={styles.link}>
							Projects
						</Link>
						<Link href="#" className={styles.link}>
							Services
						</Link>
						<Link href="#" className={styles.link}>
							About Us
						</Link>
						<Link href="#" className={styles.link}>
							Careers
						</Link>
						<Link href="#" className={styles.link}>
							Blog
						</Link>
						<Button href="#">Contact Us</Button>
					</Box>
				</Box>
			</Container>
		</div>
	)
}
