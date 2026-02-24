import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Stack } from '@/components/layout/stack'
import { Center } from '@/components/layout/center'
import { Cluster } from '@/components/layout/cluster'
import { FadeIn, SlideInFromTop } from '@/components/animations'
import { ProjectVersion } from '@/components/system/project-version'
import { Github, ExternalLink, ArrowRight, Zap, Palette, Layout } from 'lucide-react'

export default function Home() {
	return (
		<main className='min-h-screen bg-background text-foreground'>
			<Center className='min-h-screen p-8 md:p-24'>
				<Stack className='w-full max-w-4xl gap-12'>
					{/* Header Section */}
					<header className='flex flex-col items-center text-center gap-6'>
						<SlideInFromTop>
							<Badge variant='secondary' className='px-4 py-1.5 text-sm mb-4'>
								✨ Cinnamon Template 2026
							</Badge>
						</SlideInFromTop>

						<FadeIn>
							<h1 className='text-5xl md:text-7xl font-bold tracking-tight text-balance'>
								The opinionated starter for <span className='text-primary'>Next.js 16</span>
							</h1>
						</FadeIn>

						<FadeIn>
							<p className='max-w-2xl text-lg md:text-xl text-muted-foreground text-balance'>
								Built with React 19, Tailwind CSS v4, and shadcn/ui. Optimized for speed, maintainability, and developer
								experience.
							</p>
						</FadeIn>

						<FadeIn>
							<Cluster className='justify-center mt-4'>
								<Button size='lg' className='rounded-full gap-2'>
									Get Started <ArrowRight className='size-4' />
								</Button>
								<Button size='lg' variant='outline' className='rounded-full gap-2'>
									<Github className='size-4' /> GitHub
								</Button>
							</Cluster>
						</FadeIn>
					</header>

					{/* Features Grid */}
					<section className='grid grid-cols-1 md:grid-cols-3 gap-6 py-12'>
						{[
							{
								icon: <Zap className='size-6 text-primary' />,
								title: 'Next.js 16 & React 19',
								description: 'Leverage the latest features of the App Router and Server Components.'
							},
							{
								icon: <Palette className='size-6 text-primary' />,
								title: 'Tailwind CSS v4',
								description: 'Future-proof styling with the next generation of Tailwind CSS.'
							},
							{
								icon: <Layout className='size-6 text-primary' />,
								title: 'Layout Primitives',
								description: 'Composable components like Stack, Grid, and Cluster for rapid building.'
							}
						].map((feature, i) => (
							<FadeIn key={i}>
								<div className='p-6 rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow'>
									<div className='mb-4'>{feature.icon}</div>
									<h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
									<p className='text-muted-foreground'>{feature.description}</p>
								</div>
							</FadeIn>
						))}
					</section>

					{/* Footer */}
					<footer className='border-t pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm'>
						<Cluster className='items-center'>
							<ProjectVersion />
							<span>•</span>
							<p>© 2026 Cinnamon Template</p>
						</Cluster>
						<Cluster>
							<a href='#' className='hover:text-foreground transition-colors flex items-center gap-1'>
								Docs <ExternalLink className='size-3' />
							</a>
							<a href='#' className='hover:text-foreground transition-colors'>
								Support
							</a>
							<a href='#' className='hover:text-foreground transition-colors'>
								Privacy
							</a>
						</Cluster>
					</footer>
				</Stack>
			</Center>
		</main>
	)
}
