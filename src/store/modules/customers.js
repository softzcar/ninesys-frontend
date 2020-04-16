export default {
	namespaced: true,

	state: {
		message: "Hola desde customer.js",
		customers: []
	},

	mutations: {
		setCustomers(state, data) {
			state.customers = data;
		}
	},

	actions: {
		async getCustomerById({ commit }, id) {
			console.group("getCustomerById");
			console.log("VAL:: " + id);

			await fetch(`http://api.ninesys.loc/customer/${id}`)
				.then(res => res.json())
				.then(res => {
					// commit("setCustomers", res.data);
					console.dir(res);

					return res;
				})
				.catch(err => {
					console.log(err);
				})
				.finally(() => {
					return true;
				});
			console.log(`Fin de la funcion getCustomerById`);

			console.groupEnd("getCustomerById");
		},

		async getCustomers({ commit }) {
			await fetch("http://api.ninesys.loc/customers")
				.then(res => res.json())
				.then(res => {
					commit("setCustomers", res.data);
					return res.data;
				})
				.catch(err => {
					console.log(err);
				})
				.finally(() => {
					return true;
				});
		},

		async createCustomer({ dispatch }, dataCliente) {
			await fetch("http://api.ninesys.loc/nuevo-cliente", {
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
					dispatch("getCustomers");
				});
		}
	},

	getters: {}
};
