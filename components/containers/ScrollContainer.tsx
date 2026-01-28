import { ScrollView, RefreshControl } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/color-scheme';
import { cn } from '@/components/lib/utils';

type ScrollContainerProps = {
    children: React.ReactNode;
    refreshing?: boolean;
    onRefresh?: () => void;
    padding?: 'none' | 'sm' | 'md' | 'lg';
    className?: string;
    contentClassName?: string;
    lightColor?: string;
    darkColor?: string;
};

const paddingClasses = {
    none: '',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
} as const;

export function ScrollContainer({
    children,
    refreshing = false,
    onRefresh,
    padding = 'none',
    className,
    contentClassName,
    lightColor,
    darkColor,
}: ScrollContainerProps) {
    const theme = useColorScheme() ?? 'light';
    const backgroundColor =
        (theme === 'light' ? lightColor : darkColor) ?? Colors[theme].background;

    return (
        <ScrollView
            className={cn('flex-1', className)}
            contentContainerClassName={cn(paddingClasses[padding], contentClassName)}
            style={{ backgroundColor }}
            refreshControl={
                onRefresh ? (
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                ) : undefined
            }
        >
            {children}
        </ScrollView>
    );
}
