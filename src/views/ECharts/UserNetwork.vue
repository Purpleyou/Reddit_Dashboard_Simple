<template>
  <div :class="className" :id="id" :style="{height:height,width:width}">
    <!-- <el-button type="primary">By Comment</el-button>> -->
  </div>
</template>

<script>
import echarts from "echarts";
import webkitDep from "/Users/clairezhang/Google Drive/X-Order/reddit_raw_data/network_graph_data_example.json";

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
      default: "1500px"
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
    // concatTitleValue() {
    //   const scoreData = {
    //     topic: jsonData.topic,
    //     data: jsonData.score
    //   };
    //   return scoreData;
    // },
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));
      // const xData = jsonData.topic;
      this.chart.setOption({
        // backgroundColor: "#344b58",
        title: {
          text: "Subreddit Author Relationship",
          x: "20",
          top: "20",
          textStyle: {
            color: "#344b58",
            fontSize: "22"
          },
          subtextStyle: {
            color: "#90979c",
            fontSize: "16"
          }
        },
        legend: {
          x: "5%",
          top: "10%",
          textStyle: {
            color: "#90979c"
          },
          data: ["Menore", "Futurology", "BitCoin", "BlockChain", "Other"]
        },

        series: [
          {
            type: "graph",
            layout: "force",
            animation: false,
            label: {
              normal: {
                position: "right",
                formatter: "{b}"
              }
            },
            draggable: true,
            data: webkitDep.nodes.map(function(node, idx) {
              node.id = idx;
              return node;
            }),
            categories: webkitDep.categories,
            force: {
              // initLayout: 'circular'
              // repulsion: 20,
              edgeLength: 5,
              repulsion: 20,
              gravity: 0.2
            },
            edges: webkitDep.links
          }
        ]
      });
    }
  }
};
</script>
