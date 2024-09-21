const newsSchema = {
  name: "news",
  title: "News",
  type: "document",

  fields: [
    // Title of the news
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    // Slug for the news (auto-generated from title). Looks like this: /news/my-news-title
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title", // Uses the title as the slug
        maxLength: 96,
      },
    },

    // Content of the news
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }], // Allows for rich text content
    },

    // Card image (acts as thumbnail)
    {
      name: "card_image",
      title: "Card image",
      type: "image",
      options: {
        hotspot: true,
      },

      // The alt text for the card image
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },

    // Publish date
    {
      name: "date",
      title: "Date",
      type: "date",
    },
  ],
};

export default newsSchema;
