<template>
  <div>
    <h1>MODAL</h1>
    <b-button @click="abrirModalHandler"> Abrir mi modal</b-button>

    <div>
      <b-modal ref="miModal"></b-modal>
    </div>
  </div>
</template>

<script lang="ts" src="./modal.component.ts"></script>
