import { cache } from 'react'
import 'server-only'

import ParticleBackground from '@/components/ParticleBackground'
import Background from '@/components/Background'
import NavigationBar from '@/components/NavigationBar'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import FeaturedProjects from '@/components/FeaturedProjects'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'

import { getPayload } from 'payload'
import config from '@payload-config'

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

const payload = await getPayload({ config })

const getLinks = cache(async () => {
  const { link: links } = await payload.findGlobal({
    slug: 'links',
  })

  return {
    socialLinks: links!.filter((link) => link.title !== 'email' && link.title !== 'resume'),
    email: links!.find((link) => link.title === 'email')?.url,
    resumeLink: links!.find((link) => link.title === 'resume')?.url,
  }
})

const getLayout = cache(async () => {
  const { docs } = await payload.find({
    collection: 'pages',
    where: {
      'page-name': {
        equals: 'Home',
      },
    },
  })

  return docs[0].layout
})

export default async function Home() {
  const [links, layout] = await Promise.all([getLinks(), getLayout()])

  const { socialLinks, email, resumeLink } = links
  const homepageLayout = layout

  return (
    <main className="relative overflow-x-clip h-full">
      <Background />
      <ParticleBackground />
      <NavigationBar />
      {homepageLayout!.map((section) => {
        switch (section.blockName) {
          case 'introduction':
            return <Hero component={section} socialLinks={socialLinks} resumeLink={resumeLink!} />
          case 'about-me':
            return <AboutMe component={section} />
          case 'featured-projects':
            return <FeaturedProjects projects={projectDetails} />
        }
      })}
      <Contact email={email!} />
      <Footer socialLinks={socialLinks} />
    </main>
  )
}
