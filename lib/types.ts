import { PortableTextBlock } from 'next-sanity';

export interface WorkExperience {
    _createdAt: string;
    name: string;
    image: string;
    company_position: string;
    short_description: string;
    url: string;
    content: PortableTextBlock[];
    _id: string;
    slug: string;
}

export interface Project {
    _createdAt: string;
    name: string;
    image: string;
    short_description: string;
    url: string;
    content: PortableTextBlock[];
    _id: string;
    slug: string;
}
