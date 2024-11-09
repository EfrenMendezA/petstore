import { defineComponent, ref } from 'vue';

export default defineComponent({
  compatConfig: { MODE: 3, COMPONENT_V_MODEL: false },
  name: 'Imagen',
  setup() {
    // Usamos `ref` para manejar los datos individuales
    const selectedImage = ref<File | null>(null); // Usamos ref para valores primitivos
    const imageUrl = ref<string | null>(null); // URL de la imagen cargada
    const isImageValid = ref(true); // Validación básica de la imagen

    // Método para cargar la imagen y mostrarla en el div
    const uploadImage = () => {
      if (selectedImage.value && selectedImage.value.size > 0) {
        // Crear una URL de la imagen para mostrarla
        imageUrl.value = URL.createObjectURL(selectedImage.value);
        // Si usas BootstrapVue, puedes cerrar el modal aquí
        // this.$bvModal.hide('modal-image-upload'); // Comentado, ya que no tienes $bvModal
      } else {
        isImageValid.value = false; //pinta la caja de texto
        // Si no es válida, deshabilitar el botón
      }
    };

    // Método para resetear el formulario cuando se cierra el modal
    const resetForm = () => {
      selectedImage.value = null;
      imageUrl.value = null;
      isImageValid.value = true;
    };

    return {
      selectedImage,
      imageUrl,
      isImageValid,
      uploadImage,
      resetForm,
    };
  },
});
