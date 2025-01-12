import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components/ui/button'
import { FlipOnReveal, RevealOneByOne, RevealOnLoad } from './Animations'

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-svh w-full p-10">
      <div className="flex flex-col items-start md:items-center md:justify-center text-primary-50 md:text-center my-4">
        <RevealOnLoad direction="top">
          <p className="text-sm md:text-base font-semibold underline">Hello, my name is</p>
        </RevealOnLoad>
        <FlipOnReveal delay={0.4}>
          <p className="text-3xl md:text-6xl font-semibold">Anakin Skywalker Pactores</p>
        </FlipOnReveal>
        <RevealOnLoad delay={0.8}>
          <p className="text-left md:text-center text-base md:text-xl font-semibold text-accent-600">
            Full-stack Developer | Data Engineer
          </p>
          <p className="text-left md:text-center text-base max-w-2xl mt-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </p>
        </RevealOnLoad>
      </div>
      <div className="flex flex-col md:items-center mt-5 md:space-y-10 md:mt-10 w-full">
        <div className="hidden md:flex items-center justify-center space-x-10">
          <RevealOneByOne delay={1} direction="bottom">
            <a href="">
              <FontAwesomeIcon className="w-8 h-8 text-primary-50" icon={faFacebook} />
            </a>
            <a href="">
              <FontAwesomeIcon className="w-8 h-8 text-primary-50" icon={faLinkedin} />
            </a>
            <a href="">
              <FontAwesomeIcon className="w-8 h-8 text-primary-50" icon={faGithub} />
            </a>
          </RevealOneByOne>
        </div>
        <RevealOnLoad delay={1.2}>
          <Button className="bg-accent-900 p-5 text-base drop-shadow-primary hover:drop-shadow-primary-active hover:bg-accent-950">
            View Resume
          </Button>
        </RevealOnLoad>
      </div>
      <div className="animate-bounce absolute bottom-20">
        <FontAwesomeIcon icon={faArrowDown} className="w-8 h-8 text-primary-50 mt-10 opacity-50" />
      </div>
    </section>
  )
}
