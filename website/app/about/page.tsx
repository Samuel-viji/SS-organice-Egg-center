import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Header />
            <main className="flex-1">

                {/* Header */}
                <section className="bg-forest-900 py-16 text-center text-beige">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Story</h1>
                        <p className="text-lg text-forest-200 max-w-2xl mx-auto">
                            Rooted in tradition, driven by nature. The journey of SS Organic & Egg Center.
                        </p>
                    </div>
                </section>

                <Section>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-serif font-bold text-forest-900">A Family Tradition</h2>
                            <p className="text-forest-700 leading-relaxed">
                                For generations, our family has lived in harmony with the forests. We realized that the modern world was losing touch with the incredible healing goodness that nature provides freely.
                            </p>
                            <p className="text-forest-700 leading-relaxed">
                                We started as a small community initiative to help local tribes sell their harvest of Mudavanatukal Kelangu and wild honey. Today, we stand as a bridge between the deep forests and your home, ensuring that you get products that are as pure as the day they were harvested.
                            </p>
                        </div>
                        <div className="aspect-square bg-forest-100 rounded-2xl flex items-center justify-center text-forest-400 font-serif italic text-2xl">
                            [Family/Farm Image]
                        </div>
                    </div>
                </Section>

                <Section dark>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-forest-900">Our Core Values</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-forest-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-forest-800 mb-3">Sustainability</h3>
                            <p className="text-forest-600">We never over-harvest. We ensure that our sourcing methods actually help the forest thrive rather than depleting it.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-forest-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-forest-800 mb-3">Transparency</h3>
                            <p className="text-forest-600">Know exactly what you are eating. We manage the entire supply chain from the forest floor to your jar.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-forest-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-forest-800 mb-3">Respect for Nature</h3>
                            <p className="text-forest-600">We believe that nature is not a resource to be exploited, but a gift to be cherished and protected.</p>
                        </div>
                    </div>
                </Section>

            </main>
            <Footer />
        </div>
    );
}
