<template>
  <div>
    <b-button class="custom-button" @click="showModal = true">Calculadora</b-button>

    <b-modal v-model="showModal" title="Calculadora" hide-footer>
      <div class="calculator">
        <input type="text" v-model="input" disabled />
        <div class="buttons">
          <button @click="addToInput('1')">1</button>
          <button @click="addToInput('2')">2</button>
          <button @click="addToInput('3')">3</button>
          <button @click="addToInput('+')">+</button>
          <button @click="addToInput('4')">4</button>
          <button @click="addToInput('5')">5</button>
          <button @click="addToInput('6')">6</button>
          <button @click="addToInput('-')">-</button>
          <button @click="addToInput('7')">7</button>
          <button @click="addToInput('8')">8</button>
          <button @click="addToInput('9')">9</button>
          <button @click="addToInput('*')">*</button>
          <button @click="clearInput">C</button>
          <button @click="calculateResult">=</button>
          <button @click="addToInput('0')">0</button>
          <button @click="addToInput('/')">/</button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts" src="./calculadora.component.ts"></script>

<style scoped>
.custom-button {
  background-color: #28a745;
  color: white;
  font-size: 12px;
  border-radius: 30px;
}

.calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 24px;
  text-align: right;
  margin-bottom: 10px;
  border: 2px solid #007bff;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  padding: 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

button:active {
  background-color: #003f7f;
}
</style>
