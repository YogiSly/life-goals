<template>
  <div>
    <router-link to="/"><img src="../assets/images/logo.svg" alt=""></router-link>
    <ul class="goals" style="width: 300px;">
      <li v-for="goal in getGoals" :key="goal.id">{{ goal.name }}</li>
    </ul>
  </div>
</template>

<script >
import { mapGetters } from 'vuex';

export default {
  name: "App",
  components: {

  },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters([
      'getGoals',
    ]),
  },
  methods: {

  },
  mounted(){
    this.$store.dispatch('setGoals') 
  }

}
</script>