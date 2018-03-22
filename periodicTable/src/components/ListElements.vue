<template>
  <div>
  <h1>The great preidic table</h1>
   <div class="table">
    <template v-for="element in APIData">
      <PTElement :ElementData="element" :key=element.name></PTElement>
    </template>
   </div>
  </div>
</template>

<script>
import PTElement from './PTElement';

export default {
  name: 'ListElements',
  data () {
    return {

    }
  },
  props:['APIData'],
  components: {
    'PTElement': PTElement,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .table{
    display:grid;
    grid-gap: 5px;
    grid-template-columns: repeat(18, 100px);
    grid-template-rows: repeat(9, 100px);
  }
</style>
