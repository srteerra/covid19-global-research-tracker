<template>
  <div class="container">
    <div class="row">
      <div class="col dona">
        <canvas id="myChart" width="200" height="200"></canvas>
      </div>
      <div class="col bar">
        <canvas id="myChart2" width="200" height="200"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "Analitics",
  data() {},
  mounted() {
    const ctx = document.getElementById("myChart");
    const data = {
      labels: [
        "China",
        "United states",
        "England",
        "Mexico",
        "North korea",
        "Japon",
        "Chile",
      ],
      datasets: [
        {
          label: "Registered COVID-19 Trials by Countries",
          data: [70, 8, 3, 4, 5, 7, 7],
          backgroundColor: [
            "#177ebe",
            "#156da3",
            "#105580",
            "#0a4366",
            "#072f47",
            "#07263a",
            "#041e30",
          ],
          hoverOffset: 4,
        },
      ],
    };
    const myChart = new Chart(ctx, {
      type: "doughnut",
      data: data,
    });
    myChart;
    //

    const ctx2 = document.getElementById("myChart2");
    const myChart2 = new Chart(ctx2, {
      type: "bar",
      data: {
        labels: ["18-20", "20-25", "25-30", "30-40", "40-50", "+50"],
        datasets: [
          {
            label: "Registered COVID-19 Trials by Age",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "#177ebe",
              "#156da3",
              "#105580",
              "#0a4366",
              "#072f47",
              "#07263a",
            ],
            borderColor: ["black", "black", "black", "black", "black", "black"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    myChart2;
  },
};
</script>

<style lang="scss"></style>
