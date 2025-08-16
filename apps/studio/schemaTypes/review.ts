import {Rule} from 'sanity'

export default {
  name: 'review',
  title: 'Reviews',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'client',
      title: 'Client',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule: Rule) => Rule.min(1).max(5).required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
