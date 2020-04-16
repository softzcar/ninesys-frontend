<template>
  <div id="app">
    <el-container>
      <el-aside width="20%" style="background-color: rgb(238, 241, 246)">
        <nine-side-bar/>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <!-- TODO Crear con este cdigoel componenete USER ... -->
          <el-dropdown>
            <i class="el-icon-user" style="margin-right: 15px;"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>USER NAME</span>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import NineMenus from './components/Menus'
  import NineSideBar from './components/SideMenu'

  export default {
    components: {
      NineMenus,
      NineSideBar
    }
  };
</script>

<style>
  .form-section {
    margin-bottom: 4rem;
  }
  .el-container {
    padding-bottom: 200px;
  }
</style>
