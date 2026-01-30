import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, CheckCircle, Leaf, ShieldCheck, Heart } from "lucide-react";
import Link from "next/link";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-forest-900 text-center text-beige">
          {/* Background Pattern/Image Overlay */}
          <div className="absolute inset-0 bg-[url('/bg-forest.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-forest-900/80 to-forest-800/90"></div>

          <div className="relative container z-10 px-4 space-y-8 animate-in fade-in zoom-in-95 duration-700">
            <div className="flex justify-center mb-4">
              <span className="bg-forest-700/50 text-emerald-100 px-4 py-1.5 rounded-full text-sm font-medium border border-forest-600 backdrop-blur-sm">
                Wild Harvested • 100% Organic • Traditional
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white drop-shadow-lg">
              Pure Mudavanatukal Kelangu <br className="hidden md:block" /> & Authentic Malai Thenu
            </h1>

            <p className="mx-auto max-w-2xl text-lg md:text-xl text-forest-100 leading-relaxed font-light">
              Direct from nature to your home. Experience the healing power of forest tubers and the sweetness of wild raw honey, gathered by traditional tribes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" variant="secondary" href="/products" className="gap-2">
                Visit Our Store <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" href="/process" className="text-beige border-beige hover:bg-beige hover:text-forest-900">
                Know Our Process
              </Button>
            </div>
          </div>
        </section>

        {/* Product Highlights */}
        <Section className="bg-beige">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-900">Nature's Finest Gifts</h2>
            <p className="text-forest-700 max-w-2xl mx-auto">Sourced responsibly from the deep forests, ensuring you get nothing but the purest ingredients.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {products.map((product) => (
              <Card key={product.id} className="group border-forest-200 hover:border-earth-500 hover:shadow-xl transition-all">
                <div className="aspect-video bg-forest-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-forest-900/10 group-hover:bg-transparent transition-colors"></div>
                  {/* Placeholder for real images */}
                  <div className="flex items-center justify-center h-full text-forest-300 font-serif text-4xl opacity-50 select-none">
                    {product.name.split(' ')[0]}
                  </div>
                </div>
                <CardHeader>
                  <h3 className="text-2xl font-serif font-bold text-forest-900 group-hover:text-earth-700 transition-colors">
                    {product.name}
                  </h3>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-forest-700 leading-relaxed">
                    {product.shortDescription}
                  </p>
                  <ul className="space-y-2">
                    {product.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-forest-800">
                        <CheckCircle className="w-4 h-4 text-earth-500" /> {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <Button variant="outline" size="sm" href="/products" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Why Choose Us */}
        <Section dark>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-900">
                Why Choose Our<br /><span className="text-earth-700">Forest Products?</span>
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center shrink-0">
                    <Leaf className="w-6 h-6 text-forest-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-forest-900">Sustainably Sourced</h3>
                    <p className="text-forest-700 mt-1">We respect nature. No trees are harmed, and we ensure bees are left with enough honey for their colonies.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-forest-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-forest-900">100% Chemical Free</h3>
                    <p className="text-forest-700 mt-1">Zero preservatives, zero additives. Just pure, unadulterated goodness from the forest to your table.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center shrink-0">
                    <Heart className="w-6 h-6 text-forest-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-forest-900">Traditional Wisdom</h3>
                    <p className="text-forest-700 mt-1">Sourced by local tribes who have understood the medicinal value of these products for generations.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-forest-800 rounded-3xl p-8 md:p-12 text-center text-beige relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-earth-500 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-serif font-bold">Visit Our Store</h3>
                <p className="text-forest-100">
                  Come experience the aroma and purity of our products firsthand. We would love to show you what real nature tastes like.
                </p>
                <div className="inline-block bg-beige text-forest-900 px-6 py-3 rounded-xl font-medium shadow-lg">
                  📍 Hill Station Main Road
                </div>
                <div className="pt-4">
                  <Button variant="secondary" href="/contact">Get Directions</Button>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
