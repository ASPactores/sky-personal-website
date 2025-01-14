'use client'

import { FadeOnLoad, RevealOneByOne } from './Animations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

import Link from 'next/link'
import { Links } from '@/types'

export default function NavigationBar({ navigationLinks }: { navigationLinks: Links }) {
  const isMediumScreen = useMediaQuery('(min-width: 980px)')

  return (
    <nav
      className={`z-10 absolute top-0 flex w-full text-primary-50 items-center py-7  ${isMediumScreen ? 'justify-between px-60' : 'justify-end px-5'}`}
    >
      {isMediumScreen ? (
        <>
          <FadeOnLoad delay={0.1}>
            <p className="text-lg font-semibold">Anakin Pactores</p>
          </FadeOnLoad>
          <div className="flex text-sm space-x-8">
            <RevealOneByOne delay={0.1}>
              {navigationLinks.map((link) => (
                <p key={link.title}>
                  <Link href={link.url}>{link.title}</Link>
                </p>
              ))}
            </RevealOneByOne>
          </div>
        </>
      ) : (
        <Sheet>
          <SheetTrigger>
            <FontAwesomeIcon icon={faBars} className="w-8 h-8 text-primary-50" />
          </SheetTrigger>
          <SheetHeader>
            <SheetTitle className="hidden">Menu</SheetTitle>
            <SheetContent className="flex flex-col h-full items-center justify-center text-2xl font-semibold bg-secondary-950 border-none text-primary-50 space-y-9">
              <RevealOneByOne delay={0.3}>
                {navigationLinks.map((link) => (
                  <p key={link.title}>
                    <Link href={link.url}>{link.title}</Link>
                  </p>
                ))}
              </RevealOneByOne>
            </SheetContent>
          </SheetHeader>
        </Sheet>
      )}
    </nav>
  )
}
