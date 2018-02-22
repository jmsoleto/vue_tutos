<template>
    <list-elements :APIData="getAPIData"></list-elements>
</template>

<script>
const APIData = require('@/assets/data');
import ListElements from '@/components/ListElements';
console.log(APIData);

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  computed: {
    getAPIData(){ return APIData}
  },
  components: {
    'list-elements': ListElements,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
