import { defineComponent, ref } from 'vue';
export default defineComponent({
  compatConfig: { MODE: 3, COMPONENT_V_MODEL: false },
  name: 'EfrenComponent',
  setup() {
    const showModal = ref(false);
    return {
      showModal,
    };
  },
});
