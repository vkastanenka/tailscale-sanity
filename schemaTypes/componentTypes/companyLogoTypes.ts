import {defineField, defineType} from 'sanity'
import { Buildings } from 'phosphor-react'

export const companyLogoType = defineType({
  name: 'companyLogo',
  title: 'Company Logo',
  type: 'document',
  icon: Buildings,
  fields: [
    defineField({
      name: 'image',
      type: 'img',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'image.altText',
      media: 'image.image',
    },
  },
})

const types = [companyLogoType]

export default types
