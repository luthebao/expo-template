import { GlassContainer, GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { Container } from '@/components/containers';
import { Separator } from '@/components/layout';
import { EditScreenInfo, Heading } from '@/components/ui';

export default function ModalScreen() {
    const content = (
        <>
            <Heading level="h2">Modal</Heading>
            <Separator />
            <EditScreenInfo path="app/modal.tsx" />
            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </>
    );

    if (isLiquidGlassAvailable()) {
        return (
            <GlassContainer style={styles.glassContainer}>
                <GlassView style={styles.glassContent} glassEffectStyle="regular">
                    <Container variant="center">{content}</Container>
                </GlassView>
            </GlassContainer>
        );
    }

    return <Container variant="center">{content}</Container>;
}

const styles = StyleSheet.create({
    glassContainer: {
        flex: 1,
    },
    glassContent: {
        flex: 1,
    },
});
