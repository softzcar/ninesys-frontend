import Vue from 'vue'
import Vuex from 'vuex'

import customers from './modules/customers'
import empleados from './modules/empleados'
import products from './modules/products'
import order from './modules/order'
import app from './modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    customers,
    empleados,
    products,
    order,
    app,
  }
})
