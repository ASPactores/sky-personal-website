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

const getNavigationLinks = cache(async () => {
  const { link: links } = await payload.findGlobal({
    slug: 'navigation-links',
  })

  return links
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
  const [links, layout, navigationLinks] = await Promise.all([
    getLinks(),
    getLayout(),
    getNavigationLinks(),
  ])

  const { socialLinks, email, resumeLink } = links
  const homepageLayout = layout

  return (
    <main className="relative overflow-x-clip h-full">
      <Background />
      <ParticleBackground />
      <NavigationBar navigationLinks={navigationLinks!} />
      {homepageLayout!.map((section) => {
        switch (section.blockName) {
          case 'introduction':
            return <Hero component={section} socialLinks={socialLinks} resumeLink={resumeLink!} />
          case 'about-me':
            return <AboutMe component={section} />
          case 'featured-projects':
            return <FeaturedProjects component={section} />
        }
      })}
      <Contact email={email!} />
      <Footer socialLinks={socialLinks} />
    </main>
  )
}
