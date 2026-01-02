import {defineType, defineField} from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),

    defineField({
      name: 'date',
      title: 'Published Date',
      type: 'date',
    }),

    defineField({
      name: 'categories',
      title: 'Categories/ Tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
    }),

    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      description: 'Optional: link to an external article or source',
      validation: (Rule) => Rule.uri({allowRelative: false, scheme: ['http', 'https']}),
    }),
  ],
})
