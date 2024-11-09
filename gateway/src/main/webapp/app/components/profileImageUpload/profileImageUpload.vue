<template>
  <div>
    <div>
      <!-- <b-button variant="primary" @click="openModalHandler = true">Cambiar foto</b-button> -->
      <b-button variant="primary" @click="openModalHandler">Subir imágen</b-button>
    </div>

    <div>
      <b-modal
        ref="imageUploadModal"
        id="imageUploadModal"
        title="titulo"
        header-bg-variant="primary"
        header-text-variant="white"
        hide-footer
      >
        <b-form-file
          v-model="formData.file1"
          :state="Boolean(formData.file1)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
        ></b-form-file>
      </b-modal>
    </div>
    <div>
      <b-form-group
        id="fieldset-1"
        description="Let us know your name."
        label="Enter your name"
        label-for="input-1"
        valid-feedback="Thank you!"
        :invalid-feedback="invalidFeedback"
        :state="state"
      >
        <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
      </b-form-group>
    </div>
    <div>
      <!-- <daic-profileImage-edit></daic-profileImage-edit> -->
    </div>
  </div>
</template>

<script lang="ts" src="./profileImageUpload.component.ts"></script>

<style scoped></style>
