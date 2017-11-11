export const productGetters = {
  allProducts: state => state.products,
  productById: (state, getters) => (id) => {
    if (getters.allProducts.length > 0) {
      return state.products.filter(p => p._id === id)[0];
    }
    return state.product;
  },
};

export const manufacturerGetters = {
  allManufacturers: state => state.manufacturers,
};
