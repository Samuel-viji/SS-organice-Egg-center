import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Priya Sundaram',
        role: 'Home Maker, Chennai',
        content: 'The Mudavanatukal Kelangu has done wonders for my mother’s knee pain. We were skeptical at first, but the results are genuine. Thank you for making this available.',
        rating: 5,
    },
    {
        name: 'Rajesh Kumar',
        role: 'Fitness Coach, Bangalore',
        content: 'I use the Malai Thenu as a pre-workout booster. Tastes completely different from the store-bought ones. You can feel the rawness and purity.',
        rating: 5,
    },
    {
        name: 'Anitha Ramesh',
        role: 'Doctor, Coimbatore',
        content: 'As a medical professional, I value natural remedies. The sourcing process you follow ensures the medicinal properties are intact. Highly recommended.',
        rating: 5,
    },
    {
        name: 'Senthil V.',
        role: 'Customer',
        content: 'Fast delivery and excellent packaging. The honey bottle was sealed perfectly. Will order again.',
        rating: 4,
    },
];

export default function TestimonialsPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Header />
            <main className="flex-1">
                <section className="bg-forest-900 py-16 text-center text-beige">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Customer Stories</h1>
                        <p className="text-lg text-forest-200 max-w-2xl mx-auto">
                            Trusted by families across the region.
                        </p>
                    </div>
                </section>

                <Section>
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((review, i) => (
                            <Card key={i} className="bg-forest-50 border-none">
                                <CardContent className="pt-8">
                                    <Quote className="w-10 h-10 text-earth-500 mb-4 opacity-50" />
                                    <p className="text-forest-700 text-lg italic mb-6">"{review.content}"</p>

                                    <div className="flex items-center justify-between border-t border-forest-200 pt-4">
                                        <div>
                                            <h4 className="font-bold text-forest-900">{review.name}</h4>
                                            <span className="text-sm text-forest-600">{review.role}</span>
                                        </div>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, starIndex) => (
                                                <Star
                                                    key={starIndex}
                                                    className={`w-4 h-4 ${starIndex < review.rating ? 'fill-earth-500 text-earth-500' : 'text-forest-300'}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
