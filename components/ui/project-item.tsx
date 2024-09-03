import { Card, CardContent } from '@/components/ui/card';
import { Project } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectItem({
    slug,
    url,
    image,
    name,
    short_description,
}: Project) {
    return (
        <div className='bg-accent rounded-lg shadow-lg overflow-hidden w-full grid md:grid-cols-1'>
            <Card className='flex flex-col relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2'>
                <Image
                    src={image || '/placeholder.svg'}
                    width='550'
                    height='310'
                    alt={name}
                    className='aspect-video overflow-hidden object-cover object-center'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-50' />
                <CardContent className='p-4 space-y-2 relative flex flex-col flex-1'>
                    <h3 className='text-xl font-bold'>{name}</h3>
                    <p className='text-muted-foreground flex-1'>{short_description}</p>
                    <div className='flex gap-2'>
                        <Link
                            href={`projects/${slug}`}
                            className='inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                            prefetch={false}
                        >
                            View Project
                        </Link>
                        {url && (
                            <Link
                                href={url}
                                className='inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                                prefetch={false}
                            >
                                GitHub
                            </Link>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
