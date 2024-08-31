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
            <body
                className={`${inter.className} flex flex-col justify-center items-center dark`}
            >
                {children}
            </body>
        </html>
    );
}
