import type { Block } from 'payload'
import {
  BoldFeature,
  ItalicFeature,
  ParagraphFeature,
  BlockquoteFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const RichText: Block = {
  slug: 'rich-text',
  labels: {
    singular: 'Rich Text',
    plural: 'Rich Text',
  },
  fields: [
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
      required: true,
      editor: lexicalEditor(),
    },
  ],
}
