import SkillItem from '@/components/ui/skill-item';
import { LogoReact, NextFilled } from '@carbon/icons-react';
import { LogoTsIcon } from '@sanity/icons';

export default function SkillsSection() {
    return (
        <section
            id='skills'
            className='py-12 md:py-24 lg:py-32 flex justify-center'
        >
            <div className='container px-4 md:px-6'>
                <div className='space-y-4'>
                    <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                        Skills
                    </h2>
                    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                        <SkillItem skill={'ReactJS'}>
                            <LogoReact className='w-6 h-6' />
                        </SkillItem>
                        <SkillItem skill={'React Native'}>
                            <LogoReact className='w-6 h-6' />
                        </SkillItem>
                        <SkillItem skill={'Typescript'}>
                            <LogoTsIcon className='w-6 h-6' />
                        </SkillItem>
                        <SkillItem skill={'NextJS'}>
                            <NextFilled />
                        </SkillItem>
                        <SkillItem skill={'CSS/SCSS'} />
                    </div>
                </div>
            </div>
        </section>
    );
}
