// import { defineComponent } from 'vue';
// import { useI18n } from 'vue-i18n';

// export default defineComponent({
//   compatConfig: { MODE: 3 },
//   name: 'JhiFooter',
//   setup() {
//     return {
//       t$: useI18n().t,
//     };
//   },
// });

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
