<template>
  <div>
    <p>Seleccione la talla</p>
    <el-select v-model="valueSelectTalla" :expand="expandMe" @change="saveTalla" placeholder="Seleccione">
      <el-option
        v-for="item in optionsTallas"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        size="mini"
        
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
      optionsTallas: [
        {
          value: "S",
          label: "Talla S"
        },
        {
          value: "M",
          label: "Talla M"
        },
        {
          value: "L",
          label: "Talla L"
        },
        {
          value: "XL",
          label: "Talla XL"
        },
        {
          value: "XXL",
          label: "Talla XXL"
        }
      ],
      valueSelectTalla: this.tallp
    };
  },
 
  computed: {
    ...mapState("app", ["formNewOrder"])
  }, 

  methods: {
    ...mapMutations('app', ['setPersonaTalla']),

    saveTalla() {
      let data = {
        id: this.idpersona,
        talla: this.valueSelectTalla        
      }
      this.setPersonaTalla(data)
    },
    
    expandMe() {
      console.log('ME expandieron! carguemos los datos de esta persona!')
    }
  },

  props: ["idpersona", "tallp"]
};
</script>