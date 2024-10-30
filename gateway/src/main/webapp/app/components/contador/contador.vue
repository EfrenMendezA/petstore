<template>
  <div>
    <b-card class="card">
      <h3 class="mi-contador">{{ contador }}</h3>
    </b-card>
  </div>
  <br />
  <button class="mi-boton" @click="agregarContador">CONTADOR</button>
</template>

<script lang="ts" src="./contador.component.ts"></script>

<style scoped>
.card {
  width: 70px;
  height: 60x; /* Debe ser igual al ancho */
  margin: auto;
}
.mi-contador {
  font-size: 24px;
  color: #333;
  margin: auto;
}

.mi-boton {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.mi-boton:hover {
  background-color: #0056b3;
}
</style>
