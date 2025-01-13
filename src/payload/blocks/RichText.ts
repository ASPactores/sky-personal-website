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
      name: 'title',
      label: 'Title',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures, rootFeatures }) => {
          return [BoldFeature(), ItalicFeature(), ParagraphFeature(), BlockquoteFeature()]
        },
      }),
    },
  ],
}
