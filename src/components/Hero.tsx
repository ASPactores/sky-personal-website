import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components/ui/button'
import { FlipOnReveal, RevealOneByOne, RevealOnLoad } from './Animations'

import { PayloadLexicalReact } from '@zapal/payload-lexical-react'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Links } from '@/types'

interface HeroProps {
  component: any
  socialLinks: Links
  resumeLink: string
}

export default function Hero({ component, socialLinks, resumeLink }: HeroProps) {
  const data = component.Components[0].component.find(
    (item: any) => item.blockName === 'introduction-blurb',
  )
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
          <div className="text-left md:text-center text-base max-w-2xl mt-10">
            <PayloadLexicalReact
              content={data.content}
              mark={(mark) => {
                if (mark.bold) {
                  return <span className="font-semibold text-accent-600">{mark.text}</span>
                }

                if (mark.italic) {
                  return <span className="italic">{mark.text}</span>
                }

                return <>{mark.text}</>
              }}
            />
          </div>
        </RevealOnLoad>
      </div>
      <div className="flex flex-col md:items-center mt-5 md:space-y-10 md:mt-10 w-full">
        <div className="hidden md:flex items-center justify-center space-x-10">
          <RevealOneByOne delay={1} direction="bottom">
            {socialLinks.map((data) => {
              let icon: IconProp
              switch (data.title) {
                case 'linkedin':
                  icon = faLinkedin
                  break
                case 'facebook':
                  icon = faFacebook
                  break
                case 'github':
                  icon = faGithub
                  break
                default:
                  icon = faLinkedin
              }
              return (
                <a key={data.id} href={data.url}>
                  <FontAwesomeIcon className="w-8 h-8 text-primary-50" icon={icon} />
                </a>
              )
            })}
          </RevealOneByOne>
        </div>
        <RevealOnLoad delay={1.2}>
          <a href={resumeLink}>
            <Button className="bg-accent-900 p-5 text-base drop-shadow-primary hover:drop-shadow-primary-active hover:bg-accent-950">
              View Resume
            </Button>
          </a>
        </RevealOnLoad>
      </div>
      <div className="animate-bounce absolute bottom-20">
        <FontAwesomeIcon icon={faArrowDown} className="w-8 h-8 text-primary-50 mt-10 opacity-50" />
      </div>
    </section>
  )
}
