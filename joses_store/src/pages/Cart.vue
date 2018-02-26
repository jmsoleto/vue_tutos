<template> 
  <div v-if="cart.length > 0">
    <div class="title">Tu carro</div>
    <template v-for="product in cart">
      <product-details :product="product" :key="product.id"></product-details>
    </template>
  </div>
  <div v-else>
    <div class="title">Tu carro está vacio</div>
  </div>
</template>

<script>
  import ProductDetails from '../components/products/ProductDetails';

  export default {
    name: 'Cart',
    data() {
      return {
        cart: this.$store.state.cart,
      };
    },
    components: {
      'product-details': ProductDetails,
    },
  };
</script>
