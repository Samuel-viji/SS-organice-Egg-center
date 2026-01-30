import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// Mock Blog Data
const items = [
    {
        slug: 'benefits-of-mudavanatukal',
        title: 'Why Mudavanatukal Kelangu is a Miracle Tuber',
        excerpt: 'Discover the ancient secrets of this powerful forest tuber known for healing joint pains.',
        date: 'Oct 12, 2023',
        category: 'Health'
    },
    {
        slug: 'real-honey-vs-commercial',
        title: 'Real Honey vs Commercial Honey: How to Spot the Difference',
        excerpt: 'Most honey in supermarkets is just sugar syrup. Here is how you can identify varying authentic wild honey.',
        date: 'Sep 28, 2023',
        category: 'Education'
    },
    {
        slug: 'traditional-recipes',
        title: 'Traditional Recipes using Forest Honey',
        excerpt: 'Simple, healthy, and delicious recipes that our grandmothers used to make.',
        date: 'Aug 15, 2023',
        category: 'Recipes'
    }
];

export default function BlogPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Header />
            <main className="flex-1">
                <section className="bg-forest-900 py-16 text-center text-beige">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Knowledge Hub</h1>
                        <p className="text-lg text-forest-200 max-w-2xl mx-auto">
                            Learn about forest foods, traditional health secrets, and sustainable living.
                        </p>
                    </div>
                </section>

                <Section>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {items.map((post) => (
                            <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                                <div className="aspect-[4/3] bg-forest-100 relative">
                                    {/* Placeholder Image */}
                                    <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-xs font-bold text-forest-800 uppercase tracking-widest">
                                        {post.category}
                                    </div>
                                </div>
                                <CardContent className="space-y-4 pt-6">
                                    <div className="text-xs text-forest-500">{post.date}</div>
                                    <h3 className="text-xl font-bold text-forest-900 line-clamp-2 leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-forest-700 line-clamp-3 text-sm">
                                        {post.excerpt}
                                    </p>
                                    <Button variant="ghost" size="sm" className="pl-0 hover:bg-transparent hover:text-earth-600">
                                        Read Article →
                                    </Button>
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
