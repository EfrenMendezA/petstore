<template>
  <div>
    <b-button @click="openHandler">Subir imagen de perfil</b-button>

    <b-modal ref="confirmationModal" title="Imagen de perfil">
      <p class="my-4">Nueva imagen de perfil</p>
      <b-form-file v-model="selectedImage" accept="image/*" :state="isImageValid" placeholder="Seleccionar una imagen"></b-form-file>

      <template #modal-footer>
        <b-button @click="cancelarHandler()">Cancelar </b-button>
        <b-button @click="confirmarHandler()">Confirmar </b-button>
      </template>
    </b-modal>
    <div v-if="!isImageValid" class="error-message">
      {{ errorMessage }}
    </div>
    <!-- Aquí se mostrará la imagen cargada -->
    <div v-if="imageUrl">
      <h3>Imagen cargada:</h3>
      <img :src="imageUrl" alt="Imagen cargada" class="img-fluid" />
    </div>
  </div>
</template>

<script lang="ts" src="./imagenDePerfil.component.ts"></script>

<style scoped></style>
