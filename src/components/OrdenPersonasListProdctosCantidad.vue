<template>
  <div>
    <el-input-number
      v-model="num"
      @change="handleChange"
      :min="0"
      :max="10"
      size="mini"
    ></el-input-number>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      num: 0
    };
  },

  computed: {
    ...mapState("app", ["formNewOrder"])
  },

  watch: {
    num() {
      let cantidad = 0;
      let persona = this.formNewOrder.personas.find(
        el => el.idp == this.idpersona
      );

      if (persona) {
        let producto = persona.products.find(
          prod => prod.idproduct == this.idproduct
        );

        if (producto) {
          console.log(`cantidad mayor a cero :: ${producto.cantidad}`);
          let data = {
            idp: this.idpersona,
            idproduct: this.idproduct,
            cantidad: producto.cantidad
          };
          this.setPersonaCantidadProducto(data);
        } else {
          console.log(`cantidad IGUAL A CERO :: ${cantidad}`);
          cantidad = 0;
        }
      } else {
        console.log(`cero ...`);

        cantidad = 0;
      }

      return cantidad;
    }
  },

  methods: {
    ...mapMutations("app", ["setPersonaCantidadProducto"]),

    saveCantidad(cantidad) {
      let data = {
        idp: this.idpersona,
        idproduct: this.idproduct,
        cantidad: cantidad
      };
      this.setPersonaCantidadProducto(data);
    },

    handleChange(value) {
      let data = {
        idp: this.idpersona,
        idproduct: this.idproduct,
        cantidad: value
      };
      this.setPersonaCantidadProducto(data);

      console.log(
        `Asignar ${value} al producto ID ${this.idproduct} || Persons ${this.idpersona}`
      );
      console.dir(value);
    },

    getProductData() {
      let persona = this.formNewOrder.personas.find(persona => persona.idp == this.idpersona)
      console.dir(persona.products)
  
      let producto = persona.products.map(producto => {
        if (producto.idproduct == this.idproduct) {          
          this.num = producto.cantidad
        }
      })
      
    }
  },

  mounted() {
    this.getProductData()
  },

  props: ["idpersona", "idproduct"]
};
</script>