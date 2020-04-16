<template>
  <div>
    <el-dialog
      title="Eliminar Persona"
      :visible.sync="dialogVisible"
      width="30%"
      center
    >
      <span
        >¿Está seguro que desea eliminar a {{ nombrep }}?</span
      >
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancelar</el-button>
        <el-button type="danger" @click="eliminar"
          >Eliminar</el-button
        >
      </span>
    </el-dialog>

    <el-button
      type="danger"
      size="mini"
      icon="el-icon-delete"
      @click="dialogEliminar"
      style="margin-bottom:2rem"
      >Elimiar a {{ nombrep }}</el-button
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  computed: {
    ...mapState("app", ["formNewOrder"])
  },

  methods: {
    ...mapMutations("app", ["deletePersona"]),

    dialogEliminar() {
      this.dialogVisible = true
    },

    eliminar() {
      console.log(`eliminar idp :: ${this.idpersona}`);
      
      let data = {
        id: this.idpersona,
        nombre: this.nombrep
      };
      this.deletePersona(data);
      this.dialogVisible = false
      this.$message({
        message: `Has eliminado a ${data.nombre}`,
        type: 'success',
        center: true
      })
    },
  },

  props: ["idpersona", "nombrep"]
};
</script>