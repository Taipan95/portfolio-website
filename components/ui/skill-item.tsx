import { ReactNode } from 'react';

interface IProps {
    skill: string;
    children?: ReactNode;
}

export default function SkillItem({ skill, children }: IProps) {
    return (
        <div className='flex items-center gap-2 rounded-lg bg-muted p-4 transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground'>
            {children}
            <span>{skill}</span>
        </div>
    );
}
