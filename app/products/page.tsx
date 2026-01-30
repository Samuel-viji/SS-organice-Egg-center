import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { products } from '@/data/products';
import { Check, Info } from 'lucide-react';

export default function ProductsPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Header />
            <main className="flex-1">

                <section className="bg-forest-900 py-16 text-center text-beige">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Products</h1>
                        <p className="text-lg text-forest-200 max-w-2xl mx-auto">
                            Pure, potent, and untouched by chemicals.
                        </p>
                    </div>
                </section>

                <div className="divide-y divide-forest-100">
                    {products.map((product, index) => (
                        <Section key={product.id} className={index % 2 === 1 ? "bg-forest-50" : ""}>
                            <div className="grid lg:grid-cols-2 gap-12 items-start">
                                {/* Image Side */}
                                <div className={`aspect-square bg-white rounded-2xl border border-forest-100 flex items-center justify-center relative overflow-hidden shadow-sm ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <div className="text-forest-200 font-serif text-5xl opacity-50">
                                        {product.name}
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-900 mb-4">{product.name}</h2>
                                        <p className="text-lg text-forest-700 leading-relaxed">{product.description}</p>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="font-bold text-forest-900 flex items-center gap-2">
                                            <Check className="w-5 h-5 text-earth-600" />
                                            Health Benefits
                                        </h3>
                                        <ul className="grid sm:grid-cols-2 gap-3 pl-2">
                                            {product.benefits.map((benefit, i) => (
                                                <li key={i} className="text-forest-700 text-sm list-disc list-inside marker:text-earth-500">
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="p-6 bg-beige/50 rounded-xl border border-beige-dark space-y-4">
                                        <h3 className="font-bold text-forest-900 flex items-center gap-2">
                                            <Info className="w-5 h-5 text-forest-600" />
                                            Usage & Storage
                                        </h3>
                                        <p className="text-sm text-forest-800">
                                            <strong>Usage:</strong> {product.usage}
                                        </p>
                                        <p className="text-sm text-forest-800">
                                            <strong>Storage:</strong> Store in a cool, dry place away from direct sunlight.
                                        </p>
                                    </div>

                                    <div className="pt-4 flex gap-4">
                                        <Button size="lg">Available at Store</Button>
                                        <Button size="lg" variant="outline" href="/contact">Contact for Availability</Button>
                                    </div>
                                </div>
                            </div>
                        </Section>
                    ))}
                </div>

            </main>
            <Footer />
        </div>
    );
}
