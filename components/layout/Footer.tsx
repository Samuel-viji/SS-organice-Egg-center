import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-forest-900 text-forest-100">
            <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-beige">Mudavanatukal & Malai Thenu</h3>
                        <p className="text-forest-200 text-sm leading-relaxed">
                            Bringing you pure organic forest products directly from nature. Sustainable, chemical-free, and traditionally sourced for your well-being.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-beige">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-earth-500 transition-colors">Our Story</Link></li>
                            <li><Link href="/products" className="hover:text-earth-500 transition-colors">Products</Link></li>
                            <li><Link href="/process" className="hover:text-earth-500 transition-colors">Sourcing Process</Link></li>
                            <li><Link href="/blog" className="hover:text-earth-500 transition-colors">Knowledge Hub</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-beige">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-earth-500 shrink-0" />
                                <span>123 Forest Road, Hill Station,<br />Tamil Nadu, India - 600000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-earth-500 shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-earth-500 shrink-0" />
                                <span>hello@organics.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social / Hours */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-beige">Opening Hours</h4>
                        <p className="text-sm text-forest-200">
                            Mon - Sat: 9:00 AM - 7:00 PM<br />
                            Sunday: Closed
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="p-2 bg-forest-800 rounded-full hover:bg-earth-700 transition-colors" aria-label="Facebook">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-forest-800 rounded-full hover:bg-earth-700 transition-colors" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-forest-800 rounded-full hover:bg-earth-700 transition-colors" aria-label="WhatsApp">
                                <Phone className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="mt-12 border-t border-forest-800 pt-8 text-center text-sm text-forest-400">
                    <p>&copy; {new Date().getFullYear()} Mudavanatukal Kelangu & Malai Thenu. All rights reserved.</p>
                    <div className="mt-2 flex justify-center gap-4">
                        <Link href="/privacy" className="hover:text-beige">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-beige">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
