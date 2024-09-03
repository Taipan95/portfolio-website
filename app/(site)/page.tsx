import Header from '@/components/header';
import ContactSection from '@/components/sections/contact';
import ProjectsSection from '@/components/sections/projects';
import SkillsSection from '@/components/sections/skills';
import WorkSection from '@/components/sections/work';
import {
    getPage,
    getProjects,
    getWorkExperienceItems,
} from '@/sanity/sanity-utils';

export default async function Home() {
    const cards = await getWorkExperienceItems();
    const projects = await getProjects();
    const homePage = await getPage('home');

    return (
        <main className='flex-1'>
            <Header heroImage={homePage.image} />
            <WorkSection cards={cards} />
            <ProjectsSection projects={projects} />
            <SkillsSection />
            <ContactSection />
        </main>
    );
}
