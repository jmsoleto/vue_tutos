<template>
  <form @submit.prevent="saveProduct">
    <div class="form-holder">
      <div class="form-left">
        <div class="form-group">
          <label for="name">Nombre del producto</label>
          <input type="text" placeholder="Nombre" :model="model.name" :validate="'required'" name="name" :class="{'form-input':true, '_error':errors.has('name')}">
          <span v-show="errors.has('name')">Este campo es necesario</span>
        </div>
        <div class="form-group">
          <label for="price">Precio</label>
          <input type="text" placeholder="Precio" :model="model.price" :validate="'required'" name="price" :class="{'form-input':true, '_error':errors.has('price')}">
          <span v-show="errors.has('price')">Este campo es necesario</span>
        </div>
        <div class="form-group">
          <label for="manufacturer">Fabricante</label>
          <select name="manufacturer">              
          <template v-for="manufacturer in manufacturers">
            <option :value="manufacturer_id" :selected="manufacturer_id == (model.manufacturer && modale.manufacturer._id)">{{manufacturer.name}}</option>
          </template>
          </select>
          <span v-show="errors.has('manufacturer')">Este campo es necesario</span>
        </div>
      </div>
      <div class="form-right">
        <div class="form-group">
          <label for="image">Image</label>
          <input type="text" placeholder="Imagen" :model="model.image" :validate="'required|url'" name="image" :class="{'form-input':true, '_error':errors.has('image')}">
          <span v-show="errors.has('image')">Este campo es necesario y debe ser una URL válida</span>
        </div>         
        <div class="form-group">
          <label for="description">Descripción</label>
          <textarea name="description" placeholder="Descripción" cols="30" rows="10" :model="model.description" validate="'required" :class="{'form-input':true, '_error':errors.has('desciption')}"></textarea>
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
    props: ['model', 'isEditing', 'manufacturers'],
    methods: {
      saveProduct() {
        this.$emit('save-product', this.model);
      },
    },
  };

</script>