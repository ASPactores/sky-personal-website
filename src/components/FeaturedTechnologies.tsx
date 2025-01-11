import { Button } from './ui/button'
import Image from 'next/image'

export default function FeaturedTechnologies({ className }: { className?: string }) {
  return (
    <div className={`${className} flex flex-col justify-center items-center`}>
      <div className="w-full h-[1.5px] bg-gradient-to-r from-secondary-900 via-secondary-500 to-secondary-900 mb-5"></div>
      <p className="text-secondary-50 text-xl font-semibold">Technologies</p>
      <div className="flex items-center justify-center flex-wrap gap-2 w-[80%] mt-8">
        {/* Populate with data from cms */}
        <Button
          variant="outline"
          className="bg-transparent hover:filter-none hover:cursor-auto p-4"
        >
          <Image src="/react-logo.png" alt="React Logo" width={30} height={30} />
          NextJS
        </Button>
        <Button
          variant="outline"
          className="bg-transparent hover:filter-none hover:cursor-auto p-4"
        >
          <Image src="/react-logo.png" alt="React Logo" width={30} height={30} />
          NextJS
        </Button>
        <Button
          variant="outline"
          className="bg-transparent hover:filter-none hover:cursor-auto p-4"
        >
          <Image src="/react-logo.png" alt="React Logo" width={30} height={30} />
          NextJS
        </Button>
        <Button
          variant="outline"
          className="bg-transparent hover:filter-none hover:cursor-auto p-4"
        >
          <Image src="/react-logo.png" alt="React Logo" width={30} height={30} />
          NextJS
        </Button>
        <Button
          variant="outline"
          className="bg-transparent hover:filter-none hover:cursor-auto p-4"
        >
          <Image src="/react-logo.png" alt="React Logo" width={30} height={30} />
          NextJS
        </Button>
        <Button
          variant="outline"
          className="bg-transparent hover:filter-none hover:cursor-auto p-4"
        >
          <Image src="/react-logo.png" alt="React Logo" width={30} height={30} />
          NextJS
        </Button>
        <Button
          variant="outline"
          className="bg-transparent hover:filter-none hover:cursor-auto p-4"
        >
          <Image src="/react-logo.png" alt="React Logo" width={30} height={30} />
          NextJS
        </Button>
        <Button
          variant="outline"
          className="bg-transparent hover:filter-none hover:cursor-auto p-4"
        >
          <Image src="/react-logo.png" alt="React Logo" width={30} height={30} />
          NextJS
        </Button>
        <Button
          variant="outline"
          className="bg-transparent hover:filter-none hover:cursor-auto p-4"
        >
          <Image src="/react-logo.png" alt="React Logo" width={30} height={30} />
          NextJS
        </Button>
      </div>
      <div className="w-full h-[1.5px] bg-gradient-to-r from-secondary-900 via-secondary-500 to-secondary-900 mt-7"></div>
    </div>
  )
}
