import Footer from '@/components/footer';
import Header from '@/components/header';
import ContactSection from '@/components/sections/contact';
import ProjectsSection from '@/components/sections/projects';
import SkillsSection from '@/components/sections/skills';
import WorkSection from '@/components/sections/work';
import {
    getHomepageHeader,
    getProjects,
    getWorkExperienceItems,
} from '@/sanity/sanity-utils';

export default async function Home() {
    const cards = await getWorkExperienceItems();
    const projects = await getProjects();
    const homePage = await getHomepageHeader();

    return (
        <main>
            <Header {...homePage} />
            <WorkSection cards={cards} />
            <ProjectsSection projects={projects} />
            <SkillsSection />
            {/*<ContactSection />*/}
            <Footer />
        </main>
    );
}
