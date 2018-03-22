<template>
  <div :style="{backgroundColor: activeColor, gridRowStart: row}" 
  
  :class="{element:true}">
    <div class="element-number">{{ElementData.atomicNumber}}</div>
    <div class="element-mass">{{ElementData.atomicMass}}</div>
    <div class="element-symbol">{{ElementData.symbol}}</div>
    <div class="element-name">{{ElementData.name}}</div>
    <div class="element-valencies">{{ElementData.electronicConfiguration}}</div>
  </div>
</template>

<script>

export default {
  name: 'PTElement',
  data () {
    return {
    }
  },
  computed: {
    activeColor() {
      return `#${this.ElementData.cpkHexColor}`;
    },
    row() {
      var b = this.$props.ElementData.electronicConfiguration.split(' ')
      return b[b.length -1].substr(0,1);
    }
  },
  props:['ElementData']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .element{
    padding: 4px;
    display:grid;
    grid-template-areas: 
      "atomic   empty   valencies"
      "empty-2    symbol     empty-3"
      "empty-4    name     empty-5"
      "footer-1   atomicmass   footer";
    grid-template-rows: 12px 1fr 12fr 12fr;/*16px 16px;*/
    grid-template-columns: 16px 1fr 16px;
  }
  .element-number{
    grid-area: atomic;
    font-size: 10px;
  }

  .element-symbol{
    grid-area: symbol;
    font-size: 38px;
    font-weight: 800;
  }

  .element-name{
    grid-area: name;
    font-size: 12px;
  }
  .element-mass{
    grid-area: atomicmass;
    font-size: 10px;
  }
  .element-valencies{
    grid-area: valencies;
    font-size: 10px;
  }
</style>
"header   header   header" "main     main     sidebar" "footer   footer   footer"
"atomic-number none none" "none symbol none"