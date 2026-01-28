import { View as DefaultView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/color-scheme';
import { cn } from '@/components/lib/utils';

type ContainerProps = {
    children: React.ReactNode;
    variant?: 'center' | 'start' | 'end' | 'between';
    safe?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg';
    className?: string;
    lightColor?: string;
    darkColor?: string;
};

const variantClasses = {
    center: 'flex-1 items-center justify-center',
    start: 'flex-1 items-center justify-start',
    end: 'flex-1 items-center justify-end',
    between: 'flex-1 items-center justify-between',
} as const;

const paddingClasses = {
    none: '',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
} as const;

export function Container({
    children,
    variant = 'center',
    safe = false,
    padding = 'none',
    className,
    lightColor,
    darkColor,
}: ContainerProps) {
    const theme = useColorScheme() ?? 'light';
    const backgroundColor =
        (theme === 'light' ? lightColor : darkColor) ?? Colors[theme].background;

    const ViewComponent = safe ? SafeAreaView : DefaultView;

    return (
        <ViewComponent
            className={cn(variantClasses[variant], paddingClasses[padding], className)}
            style={{ backgroundColor }}
        >
            {children}
        </ViewComponent>
    );
}
