import ProjectItem from '@/components/ui/project-item';
import { Project } from '@/lib/types';

interface IProps {
    projects: Project[];
}

export default function ProjectsSection({ projects }: IProps) {
    return (
        <section id='projects' className='py-12 md:py-24 lg:py-32'>
            <div className='container px-4 md:px-6'>
                <div className='space-y-4'>
                    <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                        Featured Projects
                    </h2>
                    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                        {projects.map((project) => (
                            <ProjectItem key={project._id} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
