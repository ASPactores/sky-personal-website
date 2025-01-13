'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

export default async function getNavigationLinks() {
  const payload = await getPayload({ config })

  const { link: links } = await payload.findGlobal({
    slug: 'navigation-links',
  })

  return links
}
