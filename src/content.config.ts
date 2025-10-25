import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/work" }),
});

const education = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/education" }),
});

export const collections = { work, education };
