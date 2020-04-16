<template>
  <div>
    <el-button-group style="margin-bottom:1rem">
      <el-button type="primary" size="mini" @click="dialogNewCustomer = true">
        Crear un nuevo cliente
      </el-button>

      <el-button type="primary" @click="setPrivateOrder" size="mini">
        Orden interna
      </el-button>
    </el-button-group>

    <div v-if="formNewOrder.alertPrivateOrder" style="margin-bottom: 1rem">
      <el-alert title="Se emitirá una orden de uso interno" type="info" :closable="false">
      </el-alert>
    </div>

    <el-drawer
      :title="control.title"
      :before-close="handleClose"
      :visible.sync="dialogNewCustomer"
      direction="rtl"
      size="40%"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="form">
          <el-form-item label="Nombre" :label-width="formLabelWidth">
            <el-input v-model="form.first_name" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="Apellido" :label-width="formLabelWidth">
            <el-input v-model="form.last_name" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="Cédula" :label-width="formLabelWidth">
            <el-input v-model="form.cedula" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="Teléfono" :label-width="formLabelWidth">
            <el-input v-model="form.telefono" autocomplete="off"></el-input>
          </el-form-item>
          <!-- 
          <el-form-item label="Area" :label-width="formLabelWidth">
            <el-select
              v-model="form.region"
              placeholder="Please select activity area"
            >
              <el-option label="Area1" value="shanghai"></el-option>
              <el-option label="Area2" value="beijing"></el-option>
            </el-select>
          </el-form-item> -->
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
        title: "Crear un nuevo cliente",
        message: "El nuevo cliente ha sido creado",
        msgConfirm: "Desea crear un nuevo cliente",
        confirmButtonText: "Crear",
        cancelButtonText: "Cancelar",
        submitText1: "Creando...",
        submitText2: "Crear"
      },
      dialogNewCustomer: false,
      loading: false,
      form: {
        first_name: "",
        last_name: "",
        cedula: "",
        telefono: ""
      },
      formLabelWidth: "80px",
      timer: null
    };
  },

  computed: {
    ...mapState(`customers`, [`customers`]),
    ...mapState(`app`, [`formNewOrder`]),

  },

  methods: {
    ...mapActions(`customers`, [`createCustomer`, `getCustomers`]),
    ...mapMutations(`app`, [`setPrivateOrder`]),
    

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
          this.getCustomers();

          this.loading = false;

          this.$message({
            type: "success",
            message: this.control.message
          });
          done();
        })
        .catch(_ => {});
    },

    prepareCustomerData(data) {
      let response = "";

      response += `first_name=${data.first_name}&`;
      response += `last_name=${data.last_name}&`;
      response += `cedula=${data.cedula}&`;
      response += `telefono=${data.telefono}`;

      return response;
    },

    submitMe() {
      let myCustomer = this.prepareCustomerData(this.form);

      this.createCustomer(myCustomer);
      this.modalShow = false;
    },

    cancelForm() {
      this.loading = false;
      this.dialogNewCustomer = false;
      this.control.first_name = null;
      this.control.last_name = null;
      this.control.cedula = null;
      this.control.telefono = null;

      clearTimeout(this.timer);
    }
  }
};
</script>