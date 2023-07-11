import { AgileTeam } from './components/agile-team/AgileTeam'
import { Contact } from './components/contact/Contact'
import { Hero } from './components/hero/Hero'
import { SuspendedProjects } from './components/projects/SuspendedProjects'
import { Services } from './components/services/Services'

export default () => (
	<>
		<Hero />
		<SuspendedProjects />
		<Services />
		<AgileTeam />
		<Contact />
	</>
)
