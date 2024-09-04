import { HomepageHeader } from '@/lib/types';
import { LogoGithub, LogoLinkedin } from '@carbon/icons-react';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

export default function Header({
    image,
    linkedInUrl,
    gitHubUrl,
    content,
}: HomepageHeader) {
    return (
        <header className='bg-primary text-primary-foreground py-6 flex justify-center sm:py-12 md:py-16'>
            <div className='container px-4 md:px-6'>
                <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
                    <div className='flex flex-col justify-center space-y-4'>
                        <div className='space-y-2'>
                            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                                Sakis Evangelou
                            </h1>
                            <div className='max-w-[600px] text-primary-foreground/90 md:text-xl'>
                                <PortableText value={content} />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                            <a
                                href={gitHubUrl}
                                target={'_blank'}
                                rel={'noopener'}
                                className='inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                            >
                                <LogoGithub size={24} /> View Work
                            </a>
                            <a
                                href={linkedInUrl}
                                target={'_blank'}
                                rel={'noopener'}
                                className='inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                            >
                                <LogoLinkedin size={24} />
                                Get in Touch
                            </a>
                        </div>
                    </div>
                    <div className='relative mx-auto w-full order-first aspect-square overflow-hidden max-h-40 md:max-h-full rounded-2xl md:rounded-full object-cover lg:order-last'>
                        <Image
                            src={image || ''}
                            width='550'
                            height='550'
                            alt='Sakis Evangelou'
                            className='absolute inset-0 w-full h-full object-cover'
                            style={{
                                aspectRatio: '550/550',
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
