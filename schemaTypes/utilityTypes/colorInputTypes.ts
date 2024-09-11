import {defineField, defineType} from 'sanity'
import {PaintBucket} from 'phosphor-react'
import GetSwatch from '../../utilities/getSwatch'

const colorInputType = defineType({
  name: 'colorInput',
  title: 'Color Input',
  type: 'document',
  icon: PaintBucket,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'color',
      type: 'color',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      color: 'color',
    },
    prepare({title, color}) {
      return {
        title: title,
        subtitle: color?.hex ? color.hex.toUpperCase() : '',
        media: color?.hex ? GetSwatch(color.hex.toUpperCase()) : null,
      }
    },
  },
})

const types = [colorInputType]

export default types
