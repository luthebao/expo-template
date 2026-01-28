import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import { View, type ViewProps } from 'react-native';

export type GlassCardProps = ViewProps & {
    children: React.ReactNode;
    glassStyle?: 'clear' | 'regular';
    tintColor?: string;
};

export function GlassCard({
    children,
    glassStyle = 'regular',
    tintColor,
    style,
    ...props
}: GlassCardProps) {
    if (!isLiquidGlassAvailable()) {
        return (
            <View style={style} {...props}>
                {children}
            </View>
        );
    }

    return (
        <GlassView
            style={style}
            glassEffectStyle={glassStyle}
            tintColor={tintColor}
            {...props}
        >
            {children}
        </GlassView>
    );
}
