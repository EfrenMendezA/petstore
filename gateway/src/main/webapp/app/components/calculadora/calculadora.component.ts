import { defineComponent, ref } from 'vue';
export default defineComponent({
  compatConfig: { MODE: 3, COMPONENT_V_MODEL: false },
  name: 'CalculadoraComponent',
  setup() {
    const showModal = ref(false);
    const input = ref<string>('');

    const addToInput = (value: string) => {
      input.value += value;
    };

    const clearInput = () => {
      input.value = '';
    };

    const calculateResult = () => {
      try {
        // Evaluar expresión (puedes reemplazar esto con una biblioteca)
        input.value = eval(input.value).toString();
      } catch {
        input.value = 'Error';
      }
    };

    return {
      showModal,
      input,
      addToInput,
      clearInput,
      calculateResult,
    };
  },
});
