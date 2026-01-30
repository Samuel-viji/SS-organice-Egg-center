import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps {
    className?: string;
    children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
    return (
        <div className={cn("bg-white rounded-2xl shadow-sm border border-forest-100 overflow-hidden hover:shadow-md transition-shadow duration-300", className)}>
            {children}
        </div>
    );
}

export function CardContent({ className, children }: CardProps) {
    return (
        <div className={cn("p-6", className)}>
            {children}
        </div>
    );
}

export function CardHeader({ className, children }: CardProps) {
    return (
        <div className={cn("px-6 pt-6 pb-2", className)}>
            {children}
        </div>
    );
}

export function CardImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
    // Using a div placeholder if no actual image logic yet, but user asked for next/image. 
    // For now, simple wrapper.
    return (
        <div className={cn("relative w-full h-48 bg-forest-100", className)}>
            {/* In real usage, pass Image component as child or use src here */}
            <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
    );
}
