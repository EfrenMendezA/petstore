<template>
  <div>
    <b-button @click="openHandler">Launch demo modal OPTION API</b-button>

    <b-modal ref="confirmationModal" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
      <b-form-file
        v-model="selectedImage"
        accept="image/*"
        :state="isImageValid"
        placeholder="Seleccionar una imagen"
        @change="handleFileChange"
      >
      </b-form-file>

      <!-- Mensaje de error si el archivo es demasiado grande -->
      <div v-if="!isImageValid" class="text-danger">El archivo es demasiado grande. El tamaño máximo permitido es 4MB.</div>

      <template #modal-footer>
        <b-button @click="cancelarHandler()">Cancelar </b-button>
        <b-button @click="confirmarHandler()">Confirmar </b-button>
      </template>
    </b-modal>
    <!-- Aquí se mostrará la imagen cargada -->
    <div v-if="imageUrl">
      <h3>Imagen cargada:</h3>
      <img :src="imageUrl" alt="Imagen cargada" class="img-fluid" />
    </div>
  </div>
</template>

<script lang="ts" src="./imagenOptionApi.component.ts"></script>

<style scoped></style>
