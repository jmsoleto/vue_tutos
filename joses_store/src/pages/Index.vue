<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <ul class="admin-menu">
            <!-- Links are to sibling routes -->
            <li class="link"><router-link to="/admin/all-products">View Products</router-link></li>
            <li class="link"><router-link to="/admin/new-product">New Product</router-link></li>
            <li class="link"><router-link to="/admin/new-manufacturer">New Manufacturer</router-link></li>
          </ul>
        </div>
        <!-- Outlet for children routes -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Admin',
    data() {
      return {
        message: 'Bienvenido a la página de administracion',
      };
    },
  };
</script>
<style>
.link {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  padding: 0 1rem;
  line-height:2;
  color: #2c3e50;
  list-style: none;
}
.link a{
  color: inherit;
  cursor: pointer;
}
link a:hover{
  color: #2c3e80
}
</style>
