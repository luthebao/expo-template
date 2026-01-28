import { Link, Stack } from 'expo-router';

import { Container } from '@/components/containers';
import { Heading, Text } from '@/components/ui';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops!' }} />
            <Container variant="center" padding="md">
                <Heading level="h2">This screen doesn't exist.</Heading>

                <Link href="/(tabs)/home" className="mt-4 py-4">
                    <Text className="text-sm text-[#2e78b7]">Go to home screen!</Text>
                </Link>
            </Container>
        </>
    );
}
