import {defineField, defineType} from 'sanity'
import {RadioButton} from 'phosphor-react'

const buttonType = defineType({
  name: 'button',
  title: 'Button',
  type: 'document',
  icon: RadioButton,
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'href',
    },
  },
})

const types = [buttonType]

export default types
