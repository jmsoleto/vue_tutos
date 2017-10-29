<template>
  <div>
    <button v-if="isAdding" class="button" @click="addToCart">Add To Cart</button>
    <button v-else class="button _red" @click="removeFromCart(product._id)">Remove from Cart</button>
  </div>
</template>
<script>
  import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
  } from '../../store/mutation-types';

  export default {
    name: 'product-button',
    props: ['product'],
    data() {
      return {
        cart: this.$store.state.cart,
      };
    },
    computed: {
      isAdding() {
        return this.cart.indexOf(this.product) < 0;
      },
    },
    methods: {
      addToCart() {
        this.$store.commit(ADD_TO_CART, this.product);
      },
      removeFromCart(id) {
        this.$store.commit(REMOVE_FROM_CART, id);
      },
    },
  };

</script>