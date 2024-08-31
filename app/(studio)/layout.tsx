import type { Metadata } from 'next';
import '../globals.css';

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
        <html lang='en'>
            <body className={'dark'}>{children}</body>
        </html>
    );
}
