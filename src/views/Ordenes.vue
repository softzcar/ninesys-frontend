<template>
  <div>
    <nine-title title="Ordenes" subtitle="En Desarrollo" />
    <nine-fechas />
    <nine-customer />
    <nine-products />
    <nine-personas />
    <nine-empleados />
  </div>
</template>

<script>
import NineTitle from "../components/TitleComponent";
import NineCustomer from "../components/OrdenCustomer";
import NineProducts from "../components/OrdenProducts";
import NinePersonas from "../components/OrdenPersonas";
import NineFechas from "../components/OrdenFechas";
import NineEmpleados from "../components/OrdenEmpleados"

export default {
  components: {
    NineTitle,
    NineCustomer,
    NineProducts,
    NinePersonas,
    NineFechas,
    NineEmpleados
  }
};
</script>