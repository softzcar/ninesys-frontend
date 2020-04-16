<template>
  <div>
    <el-button-group style="margin-bottom:1rem">
      <el-button type="primary" size="mini" @click="dialogNewProduct = true">
        Crear un nuevo producto
      </el-button>
    </el-button-group>
    <el-drawer
      :title="control.title"
      :before-close="handleClose"
      :visible.sync="dialogNewProduct"
      direction="rtl"
      size="40%"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="form">
          <el-form-item label="Nombre" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm">Cancel</el-button>
          <el-button
            type="primary"
            @click="$refs.drawer.closeDrawer()"
            :loading="loading"
            >{{
              loading ? control.submitText1 : control.submitText2
            }}</el-button
          >
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      control: {
        title: "Crear un nuevo producto",
        message: "El nuevo producto ha sido creado",
        msgConfirm: "Desea crear un nuevo producto",
        confirmButtonText: "Crear",
        cancelButtonText: "Cancelar",
        submitText1: "Creando...",
        submitText2: "Crear"
      },
      dialogNewProduct: false,
      loading: false,
      form: {
        name: "",
      },
      formLabelWidth: "80px",
      timer: null
    };
  },

  computed: {
    ...mapState(`products`, [`products`]),
    ...mapState(`order`, [`order`]),
    ...mapState(`app`, [`formNewOrder`]),

  },

  methods: {
    ...mapActions(`products`, [`createProduct`, `getProducts`]),
    

    handleClose(done) {
      if (this.loading) {
        return;
      }

      this.$confirm(this.control.msgConfirm, "Confirm", {
        distinguishCancelAndClose: true,
        confirmButtonText: this.control.confirmButtonText,
        cancelButtonText: this.control.cancelButtonText
      })
        .then(_ => {
          this.loading = true;
          this.submitMe();
          this.getProducts();

          this.loading = false;

          this.$message({
            type: "success",
            message: this.control.message
          });
          done();
        })
        .catch(_ => {});
    },

    prepareProductData(data) {
      let response = "";
      response += `name=${data.name}`;
      return response;
    },

    submitMe() {
      let myProduct = this.prepareProductData(this.form);

      this.createProduct(myProduct);
      this.modalShow = false;
    },

    cancelForm() {
      this.loading = false;
      this.dialogNewProduct = false;
      this.control.name = null;

      clearTimeout(this.timer);
    }
  }
};
</script>