import { defineConfig } from "sanity";
import schemas from "./sanity/schemas";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  title: "SED Foundation | Sanity",

  projectId: "q99ib49k",
  dataset: "production",

  apiVersion: "2024-09-21", // Use current date (UTC format yyyy-mm-dd)
  basePath: "/admin", // The route for the Sanity Studio

  plugins: [structureTool(), visionTool()],
  schema: { types: schemas },
});
