import ParticleBackground from '@/components/ParticleBackground'
import BackgroundGradient from '@/components/BackgroundGradient'
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

export default async function Home() {
  const payload = await getPayload({ config })

  const { link: links } = await payload.findGlobal({
    slug: 'links',
  })
  const { docs } = await payload.find({
    collection: 'pages',
    where: {
      'page-name': {
        equals: 'Home',
      },
    },
  })

  const socialLinks = links!.filter((link) => link.title !== 'email')
  const email = links!.find((link) => link.title === 'email')?.url
  const resumeLink = links!.find((link) => link.title === 'resume')?.url
  const homepageLayout = docs[0].layout

  return (
    <div className="relative overflow-x-clip h-full">
      <Background />
      <ParticleBackground />
      <NavigationBar />
      {homepageLayout!.map((section) => {
        switch (section.blockName) {
          case 'introduction':
            return <Hero component={section} socialLinks={socialLinks} resumeLink={resumeLink!} />
          case 'about-me':
            return <AboutMe />
          case 'featured-projects':
            return <FeaturedProjects projects={projectDetails} />
          case 'contact':
            return <Contact />
          case 'footer':
            return <Footer />
        }
      })}
    </div>
  )
}

function Background() {
  return (
    <div className="absolute w-full h-full overflow-clip -z-10">
      <BackgroundGradient className="absolute -right-36 md:-right-48 lg:-right-96 -top-4" />
      <BackgroundGradient className="absolute -left-36 md:-left-48 lg:-left-96 top-[80vh]" />
    </div>
  )
}
