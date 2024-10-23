import { defineStore } from 'pinia';

export const useCalculadoraStore = defineStore('calculadora', {
  state: () => ({
    isVisible: true,
  }),
  actions: {
    toggleCalculadora() {
      this.isVisible = !this.isVisible;
    },
  },
});
