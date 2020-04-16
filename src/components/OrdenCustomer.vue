<template>
  <div class="form-section">
    <nine-title title="Cliente" />
    <nine-new-customer />
    <el-select
      v-model="formNewOrder.selectCustomer"
      @change="setCustomerSelect"
      @clear="clearSelect"
      filterable
      clearable
      placeholder="Seleccione un cliente"
    >
      <el-option
        v-for="item in customers"
        :key="item._id"
        :label="item.nombre"
        :value="item._id"
      >
        <span style="float: left">{{ item.nombre }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{
          item.cedula
        }}</span>
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import NineNewCustomer from "./OrdenCustomerNew";
import NineTitle from './TitleComponent'

export default {
  data() {
    return {
      value: ""
    };
  },

  computed: {
    ...mapState("customers", ["customers"]),
    ...mapState("app", ["formNewOrder"]),

    selectModel: function(val) {
      console.log(`setCustomerSelect = ${val}`);
      this.setCustomerSelect(val)
      console.log('hecho');
      
      
    }

    /* selectModel: {
      // getter
      get: function(val) {
        return this.formNewOrder.selectCustomer;
      },
      // setter
      set: function(newValue) {
        this.setCustomerSelect(newValue)
        // this.formNewOrder.selectCustomer = newValue;
      } 
    }*/
  },

  methods: {
    ...mapMutations("app", [
      "clearCustomer",
      "setCustomerSelect",
      "hideAlertPrivateOrder"
    ]),
    ...mapActions("customers", ["getCustomers", "getCustomerById"]),

    clearSelect() {
      this.clearCustomer();
      this.hideAlertPrivateOrder();
      console.log(`Clear el sect`);
    },

    controlAction(val) {
      console.log(`VAL :: ${val}`);
      console.log(`***************************`);
      this.setCustomerSelect(val)
      /* this.hideAlertPrivateOrder();
      if (!val) {
        console.log(`NO recibimos el ID del cliente val :: ${this.selectModel}`);
        return;
      } else {
        console.log(`El ID de l cliente esL ${val}`);
        this.setCustomerSelect(val);
      } */
    }
  },

  mounted() {
    this.getCustomers();
    console.log(`alertPrivateOrder :: ${this.formNewOrder.alertPrivateOrder}`);
    console.log(`Customers :: `)
    console.dir(this.customers)
  },

  components: {
    NineNewCustomer,
    NineTitle
  }
};
</script>
