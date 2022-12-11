<template>
  <div>
    <router-link to="/"><img src="../assets/images/logo.svg" alt=""></router-link>
    <GChart type="PieChart" :data="chartDаta" :options="chartOptions" />
  </div>
</template>

<script >
import { GChart } from "vue-google-charts";

export default {
  name: "App",
  components: {
    GChart
  },
  data() {
    return {
      chartDаta: [
        ["name", "value"],
        ["Карьера", 100],
        ["Здоровье", 100],
        ["Финансы", 100],
        ["Семья", 100],
        ["Развитие", 100],
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "blog in total: languages"
        }
      }
    };
  }

}
</script>