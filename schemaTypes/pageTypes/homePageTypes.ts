import {defineArrayMember, defineField, defineType} from 'sanity'
import {File} from 'phosphor-react'

const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: File,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // hero
    defineField({
      name: 'heroHeading1',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroHeading2',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroHeadingList',
      type: 'array',
      of: [defineArrayMember({type: 'homePageHeroHeadingListItem'})],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubheading',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroButton1',
      type: 'reference',
      to: {type: 'button'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroButton2',
      type: 'reference',
      to: {type: 'button'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImageDesktop',
      type: 'img',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImageMobile',
      type: 'img',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroCompanyTrustHeading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'companyLogos',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'companyLogo'}})],
      validation: (Rule) => Rule.required(),
    }),

    // howItWorks
    defineField({
      name: 'howItWorksHeading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'howItWorksSubheading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'howItWorksButton',
      type: 'reference',
      to: {type: 'button'},
      validation: (Rule) => Rule.required(),
    }),

    // feature 1
    defineField({
      name: 'feature1Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feature1HeadingMaxWidth',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feature1Subheading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feature1SubheadingMaxWidth',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feature1Button',
      type: 'reference',
      to: {type: 'button'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feature1Image',
      type: 'img',
      validation: (Rule) => Rule.required(),
    }),

    // feature 2
    defineField({
      name: 'feature2Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feature2HeadingMaxWidth',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feature2Subheading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feature2SubheadingMaxWidth',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feature2Button',
      type: 'reference',
      to: {type: 'button'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feature2Image',
      type: 'img',
      validation: (Rule) => Rule.required(),
    }),

    // feature 3
    defineField({
      name: 'feature3Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feature3HeadingMaxWidth',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feature3Subheading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feature3SubheadingMaxWidth',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feature3Button',
      type: 'reference',
      to: {type: 'button'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feature3Image',
      type: 'img',
      validation: (Rule) => Rule.required(),
    }),

    // feature 4
    defineField({
      name: 'feature4Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feature4HeadingMaxWidth',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feature4Subheading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feature4SubheadingMaxWidth',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feature4Button',
      type: 'reference',
      to: {type: 'button'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feature4Image',
      type: 'img',
      validation: (Rule) => Rule.required(),
    }),

    // integrations
    defineField({
      name: 'integrationsHeading1',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'integrationsHeading2',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'integrationsIcons1',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          type: 'img',
        }),
      ],
    }),
    defineField({
      name: 'integrationsIcons2',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          type: 'img',
        }),
      ],
    }),
    defineField({
      name: 'integrationsButton1',
      type: 'reference',
      to: {type: 'button'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'integrationsButton2',
      type: 'reference',
      to: {type: 'button'},
      validation: (Rule) => Rule.required(),
    }),

    // homelab
    defineField({
      name: 'homelabTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'homelabHeading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'homelabSubheading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'homelabButton1',
      type: 'reference',
      to: {type: 'button'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'homelabButton2',
      type: 'reference',
      to: {type: 'button'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'homelabImage',
      type: 'img',
      validation: (Rule) => Rule.required(),
    }),

    // testimonials
    defineField({
      name: 'testimonialsHeading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'testimonialsList1',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          type: 'reference',
          to: {type: 'testimonial'},
        }),
      ],
    }),
    defineField({
      name: 'testimonialsList2',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          type: 'reference',
          to: {type: 'testimonial'},
        }),
      ],
    }),
    defineField({
      name: 'testimonialsList3',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          type: 'reference',
          to: {type: 'testimonial'},
        }),
      ],
    }),

    // benefits
    defineField({
      name: 'benefitsHeading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'benefitsList',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          type: 'homePageBenefit',
        }),
      ],
    }),
    defineField({
      name: 'accoladesList',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          type: 'homePageAccolade',
        }),
      ],
    }),

    // security
    defineField({
      name: 'securityHeading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'securitySubheading',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'securityButton1',
      type: 'reference',
      to: {type: 'button'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'securityButton2',
      type: 'reference',
      to: {type: 'button'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'securityImages',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          type: 'img',
        }),
      ],
    }),

    // documentation
    defineField({
      name: 'workflowHeading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'workflowSubheading',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'workflowButton',
      type: 'reference',
      to: {type: 'button'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'workflowImage',
      type: 'img',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quickstartTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quickstartHeading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quickstartButton',
      type: 'reference',
      to: {type: 'button'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quickstartImage',
      type: 'img',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'heroImageDesktop.image',
    },
  },
})

export const homePageHeroHeadingListItemType = defineType({
  name: 'homePageHeroHeadingListItem',
  title: 'Home Page Hero Heading List Item',
  type: 'object',
  fields: [
    defineField({
      name: 'color',
      type: 'reference',
      to: {type: 'colorInput'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'text',
    },
  },
})

export const homePageBenefitType = defineType({
  name: 'homePageBenefit',
  title: 'Home Page Benefit',
  type: 'object',
  fields: [
    defineField({
      name: 'href',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'img',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image.image',
      subtitle: 'href',
    },
  },
})

export const homePageAccoladeType = defineType({
  name: 'homePageAccolade',
  title: 'Home Page Accolade',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'subheading',
    },
  },
})

const types = [
  homePageType,
  homePageHeroHeadingListItemType,
  homePageBenefitType,
  homePageAccoladeType,
]

export default types
