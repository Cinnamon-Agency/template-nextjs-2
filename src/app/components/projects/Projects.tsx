// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { use } from 'react'

import { ProjectCard } from './ProjectCard'
import { Stack } from '../../../components/layout/stack'
import { Project, fetchProjects } from '../../../services/contentful/api/project'

export const Projects = () => {
	const projects: Array<Project> = use(fetchProjects())
	const mappedProjectCards = projects
		.filter(project => project.featured)
		.map(project => <ProjectCard key={project.slug} project={project} />)

	return <Stack gap="xxlarge">{mappedProjectCards}</Stack>
}
