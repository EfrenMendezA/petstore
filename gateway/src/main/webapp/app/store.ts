import { useAccountStore as useStore } from '@/shared/config/store/account-store';
export type AccountStore = ReturnType<typeof useStore>;
export { useStore };

import { useTranslationStore } from '@/shared/config/store/translation-store';
export type TranslationStore = ReturnType<typeof useTranslationStore>;
export { useTranslationStore };

import { useTareaStore } from '@/shared/config/store/tarea-store';
export type TareaStore = ReturnType<typeof useTareaStore>;
export { useTareaStore };

import { useCalculadoraStore } from '@/shared/config/store/calculadora-store';
export type CalculadoraStore = ReturnType<typeof useCalculadoraStore>;
export { useCalculadoraStore };
