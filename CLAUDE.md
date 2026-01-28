# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Expo Router v6 React Native app with web support, using NativeWind 5 (Tailwind CSS for React Native). Targets iOS, Android, and web platforms.

## Commands

```bash
pnpm start          # Start dev server (choose platform interactively)
pnpm android        # Launch on Android emulator
pnpm ios            # Launch on iOS simulator
pnpm web            # Launch web app in browser
```

Package manager: **pnpm**

## Architecture

### File-Based Routing (Expo Router v6)

- `app/_layout.tsx` - Root layout: font loading, splash screen, providers (QueryProvider wraps everything)
- `app/(tabs)/` - Tab navigation using `NativeTabs` (native iOS/Android tabs)
- `app/(tabs)/home/` and `app/(tabs)/explore/` - Each tab has its own `_layout.tsx` + `index.tsx`
- `app/modal.tsx` - Modal screen with `presentation: 'modal'`
- `app/+not-found.tsx` - 404 error boundary
- `app/+html.tsx` - Web-specific HTML wrapper

### State Management

- **Zustand** (`stores/ui.ts`) - UI state with AsyncStorage persistence
- **React Query** (`providers/query-client.tsx`) - Server state, staleTime: 60s, retry: 1
- API hooks in `hooks/api/` follow pattern: `useQuery` for reads, `useMutation` for writes

### Component Organization

- `components/ui/` - Base UI components (Themed, Heading, GlassCard)
- `components/containers/` - Layout containers (Container, ScrollContainer with refresh)
- `components/layout/` - Structural components (Section, Separator)
- `components/lib/utils.ts` - `cn()` function for Tailwind class merging (clsx + tailwind-merge)

### Platform-Specific Code

Files use `.web.ts` suffix for web-specific implementations:

- `hooks/color-scheme.ts` (native) vs `hooks/color-scheme.web.ts` (web)
- `hooks/client-only-value.ts` vs `hooks/client-only-value.web.ts`

### Theme System

- `useColorScheme()` hook returns current theme
- Colors defined in `constants/Colors.ts` (light/dark variants)
- Themed components accept `lightColor`/`darkColor` props for overrides
- User preference stored in Zustand: `'light' | 'dark' | 'system'`

### Styling with NativeWind 5

- Use Tailwind classes directly: `<View className="flex-1 bg-white dark:bg-black">`
- Merge classes with `cn()`: `cn("base-class", conditional && "extra-class")`
- Global styles in `style/global.css`
- Metro configured with NativeWind middleware in `metro.config.js`

## Conventions

- **Path alias:** Use `@/*` for imports from project root
- **Indentation:** 4 spaces
- **TypeScript:** Strict mode enabled
- **Typed routes:** Expo Router typed routes experiment enabled
- **Component props:** Support `className` + `lightColor`/`darkColor` for theme overrides
