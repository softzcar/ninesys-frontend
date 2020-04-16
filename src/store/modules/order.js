export default {
  namespaced: true,
  state: {
    order: {
      id: null,
      customer: {
        nombre: null,
        cedula: null,
        telefono: null
      },
      productos: [],
      personas: [] // { nombre, genero, talla, precio, observaciones }
    }
  },

  mutations: {
    setOrder(state, data) {
      state.order = data;
    },

    setCustomerInOrder(state, data) {
      if (!data) {
        console.log(`data ERROR :: ${data}`);
        return;
      }
      console.log(`CUSTOMER :: ${data.data}`);
      console.log(`nombre :: ${data.nombre}`);
      console.log(`cedula :: ${data.cedula}`);
      console.log(`telefono :: ${data.telefono}`);

      state.order.customer.nombre = data.nombre;
      state.order.customer.cedula = data.cedula;
      state.order.customer.telefono = data.nombre;
    },

    setPersona(state, data) {
      state.order.personas.push(data);
    }
  },

  actions: {
    async createOrder({ commit }) {
      await fetch("http://api.ninesys.loc/new-order", {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: dataCliente
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log("Created Customer:", data.msg);
          console.log("Customer Response:", data.response);

          dispatch("getCustomers");
          console.log("Customers Dispatched");
        });
    },

    updateOrderInProgress() {}
  },

  getters: {}
};

