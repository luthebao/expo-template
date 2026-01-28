import { View } from 'react-native';

import { cn } from '@/components/lib/utils';

type SectionProps = {
    children: React.ReactNode;
    spacing?: 'none' | 'sm' | 'md' | 'lg';
    align?: 'start' | 'center' | 'end';
    className?: string;
};

const spacingClasses = {
    none: '',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
} as const;

const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
} as const;

export function Section({
    children,
    spacing = 'md',
    align = 'start',
    className,
}: SectionProps) {
    return (
        <View className={cn(spacingClasses[spacing], alignClasses[align], className)}>
            {children}
        </View>
    );
}
