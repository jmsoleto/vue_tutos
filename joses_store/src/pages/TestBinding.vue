<template>
  <div>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{checked}}</label>
    <br>
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{picked}}</span>
    <br>

    <select name="selectControl" id="SelectControl" v-model="selected">
      <option disabled value="">Select an option</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>

    <span>Selected: {{selected}}</span>
  </div>
</template>

<script>
  export default {
    name: 'Products',
    data() {
      return {
        selected: 'B',
        checked: true,
        picked: 'Two',
      };
    },
  };
</script>