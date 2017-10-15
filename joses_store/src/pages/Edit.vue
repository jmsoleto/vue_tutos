<template> 
  <div>
    <div class="title">
      <h1>A {{message}} </h1>
      <h1>B {{$route.params.id}} </h1>
      <h1>C {{product}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Edit',
    data() {
      return {
        message: 'Bienvenido a la página de edcion del producto ',
      };
    },
  };
</script>
