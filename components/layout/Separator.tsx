import { View } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/color-scheme';
import { cn } from '@/components/lib/utils';

type SeparatorProps = {
    orientation?: 'horizontal' | 'vertical';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    lightColor?: string;
    darkColor?: string;
};

const horizontalSizeClasses = {
    sm: 'my-4',
    md: 'my-8',
    lg: 'my-12',
} as const;

const verticalSizeClasses = {
    sm: 'mx-4',
    md: 'mx-8',
    lg: 'mx-12',
} as const;

export function Separator({
    orientation = 'horizontal',
    size = 'md',
    className,
    lightColor = '#eee',
    darkColor = 'rgba(255,255,255,0.1)',
}: SeparatorProps) {
    const theme = useColorScheme() ?? 'light';
    const backgroundColor = theme === 'light' ? lightColor : darkColor;

    const isHorizontal = orientation === 'horizontal';
    const sizeClass = isHorizontal
        ? horizontalSizeClasses[size]
        : verticalSizeClasses[size];

    return (
        <View
            className={cn(
                isHorizontal ? 'h-px w-4/5' : 'w-px h-full',
                sizeClass,
                className
            )}
            style={{ backgroundColor }}
        />
    );
}
