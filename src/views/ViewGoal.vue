<template>
  <div class="goal">
    <ComponentHeader />
    <div class="goal__content">
      <button class="goal__btn-add" @click="addShowGoal">Добавить задачу</button>
      <div v-if="formAdd">
        <span>Добавьте задачу</span>
        <input type="text" v-model="dataAdd">
        <!-- <button @click="addGoal">Добавить</button> -->
      </div>
    </div>
  </div>
</template>
<script>
import ComponentHeader from '../components/ComponentHeader.vue'
export default {
  components: {
    ComponentHeader
  },
  data() {
    return {
      formAdd: false,
      dataAdd: ''
    }
  },

  methods: {
    addShowGoal() {
      this.formAdd = !this.formAdd
    },

  },
  mounted() {
  }
}
</script>