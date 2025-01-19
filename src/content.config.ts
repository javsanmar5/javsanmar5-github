import { defineCollection, z } from "astro:content";

const repositories = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    license: z.string(),
    repositoryOwner: z.string(),
  }),
});

export const collections = {
  repositories,
};
