import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/pages/Home';
import Cart from '@/pages/Cart';
import Index from '@/pages/Index';
import Products from '@/pages/Products';
import Edit from '@/pages/Edit';
import New from '@/pages/New';
import TestBinding from '@/pages/TestBinding';

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
