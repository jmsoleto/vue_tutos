<template> 
  <product-form
    @save-product="updateProduct"
    :model="model"
    :manufacturers="manufacturers"
    :currentManufacturer="cm"
    :isEditing="true">
  </product-form>
</template>

<script>
  import ProductForm from '../components/products/ProductForm';

  export default {
    name: 'Edit',
    created() {
      if (!this.model.name) {
        console.log('Producto no cargado. Despachando...');
        this.$store.dispatch('productById', this.$route.params.id);
      }
      if (!this.manufacturers.length) {
        console.log('Fabricantes no cargados. Despachando...');
        this.$store.dispatch('allManufacturers');
      }
    },
    computed: {
      manufacturers() {
        return this.$store.getters.allManufacturers;
      },
      model() {
        const productById = this.$store.getters.productById(this.$route.params.id);
        console.log('productById', productById);
        return Object.assign({}, productById);
      },
      cm() {
        const productById = this.$store.getters.productById(this.$route.params.id);
        return productById.manufacturer._id;
      },
    },
    methods: {
      updateProduct(model) {
        console.log('model to update', model);
        this.$store.dispatch('updateProduct', model);
      },
    },
    components: {
      'product-form': ProductForm,
    },
  };
</script>
