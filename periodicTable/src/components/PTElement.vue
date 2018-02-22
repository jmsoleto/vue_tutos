<template>
  <div :style="{ backgroundColor: activeColor}">
    <div>{{ElementData.atomicMass}}</div>
    <div>{{ElementData.ionizationEnergy}}</div>
    <div>{{ElementData.symbol}}</div>
    <div>{{ElementData.name}}</div>
    <div>{{ElementData.electronicConfiguration}}</div>
    <div>{{ElementData.electronegativity}}</div>
    <div>{{ElementData.atomicNumber}}</div>
    <div>{{ElementData.oxidationStates}}</div>
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
      console.log(this.ElementData.cpkHexColor);
      return `#${this.ElementData.cpkHexColor}`;
    }
  },
  props:['ElementData']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
