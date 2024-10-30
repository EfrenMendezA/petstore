import { defineComponent } from 'vue';

export default defineComponent({
  compatConfig: { MODE: 3, COMPONENT_V_MODEL: false },
  name: 'VIfComponent',
  data() {
    return {
      edad: null as number | null,
      entrada: '',
      errorMensaje: '',
    };
  },
  methods: {
    calcularEdad() {
      const regex = /^[0-9]*$/;
      if (!regex.test(this.entrada)) {
        this.errorMensaje = 'Por favor, introduce solo números.';
        this.entrada = this.entrada.replace(/[^0-9]/g, ''); // Limpiar la entrada
        this.edad = null; //Resetear la edad
        return; // Salir del método
      }

      const parseEdad = parseInt(this.entrada);

      //verificar que la edad sea un número válido y esté en un rango razonable
      if (!isNaN(parseEdad)) {
        if (parseEdad < 0 || parseEdad > 120) {
          this.errorMensaje = 'Por favor, introduce una edad válida (0-120).';
          this.edad = null; // Resetear la edad
        } else {
          this.edad = parseEdad; // Asignar la edad
          this.errorMensaje = ''; // Limpiar el mensaje de error
        }
      } else {
        this.errorMensaje = 'Entrada inválida, no es un número.';
        this.edad = null; // Resetear la edad
      }
    },
  },
});
