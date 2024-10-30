<template>
  <div>
    <b-card>
      <b-group>
        <div v-if="errorMensaje" class="error">{{ errorMensaje }}</div>
        <b-label>Edad</b-label>
        <b-form-input v-model="entrada" placeholder="Intoduce tú edad" />
        <b-button class="custom-button" @click="calcularEdad">Calcular</b-button>
        <h5 v-if="edad !== null && edad < 18">Menor de edad</h5>
        <h5 v-else-if="edad !== null">Mayor de edad</h5>
      </b-group>
    </b-card>
  </div>
</template>

<script lang="ts" src="./v_if.component.ts"></script>
