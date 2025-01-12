import { FlipOnScroll, RevealOnScroll } from './Animations'
import BackgroundGradient from './BackgroundGradient'

export default function Contact() {
  return (
    <section className="relative w-full h-svh flex flex-col justify-center items-center overflow-clip">
      <RevealOnScroll direction="bottom" className="flex flex-col items-center justify-center">
        <p className="text-sm md:text-base font-semibold text-secondary-200">
          Want to collaborate?
        </p>
        <p className="text-4xl md:text-6xl font-bold text-primary-50">Let's Talk</p>
      </RevealOnScroll>
      <FlipOnScroll delay={0.5}>
        <p className="text-lg md:text-2xl font-semibold text-accent-500 underline mt-7">
          <a href="mailto:anakin.pactores@gmail.com">anakin.pactores@gmail.com</a>
        </p>
      </FlipOnScroll>
      <BackgroundGradient className="absolute -z-10" />
    </section>
  )
}
