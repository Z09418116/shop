/* eslint-disable no-new */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/first */
/* eslint-disable no-console */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import App from './app.vue';
import './style.css';
import product_data from './product';
import util from './util';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);


const RouterConfig = {
  mode: 'hash',
  routes: Routers,
};

const router = new VueRouter(RouterConfig);
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});
router.afterEach(() => {
  window.scrollTo(0, 0);
});

const store = new Vuex.Store({
  state: {
    productList: [],
    cartList: [],
    username: window.localStorage.getItem('username'),
    password: window.localStorage.getItem('password'),
    loginStatus: window.localStorage.getItem('loginStatus'),
  },
  getters: {
    types: (state) => {
      const types = state.productList.map(item => item.type);
      return util.getFilterArray(types);
    },
    countrys: (state) => {
      const countrys = state.productList.map(item => item.country);
      return util.getFilterArray(countrys);
    },
  },
  mutations: {
    setProductList(state, data) {
      state.productList = data;
    },
    addCart(state, id) {
      const isAdded = state.cartList.find(item => item.id === id);
      if (isAdded) {
        isAdded.count++;
      } else {
        state.cartList.push({
          id,
          count: 1,
        });
      }
    },
    editCartCount(state, payload) {
      const product = state.cartList.find(item => item.id === payload.id);
      product.count += payload.count;
    },
    deleteCart(state, id) {
      const index = state.cartList.findIndex(item => item.id === id);
      state.cartList.splice(index, 1);
    },
    emptyCart(state) {
      state.cartList = [];
    },
    getUser(state, username) {
      console.log('username', username);
      state.username = username;
      state.loginStatus = true;
    },
    getLoginStatus(state) {
      state.username = '';
      state.password = '';
      state.loginStatus = false;
    },
  },
  actions: {
    getProductList(context) {
      setTimeout(() => {
        context.commit('setProductList', product_data);
      }, 500);
    },
    buy(context) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit('emptyCart');
          resolve();
        }, 500);
      });
    },
  },
});
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});

