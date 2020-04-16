<template>
  <div>
    <p>Escriba el nombre</p>
    <el-input
      placeholder="Nombre"
      v-model="valueInputNombre"
      @keyup="saveNombre"
    ></el-input>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      valueInputNombre: this.nombrep
    };
  },

  computed: {
    ...mapState("app", ["formNewOrder"]),

    saveNombre() {
      if (this.valueInputNombre.length > 0) {
        let data = {
          id: this.idpersona,
          nombre: this.valueInputNombre
        };
        this.setPersonaNombre(data);
        return data.nombre;
      } else {
        return false;
      }
    },

    nombreActual() {
      const persona = this.formNewOrder.personas.find(
        el => el.idp === this.idpersona
      );
      this.setPersonaNombre(persona.name);
      return persona.name;
    }
  },

  methods: {
    ...mapMutations("app", ["setPersonaNombre"])
  },

  props: ["idpersona", "nombrep"]
};
</script>