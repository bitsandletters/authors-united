import { z, defineCollection, reference } from 'astro:content';

const authors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    website: z.string().url().optional(),
    twitter: z.string().url().optional(),
    bluesky: z.string().url().optional(),
    mastodon: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    github: z.string().url().optional(),
  }),
});

const books = defineCollection({
  type: 'content',
  schema: z.object({
    collection: z.enum(['briefs', 'books']).default('books'),
    number: z.number().optional(),
    title: z.string(),
    author: reference('authors'),
    url: z.string().url(),
    color: z.string().optional(),
    isbn: z.string().optional(),
    pages: z.number().optional(),
    published: z.date(),
  }),
});

export const collections = { authors, books };
