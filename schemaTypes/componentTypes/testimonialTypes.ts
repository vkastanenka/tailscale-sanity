import {defineField, defineType} from 'sanity'
import {Chat} from 'phosphor-react'

const testimonialTypes = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: Chat,
  fields: [
    defineField({
      name: 'userImage',
      type: 'img',
    }),
    defineField({
      name: 'userHandle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'userName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'userTestimonial',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'userName',
      media: 'userImage.image',
    },
  },
})

const types = [testimonialTypes]

export default types
