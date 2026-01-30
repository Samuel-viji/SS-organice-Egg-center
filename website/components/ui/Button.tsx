import React from 'react';
import Link from 'next/link';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
}

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    href,
    children,
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 disabled:pointer-events-none disabled:opacity-50';

    const variants = {
        primary: 'bg-forest-700 text-white hover:bg-forest-800 shadow-md',
        secondary: 'bg-earth-700 text-white hover:bg-earth-600 shadow-md',
        outline: 'border-2 border-forest-700 text-forest-700 hover:bg-forest-50',
        ghost: 'text-forest-800 hover:bg-forest-100/50',
    };

    const sizes = {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
    };

    const styles = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
        return (
            <Link href={href} className={styles}>
                {children}
            </Link>
        );
    }

    return (
        <button className={styles} {...props}>
            {children}
        </button>
    );
}
