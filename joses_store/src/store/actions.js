import axios from 'axios';
import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ALL_MANUFACTURERS_SUCCESS,
  ADD_MANUFACTURER,
  ADD_MANUFACTURER_SUCCESS,
} from './mutation-types';

const API_BASE = 'http://127.0.0.1:3000/api';

export const productActions = {
  allProducts({ commit }) {
    commit(ALL_PRODUCTS);
    axios.get(`${API_BASE}/products`)
         .then(response => commit(ALL_PRODUCTS_SUCCESS, response.data));
  },
  productById({ commit }, payload) {
    commit(PRODUCT_BY_ID);
    axios.get(`${API_BASE}/products/${payload}`)
         .then(response => commit(PRODUCT_BY_ID_SUCCESS, response.data));
  },
  addProduct({ commit }, payload) {
    commit(ADD_PRODUCT);
    axios.post(`${API_BASE}/products`, payload)
         .then(response => commit(ADD_PRODUCT_SUCCESS, response.data));
  },
  updateProduct({ commit }, payload) {
    commit(UPDATE_PRODUCT);
    axios.put(`${API_BASE}/products/${payload._id}`, payload)
         .then(response => commit(UPDATE_PRODUCT_SUCCESS, response.data));
  },
  removeProduct({ commit }, payload) {
    commit(REMOVE_PRODUCT);
    axios.delete(`${API_BASE}/products/${payload._id}`, payload)
         .then(response => commit(REMOVE_PRODUCT_SUCCESS, response.data));
  },
};

export const manufacturerActions = {
  allManufacturers({ commit }) {
    commit(ALL_MANUFACTURERS);
    axios.get(`${API_BASE}/manufacturers`)
         .then(response => commit(ALL_MANUFACTURERS_SUCCESS, response.data));
  },
  addManufacturer({ commit }, payload) {
    commit(ADD_MANUFACTURER);
    axios.post(`${API_BASE}/manufacturers`, payload)
         .then(response => commit(ADD_MANUFACTURER_SUCCESS, response));
  },

};
