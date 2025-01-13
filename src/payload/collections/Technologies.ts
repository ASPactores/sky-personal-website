import type { CollectionConfig } from 'payload'
import { authenticatedUser } from '../access/authenticatedUser'

export const Technologies: CollectionConfig = {
  slug: 'technologies',
  access: {
    create: authenticatedUser,
    read: () => true,
    update: authenticatedUser,
    delete: authenticatedUser,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'logo',
      required: true,
    },
  ],
}
