<template>
  <div class="form-section">
    <nine-title title="Productos" />
    <nine-new-product />

    <el-select
      v-model="selectModel"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder="Seleccione los productos"
      @remove-tag="clearSelect"
    >
      <el-option
        v-for="item in products"
        :key="item._id"
        :label="item.name"
        :value="item.name"
      >
      </el-option>
    </el-select>

    <nine-products-list :productos="selectModel" />
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import NineProductsList from "../components/OrdenProductsInfo";
import NineNewProduct from "../components/OrdenProductsNew";
import NineTitle from "./TitleComponent";

export default {
  computed: {
    ...mapState("products", ["products"]),
    ...mapState("app", ["formNewOrder"]),
    ...mapGetters("products", ["selectedProducts"]),

    selectModel: {
      // getter
      get: function(val) {
        return this.formNewOrder.selectedProducts;
      },
      // setter
      set: function(newValue) {
        this.setSelectedProducts(newValue);
        // this.formNewOrder.selectedProducts = newValue;
      }
    }
  },

  methods: {
    ...mapActions("products", ["getProducts"]),
    ...mapMutations("products", ["setProduct"]),
    ...mapMutations("app", ["setSelectedProducts"]),

    controlAction() {
      this.$message("Mostrar lista de productos seleccionados");
    },

    clearSelect(value) {
      let personas = this.formNewOrder.personas
      console.dir(personas)
      this.formNewOrder.personas.map(persona=> {
        persona.product.map(producto => {
          console.log(`Producto: ${producto.idproduct}`);
          
        })
        
      })
      /* personas.products.map((product, index, object) => {
        let x = product 
        console.dir(product)
      }) */
    },

    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    }
  },

  mounted() {
    this.getProducts();
  },

  components: {
    NineProductsList,
    NineNewProduct,
    NineTitle
  }
};
</script>