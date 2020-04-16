export default {
	namespaced: true,

	state: {
		formNewOrder: {
			debug: "",
			status: "pre-order",
			alertPrivateOrder: false,
			selectCustomer: "",
			selectedProducts: [],
			personas: [],
			fechas: null,
			empleados: {
				responsable: "",
				corte: "",
				impresion: "",
				estampado: "",
				confeccion: "",
				revision: "",
			},
		},
	},

	mutations: {
		setCustomerSelect(state, val) {
			state.formNewOrder.selectCustomer = val;
		},

		clearCustomer(state) {
			state.formNewOrder.selectCustomer = "";
		},

		setPrivateOrder(state) {
			state.formNewOrder.alertPrivateOrder = true;
			state.formNewOrder.selectCustomer = "Orden Interna";
		},

		hideAlertPrivateOrder(state) {
			state.formNewOrder.alertPrivateOrder = false;
		},

		setPersona(state, data) {
			state.formNewOrder.personas.push(data);
		},

		setPersonaNombre(state, data) {
			state.formNewOrder.personas.forEach((el) => {
				if (el.idp === data.id) {
					el.name = data.nombre;
				}
			});
		},

		setPersonaTalla(state, data) {
			state.formNewOrder.personas.forEach((el) => {
				if (el.idp === data.id) {
					el.talla = data.talla;
				}
			});
		},

		setPersonaTela(state, data) {
			state.formNewOrder.personas.forEach((el) => {
				if (el.idp === data.id) {
					el.tela = data.tela;
				}
			});
		},

		setPersonaDetalles(state, data) {
			state.formNewOrder.personas.forEach((el) => {
				if (el.idp === data.id) {
					el.detalles = data.detalles;
				}
			});
		},

		deletePersona(state, data) {
			state.formNewOrder.personas.forEach((el, index) => {
				if (el.idp == data.id) {
					state.formNewOrder.personas.splice(index, 1);
				}
			});
		},

		setPersonaCantidadProducto(state, data) {
			const personas = state.formNewOrder.personas;

			personas.map((persona) => {
				if (persona.idp == data.idp) {
					if (persona.products.length == 0) {
						// Empujamos un nuevo registro el array esta vacio
						let tmp = {
							idproduct: data.idproduct,
							cantidad: data.cantidad,
						};
						persona.products.push(tmp);
					} else {
						console.log(`buscamos el producto ${data.idproduct} en el array`);

						persona.products.forEach((product, index, object) => {
							if (product.idproduct == data.idproduct) {
								console.log(`EL porducto existe, vamos a actualizarlo`);
								if (data.cantidad > 0) {
									// Actualizar cantidad
									product.cantidad = data.cantidad;
								} else {
									// Eliniar registro
									object.splice(index, 1);
								}
							} else {
								console.log(`El producto no existe, vamos a crearlo`);
								let tmp = {
									idproduct: data.idproduct,
									cantidad: data.cantidad,
								};
								// yVAlidar IF EXIST AQUI
								let exist = persona.products.find((el) => el.idproduct == data.idproduct)
								if (!exist) {
									persona.products.push(tmp);
								}
							}
						});
					}
				}
			});
			/*return false;

			 state.formNewOrder.personas.forEach((persona) => {
				if (persona.idp == data.idp) {
					let exist = persona.products.find((el) => el.idproduct == data.idproduct);

					if (exist) {
						// TODO  Actualizar cantidad
						persona.products.forEach((product, index, object) => {
							if (product.idproduct == data.idproduct) {
								if (data.cantidad > 0) {
									product.cantidad = data.cantidad;
								} else {
									object.splice(index, 1);
								}
							}
						});
					} else {
						// Agragar un nuevo porducto
						let tmp = {
							idproduct: data.idproduct,
							cantidad: data.cantidad,
						};
						persona.products.push(tmp);
					}
				}
			}); */
		},

		setPersonaCantidadProducto_bak(state, data) {
			state.formNewOrder.personas.forEach((persona) => {
				if (persona.idp == data.idp) {
					let exist = persona.products.find((el) => el.idproduct == data.idproduct);

					if (exist) {
						// TODO  Actualizar cantidad
						persona.products.forEach((product, index, object) => {
							if (product.idproduct == data.idproduct) {
								if (data.cantidad > 0) {
									product.cantidad = data.cantidad;
								} else {
									object.splice(index, 1);
								}
							}
						});
					} else {
						// Agragar un nuevo porducto
						let tmp = {
							idproduct: data.idproduct,
							cantidad: data.cantidad,
						};
						persona.products.push(tmp);
					}
				}
			});
		},

		setSelectedProducts(state, data) {
			// TODO cargar productos seleccionados aqui
			// state.formNewOrder.selectedProducts.push(data);
			state.formNewOrder.selectedProducts = data;
		},

		setFechas(state, data) {
			state.formNewOrder.fechas = data;
		},

		setEmpleados(state, data) {
			// data: {nombre: 'nombre empleado', departamento: 'nombre departamento'}
			switch (data.departamento) {
				case "responsable":
					state.formNewOrder.empleados.responsable = data.nombre;
					break;

				case "corte":
					state.formNewOrder.empleados.corte = data.nombre;
					break;

				case "impresion":
					state.formNewOrder.empleados.impresion = data.nombre;
					break;

				case "estampado":
					state.formNewOrder.empleados.estampado = data.nombre;
					break;

				case "confeccion":
					state.formNewOrder.empleados.confeccion = data.nombre;
					break;

				case "revision":
					state.formNewOrder.empleados.revision = data.nombre;
					break;

				default:
					break;
			}
		},
	},
};
