import { FadeOnLoad, RevealOneByOne } from './Animations'

export default function NavigationBar() {
  return (
    <div className="z-10 absolute top-0 flex w-full justify-between text-primary-50 items-center py-7 px-60">
      <FadeOnLoad delay={0.1}>
        <p className="text-lg font-semibold">Anakin Pactores</p>
      </FadeOnLoad>
      <div className="flex text-sm space-x-8">
        <RevealOneByOne delay={0.3}>
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            <a href="#experience">Experience</a>
          </p>
          <p>
            <a href="#projects">Projects</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
        </RevealOneByOne>
      </div>
    </div>
  )
}
