<template>
  <div>
    <el-table :data="dataTable" style="width: 100%">
      <el-table-column prop="name" label="Producto" width="180">
      </el-table-column>
      <el-table-column
        prop="status"
        label="Estatus"
        width="180"
      ></el-table-column>
      <el-table-column prop="stock_status" label="Stock"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      tableData: []
    };
  },

  computed: {
    ...mapState("products", ["products", "dataTable"]),
    ...mapGetters("products", ["selectedProducts"]),
    ...mapState("app", ["selectedProducts"]),

    dataTable: function() {
      if (!this.productos) return false;
      let response = [];

      for (let i = 0; i < this.productos.length; i++) {
        let tmp = this.products.find(el => el.name == this.productos[i]);
        response.push(tmp);
      }

      return response;
    }
  },

  selectModel: {
    // getter
    get: function(val) {
      return this.formNewOrder.selectedProducts;
    },
    // setter
    set: function(newValue) {
      this.formNewOrder.selectedProducts = newValue;
    }
  },

  props: ["productos"],

  methods: {
    ...mapActions("products", ["getProductById"])
  }
};
</script>