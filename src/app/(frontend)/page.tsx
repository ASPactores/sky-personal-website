import ParticleBackground from '@/components/ParticleBackground'
import BackgroundGradient from '@/components/BackgroundGradient'
import NavigationBar from '@/components/NavigationBar'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import FeaturedProjects from '@/components/FeaturedProjects'

const projectDetails = [
  {
    projectName: 'Project Name',
    projectBannerLink: '/sample-featured-image.png',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: ['NextJS', 'React', 'TailwindCSS', 'shadcn', 'Payload'],
    githubRepoLink: 'https://github.com',
    previewLink: 'https://preview.com',
  },
  {
    projectName: 'Project Name',
    projectBannerLink: '/sample-featured-image.png',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: ['NextJS', 'React', 'TailwindCSS', 'shadcn', 'Payload'],
    githubRepoLink: 'https://github.com',
    previewLink: 'https://preview.com',
  },
  {
    projectName: 'Project Name',
    projectBannerLink: '/sample-featured-image.png',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: ['NextJS', 'React', 'TailwindCSS', 'shadcn', 'Payload'],
    githubRepoLink: 'https://github.com',
    previewLink: 'https://preview.com',
  },
]

export default function Home() {
  return (
    <div className="relative">
      <Background />
      <ParticleBackground />
      <NavigationBar />
      <Hero />
      <AboutMe />
      <FeaturedProjects projects={projectDetails} />
    </div>
  )
}

function Background() {
  return (
    <div className="absolute w-full h-full overflow-clip -z-10">
      <BackgroundGradient className="absolute -right-96 -top-4" />
      <BackgroundGradient className="absolute -left-96 top-[80vh]" />
    </div>
  )
}
