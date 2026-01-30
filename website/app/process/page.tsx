import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';

export default function ProcessPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Header />
            <main className="flex-1">
                <section className="bg-forest-900 py-16 text-center text-beige">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Process</h1>
                        <p className="text-lg text-forest-200 max-w-2xl mx-auto">
                            From the deep forests to your home, handled with care and respect.
                        </p>
                    </div>
                </section>

                <Section>
                    <div className="relative border-l-2 border-forest-200 ml-4 md:ml-0 md:pl-0 space-y-12 md:space-y-0">
                        {/* Step 1 */}
                        <div className="md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center relative">
                            <div className="md:text-right pl-8 md:pl-0">
                                <h3 className="text-2xl font-serif font-bold text-forest-900 mb-2">1. Traditional Sourcing</h3>
                                <p className="text-forest-700">Tribal communities identify mature tubers and honeycombs. We only harvest what is necessary, leaving enough for regeneration.</p>
                            </div>
                            <div className="absolute md:relative left-[-5px] md:left-auto w-4 h-4 bg-earth-500 rounded-full border-4 border-white shadow-sm shrink-0"></div>
                            <div className="hidden md:block"></div>
                        </div>

                        {/* Step 2 */}
                        <div className="md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center relative">
                            <div className="hidden md:block"></div>
                            <div className="absolute md:relative left-[-5px] md:left-auto w-4 h-4 bg-earth-500 rounded-full border-4 border-white shadow-sm shrink-0"></div>
                            <div className="pl-8 md:pl-0">
                                <h3 className="text-2xl font-serif font-bold text-forest-900 mb-2">2. Manual Cleaning</h3>
                                <p className="text-forest-700">The harvest is brought to our center where it is manually cleaned using spring water. No harsh chemicals or machines are used.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center relative">
                            <div className="md:text-right pl-8 md:pl-0">
                                <h3 className="text-2xl font-serif font-bold text-forest-900 mb-2">3. Sun Drying & Filtration</h3>
                                <p className="text-forest-700">Tubers are sun-dried naturally. Honey is double-filtered through muslin cloth to remove large impurities while retaining pollen.</p>
                            </div>
                            <div className="absolute md:relative left-[-5px] md:left-auto w-4 h-4 bg-earth-500 rounded-full border-4 border-white shadow-sm shrink-0"></div>
                            <div className="hidden md:block"></div>
                        </div>

                        {/* Step 4 */}
                        <div className="md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center relative">
                            <div className="hidden md:block"></div>
                            <div className="absolute md:relative left-[-5px] md:left-auto w-4 h-4 bg-earth-500 rounded-full border-4 border-white shadow-sm shrink-0"></div>
                            <div className="pl-8 md:pl-0">
                                <h3 className="text-2xl font-serif font-bold text-forest-900 mb-2">4. Quality Check & Packing</h3>
                                <p className="text-forest-700">Every batch is personally checked for quality before being packed in eco-friendly containers.</p>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
