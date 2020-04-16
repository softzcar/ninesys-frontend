<template>
  <div>
    <hr />
    <el-table :data="filterProducts" style="width: 100%">
      <el-table-column label="Producto">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Cantidad">
        <template slot-scope="scope">          
          <nine-cantidad :idpersona="idpersona" :idproduct="scope.row.name" />
        </template>
      </el-table-column>
      <!-- <el-table-column label="Operaciones">
				<template>
					<el-alert title="ALERTA" type="info" show-icon>ok</el-alert>
				</template>
			</el-table-column> -->
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NineCantidad from "../components/OrdenPersonasListProdctosCantidad";

export default {
  data() {
    return {
      num: 1
    };
  },
  computed: {
    ...mapState("app", ["formNewOrder"]),
    ...mapState("products", ["products"]),

    filterProducts() {
      let prod = [];
      this.formNewOrder.selectedProducts.map(el => {
        let tmp = this.products.filter(product => product.name == el);
        prod.push(tmp[0]);
      });
      console.log('Filter products ::');
      console.dir(prod)
      
      return prod;
    },

    detProdId(idProd) {
      return idProd;
    }
  },

  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleChange(value) {
      console.log(value);
    }
  },

  props: ["idpersona"],

  components: {
    NineCantidad
  }
};
</script>
