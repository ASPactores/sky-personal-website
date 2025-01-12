import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { RevealOneByOne, RevealOnLoad, RevealOnScroll } from './Animations'

interface ProjectDetailsProps {
  projectName: string
  projectBannerLink: string
  projectDescription: string
  technologies: string[]
  githubRepoLink: string
  previewLink: string
  className?: string
}

interface FeaturedProjectsProps {
  projects: ProjectDetailsProps[]
}

export function RightAligned({
  projectName,
  projectBannerLink,
  projectDescription,
  technologies,
  githubRepoLink,
  previewLink,
  className,
}: ProjectDetailsProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-[420px] h-[250px] relative z-0">
        <Image
          src="/sample-featured-image.png"
          alt="Project Name"
          layout="fill"
          objectFit="cover"
          className="z-0 translate-x-14"
        />
      </div>
      <div className="flex flex-col items-end justify-center relative z-10 bg-opacity-50 bg-black p-4 -translate-x-14 space-y-3">
        <p className="text-white text-xl font-semibold text-accent-50">{projectName}</p>
        <div className="bg-secondary-950/75 p-5 rounded-8 w-[33rem] text-accent-50 text-sm flex flex-col items-end">
          <p className="text-right text-sm">{projectDescription}</p>
          <div className="flex flex-wrap justify-end gap-2 mt-4 w-3/4">
            {technologies.map((tech) => (
              <Badge
                variant="secondary"
                className="bg-accent-800 border-accent-800 text-secondary-200 hover:bg-accent-900"
                key={tech}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-end gap-4 text-sm text-primary-50 underline italic">
          <p>
            <a href={githubRepoLink}>Github Repo</a>
          </p>
          <p>
            <a href={previewLink}>Preview</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export function LeftAligned({
  projectName,
  projectBannerLink,
  projectDescription,
  technologies,
  githubRepoLink,
  previewLink,
  className,
}: ProjectDetailsProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-start justify-center relative z-10 bg-opacity-50 bg-black p-4 translate-x-14 space-y-3">
        <p className="text-white text-xl font-semibold text-accent-50">{projectName}</p>
        <div className="bg-secondary-950/75 p-5 rounded-8 w-[33rem] text-accent-50 text-sm flex flex-col items-start">
          <p className="text-left text-sm">{projectDescription}</p>
          <div className="flex flex-wrap justify-start gap-2 mt-4 w-3/4">
            {technologies.map((tech) => (
              <Badge
                variant="secondary"
                className="bg-accent-800 border-accent-800 text-secondary-200 hover:bg-accent-900"
                key={tech}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-end gap-4 text-sm text-primary-50 underline italic">
          <p>
            <a href={githubRepoLink}>Github Repo</a>
          </p>
          <p>
            <a href={previewLink}>Preview</a>
          </p>
        </div>
      </div>
      <div className="w-[420px] h-[250px] relative z-0">
        <Image
          src="/sample-featured-image.png"
          alt="Project Name"
          layout="fill"
          objectFit="cover"
          className="z-0 -translate-x-14"
        />
      </div>
    </div>
  )
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full py-36">
      <p className="text-4xl font-semibold text-primary-50 mb-11">Featured Projects</p>
      <div className="space-y-28">
        {projects.map((project, index) => (
          <RevealOnScroll
            delay={index * 0.3}
            key={index}
            direction="bottom"
            className="flex flex-col items-center justify-center w-full"
          >
            <div key={index}>
              {index % 2 === 0 ? <RightAligned {...project} /> : <LeftAligned {...project} />}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
