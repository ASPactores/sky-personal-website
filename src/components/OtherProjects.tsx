import { Media, Technology } from '@/payload-types'
import { RevealOneByOne } from './Animations'
import InfoCard from './InfoCard'

interface OtherProjectsProps {
  'project-name': string
  image?: Media
  description: any
  technologies: Technology[]
  'github-link': string
  'preview-link': string
  className?: string
}

export default function OtherProjects({ component }: any) {
  const projects = component.Components[0].component as OtherProjectsProps[]

  return (
    <section
      id="other-projects"
      className="flex flex-col items-center justify-center w-full h-full py-36"
    >
      <p className="text-2xl md:text-4xl font-semibold text-primary-50 mb-11">Other Projects</p>
      <div className="flex flex-col md:flex-wrap items-center justify-center md:flex-row md:w-full lg:w-[70%] gap-6">
        {projects.map((project, index) => {
          const {
            ['project-name']: projectName,
            image,
            description,
            technologies,
            ['github-link']: githubLink,
            ['preview-link']: previewLink,
          } = project
          return (
            <RevealOneByOne
              delay={index * 0.3}
              key={index}
              direction="bottom"
              className="flex items-center justify-center"
            >
              <InfoCard
                projectName={projectName}
                image={image}
                description={description}
                technologies={technologies}
                githubLink={githubLink}
                previewLink={previewLink}
                className="w-full lg:max-w-96 sm:my-5"
              />
            </RevealOneByOne>
          )
        })}
      </div>
    </section>
  )
}
