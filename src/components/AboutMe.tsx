import Image from 'next/image'
import FeaturedTechnologies from './FeaturedTechnologies'
import { RevealOnScroll } from './Animations'

export default function AboutMe() {
  return (
    <section className="flex items-center justify-center h-full w-full">
      <div className="flex flex-col items-center justify-center text-primary-50 text-center my-4 px-10 md:w-[60vw] lg:w-[50vw]">
        <p className="text-2xl md:text-4xl font-semibold md:text-left w-full mb-8 md:mb-6">
          About Me
        </p>
        <RevealOnScroll direction="bottom" className="flex flex-col items-center justify-center">
          <div className="flex flex-col-reverse items-center md:grid md:grid-cols-3 md:content-center md:gap-7 md:items-start justify justify-items-end lg:w-[90%]">
            <p className="text-left col-span-2 text-sm mt-8 md:mt-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. Lorem
              Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industrys standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className="relative w-[100%] max-w-52 aspect-square group hover:drop-shadow-primary-active transition-all duration-300 content-center">
              <div className="absolute inset-0 bg-accent-900 opacity-50 rounded-8 z-10 group-hover:opacity-0 transition-opacity duration-300 hover:cursor-pointer"></div>
              <Image
                src="/sky-profile.jpg"
                alt="Profile Photo"
                layout="fill"
                objectFit="cover"
                className="rounded-8"
              />
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll
          direction="bottom"
          delay={0.5}
          className="flex flex-col items-center justify-center"
        >
          <FeaturedTechnologies className="md:w-[80%] mt-16" />
        </RevealOnScroll>
      </div>
    </section>
  )
}
