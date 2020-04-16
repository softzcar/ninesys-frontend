<template>
  <div>
    <p>Seleccione la tela</p>
    <el-select v-model="valueSelectTela" @change="saveTela" placeholder="Seleccione">
      <el-option
        v-for="item in optionsTelas"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      optionsTelas: [
        {
          value: "Licra",
          label: "Licra"
        },
        {
          value: "Algodon",
          label: "Algodon"
        },
        {
          value: "Poliester",
          label: "Poliester"
        },
      ],
      valueSelectTela: this.telap
    };
  },
 
  computed: {
    ...mapState("app", ["formNewOrder"])
  }, 

  methods: {
    ...mapMutations('app', ['setPersonaTela']),

    saveTela() {
      let data = {
        id: this.idpersona,
        tela: this.valueSelectTela        
      }
      this.setPersonaTela(data)
    }  
  },

  props: ["idpersona", "telap"]
};
</script>