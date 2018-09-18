<template>
  <div id="app">
    <!--创建一个echarts的容器-->
    <div id="echartContainer" style="width:500px; height:500px"></div>
  </div>
</template>

<script>
var echarts = require("echarts");
// var MongoClient = require("mongodb").MongoClient;
// var url = "mongodb://localhost:27017/runoob";

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
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "55%",
          roseType: "angle",
          data: [
            { value: 235, name: "视频广告" },
            { value: 274, name: "联盟广告" },
            { value: 310, name: "邮件营销" },
            { value: 335, name: "直接访问" },
            { value: 400, name: "搜索引擎" }
          ]
        }
      ]
    });
  },

  methods: {
    mongoTest() {
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        console.log("数据库已创建!");
        db.close();
      });
    }
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
