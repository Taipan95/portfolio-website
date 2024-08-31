import schemas from '@/sanity/schemas';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
    projectId: 'ico9havg',
    dataset: 'production',
    title: 'Sakis Evangelou porfolio website',
    basePath: '/admin',
    plugins: [structureTool()],
    schema: {
        types: schemas,
    },
});
