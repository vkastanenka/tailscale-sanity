import {defineField, defineType, defineArrayMember} from 'sanity'
import {Layout} from 'phosphor-react'

const layoutType = defineType({
  name: 'layout',
  title: 'Layout',
  type: 'document',
  icon: Layout,
  fields: [
    defineField({
      name: 'navbarItems',
      type: 'array',
      of: [defineArrayMember({type: 'navbarDropdown'}), defineArrayMember({type: 'button'})],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'navbarCtaItems',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'button'}})],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaHeadingTop1',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaHeadingTop2',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaButton1',
      type: 'reference',
      to: {type: 'button'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaHeadingBottom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaButton2',
      type: 'reference',
      to: {type: 'button'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaImage',
      type: 'img',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaCompanyLogos',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'companyLogo'}})],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'footerItems',
      type: 'array',
      of: [defineArrayMember({type: 'footerItem'})],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'afterButtons',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'button'}})],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'afterWireGuardTm',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'afterCopyright',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Layout',
      }
    },
  },
})

const navbarDropdown = defineType({
  name: 'navbarDropdown',
  title: 'Navbar Dropdown',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'columns',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'column',
          fields: [
            defineField({name: 'heading', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({
              name: 'buttons',
              type: 'array',
              validation: (Rule) => Rule.required(),
              of: [defineArrayMember({type: 'button'})],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})

const footerItem = defineType({
  name: 'footerItem',
  title: 'Footer Item',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttons',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          type: 'button',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})

const types = [layoutType, navbarDropdown, footerItem]

export default types
