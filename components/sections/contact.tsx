import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactSection() {
    return (
        <section
            id='contact'
            className='py-12 md:py-24 lg:py-32 border-t flex justify-center'
        >
            <div className='container px-4 md:px-6'>
                <div className='space-y-4'>
                    <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                        Get in Touch
                    </h2>
                    <div className='mx-auto w-full max-w-sm space-y-2'>
                        <form className='grid gap-4'>
                            <div className='grid gap-1'>
                                <Label htmlFor='name'>Name</Label>
                                <Input id='name' placeholder='Your name' />
                            </div>
                            <div className='grid gap-1'>
                                <Label htmlFor='email'>Email</Label>
                                <Input
                                    id='email'
                                    type='email'
                                    placeholder='ash@example.com'
                                />
                            </div>
                            <div className='grid gap-1'>
                                <Label htmlFor='message'>Message</Label>
                                <Textarea
                                    id='message'
                                    placeholder='Your message...'
                                />
                            </div>
                            <Button type='submit' className='w-full'>
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
