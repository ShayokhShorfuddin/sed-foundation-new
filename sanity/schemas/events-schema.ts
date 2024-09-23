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

      validation: (rule: any) => rule.required(),
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

      validation: (rule: any) => rule.required(),
    },

    // Content of the event
    {
      name: "content",
      title: "Content",
      type: "array",

      of: [{ type: "block" }], // Allows for rich text content

      validation: (rule: any) => rule.required(),
    },

    // Venue of the event
    {
      name: "venue",
      title: "Venue",
      type: "string",

      validation: (rule: any) => rule.required(),
    },

    // Location on Google Maps
    {
      name: "location_on_google_maps",
      title: "Location on Google Maps",
      type: "url",

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
        },
      ],
    },

    // From date
    {
      name: "from_date",
      title: "From date",
      type: "date",

      // For the CMS date display
      options: {
        dateFormat: "DD/MM/YYYY",
      },

      validation: (rule: any) => rule.required(),
    },

    // To date
    {
      name: "to_date",
      title: "To date",
      type: "date",

      // For the CMS date display
      options: {
        dateFormat: "DD/MM/YYYY",
      },

      // Making sure that "to date" is in future compared to "from date"
      validation: (rule: any) =>
        rule.required().custom((toDate: string, context: any) => {
          const fromDate = context.document?.from_date;

          return (
            new Date(toDate) >= new Date(fromDate) ||
            "'To date' must be equal to or in future compared to 'From date'"
          );
        }),
    },
  ],
};

export default eventsSchema;
