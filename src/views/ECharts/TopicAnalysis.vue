<template>
  <div :class="className" :id="id" :style="{height:height,width:width}">
  </div>
</template>

<script>
import echarts from "echarts";
import jsonData from "/Users/clairezhang/Google Drive/X-Order/reddit_raw_data/data_topic_analysis.json";

export default {
  props: {
    className: {
      type: String,
      default: "chart"
    },
    id: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "600px"
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initChart();
    this.chart = null;
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    concatTitleValue() {
      const scoreData = {
        title: jsonData.title,
        data: jsonData.score
      };
      return scoreData;
    },
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));
      const xData = jsonData.title;
      this.chart.setOption({
        backgroundColor: "#344b58",
        title: {
          text: "Topic Rank by Score",
          x: "20",
          top: "20",
          textStyle: {
            color: "#fff",
            fontSize: "22"
          },
          subtextStyle: {
            color: "#90979c",
            fontSize: "16"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            textStyle: {
              color: "#fff",
              width: "600px",
              height: "150px"
            }
          },
          // extraCssText: "width:600px;height:150px;",
          formatter: function(param) {
            // var html = param[0].name + "<br/>";
            // for (var index in param) {
            //   var seriesName = param[index].seriesName;
            //   var value = param[index].value;
            //   html += index % 3 == 0 && index != 0 ? "<br/>" : "";
            //   html += seriesName + " : " + value + "% ；";
            // }
            // return html;
            return (
              "Title: " +
              param[0].name +
              "<br/>" +
              param[0].seriesName +
              "：" +
              param[0].value
            );
          }
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true }
          }
        },
        grid: {
          borderWidth: 0,
          top: 110,
          bottom: 95,
          textStyle: {
            color: "#fff"
          }
        },
        legend: {
          x: "5%",
          top: "10%",
          textStyle: {
            color: "#90979c"
          },
          data: ["Score"]
        },
        calculable: true,
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisLine: {
              lineStyle: {
                color: "#90979c"
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitArea: {
              show: false
            },
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            data: xData
          }
        ],
        xAxis: [
          {
            name: "Score",
            type: "value",
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#90979c"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0
            },
            splitArea: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "Score",
            type: "bar",
            stack: "total",
            barMaxWidth: 35,
            barGap: "10%",
            itemStyle: {
              normal: {
                color: "rgba(255,144,128,1)",
                label: {
                  show: true,
                  textStyle: {
                    color: "#fff"
                  },
                  // position: "insideTop"
                  formatter: "{b} ({c})",
                  fontSize: 8
                }
              }
            },
            data: this.concatTitleValue().data,
            markLine: {
              lineStyle: {
                normal: {
                  type: "dashed"
                }
              },
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      });
    }
  }
};
</script>
