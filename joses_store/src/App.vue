<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul class="nav__left">
          <li><router-link :to="{ path: '/' }" exact>Home</router-link></li>
          <li><router-link :to="'/admin'" exact>Admin</router-link></li>
          <li><router-link :to="'/cart'"exact>Cart</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav__left{
  background-color: black;
  padding: .5rem;
  display: flex;
  flex-direction: row;
}

.nav__left > li{
    list-style: none;
    padding: 0 1rem;
}

.nav__left a {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
}
</style>
