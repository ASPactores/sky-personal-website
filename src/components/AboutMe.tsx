import Image from 'next/image'
import FeaturedTechnologies from './FeaturedTechnologies'
import { RevealOnScroll } from './Animations'
import { defaultElements, PayloadLexicalReact } from '@zapal/payload-lexical-react'

export default function AboutMe({ component }: any) {
  const { content, profile_photo, technologies } = component.Components[0].component.reduce(
    (acc: any, item: any) => {
      switch (item.blockName) {
        case 'content':
          acc.content = item.content
          break
        case 'profile-photo':
          acc.profile_photo = item.photo
          break
        case 'technologies':
          acc.technologies = item.items
          break
      }
      return acc
    },
    { content: null, profile_photo: null, technologies: null },
  )

  return (
    <section id="about" className="flex items-center justify-center h-full w-full">
      <div className="flex flex-col items-center justify-center text-primary-50 text-center my-4 px-10 md:w-[60vw] lg:w-[50vw]">
        <p className="text-2xl md:text-4xl font-semibold md:text-left w-full mb-8 md:mb-6">
          About Me
        </p>
        <RevealOnScroll direction="bottom" className="flex flex-col items-center justify-center">
          <div className="flex flex-col-reverse items-center md:grid md:grid-cols-3 md:content-center md:gap-7 md:items-start justify justify-items-end lg:w-[90%]">
            <div className="text-left col-span-2 text-sm mt-8 md:mt-0">
              <PayloadLexicalReact
                content={content!}
                mark={(mark) => {
                  if (mark.bold) {
                    return <span className="font-semibold text-accent-600">{mark.text}</span>
                  }

                  if (mark.italic) {
                    return <span className="italic">{mark.text}</span>
                  }

                  return <>{mark.text}</>
                }}
                elements={{
                  ...defaultElements,
                  paragraph: (props) => {
                    return <p className="mb-4 text-justify">{props.children}</p>
                  },
                }}
              />
            </div>
            <div className="relative w-[100%] max-w-52 aspect-square group hover:drop-shadow-primary-active transition-all duration-300 content-center">
              <div className="absolute inset-0 bg-accent-900 opacity-50 rounded-8 z-10 group-hover:opacity-0 transition-opacity duration-300 hover:cursor-pointer"></div>
              <Image
                src={profile_photo.url!}
                alt="Profile Photo"
                className="rounded-8 object-cover"
                fill
                priority={true}
              />
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll
          direction="bottom"
          delay={0.5}
          className="flex flex-col items-center justify-center"
        >
          <FeaturedTechnologies technologies={technologies!} className="md:w-[80%] mt-16" />
        </RevealOnScroll>
      </div>
    </section>
  )
}
