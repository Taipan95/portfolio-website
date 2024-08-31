import SkillItem from '@/components/ui/skill-item';
import { SVGProps } from 'react';

export default function SkillsSection() {
    return (
        <section id='skills' className='py-12 md:py-24 lg:py-32'>
            <div className='container px-4 md:px-6'>
                <div className='space-y-4'>
                    <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                        Skills
                    </h2>
                    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                        <SkillItem skill={'ReactJS'} />
                        {/*<SkillItem skill={'MobX State Tree'} />*/}
                        {/*<SkillItem skill={'GraphQl'} />*/}
                        {/*<SkillItem skill={'Azure Pipelines'} />*/}
                        <SkillItem skill={'Node.js'} />
                        {/*<SkillItem skill={'Version Control (Git)'} />*/}
                        <SkillItem skill={'React Native'} />
                        <SkillItem skill={'Typescript'} />
                        {/*<SkillItem skill={'Electron'} />*/}
                        {/*<SkillItem skill={'JavaScript'} />*/}
                        <SkillItem skill={'NextJS'} />
                        {/*<SkillItem skill={'VueJS'} />*/}
                        <SkillItem skill={'CSS/SCSS'} />
                        {/*<SkillItem skill={'Material UI'} />*/}
                        {/*<SkillItem skill={'Jenkins'} />*/}
                    </div>
                </div>
            </div>
        </section>
    );
}
