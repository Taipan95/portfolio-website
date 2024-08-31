import WorkItem from '@/components/ui/work-item';
import { WorkExperience } from '@/lib/types';

export default function WorkSection({ cards }: { cards: WorkExperience[] }) {
    return (
        <section id='work' className='py-12 md:py-24 lg:py-32'>
            <div className='container px-4 md:px-6'>
                <div className='space-y-4'>
                    <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                        Work Experience
                    </h2>
                    <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                        {cards?.map((card, index) => (
                            <WorkItem key={index} {...card} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
