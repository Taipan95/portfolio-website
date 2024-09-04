import NavbarSection from '@/components/sections/navbar-section';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Sakis Evangelou',
    description: 'Frontend Software Engineer',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className={'scroll-smooth'}>
            <body className={`${inter.className} dark`}>
                {/*<header className='text-primary'>*/}
                {/*    <div className='flex justify-center gap-4 py-4'>*/}
                {/*        <NavbarSection />*/}
                {/*    </div>*/}
                {/*</header>*/}
                {children}
            </body>
        </html>
    );
}
