import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website')
    .items([
      S.listItem()
        .title('Components')
        .id('components')
        .child(
          S.list()
            .title('Components')
            .items([
              S.documentTypeListItem('button').title('Buttons'),
              S.documentTypeListItem('companyLogo').title('Company Logos'),
              S.documentTypeListItem('layout').title('Layouts'),
              S.documentTypeListItem('testimonial').title('Testimonials'),
            ]),
        ),
      S.listItem()
        .title('Pages')
        .id('pages')
        .child(
          S.list()
            .title('Pages')
            .items([S.documentTypeListItem('homePage').title('Home Pages')]),
        ),
      S.listItem()
        .title('Utilities')
        .id('utilities')
        .child(
          S.list()
            .title('Utilities')
            .items([S.documentTypeListItem('colorInput').title('Colors')]),
        ),
    ])
