const headerSchema = {
    name: 'header',
    title: 'Headers',
    type: 'document',
    fields: [
        { name: 'title', title: 'Title', type: 'string' },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                },
            ],
        },
        { name: 'linkedInUrl', title: 'LinkedIn URL', type: 'url' },
        { name: 'gitHubUrl', title: 'GitHub URL', type: 'url' },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
};

export default headerSchema;
