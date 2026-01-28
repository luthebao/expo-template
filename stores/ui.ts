import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface UIStore {
    themePreference: 'light' | 'dark' | 'system';
    setThemePreference: (preference: 'light' | 'dark' | 'system') => void;

    modalVisible: boolean;
    openModal: () => void;
    closeModal: () => void;
}

export const useUIStore = create<UIStore>()(
    persist(
        (set) => ({
            themePreference: 'system',
            setThemePreference: (preference) => set({ themePreference: preference }),

            modalVisible: false,
            openModal: () => set({ modalVisible: true }),
            closeModal: () => set({ modalVisible: false }),
        }),
        {
            name: 'ui-storage',
            storage: createJSONStorage(() => AsyncStorage),
            partialize: (state) => ({ themePreference: state.themePreference }),
        }
    )
);
