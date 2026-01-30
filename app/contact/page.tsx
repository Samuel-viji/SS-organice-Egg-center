import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Header />
            <main className="flex-1">
                <section className="bg-forest-900 py-16 text-center text-beige">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
                    <p className="text-lg text-forest-200">We would love to hear from you.</p>
                </section>

                <Section>
                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-forest-50 p-8 rounded-2xl border border-forest-100">
                                <h2 className="text-2xl font-serif font-bold text-forest-900 mb-6">Get in Touch</h2>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-earth-600 shadow-sm shrink-0">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-forest-900">Visit Us</h3>
                                            <p className="text-forest-600">123 Forest Road, Hill Station,<br />Tamil Nadu, India</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-earth-600 shadow-sm shrink-0">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-forest-900">Call Us</h3>
                                            <p className="text-forest-600">+91 98765 43210</p>
                                            <p className="text-forest-400 text-sm">Mon-Sat from 9am to 7pm</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-earth-600 shadow-sm shrink-0">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-forest-900">Email Us</h3>
                                            <p className="text-forest-600">hello@organics.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="aspect-video bg-forest-100 rounded-2xl flex items-center justify-center text-forest-400">
                                Google Map Embed
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-forest-100">
                            <h2 className="text-2xl font-serif font-bold text-forest-900 mb-6">Send a Message</h2>
                            <form className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-forest-700">Name</label>
                                        <input type="text" id="name" className="w-full px-4 py-2 rounded-lg border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500" placeholder="Your name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-forest-700">Phone</label>
                                        <input type="tel" id="phone" className="w-full px-4 py-2 rounded-lg border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500" placeholder="Your phone" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-forest-700">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500" placeholder="your@email.com" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-forest-700">Message</label>
                                    <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-lg border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500" placeholder="How can we help you?"></textarea>
                                </div>
                                <Button type="submit" className="w-full">Send Message</Button>
                            </form>
                        </div>

                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
