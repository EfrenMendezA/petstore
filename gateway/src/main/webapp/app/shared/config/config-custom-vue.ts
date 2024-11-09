import LabelComponent from '@/components/label/label.vue';
import ButtonComponent from '@/components/button/button.vue';
import ContadorComponent from '@/components/contador/contador.vue';
import EfrenComponent from '@/components/efren/efren.vue';
import CalculadoraComponent from '@/components/calculadora/calculadora.vue';
import V_ifComponent from '@/components/03_directivas/v_if.vue';
import ProfileImageUpload from '@/components/profileImageUpload/profileImageUpload.vue';
import ImagenDePerfil from '@/components/imagenDePerfil/imagenDePerfil.vue';
import Imagen from '@/components/imagen/imagen.vue';
import ImagenOptionApi from '@/components/imagenOptionApi/imagenOptionApi.vue';
import Modal from '@/components/modal/modal.vue';

export function initCustomVue(vue) {
  vue.component('daic-label', LabelComponent);
  vue.component('daic-button', ButtonComponent);
  vue.component('daic-contador', ContadorComponent);
  vue.component('daic-efren', EfrenComponent);
  vue.component('daic-calculadora', CalculadoraComponent);
  vue.component('daic-v_if', V_ifComponent);
  vue.component('daic-profileImageUpload', ProfileImageUpload);
  vue.component('daic-imagenDePerfil', ImagenDePerfil);
  vue.component('daic-imagen', Imagen);
  vue.component('daic-imagenOptionApi', ImagenOptionApi);
  vue.component('daic-modal', Modal);
}
