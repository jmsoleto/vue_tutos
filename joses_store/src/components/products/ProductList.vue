<template>
  <div>
    <div>
      <template v-for="product in products">
        <product-item :product="product"></product-item>
      </template>
    </div>
  </div>
</template>

<script>
  import ProductItem from './ProductItem';

  export default {
    name: 'product-list',
    props: ['products-per-page'],
    created() {
      if (this.products.length === 0) {
        this.$store.dispatch('nProducts', this.products-per-page);
      }
    },
    computed: {
      products() {
        return this.$store.getters.nProducts;
      },
    },
    components: {
      'product-item': ProductItem,
    },
  };
</script>