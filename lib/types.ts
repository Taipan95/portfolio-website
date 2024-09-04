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

export interface Page {
    _createdAt: string;
    _id: string;
    name: string;
    slug: string;
    title: string;
    content: PortableTextBlock[];
    image: string;
}

export interface HomepageHeader {
    _createdAt: string;
    _id: string;
    name: string;
    slug: string;
    title: string;
    image: string;
    linkedInUrl: string;
    gitHubUrl: string;
    content: PortableTextBlock[];
}
