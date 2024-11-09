<template>
  <div>
    <!-- Botón para abrir el modal -->
    <b-button v-b-modal.modal-image-upload>Imagen</b-button>

    <!-- Modal con formulario para cargar la imagen -->
    <b-modal id="modal-image-upload" title="Cargar Imagen" @hide="resetForm">
      <b-form-file v-model="selectedImage" accept="image/*" :state="isImageValid" placeholder="Seleccionar una imagen"></b-form-file>

      <!-- Botones de Cancelar y Confirmar -->
      <template v-slot:modal-footer>
        <b-button variant="secondary" @click="resetForm">Cancelar</b-button>
        <b-button variant="primary" @click="uploadImage">Confirmar</b-button>
      </template>
    </b-modal>

    <!-- Aquí se mostrará la imagen cargada -->
    <div v-if="imageUrl">
      <h3>Imagen cargada:</h3>
      <img :src="imageUrl" alt="Imagen cargada" class="img-fluid" />
    </div>
  </div>
</template>

<script lang="ts" src="./imagen.component.ts"></script>
