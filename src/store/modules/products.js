export default {
  namespaced: true,
  state: {
    products: [],
    dataTable: []
  },
  mutations: {
    setProduct(state, data) {
      state.products = data;
    },
    setDataTable(state, data) {
      state.dataTable = data;
    }
  },
  actions: {
    async getProducts({ commit }) {
      await fetch("http://api.ninesys.loc/products")
        .then(res => res.json())
        .then(res => {
          commit("setProduct", res.data);
          return res.data;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          return true;
        });
    },

    /* async getProductById({ commit, id }) {
      console.log(`getProductById :: ${id}`)
      
      await fetch(`http://api.ninesys.loc/product/${id}`)
        .then(res => res.json())
        .then(res => {
          commit("setDataTable", res.data)
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          return true;
        });
    }, */

    async createProduct({ dispatch }, dataProduct) {
      console.log('data recibida para crear el cliente :: ')
      console.dir(dataProduct);

      await fetch("http://api.ninesys.loc/new-product", {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: dataProduct
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log("Product Created:", data.msg);
          console.log("Product Response:", data.response);

          dispatch("getProducts");
          console.log("Dispatched Products");
        });
    }
  },
  getters: {
    selectedProducts: (state, prodList) => {
      let products = state.products;
      let response = prodList.map(function (el) {
        console.log(`El :: ${el}`);
        
      })

      return response
    }
  }
};
