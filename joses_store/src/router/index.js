import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/pages/Home';
import Cart from '@/pages/Cart';
import Index from '@/pages/Index';
import Products from '@/pages/Products';
import Edit from '@/pages/Edit';
import New from '@/pages/New';
import NewManufacturer from '@/pages/NewManufacturer';
import TestBinding from '@/pages/TestBinding';
import Validate from '@/pages/Validate';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/hola',
      name: 'Hello',
      component: HelloWorld,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/test-binding',
      name: 'TestBinding',
      component: TestBinding,
    },
    {
      path: '/validate',
      name: 'Validate',
      component: Validate,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      children: [
        {
          path: 'new',
          name: 'New',
          component: New,
        },
        {
          path: 'new-manufacturer',
          name: 'NewManufacturer',
          component: NewManufacturer,
        },
        {
          path: '',
          name: 'Products',
          component: Products,
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit,
        },
      ],
    },
  ],
});
