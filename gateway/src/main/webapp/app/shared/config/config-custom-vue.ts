import LabelComponent from '@/components/label/label.vue';
import ButtonComponent from '@/components/button/button.vue';
import ContadorComponent from '@/components/contador/contador.vue';
import CalculadoraComponent from '@/components/calculadora/calculadora.vue';

export function initCustomVue(vue) {
  vue.component('daic-label', LabelComponent);
  vue.component('daic-button', ButtonComponent);
  vue.component('daic-contador', ContadorComponent);
  vue.component('daic-calculadora', CalculadoraComponent);
}
