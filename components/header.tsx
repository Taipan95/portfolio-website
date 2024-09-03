import NavbarSection from '@/components/sections/navbar-section';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
    heroImage: string;
}

export default function Header({ heroImage }: IProps) {
    return (
        <header className='text-primary'>
            <div className='flex justify-center gap-4 py-4'>
                <NavbarSection />
            </div>
            <div className='container px-4 md:px-6 py-6 sm:py-12 md:py-16'>
                <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
                    <div className='flex flex-col justify-center space-y-4'>
                        <div className='space-y-2'>
                            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                                Sakis Evangelou
                            </h1>
                            <p className='max-w-[600px] text-primary/90 md:text-xl'>
                                Software Engineer with 5 years of experience
                                specializing in front-end development for web
                                and mobile applications. Proficient in using
                                React and TypeScript, and modern frameworks such
                                as Next.js to create high-performance,
                                user-friendly applications. Passionate about
                                exploring new technologies and continuously
                                improving skills through personal projects and
                                experiments.
                            </p>
                        </div>
                        <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                            <Link
                                href='#'
                                className='inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                                prefetch={false}
                            >
                                View Work
                            </Link>
                            <Link
                                href='#'
                                className='inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                                prefetch={false}
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                    <div className='relative mx-auto aspect-video overflow-hidden rounded-full object-cover sm:w-full lg:order-last lg:aspect-square'>
                        <Image
                            src={heroImage || ''}
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
