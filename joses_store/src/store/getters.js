export const productGetters = {
  allproducts: (state, getters) => {
    return state.products;
  },
  productById: (state, getters) => {
    if(getters.allProducts.lenght > 0){
      return state.products.filter(function(p){return p._id === id}[0]);
    }else{
      return state.product;
    }
  },
}

export const manufacturerGetters = {
  allManufacturers: state => state.manufaturers
}