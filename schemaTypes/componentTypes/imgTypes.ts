import {defineField, defineType} from 'sanity'
import {ImageSquare} from 'phosphor-react'

export const imgType = defineType({
  name: 'img',
  title: 'Image',
  type: 'object',
  icon: ImageSquare,
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'altText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'altText',
      media: 'image',
    },
  },
})

const types = [imgType]

export default types
