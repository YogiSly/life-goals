<template>
  <div>
    <router-link to="/"><img src="../assets/images/logo.svg" alt=""></router-link>
    <GChart style="width: 500px" type="PieChart" :data="chartDаta" :options="chartOptions" />
    <div>
      <ul>
        <li v-for="goal in getGoals" :key="goal.id">{{ goal.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script >
import { GChart } from "vue-google-charts";
// import { mapActions } from 'vuex'
import { mapGetters } from 'vuex';


export default {
  name: "App",
  components: {
    GChart
  },
  data() {
    return {
      // chartDаta: [
      //   ["name", "value"],
      // ],
      chartOptions: {
        title: "Company Performance",
        subtitle: "blog in total: languages",
        is3D: true,
        // legend: { position: 'top', textStyle: { color: 'blue', fontSize: 16 } }
        tooltip: { ignoreBounds: true }
      }
    };
  },
  computed: {
    ...mapGetters([
      'getGoals',
    ]),
    chartDаta(){
      const arrData = []
      arrData.push(["name", "value"])
      // console.log('sdsd',this.getGoals);
      let newArrData = []
      if (this.getGoals) {
        const arrMini = this.getGoals.map(arr => [arr.name, '10'])
        newArrData = [...arrData, ...arrMini]
      }
      console.log('newArrData', newArrData);
      console.log('this',this);
      this['get chartDаta']
      return newArrData
    }
  },
  methods: {

    test () {
      
    }
  },
  mounted(){
    this.$store.dispatch('setGoals')
  
     
  }

}
</script>