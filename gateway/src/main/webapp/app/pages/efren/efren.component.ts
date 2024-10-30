//import { Efren } from '@/shared/model/efren.model';
import { defineComponent, ref, type Ref } from 'vue';
import { useI18n } from 'vue-i18n';
//import { useEfrenStore } from '@/store';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'Efren',
  setup() {
    return {
      t$: useI18n().t,
    };
  },
});
