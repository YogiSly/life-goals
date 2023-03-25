<template>
  <div class="goal">
    <HeaderComponent />
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
<script setup>
import HeaderComponent from '../components/HeaderComponent.vue'
const formAdd = false;
const dataAdd = '';
const addShowGoal = () => {
  this.formAdd.value = !this.formAdd
}
</script>