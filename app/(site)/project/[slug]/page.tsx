import { getProject } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

interface IProps {
    params: { slug: string };
}

export default async function ProjectItemPage({ params }: IProps) {
    const projectData = await getProject(params.slug);

    if (!projectData) {
        return redirect('/');
    }

    return (
        <main className='flex justify-center'>
            <div className='container px-4 md:px-6 py-6 sm:py-12 md:py-16'>
                <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
                    <div className='flex flex-col justify-center space-y-4'>
                        <div className='space-y-2'>
                            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                                {projectData.name}
                            </h1>
                            <p className='max-w-[600px] text-primary/90 md:text-xl'>
                                {projectData.short_description}
                            </p>
                        </div>
                        <PortableText
                            value={projectData.content}
                            components={{
                                listItem: {
                                    bullet: ({ children }) => (
                                        <li className={'list-disc ml-4'}>
                                            {children}
                                        </li>
                                    ),
                                },
                            }}
                        />
                        <Link
                            href={projectData.url || '/'}
                            className='w-fit inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                            prefetch={false}
                        >
                            Visit website
                        </Link>
                    </div>
                    <div className='relative mx-auto aspect-video overflow-hidden rounded-lg object-cover sm:w-full lg:order-last lg:aspect-square'>
                        <Image
                            src={projectData.image}
                            width='600'
                            height='400'
                            alt={projectData.name}
                            className='absolute inset-0 w-full h-full object-cover aspect-video'
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
