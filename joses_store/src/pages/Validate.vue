<template>
<form action="">
  <label for="field1">Este campo es requerido</label>
  <input type="text" placeholder="introduce algo..." v-model="model.name" v-validate="'required'" name="field1">
  <input type="text" placeholder="campo con clase vinculada" v-validate="'required'" name="field2" :class="{'form-control':true, 'error':errors.has('field2')}">
  <input type="submit" value="Enviar">
  <p v-show="errors.has('field1')">{{errors.first('field1')}}</p>
</form>
</template>

<styles>
  #app{
    .form-control{
      border-color: #fcfcfc;
      color: blue;
    }

    .form-control.error{
      border-color: #FF3333;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(255, 71, 71, 0.6);
    }
  }
</styles>

<script>
  export default{
    name: 'Validate',
    data() {
      return {
        model: {
          name: 'Jose',
        },
      };
    },
  };
</script>