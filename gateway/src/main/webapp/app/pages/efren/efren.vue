<template>
  <div>
    <div class="row">
      <div class="col-md-4">
        <b-card border-variant="primary" header="Contador y Calculadora" header-bg-variant="primary" header-text-variant="white" align="center">
          <div class="row">
            <div class="col-md-6">
              <b-card-text> Contador </b-card-text>
              <daic-contador></daic-contador>
            </div>
            <div class="col-md-6">
              <b-card-text> Calculadora.</b-card-text>
              <br /><br /><br /><br /><br />
              <daic-calculadora></daic-calculadora>
            </div>
          </div>
        </b-card>
      </div>
      <div class="col-md-4">
        <b-card border-variant="secondary" header="Directivas v-if v-show " header-border-variant="secondary" align="center">
          <b-card-text>Renderizado de elementos renderizado condicional.</b-card-text>
          <div class="row">
            <div class="col-md-4">
              <b-card-text class="b-card">V-IF</b-card-text>
              <daic-v_if></daic-v_if>
            </div>
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
          </div>
        </b-card>
      </div>
      <div class="col-md-4">
        <b-card border-variant="success" header="Success" align="center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-md-4">
        <b-card border-variant="info" header="Info" align="center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </div>
      <div class="col-md-4">
        <b-card border-variant="warning" header="Warning" header-bg-variant="transparent" align="center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </div>
      <div class="col-md-4">
        <b-card border-variant="danger" header="Danger" header-border-variant="danger" header-text-variant="danger" align="center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-md-4">
        <b-card border-variant="info" header="Info" align="center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </div>
      <div class="col-md-4">
        <b-card border-variant="warning" header="Warning" header-bg-variant="transparent" align="center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </div>
      <div class="col-md-4">
        <b-card border-variant="danger" header="Danger" header-border-variant="danger" header-text-variant="danger" align="center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./efren.component.ts"></script>

<style>
.b-card-group {
  display: flex; /* Usa flexbox para organizar los elementos en horizontal */
  justify-content: space-between; /* Espacia las tarjetas uniformemente */
}
.b-card {
  font-weight: bold;
  font-size: 20px;
}
</style>
