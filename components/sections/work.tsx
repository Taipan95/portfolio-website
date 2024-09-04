import WorkItem from '@/components/ui/work-item';
import { WorkExperience } from '@/lib/types';

export default function WorkSection({ cards }: { cards: WorkExperience[] }) {
    return (
        <section
            id='work'
            className='py-12 md:py-24 lg:py-32 flex justify-center'
        >
            <div className='container px-4 md:px-6'>
                <div className='space-y-4'>
                    <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                        Work Experience
                    </h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {cards?.map((card, index) => (
                            <WorkItem key={index} {...card} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
