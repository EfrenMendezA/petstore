import { defineComponent, ref, type Ref } from 'vue';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'Modal',
  setup() {
    const abrirModalHandler = () => {
      miModal.value.show();
    };

    const miModal = ref<any>(null);

    return {
      abrirModalHandler,
      miModal,
    };
  },
});
