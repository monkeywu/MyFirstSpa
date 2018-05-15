import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import About from './about.vue';
import Product from './product.vue';
import ProductList from './product-list.vue';
import ProductDetail from './product-detail.vue';
import Contact from './contact.vue';


Vue.use(VueRouter);

export default new VueRouter({
  mode : 'hash',
  routes:[
    { path:'/',
      component: App,
      children:[
        { path:'about',component:About },
        { path:'contact',component:Contact },
        {
          path:'product',
          component:Product,
          children:[
            {path:'',component:ProductList},
            {path:':id',component:ProductDetail}
          ],
        },
        {path:'*',redirect:'/product'}
      ], 
    }
  ]
})