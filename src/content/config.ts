import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    cover: image(),
    coverAlt: z.string().default(""),
    color: z.string(),
    description: z.string(),
    tags: z.string().array().default([]),
    vimeoId: z.string().optional()
  }),
});

export const collections = {
  projects: projectCollection,
};
