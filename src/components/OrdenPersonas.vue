<template>
  <div>
    
    <nine-title title="Personas" />
  

    <div style="margin-top: 15px;">
      <el-input placeholder="Nombre" v-model="inputNombre" clearable>
        <el-button slot="append" @click="addPersona" icon="el-icon-plus"></el-button>
      </el-input>
    </div>

    <div style="margin-top: 15px;">
      <nine-lista-personas/>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import NineListaPersonas from '../components/OrdenPersonasList'
import myMixin from '../mixins/myMixin'
import NineTitle from './TitleComponent'

export default {
  data() {
    return {
      inputNombre: ''
    }
  },
  computed: {
    ...mapState('app', ['personas'])  
  },

  methods: {
    ...mapMutations('app',  ['setPersona']), 

    addPersona() {
      let token = this.createToken()
      let newPersona = {
        name: this.inputNombre,
        idp: token,
        talla: null,
        tela: null,
        detalles: null,
        products: []
      }

      this.setPersona(newPersona)
      this.inputNombre = ''
      console.dir(newPersona);
      
      //  se espera pasar un objeto con los datos de la persona
    }
  },
  
  components: {
    NineListaPersonas,
    NineTitle
  },

  mixins: [myMixin]
}
</script>

<style scoped>
  .el-input {
    width:320px
  }
</style>