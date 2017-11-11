<template>
  <div>
    <div class="product">
      <router-link :to="{path:'/details/' + product._id}" class="product-link">
        <div class="product-image">
          <img class="image" :src="product.image"></img>
        </div>
        <div class="product-description">
          <div class="product-info">
            <small>{{product.manufacturer}}</small>
            <h4>{{product.name}}</h4>
          </div>
          <div class="product-place _cart">
            {{product.place}}
          </div>
        </div>
      </router-link>
      <div class="product-action">
        <product-button :product="product"></product-button>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductButton from './ProductButton';
  
  export default {
    name: 'product-item',
    props: ['product'],
    components: {
      'product-button': ProductButton,
    },
  };
</script>