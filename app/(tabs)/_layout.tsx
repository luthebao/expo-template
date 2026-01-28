import FontAwesome from '@expo/vector-icons/FontAwesome';
import { NativeTabs, Icon, Label, VectorIcon } from 'expo-router/unstable-native-tabs';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/color-scheme';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <NativeTabs tintColor={Colors[colorScheme ?? 'light'].tint}>
            <NativeTabs.Trigger name="home">
                <Label>Tab One</Label>
                <Icon
                    sf={{ default: 'curlybraces', selected: 'curlybraces' }}
                    androidSrc={<VectorIcon family={FontAwesome} name="code" />}
                />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="explore">
                <Label>Tab Two</Label>
                <Icon
                    sf={{ default: 'curlybraces', selected: 'curlybraces' }}
                    androidSrc={<VectorIcon family={FontAwesome} name="code" />}
                />
            </NativeTabs.Trigger>
        </NativeTabs>
    );
}
