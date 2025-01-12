import { FlipOnScroll, RevealOnScroll } from './Animations'
import BackgroundGradient from './BackgroundGradient'

export default function Contact() {
  return (
    <section className="relative w-full h-svh flex flex-col justify-center items-center overflow-clip">
      <RevealOnScroll direction="bottom" className="flex flex-col items-center justify-center">
        <p className="text-base font-semibold text-secondary-200">Want to collaborate?</p>
        <p className="text-6xl font-bold text-primary-50">Contact Me</p>
      </RevealOnScroll>
      <FlipOnScroll delay={0.5}>
        <p className="text-2xl font-semibold text-accent-500 underline mt-7">
          <a href="mailto:anakin.pactores@gmail.com">anakin.pactores@gmail.com</a>
        </p>
      </FlipOnScroll>
      <BackgroundGradient className="absolute -z-10" />
    </section>
  )
}
