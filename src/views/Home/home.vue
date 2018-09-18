<template>
<el-container style="height: 800px; border: 1px solid #eee">
  <el-header style="text-align: center; font-size: 24px; color: #3B3B3B;">
    <span>X-order Reddit Analysis</span>
  </el-header>
  <el-container>
    <el-aside width="210px" height="100%">
      <el-menu :default-openeds="['1', '3']" :router="true">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu"></i>Monero</template>
          <el-menu-item-group>
            <template slot="title">Basic Statistics</template>
            <el-menu-item index="/topic-analysis">Topic Analysis</el-menu-item>
            <el-menu-item index="/user-analysis">User Analysis</el-menu-item>
            <el-menu-item index="/post-MoneroPrice">Post vs Monero Price</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="More">
            <el-menu-item index="/post-MoneroPrice">Network</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>Futurology</template>
          <el-menu-item-group>
            <template slot="title">Basic Statistics</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="More">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="12">
          <UserNetWork></UserNetWork>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import ECharts01 from "../ECharts/echarts.vue";
import ECharts02 from "../ECharts/echarts02.vue";
import UserNetWork from "../ECharts/UserNetWork.vue";

var echarts = require("echarts");

export default {
  name: "Home",
  components: {
    ECharts01,
    ECharts02,
    UserNetWork
  },

  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
.el-header {
  background-color: #e5e9f2;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>