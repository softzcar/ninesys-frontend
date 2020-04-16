<template>
  <div>
    <el-divider>
      <h1>
        {{ title }} <small>{{ subtitle }}</small>
      </h1>
    </el-divider>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle"]
};
</script>

<style scoped>
  .el-divider{
    margin: 6.5rem 0 4rem 0
  }
  h1 {
    font-size: 1.8rem;
  }
</style>