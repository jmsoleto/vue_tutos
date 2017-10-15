<template> 
  <div>
    <div class="title">
      <h1>{{message}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'New',
    data() {
      return {
        message: 'Bienvenido a la página de administracion',
      };
    },
  };
</script>
