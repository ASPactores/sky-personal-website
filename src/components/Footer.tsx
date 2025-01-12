import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className="text-primary-50 py-6 px-5">
      <div className="w-full h-px bg-gradient-to-r from-secondary-900 via-secondary-500 to-secondary-900 mb-5"></div>
      <div className="flex items-center justify-between px-52">
        <p className="text-sm font-semibold">
          © {new Date().getFullYear()} Anakin Skywalker Pactores
        </p>
        <div className="flex items-center justify-center space-x-5">
          <a href="">
            <FontAwesomeIcon className="w-7 h-7 text-primary-50" icon={faFacebook} />
          </a>
          <a href="">
            <FontAwesomeIcon className="w-7 h-7 text-primary-50" icon={faLinkedin} />
          </a>
          <a href="">
            <FontAwesomeIcon className="w-7 h-7 text-primary-50" icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  )
}
