export default {
	namespaced: true,

	state: {
		empleados: []
	},

	mutations: {
		setEmpleados(state, data) {
			// data = objeto empleado
			state.empleados = data;
		}
	},

	actions: {
		async getEmpleados({ commit }) {
			await fetch("http://api.ninesys.loc/empleados")
				.then(res => res.json())
				.then(res => {
					commit("setEmpleados", res.data);
					return res.data;
				})
				.catch(err => {
					console.log(err);
				})
				.finally(() => {
					return true;
				});
		}
	}
};