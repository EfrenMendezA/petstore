<template>
  <div id="footer" class="navbar fixed-bottom navbar-light bg-light">
    <p v-text="t$('footer')"></p>
    <div v-if="authenticated">
      <daic-calculadora></daic-calculadora>
    </div>
  </div>
</template>

<script lang="ts" src="./jhi-footer.component.ts"></script>
<!-- 
<script lang="ts" src="./home.component.ts"></script>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { useI18n } from 'vue-i18n';
import type LoginService from '@/account/login.service';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'JhiFooter',
  setup() {
    const loginService = inject<LoginService>('loginService');
    const authenticated = inject<boolean>('authenticated');

    const openLogin = () => {
      loginService.openLogin();
    };

    return {
      authenticated,
      openLogin,
      t$: useI18n().t,
    };
  },
});
</script> -->
