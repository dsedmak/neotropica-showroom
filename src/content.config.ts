// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const habitats = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/collections/habitats/" }),
  schema: ({ image }) => z.object({
    name: z.string(),
    cover: image(),
  }),
});

const inhabitants = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/collections/inhabitants" }),
  schema: ({ image }) => z.object({
    common_name: z.string(),
    latin_name: z.string(),
    cover: image(),
    habitat: reference("habitats"),
  }),
});

export const collections = { habitats, inhabitants };
