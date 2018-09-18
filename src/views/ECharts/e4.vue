<template>
  <div id="home">
    <!--创建一个echarts的容器-->
    <div id="myChart" style="width:500px; height:500px"></div>
  </div>
</template>

<script>
var echarts = require("echarts");

export default {
  name: "Home",
  mounted() {
    this.SetEchart();
  },
  data() {
    return {
      msg: "Welcome to VUE + ECharts App"
    };
  },
  methods: {
    SetEchart() {
      var base = +new Date(2014, 9, 3);
      var oneDay = 24 * 3600 * 1000;
      var date = [];

      var data = [Math.random() * 150];
      var now = new Date(base);

      function addData(shift) {
        now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/");
        date.push(now);
        data.push((Math.random() - 0.4) * 10 + data[data.length - 1]);

        if (shift) {
          date.shift();
          data.shift();
        }

        now = new Date(+new Date(now) + oneDay);
      }

      for (var i = 1; i < 100; i++) {
        addData();
      }

      var option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: date
        },
        yAxis: {
          boundaryGap: [0, "50%"],
          type: "value"
        },
        series: [
          {
            name: "成交",
            type: "line",
            smooth: true,
            symbol: "none",
            stack: "a",
            areaStyle: {
              normal: {}
            },
            data: data
          }
        ]
      };

      setInterval(function() {
        addData(true);
        myChart.setOption({
          xAxis: {
            data: date
          },
          series: [
            {
              name: "成交",
              data: data
            }
          ]
        });
      }, 500);
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart"));
      myChart.setOption(option);
    }
  }
};
</script>