<template>
  <div>
   <div v-for="element in APIData" :key=element.name>
     {{element.name}}
   </div>
  </div>
</template>

<script>

export default {
  name: 'ListElements',
  data () {
    return {

    }
  },
  props:['APIData']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
