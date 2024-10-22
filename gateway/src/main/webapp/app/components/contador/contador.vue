<template>
  <h3 class="mi-titulo">{{ contador }}</h3>
  <h3></h3>
  <button class="mi-boton" @click="agregarContador">AGREGAR</button>
</template>

<script lang="ts" src="./contador.component.ts"></script>

<style scoped> 
.mi-titulo {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
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
