import { defineCollection, z} from "astro:content";

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        section: z.string(),
        date: z.string(),
        title: z.string(),
        description: z.string(),
        author: z.string(),
        image: z.object({
          url: z.string(),
          alt: z.string()
        }),
        tags: z.array(z.string())
    }),
});

export const collection = {
    projects: postsCollection,
};
