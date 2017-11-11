<template>
  <div>
    <div class="title">Lista de Fabricantes</div>
    <ul>
      <template v-for="manufacturer in manufacturers">
        <Li>{{manufacturer.name}}</Li>
      </template>
    </ul>
    <div class="title">Nuevo Fabricante</div>
    <form @submit.prevent="saveManufacturer">
      <label for="name">Nombre del fabricante</label>
      <input type="text"
             placeholder="Nombre" 
             v-model="manufacturerName" 
             :validate="'required'" 
             :class="{'form-input':true, '_error':errors.has('name')}"
             @keyup.enter="saveManufacturer"
             >
      <span v-show="errors.has('name')">Este campo es necesario</span>
      <button class="button">
        <span>Crear Fabricante</span>
      </button>   
    </form>
  </div>
</template>

<script>
  export default {
    name: 'NewManufacturer',
    model: {},
    data() {
      return {
        manufacturerName: '',
      };
    },
    computed: {
      manufacturers() {
        return this.$store.getters.allManufacturers;
      },
    },
    methods: {
      saveManufacturer() {
        this.$store.dispatch('addManufacturer', { name: this.manufacturerName });
      },
    },
  };
</script>