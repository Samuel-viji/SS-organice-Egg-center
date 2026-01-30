import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    dark?: boolean;
}

export function Section({ id, className, children, dark = false }: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "py-16 md:py-24",
                dark ? "bg-forest-50" : "bg-transparent",
                className
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                {children}
            </div>
        </section>
    );
}
