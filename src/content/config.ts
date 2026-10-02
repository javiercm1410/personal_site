import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    section: z.string(),
    date: z.string(),
    title: z.string(),
    description: z.string(),
    author: z.string().default('Javier Carrillo'),
    image: z.object({ url: z.string(), alt: z.string() }).optional(),
    tags: z.array(z.string()).default([]),
    demo: z.boolean().default(false),
    archived: z.boolean().default(false),
  }),
});

export const collections = { posts };
