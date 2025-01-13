import { Links } from '@/types'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer({ socialLinks }: { socialLinks: Links }) {
  return (
    <footer className="text-primary-50 py-6 px-5">
      <div className="w-full h-px bg-gradient-to-r from-secondary-900 via-secondary-500 to-secondary-900 mb-5"></div>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:justify-between md:px-52">
        <p className="text-xs md:text-sm font-semibold">
          © {new Date().getFullYear()} Anakin Skywalker Pactores
        </p>
        <div className="flex items-center justify-center space-x-10 md:space-x-5">
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
                <FontAwesomeIcon className="w-7 h-7 text-primary-50" icon={icon} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
