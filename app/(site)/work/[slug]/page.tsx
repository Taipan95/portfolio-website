import { getWorkExperienceItem } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

interface IProps {
    params: { slug: string };
}

export default async function WorkItemPage({ params }: IProps) {
    const workItemData = await getWorkExperienceItem(params.slug);

    if (!workItemData) {
        return redirect('/');
    }

    return (
        <main className='flex-1'>
            <div className='container px-4 md:px-6 py-6 sm:py-12 md:py-16'>
                <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
                    <div className='flex flex-col justify-center space-y-4'>
                        <div className='space-y-2'>
                            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                                {workItemData.company_position}
                            </h1>
                            <p className='max-w-[600px] text-primary/90 md:text-xl'>
                                {workItemData.short_description}
                            </p>
                        </div>
                        <Link
                            href={workItemData.url}
                            className='w-fit inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                            prefetch={false}
                        >
                            Visit website
                        </Link>
                    </div>
                    <div className='relative mx-auto aspect-video overflow-hidden rounded-lg object-cover sm:w-full lg:order-last lg:aspect-square'>
                        <Image
                            src={workItemData.image}
                            width='600'
                            height='400'
                            alt='Sakis Evangelou'
                            className='absolute inset-0 w-full h-full object-cover aspect-video'
                        />
                    </div>
                </div>
            </div>
            <PortableText value={workItemData.content} />
        </main>
    );
}
