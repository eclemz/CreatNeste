import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "t3bj5lll",
  dataset: "production",
  apiVersion: "2025-12-12",
  // token: process.env.SANITY_TOKEN,
  useCdn: true,
});
