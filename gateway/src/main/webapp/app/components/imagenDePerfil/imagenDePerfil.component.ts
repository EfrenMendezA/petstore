import { defineComponent, ref, type Ref } from 'vue';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'ImageDePerfil',
  setup() {
    // Se crea una referencia
    const confirmationModal = ref<any>(null);

    // Usamos `ref` para manejar los datos individuales
    const selectedImage = ref<File | null>(null); // Usamos ref para valores primitivos
    const imageUrl = ref<string | null>(null); // URL de la imagen cargada
    const isImageValid = ref(true); // Validación básica de la imagen
    const errorMessage = ref<string>(''); // Mensaje de error si la imagen no es válida

    // Método para verificar el tamaño de la imagen
    const validateImageSize = (image: File) => {
      const maxSize = 4 * 1024 * 1024; // 4MB en bytes
      if (image.size > maxSize) {
        errorMessage.value = 'El tamaño de la imagen no debe exceder los 4MB.';
        isImageValid.value = false;
        return false;
      }
      isImageValid.value = true;
      errorMessage.value = ''; // Limpiar mensaje de error si la imagen es válida
      return true;
    };

    // Método para cargar la imagen y mostrarla en el div
    const loadImagePreview = () => {
      if (selectedImage.value && selectedImage.value.size > 0) {
        // Verificar el tamaño antes de mostrar la vista previa
        if (validateImageSize(selectedImage.value)) {
          // Crear una URL de la imagen para mostrarla
          imageUrl.value = URL.createObjectURL(selectedImage.value);
        }
      } else {
        isImageValid.value = false; // Si no es válida, deshabilitar el botón
      }
    };

    // Método para resetear el formulario cuando se cierra el modal
    const resetForm = () => {
      selectedImage.value = null;
      imageUrl.value = null;
      isImageValid.value = true;
    };

    // Manejar la confirmación
    const confirmarHandler = () => {
      if (selectedImage.value) {
        console.log('Imagen seleccionada:', selectedImage.value);
        // Aquí puedes manejar la lógica para confirmar la carga de la imagen
        loadImagePreview(); // Cargar la vista previa de la imagen seleccionada
        confirmationModal.value.hide(); // Cerrar el modal
      } else {
        isImageValid.value = false;
        console.log('No se ha seleccionado una imagen');
      }
    };

    // Manejar la apertura del modal
    const openHandler = () => {
      confirmationModal.value.show();
    };

    // Manejar la cancelación y el cierre del modal
    const cancelarHandler = () => {
      confirmationModal.value.hide();
      resetForm();
    };

    return {
      confirmationModal,
      selectedImage,
      imageUrl,
      isImageValid,
      errorMessage,
      loadImagePreview,
      resetForm,
      openHandler,
      cancelarHandler,
      confirmarHandler,
    };
  },
});
