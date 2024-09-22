const eventsSchema = {
  name: "events",
  title: "Events",
  type: "document",

  fields: [
    // Title of the event
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    // Slug for the event (auto-generated from title). Looks like this: /events/my-event-title
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title", // Uses the title as the slug
        maxLength: 96,
      },
    },

    // Content of the event
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }], // Allows for rich text content
    },

    // Venue of the event
    {
      name: "venue",
      title: "Venue",
      type: "string",
    },

    // Location on Google Maps
    {
      name: "location_on_google_maps",
      title: "Location on Google Maps",
      type: "url",
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

    // Hosting date
    {
      name: "date",
      title: "Date",
      type: "date",
    },
  ],
};

export default eventsSchema;
