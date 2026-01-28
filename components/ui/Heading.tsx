import { Text } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/color-scheme';
import { cn } from '@/components/lib/utils';

type HeadingProps = {
    children: React.ReactNode;
    level?: 'h1' | 'h2' | 'h3' | 'h4';
    className?: string;
    lightColor?: string;
    darkColor?: string;
};

const levelClasses = {
    h1: 'text-3xl font-bold',
    h2: 'text-2xl font-bold',
    h3: 'text-xl font-bold',
    h4: 'text-lg font-bold',
} as const;

export function Heading({
    children,
    level = 'h2',
    className,
    lightColor,
    darkColor,
}: HeadingProps) {
    const theme = useColorScheme() ?? 'light';
    const color = (theme === 'light' ? lightColor : darkColor) ?? Colors[theme].text;

    return (
        <Text className={cn(levelClasses[level], className)} style={{ color }}>
            {children}
        </Text>
    );
}
