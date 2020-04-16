<template>
  <div>
    <el-table :data="formNewOrder.personas" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <!-- <p>Nombre: {{ props.row.name }}</p> -->
          <!-- <p>Talla: {{ props.row.talla }}</p> -->
          <!-- <p>Tipo de tela: {{ props.row.tela }}</p> -->
          <el-row :gutter="20">
            <el-col :span="8">
              <nine-eliminar
                :nombrep="props.row.name"
                :idpersona="props.row.idp"
              />
              <nine-nombre
                :idpersona="props.row.idp"
                :nombrep="props.row.name"
              />
              <nine-tallas
                :idpersona="props.row.idp"
                :tallp="props.row.talla"
              />
              <nine-telas 
                :idpersona="props.row.idp" 
                :telap="props.row.tela" 
              />
              <nine-detalles
                :idpersona="props.row.idp"
                :detallesp="props.row.detalles"
              />
            </el-col>

            <el-col :span="16">
              <nine-productos :idpersona="props.row.idp" />
            </el-col>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column label="Nombre" prop="name"> </el-table-column>
      <el-table-column label="Talla" prop="talla"> </el-table-column>
      <el-table-column label="Tela" prop="tela"> </el-table-column>
      <!-- <el-table-column label="Detalles" prop="detalles"> </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NineTallas from "../components/OrdenPersonasListTalla";
import NineTelas from "../components/OrdenPersonasListTela";
import NineNombre from "../components/OrdenPersonasListNombre";
import NineDetalles from "../components/OrdenPersonasListDetalles";
import NineEliminar from "../components/OrdenPersonasListEliminarPersona";
import NineProductos from "../components/OrdenPersonasListProdctos";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("app", ["formNewOrder"])
  },

  components: {
    NineTallas,
    NineTelas,
    NineNombre,
    NineDetalles,
    NineEliminar,
    NineProductos
  }
};
</script>
