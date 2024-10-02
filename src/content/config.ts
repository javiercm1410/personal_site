import { defineCollection, z} from "astro:content";

const projectsCollection = defineCollection({
    schema: z.object({
        section: z.string(),
        date: z.string(),
        title: z.string()
    }),
});

export const collection = {
    projects: projectsCollection,
};
