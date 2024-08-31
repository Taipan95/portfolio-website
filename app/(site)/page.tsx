import Header from '@/components/header';
import ContactSection from '@/components/sections/contact';
import ProjectsSection from '@/components/sections/projects';
import SkillsSection from '@/components/sections/skills';
import WorkSection from '@/components/sections/work';
import { getProjects, getWorkExperienceItems } from '@/sanity/sanity-utils';

export default async function Home() {
    const cards = await getWorkExperienceItems();
    const projects = await getProjects();

    return (
        <main className='flex-1'>
            <Header />
            <WorkSection cards={cards} />
            <ProjectsSection projects={projects} />
            <SkillsSection />
            <ContactSection />
        </main>
    );
}
