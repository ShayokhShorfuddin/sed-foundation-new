const issuesSchema = {
  name: "issues",
  title: "Issues",
  type: "document",

  fields: [
    // Title of the issue
    {
      name: "title",
      title: "Title",
      type: "string",

      validation: (rule: any) => rule.required(),
    },

    // Slug for the issue (auto-generated from title)
    {
      name: "slug",
      title: "Slug",
      type: "slug",

      options: {
        source: "title", // Uses the title as the slug
        maxLength: 96,
      },

      validation: (rule: any) => rule.required(),
    },

    // Coordinators of the issue
    {
      name: "coordinators",
      title: "Coordinators",
      type: "array",

      of: [{ type: "string" }],

      validation: (rule: any) => rule.required(),
    },

    // Card image (acts as thumbnail)
    {
      name: "card_image",
      title: "Card image",
      type: "image",

      options: {
        hotspot: true,
      },

      validation: (rule: any) => rule.required(),

      // The alt text for the card image
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",

          validation: (rule: any) => rule.required(),
        },
      ],
    },

    // Whole issue pdf
    {
      name: "pdf",
      title: "PDF",
      type: "file",

      validation: (rule: any) => rule.required(),
    },

    // Articles related to the issue
    {
      name: "articles",
      title: "Articles",
      type: "array",

      of: [
        {
          type: "object",
          fields: [
            // Article title
            {
              name: "title",
              title: "Title",
              type: "string",

              validation: (rule: any) => rule.required(),
            },

            // Article authors
            {
              name: "authors",
              title: "Authors",
              type: "array",

              of: [{ type: "string" }],

              validation: (rule: any) => rule.required(),
            },

            // Article keywords
            {
              name: "keywords",
              title: "Keywords",
              type: "array",

              of: [{ type: "string" }],

              validation: (rule: any) => rule.required(),
            },

            // Article abstract
            {
              name: "abstract",
              title: "Abstract",
              type: "text",

              validation: (rule: any) => rule.required(),
            },

            // Article pdf
            {
              name: "pdf",
              title: "PDF",
              type: "file",

              validation: (rule: any) => rule.required(),
            },
          ],
        },
      ],

      validation: (rule: any) => rule.required(),
    },
  ],
};

export default issuesSchema;
