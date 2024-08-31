import { SVGProps } from 'react';

export default function SkillItem({ skill }: { skill: string }) {
    return (
        <div className='flex items-center gap-2 rounded-lg bg-muted p-4 transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground'>
            <CodepenIcon className='w-6 h-6' />
            <span>{skill}</span>
        </div>
    );
}

function CodepenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <polygon points='12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2' />
            <line x1='12' x2='12' y1='22' y2='15.5' />
            <polyline points='22 8.5 12 15.5 2 8.5' />
            <polyline points='2 15.5 12 8.5 22 15.5' />
            <line x1='12' x2='12' y1='2' y2='8.5' />
        </svg>
    );
}
