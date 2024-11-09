import { defineComponent, ref, reactive, type Ref } from 'vue';
//import ProfileImageEdit from '@/components/profileImage-edit/profileImage-edit.vue';

export default defineComponent({
  compatConfig: { MODE: 3 },
  components: {},
  name: 'ProfileImageUpload',
  setup() {
    // Definimos las variables reactivas 'file1' usando reactive
    const formData = reactive({
      file1: null,
    });

    const imageUploadModal = ref<any>(null);

    return {
      formData, // retorno de las variables reactivas
      imageUploadModal, //retorno de la referencia del modal
    };
  },
  methods: {
    openModalHandler(): void {
      this.imageUploadModal.show();
    },
  },
});
