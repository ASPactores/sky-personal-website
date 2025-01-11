export default function NavigationBar() {
  return (
    <div className="z-10 absolute top-0 flex w-full justify-between text-primary-50 items-center py-7 px-60">
      <p className="text-lg font-semibold">
        Anakin Pactores
      </p>
      <div className="flex text-sm space-x-8">
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
      </div>

    </div>
  )
}