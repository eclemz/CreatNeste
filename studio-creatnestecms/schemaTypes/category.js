export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    },

    {
      name: 'bgColor',
      title: 'Background Color (HEX)',
      type: 'string',
      description: 'Example: #F3F4F6',
      validation: (Rule) =>
        Rule.regex(/^#([0-9A-Fa-f]{6})$/, {
          name: 'hex color',
          invert: false,
        }),
    },

    // 🖌 Border color
    {
      name: 'borderColor',
      title: 'Border Color (HEX)',
      type: 'string',
      description: 'Example: #111827',
      validation: (Rule) =>
        Rule.regex(/^#([0-9A-Fa-f]{6})$/, {
          name: 'hex color',
          invert: false,
        }),
    },

    // Optional: text color for contrast
    {
      name: 'textColor',
      title: 'Text Color (HEX)',
      type: 'string',
      description: 'Example: #111827 or #FFFFFF',
    },
  ],
}
