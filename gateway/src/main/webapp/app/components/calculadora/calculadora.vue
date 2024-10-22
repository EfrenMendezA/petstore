<template>
  <div>
    <b-button variant="primary" @click="showModal = true">CALCULADORA</b-button>
    <b-modal v-model="showModal" title="Calculadora">
      <div>
        <!-- Aquí puedes añadir tu calculadora o contenido -->
        <h2>Contenido de la Calculadora</h2>
        <p>¡Aquí puedes agregar tu lógica de calculadora!</p>
      </div>
    </b-modal>
  </div>
</template>

<!--<strip lang="ts" src="./calculadora.component.ts"></strip> -->
<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  z-index: 1001;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5em;
}
</style>