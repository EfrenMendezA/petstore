import { defineComponent } from 'vue';
export default defineComponent({
  compatConfig: { MODE: 3, COMPONENT_V_MODEL: false },
  name: 'ContadorComponent',
  data() {
    const contador = 0;
    return { contador };
  },
  methods: {
    agregarContador() {
      this.contador++;
    },
  },
});
