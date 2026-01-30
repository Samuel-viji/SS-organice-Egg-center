"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Process', href: '/process' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-forest-200 bg-beige/80 backdrop-blur-md">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    {/* Placeholder for Logo Image if available, else text */}
                    <div className="bg-forest-700 p-1.5 rounded-lg text-white">
                        <ShoppingBag size={24} />
                    </div>
                    <span className="font-serif text-xl font-bold text-forest-900 leading-tight">
                        SS Organic <br className="sm:hidden" /> & Egg Center
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-forest-800 hover:text-earth-700 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="primary" size="sm" href="/products">
                        Visit Store
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-forest-900 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t border-forest-200 bg-beige absolute w-full left-0 animate-in slide-in-from-top-5 fade-in-20">
                    <div className="container mx-auto flex flex-col gap-4 p-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-forest-800 py-2 border-b border-forest-100 hover:text-earth-700"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button variant="primary" size="lg" href="/products" className="w-full mt-2" onClick={() => setIsOpen(false)}>
                            Visit Store
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
