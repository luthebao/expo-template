import { Stack } from 'expo-router';

import { Container } from '@/components/containers';
import { Separator } from '@/components/layout';
import { EditScreenInfo, Heading } from '@/components/ui';

export default function ExploreScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Tab Two' }} />
            <Container variant="center">
                <Heading level="h2">Tab Two</Heading>
                <Separator />
                <EditScreenInfo path="app/(tabs)/explore/index.tsx" />
            </Container>
        </>
    );
}
