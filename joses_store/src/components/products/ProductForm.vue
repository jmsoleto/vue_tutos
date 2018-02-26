<template>
  <form @submit.prevent="saveProduct">
    <div class="form-holder">
      <div class="form-left">
        <div class="form-group">
          <label for="name">Nombre del producto</label>
          <input type="text" placeholder="Nombre" v-model="model.name" v-validate="'required'" name="name" :class="{'form-input':true, '_error':errors.has('name')}">
          <span v-show="errors.has('name')">Este campo es necesario</span>
        </div>
        <div class="form-group">
          <label for="price">Precio</label>
          <input type="text" placeholder="Precio" v-model="model.price" v-validate="'required'" name="price" :class="{'form-input':true, '_error':errors.has('price')}">
          <span v-show="errors.has('price')">Este campo es necesario</span>
        </div>
        <div class="form-group">
          {{model.manufacturer._id}}
          <label for="manufacturer">Fabricante</label>
          <select name="manufacturer" v-model="model.manufacturer">
            <option v-for="manufacturer in manufacturers" :value="manufacturer._id" :selected="manufacturer._id == currentManufacturer">{{manufacturer.name}}</option>
          </select>
          <span v-show="errors.has('manufacturer')">Este campo es necesario</span>
        </div>
      </div>
      <div class="form-right">
        <div class="form-group">
          <label for="image">Image</label>
          <input type="text" placeholder="Imagen" v-model="model.image" :validate="'required|url'" name="image" :class="{'form-input':true, '_error':errors.has('image')}">
          <span v-show="errors.has('image')">Este campo es necesario y debe ser una URL válida</span>
        </div>         
        <div class="form-group">
          <label for="description">Descripción</label>
          <textarea name="description" placeholder="Descripción" cols="30" rows="10" v-model="model.description" validate="'required" :class="{'form-input':true, '_error':errors.has('desciption')}"></textarea>
          <span v-show="errors.has('description')">Este campo es necesario y debe ser una URL válida</span>
        </div>         
      </div>
    </div>
    <button class="button">
      <span v-if="isEditing">Actualizar producto</span>
      <span v-else>Nuevo producto</span>
    </button>
  </form>
</template>

<script>
  export default {
    props: ['model', 'isEditing', 'manufacturers', 'currentManufacturer'],
    created() {
      console.log('model', this.model);
      // this.currentManufacturer = this.model.manufacturer._id;
    },
    methods: {
      saveProduct() {
        this.$emit('save-product', this.model);
      },
    },
  };

</script>