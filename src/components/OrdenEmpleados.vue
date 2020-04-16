<template>
  <div>
    <nine-title title="Empleados" />
    <!-- <el-form ref="form" :model="form" label-width="120px"> -->
    <el-row :gutter="10" align="center">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
        ><div align="center">
          <h4>Responsable</h4>
          <p>
            <el-select
              placeholder="Nombre Responsable"
              v-model="inputResponsable"
              :disabled="true"
            >
            </el-select>
            
          </p>
        </div></el-col
      >

      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" align="center">
        <nine-select departamento="corte" />
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" align="center">
        <nine-select departamento="impresion" />
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" align="center">
        <nine-select departamento="estampado" />
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" align="center">
        <nine-select departamento="confeccion" />
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" align="center">
        <nine-select departamento="revision" />
      </el-col>
    </el-row>
    <!-- </el-form> -->
  </div>
</template>

<script>
import NineTitle from "./TitleComponent";
import NineSelect from "./OrdenEmpleadosSelect";

export default {
  data() {
    return {
      inputResponsable: '',
    };
  },
  components: {
    NineTitle,
    NineSelect
  }
};
</script>

<style scoped>

</style>