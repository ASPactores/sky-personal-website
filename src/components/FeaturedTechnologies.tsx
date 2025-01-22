import { Button } from './ui/button'
import Image from 'next/image'
import { Technology, Logo } from '@/payload-types'

export default function FeaturedTechnologies({
  className,
  technologies,
}: {
  className?: string
  technologies: Technology[]
}) {
  return (
    <section className={`${className} flex flex-col justify-center items-center`}>
      <div className="w-full h-[1.5px] bg-gradient-to-r from-secondary-900 via-secondary-500 to-secondary-900 mb-5"></div>
      <p className="text-secondary-50 text-xl font-semibold">Technologies</p>
      <div className="flex items-center justify-center flex-wrap gap-2 w-[90%] lg:w-[80%] mt-8">
        {technologies.map((tech, index) => (
          <Button
            key={index}
            variant="outline"
            className="bg-transparent hover:filter-none hover:cursor-auto p-4"
          >
            <Image
              src={`${(tech.logo as Logo).url}`}
              alt="React Logo"
              width={30}
              height={30}
              priority={true}
            />
            {tech.name}
          </Button>
        ))}
      </div>
      <div className="w-full h-[1.5px] bg-gradient-to-r from-secondary-900 via-secondary-500 to-secondary-900 mt-7"></div>
    </section>
  )
}
