import Image from 'next/image'

import { PayloadLexicalReact } from '@zapal/payload-lexical-react'
import { Technology, Media } from '@/payload-types'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

interface InfoCardDetailsProps {
  projectName: string
  image?: Media
  description: any
  technologies: Technology[]
  githubLink: string
  previewLink: string
  className?: string
}

export default function InfoCard({
  projectName,
  image,
  description,
  technologies,
  githubLink,
  previewLink,
  className,
}: InfoCardDetailsProps) {
  return (
    <div
      className={`relative w-full min-h-72 max-w-[90%]  flex flex-col items-center justify-center bg-secondary-950 rounded-7 mx-auto hover:drop-shadow-primary-active ${className}`}
    >
      {image && (
        <div className="w-full h-[250px] relative hover:drop-shadow-primary-active transition-all duration-300 content-center group">
          <div className="absolute inset-0 bg-accent-900 opacity-50 z-10 group-hover:opacity-0 transition-opacity duration-300 hover:cursor-pointer"></div>
          <Image
            src={image.url!}
            alt="Project Name"
            className="rounded-t-7 object-cover"
            fill
            priority={true}
          />
        </div>
      )}
      <div className="flex flex-col items-start justify-center p-8 space-y-3 w-full">
        <p className="text-secondary-50 text-lg font-semibold">{projectName}</p>
        <div className="text-secondary-50 text-left text-sm min-h-20">
          <PayloadLexicalReact
            content={description!}
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
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              variant="secondary"
              className="bg-secondary-800 border-secondary-800 text-secondary-200 hover:bg-secondary-800"
              key={tech.id}
            >
              {tech.name}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between w-full text-sm text-secondary-50 font-semibold pt-5">
          {previewLink !== '' && (
            <Button className="bg-accent-700 hover:bg-accent-800 w-1/2">
              <a href={previewLink} target="_blank">
                Preview
              </a>
            </Button>
          )}
          <p className="underline text-center">
            <a href={githubLink} target="_blank">
              Github Repository
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
