<template>
    <div>
        <div class="title">
            <h1>In Stock</h1>
        </div>
        <product-list products-per-page=12></product-list>
    </div>
</template>

<script>
    import ProductList from '../components/products/ProductList';

    export default {
      name: 'home',
      components: {
        'product-list': ProductList,
      },
    };
</script>