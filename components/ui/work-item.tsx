import { WorkExperience } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

export default function WorkItem({
    slug,
    image,
    name,
    company_position,
    short_description,
}: WorkExperience) {
    return (
        <div className='bg-accent rounded-lg shadow-lg overflow-hidden w-full grid md:grid-cols-1'>
            <Image
                src={image || '/placeholder.svg'}
                width={600}
                height={400}
                alt={name}
                className={'aspect-video object-cover bg-white'}
            />
            <div className='p-4 space-y-2'>
                <h3 className='text-xl font-bold'>{name}</h3>
                <p className='text-muted-foreground'>{company_position}</p>
                <div className='prose text-muted-foreground'>
                    {short_description}
                </div>
            </div>
            <Link
                href={`work/${slug}`}
                className='inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                prefetch={false}
            >
                Read more
            </Link>
        </div>
    );
}
