import { defineComponent, ref } from 'vue';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'ImageOptionApi',
  data() {
    return {
      // Referencia del modal
      selectedImage: null, // Archivo seleccionado por el usuario
      imageUrl: null, // URL de la imagen para mostrarla
      isImageValid: true, // Estado de validación de la imagen (si es válida o no)
    };
  },
  methods: {
    // Método para abrir el modal
    openHandler() {
      this.$refs.confirmationModal.show();
    },
    // Método para cancelar (cerrar modal)
    cancelarHandler() {
      this.$refs.confirmationModal.hide();
    },
    // Método para confirmar y cargar la imagen
    confirmarHandler() {
      if (this.selectedImage) {
        // Usamos un FileReader para convertir la imagen en una URL
        const reader = new FileReader();
        reader.onload = () => {
          this.imageUrl = reader.result; // Guardamos la URL de la imagen cargada
        };
        reader.readAsDataURL(this.selectedImage);
      }
      this.$refs.confirmationModal.hide(); // Cerramos el modal después de confirmar
    },
    handleFileChange(event: Event) {
      const file = (event.target as HTMLInputElement).files?.[0];  // Obtener el archivo seleccionado
      if (file) {
        const maxSize = 4 * 1024 * 1024; // 4MB en bytes
        if (file.size > maxSize) {
          this.isImageValid = false; // El archivo es demasiado grande
          this.selectedImage = null; // Limpiar la selección
        } else {
          this.isImageValid = true; // El archivo es válido
        }
      }
    },
  },
});
