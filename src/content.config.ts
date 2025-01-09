import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/projects" }),
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
  projects,
};
