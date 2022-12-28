<template>
  <div>
    <ComponentHeader/>
    <ul class="goals">
      <li class="goals__li" v-for="goal in getGoals" :key="goal.id" @click="this.$router.push({name:'goal',params:{id:goal.id}})">{{ goal.name }}</li>
    </ul>
  </div>
</template>

<script >
import { mapGetters } from 'vuex';
import ComponentHeader from '../components/ComponentHeader.vue'

export default {
  name: "App",
  components: {
    ComponentHeader
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