import { Link, Stack } from 'expo-router';
import { Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { Container } from '@/components/containers';
import { Separator } from '@/components/layout';
import { EditScreenInfo, Heading } from '@/components/ui';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/color-scheme';

export default function HomeScreen() {
    const colorScheme = useColorScheme();

    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Tab One',
                    headerRight: () => (
                        <Link href="/modal" asChild>
                            <Pressable>
                                {({ pressed }) => (
                                    <FontAwesome
                                        name="info-circle"
                                        size={25}
                                        color={Colors[colorScheme ?? 'light'].text}
                                        style={{ opacity: pressed ? 0.5 : 1 }}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    ),
                }}
            />
            <Container variant="center">
                <Heading level="h2">Tab One</Heading>
                <Separator />
                <EditScreenInfo path="app/(tabs)/home/index.tsx" />
            </Container>
        </>
    );
}
