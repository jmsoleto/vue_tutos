<template>
  <div class="product-details">
    <div class="container">
      <div class="row">
        <div>
          <img :src="product.image" :alt="product.name">
        </div>
        <div>
          <div>
            <small>{{product.manufacturer && product.manufacturer.name}}</small>
            <h3>{{product.name}}</h3>
            <p>{{product.description}}</p>
          </div>
        </div>
        <div>
          <p>{{product.price}}</p>
          <product-button :product="product"></product-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductButton from './ProductButton';

  export default {
    props: ['product'],
    components: {
      'product-button': ProductButton,
    },
  };
</script>