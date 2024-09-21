import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

export default defineConfig({
  title: "sed-foundation-sanity-cms",

  projectId: "q99ib49k",
  dataset: "production",

  apiVersion: "2024-09-21", // Use current date (UTC format yyyy-mm-dd)
  basePath: "/admin", // The route for the Sanity Studio

  plugins: [structureTool()],
});
