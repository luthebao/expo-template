# expo-template

A production-ready Expo template with React 19, Expo Router v6, NativeWind 5, and modern tooling for building cross-platform apps (iOS, Android, Web).

## Quick Start

```bash
pnpm install
pnpm start        # Choose platform interactively
```

Or run directly:

```bash
pnpm ios          # iOS Simulator
pnpm android      # Android Emulator
pnpm web          # Web Browser
```

## Project Structure

```text
├── app/                    # Expo Router file-based routing
│   ├── _layout.tsx         # Root layout (fonts, providers, splash)
│   ├── (tabs)/             # Tab navigation group
│   │   ├── _layout.tsx     # Tab bar configuration (NativeTabs)
│   │   ├── home/           # Home tab screens
│   │   └── explore/        # Explore tab screens
│   ├── modal.tsx           # Modal screen
│   ├── +not-found.tsx      # 404 page
│   └── +html.tsx           # Web HTML wrapper
│
├── components/
│   ├── ui/                 # Base UI components
│   │   ├── Themed.tsx      # Theme-aware Text & View
│   │   ├── Heading.tsx     # Typography (h1-h4)
│   │   └── GlassCard.tsx   # Glass morphism card
│   ├── containers/         # Layout containers
│   │   ├── Container.tsx   # Flex container variants
│   │   └── ScrollContainer.tsx  # ScrollView with refresh
│   ├── layout/             # Structural components
│   │   ├── Section.tsx     # Flex section with spacing
│   │   └── Separator.tsx   # Divider component
│   └── lib/
│       └── utils.ts        # cn() class merging utility
│
├── hooks/
│   ├── color-scheme.ts     # useColorScheme (native)
│   ├── color-scheme.web.ts # useColorScheme (web)
│   └── api/                # React Query hooks
│       └── posts.ts        # Example API hooks
│
├── stores/
│   └── ui.ts               # Zustand store (theme, modals)
│
├── providers/
│   └── query-client.tsx    # React Query provider
│
├── constants/
│   └── Colors.ts           # Theme color definitions
│
├── style/
│   └── global.css          # Tailwind/NativeWind imports
│
└── assets/                 # Fonts and images
```

## Tech Stack

| Category  | Technology                                       |
|-----------|--------------------------------------------------|
| Framework | Expo SDK 54, React 19, React Native 0.81 |
| Routing | Expo Router v6 (file-based) |
| Styling | NativeWind 5 (Tailwind CSS for RN) |
| State | Zustand (client), React Query (server) |
| Storage | AsyncStorage (persisted Zustand) |
| Effects | expo-glass-effect, react-native-reanimated |

## Key Patterns

### Styling with NativeWind

```tsx
// Direct Tailwind classes on RN components
<View className="flex-1 bg-white dark:bg-black p-4">
  <Text className="text-lg font-bold">Hello</Text>
</View>

// Merge classes conditionally with cn()
import { cn } from '@/components/lib/utils';
<View className={cn("p-4", isActive && "bg-blue-500")} />
```

### Theme-Aware Components

```tsx
import { Text, View } from '@/components/ui/Themed';

// Uses theme colors automatically, with optional overrides
<View lightColor="#fff" darkColor="#000">
  <Text lightColor="#333" darkColor="#ccc">Themed text</Text>
</View>
```

### Platform-Specific Files

Create `.web.ts` files for web-specific implementations:

```text
hooks/
  color-scheme.ts      # Native implementation
  color-scheme.web.ts  # Web implementation (auto-selected)
```

### API Hooks Pattern

```tsx
// hooks/api/posts.ts
export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => fetch('/api/posts').then(r => r.json()),
  });
}

export function useCreatePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => fetch('/api/posts', { method: 'POST', body: JSON.stringify(data) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
  });
}
```

### Zustand Store Pattern

```tsx
// stores/ui.ts - Persisted to AsyncStorage
export const useUIStore = create<UIStore>()(
  persist(
    (set) => ({
      themePreference: 'system',
      setThemePreference: (pref) => set({ themePreference: pref }),
    }),
    {
      name: 'ui-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ themePreference: state.themePreference }),
    }
  )
);
```

## Adding New Routes

1. **New screen:** Create `app/my-screen.tsx` → accessible at `/my-screen`
2. **New tab:** Create `app/(tabs)/mytab/_layout.tsx` and `index.tsx`, add to tab config
3. **Modal:** Create screen file, add `presentation: 'modal'` in parent layout
4. **Nested routes:** Create folder with `_layout.tsx` for shared layout

## Configuration Files

| File                  | Purpose                               |
|-----------------------|---------------------------------------|
| `app.json` | Expo app config (name, icons, splash) |
| `tsconfig.json` | TypeScript config (strict, path alias @/*) |
| `metro.config.js` | Metro bundler + NativeWind |
| `postcss.config.mjs` | PostCSS for Tailwind |
| `pnpm-workspace.yaml` | pnpm hoisting config |
