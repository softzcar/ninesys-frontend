<template>
  <div>
      <h3>{{ departamento }}</h3>
      <el-select v-model="value" @change="saveEmpleado" clearable placeholder="Seleccione un empleado" class="el-select">
        <el-option
          v-for="item in empleados"
          :key="item._id"
          :label="item.username"
          :value="item.username"
        >
        </el-option>
      </el-select>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      value: '',
      msg: '',
    };
  },

  computed: {
    ...mapState('empleados', ['empleados']),
  },

  methods: {
    ...mapActions('empleados', ['getEmpleados']),
    ...mapMutations('app', ['setEmpleados']),

    saveEmpleado(val) {
      let data = {
        nombre: val,
        departamento: this.departamento
      }
      this.setEmpleados(data)
    }
  },

  mounted() {
    this.getEmpleados()
  },

  props: ["departamento"]
};
</script>

<style scoped>
  h3 {
    text-transform: capitalize;
  }
  .el-select {
    margin-bottom: 2rem;
  }
</style>