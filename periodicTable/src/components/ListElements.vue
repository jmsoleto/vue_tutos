<template>
  <div>
   <div v-for="element in APIData" :key=element.name>
     <PTElement :ElementData="element"></PTElement>
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

</style>
