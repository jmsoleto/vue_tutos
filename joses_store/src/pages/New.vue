<template> 
  <div>
    <div class="title">
      <h1>{{message}}</h1>
      <template>
        <product-form save-product="addProduct" :model="model" :manufacturers="manufacturers">
        </product-form>
      </template>
    </div>
  </div>
</template>

<script>
import ProductForm from '@/components/products/ProductForm';

export default {
  name: 'New',
  created() {
    if (this.manufacturers.length === 0) {
      this.$store.dispatch('allManufacturers');
    }
  },
  data() {
    return {
      message: 'Bienvenido a la página de administracion',
      model: {},
    };
  },
  methods: {
    addProduct(model) {
      console.log('model', model);
    },
  },
  components: {
    'product-form': ProductForm,
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers;
    },
  },
};
</script>
