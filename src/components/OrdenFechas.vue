<template>  
  <div class="block">    
    <nine-title title="Fechas" />
    <h3>Ingrese le rango de fechas de la orden</h3>
    <el-date-picker
      v-model="valueFechas"
      format="dd/MM/yyyy"
      value-format="dd/MM/yyyy"
      type="daterange"
      range-separator="-"
      start-placeholder="Inicio"
      end-placeholder="Entrega"
      @change="setFechas"
    >
    </el-date-picker>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import NineTitle from './TitleComponent'

export default {
  data() {
    return {
      valueFechas: ""
    };
  },

  methods: {
    ...mapMutations('app', ['setFechas'])
  },

  components: {
    NineTitle
  }
};
</script>