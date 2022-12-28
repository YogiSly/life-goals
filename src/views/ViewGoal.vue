<template>
  <div class="goal">
    <ComponentHeader/>
    <div class="goal__content">
      <button class="goal__btn-add" @click="addShowGoal">Добавить задачу</button>
      <div v-if="formAdd">
        <span>Добавьте задачу</span>
        <input type="text" v-model="dataAdd">
        <button @click="addGoal">Добавить</button>
      </div>
      <div class="goal__target" v-for="go in getGoal" :key="go">
        {{ go.name }}
      </div>
    </div>
  </div>
</template>
<script>
import ComponentHeader from '../components/ComponentHeader.vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    ComponentHeader
  },
  data(){
    return {
      formAdd: false,
      dataAdd:''
    }
  },
  computed: {
    ...mapGetters([
      'getGoal',
    ]),
  },
  methods: {
    addShowGoal() {
      this.formAdd = !this.formAdd
    },
    addGoal() {
      this.$store.dispatch('addGoal', { id: this.$route.params.id, data:this.dataAdd })
      .then(()=>{this.formAdd = false})
    }
  },
  mounted(){
    console.log(this.$route.params.id);
    this.$store.dispatch('setGoal', this.$route.params.id) 
  }
}
</script>