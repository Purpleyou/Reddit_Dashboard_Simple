<template>
  <div id="app">
    <!--创建一个echarts的容器-->
    <div id="echartContainer" style="width:500px; height:500px"></div>
  </div>
</template>

<script>
var echarts = require("echarts");

export default {
  name: "app",

  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },

  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echartContainer"));
    // 绘制图表
    myChart.setOption({
      title: { text: "ECharts 入门示例" },
      tooltip: {},
      xAxis: { data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"] },
      yAxis: {},
      series: [{ name: "销量", type: "bar", data: [5, 20, 36, 10, 10, 20] }]
    });
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
