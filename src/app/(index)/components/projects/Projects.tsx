import { ProjectCard } from './ProjectCard'
import { fetchProjects } from '@/services/contentful/api/project'

import { Stack } from '@/components/layout/stack'

export const Projects = async () => {
	const projects = await fetchProjects()

	const mappedProjectCards = projects
		.filter(project => project.featured)
		.map(project => <ProjectCard key={project.slug} project={project} />)

	return <Stack gap="xxlarge">{mappedProjectCards}</Stack>
}
