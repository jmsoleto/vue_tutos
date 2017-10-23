<template> 
  <div>
    <div class="title">
      <h1>{{message}}</h1>
      <template>
        <product-form save-product="addProduct" :model="model" :manufaturers="manufacturers">
        </product-form>
      </template>
    </div>
  </div>
</template>

<script>
import ProductForm from '@/components/products/ProductForm';

export default {
  name: 'New',
  data() {
    return {
      message: 'Bienvenido a la página de administracion',
      model: {},
      manufacturers: [
        {
          _id: 'sam',
          name: 'samsung',
        },
        {
          _id: 'apple',
          name: 'Apple',
        },
      ],
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
};
</script>
