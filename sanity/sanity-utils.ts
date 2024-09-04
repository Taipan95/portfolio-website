import { HomepageHeader, Page, Project, WorkExperience } from '@/lib/types';
import client from '@/sanity/config/client-config';
import { groq } from 'next-sanity';

export const getWorkExperienceItems = async (): Promise<WorkExperience[]> => {
    return client.fetch(groq`*[_type=="work_experience"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        company_position,
        short_description,
        url,
        content
    }`);
};

export const getWorkExperienceItem = async (
    slug: string,
): Promise<WorkExperience> => {
    return client.fetch(
        groq`*[_type == "work_experience" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        company_position,
        short_description,
        url,
        content
    }`,
        { slug },
    );
};

export const getProjects = async (): Promise<Project[]> => {
    return client.fetch(groq`*[_type=="project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        short_description,
        url,
        content
    }`);
};

export const getProject = async (slug: string): Promise<Project> => {
    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        short_description,
        url,
        content
    }`,
        { slug },
    );
};

export const getPages = async (): Promise<Page[]> => {
    return client.fetch(groq`*[_type=="page"]{
        _id,
        _createdAt,
        "slug": slug.current,
        "image": image.asset->url,
        content
    }`);
};

export const getPage = async (slug: string): Promise<Page> => {
    return client.fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
        _id,
        _createdAt,
        "slug": slug.current,
        "image": images.asset->url,
        content
    }`,
        { slug },
    );
};

export const getHomepageHeader = async (): Promise<HomepageHeader> => {
    return client.fetch(
        groq`*[_type == "header" && slug.current == "home-page"][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "image": image.asset->url,
        content,
        linkedInUrl,
        gitHubUrl
    }`,
    );
};
