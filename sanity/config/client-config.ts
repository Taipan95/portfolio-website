import { createClient } from 'next-sanity';

const client = createClient({
    projectId: 'ico9havg',
    dataset: 'production',
    apiVersion: '2024-08-31',
    useCdn: false,
});

export default client;
