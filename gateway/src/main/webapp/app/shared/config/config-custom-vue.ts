import LabelComponent from '@/components/label/label.vue';
import ButtonComponent from '@/components/button/button.vue';
import ContadorComponent from '@/components/contador/contador.vue';
import EfrenComponent from '@/components/efren/efren.vue';
import CalculadoraComponent from '@/components/calculadora/calculadora.vue';
import V_ifComponent from '@/components/03_directivas/v_if.vue';

export function initCustomVue(vue) {
  vue.component('daic-label', LabelComponent);
  vue.component('daic-button', ButtonComponent);
  vue.component('daic-contador', ContadorComponent);
  vue.component('daic-efren', EfrenComponent);
  vue.component('daic-calculadora', CalculadoraComponent);
  vue.component('daic-v_if', V_ifComponent);
}
