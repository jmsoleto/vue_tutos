<template> 
  <div>
    <table>
      <thead>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Fabricante</th>
        <th></th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="product in products">
          <td>{{product.name}}</td>
          <td>{{product.price}}</td>
          <td><router-link :to="'/admin/edit/'+product._id">Editar</router-link></td>
          <td><button @click="deleteProduct(product._id)">Eliminar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Products',
    computed: {
      products() {
        return this.$store.getters.allProducts;
      },
    },
    created() {
      if (this.products.length === 0) {
        this.$store.dispatch('allProducts');
      }
    },
    methods: {
      deleteProduct(id) {
        this.$store.dispatch('removeProduct', id);
      },
    },
  };
</script>
