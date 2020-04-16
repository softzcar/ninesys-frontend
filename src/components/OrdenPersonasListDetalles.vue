<template>
  <div>
    <p>Detalles</p>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4 }"
      placeholder="Detalles de la persona"
      v-model="textareaDetalle"
      @keyup="saveDetalles"
    >
    </el-input>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      textareaDetalle: this.detallesp
    };
  },

  computed: {
    ...mapState("app", "formNewOrder"),

    saveDetalles() {
      if (this.textareaDetalle) {
        let data = {
          id: this.idpersona,
          detalles: this.textareaDetalle
        };
        this.setPersonaDetalles(data);
        return data.detalles;
      } else {
        return false;
      }
    }
  },

  methods: {
    ...mapMutations("app", ["setPersonaDetalles"])
  },
  props: ["idpersona", "detallesp"]
};
</script>