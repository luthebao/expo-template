# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Expo Router-based React Native app with web support, using NativeWind (Tailwind CSS for React Native). App name: "expo-template".

## Commands

```bash
pnpm start          # Start dev server (choose platform)
pnpm android        # Launch on Android emulator
pnpm ios            # Launch on iOS simulator
pnpm web            # Launch web app in browser
```

Package manager: **pnpm**

## Architecture

### File-Based Routing (Expo Router v6)

- `app/` - Route files following Expo Router conventions
- `app/_layout.tsx` - Root layout with font loading, splash screen, and theme provider
- `app/(tabs)/` - Tab navigation group with `_layout.tsx` configuring tabs
- `app/+not-found.tsx` - 404 error boundary
- `app/+html.tsx` - Web-specific HTML wrapper

### Component Patterns

- `components/Themed.tsx` - Theme-aware View and Text wrappers accepting `lightColor`/`darkColor` props
- Platform-specific files use `.web.ts` suffix (e.g., `useColorScheme.ts` vs `useColorScheme.web.ts`)
- `useClientOnlyValue()` handles server/client rendering differences

### Theme System

- Light/dark mode via `useColorScheme()` hook
- Color palette defined in `constants/Colors.ts`
- All UI components should use Themed wrappers or accept theme color props

### Styling

- NativeWind 5 (Tailwind CSS for React Native)
- Global styles in `style/global.css`
- Can use Tailwind classes directly on React Native components

## Conventions

- **Path alias:** Use `@/*` for imports from project root
- **Indentation:** 4 spaces (configured in workspace settings)
- **TypeScript:** Strict mode enabled
- **Typed routes:** Expo Router typed routes experiment enabled
