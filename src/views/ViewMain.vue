<template>
  <main>
    <HeaderComponent />
    <section class="py-12">
      <ul class="goals">
        <li class="flex w-full max-w-[500px] justify-end gap-6 items-center py-1 pl-8 pr-16 relative group"
          v-for="goal in goals" :key="goal.id">
          <span class="whitespace-nowrap mr-2 text-base font-medium">{{ goal.name }}</span>
          <progress class="progress progress-primary w-56" value="10" max="100"></progress>
          <div class="dropdown hidden absolute group-hover:flex w-6 h-6 min-h-6 right-8 top-0 focus-within:flex">
            <button class=" btn btn-circle btn-outline relative w-6 h-6 min-h-6 left-0 top-0 ">
              <svg viewBox="0 0 24 24" class="w-[18px] h-[18px]" fill="none" stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                  d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z"
                  fill="currentColor" />
              </svg>
            </button>
            <div tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52" ref="dropdownAdd">
              <input type="text" placeholder="Введите название"
                class="input input-bordered input-primary w-full max-w-xs mb-4" v-model="newNameGoal" />
              <button class="btn btn-primary" @click="editGoal(goal.id)">Сохранить</button>
            </div>
          </div>
          <button class="hidden btn btn-circle btn-outline absolute w-6 h-6 min-h-6 right-0 top-0 group-hover:flex"
            @click="deleteGoal(goal.id)">
            <svg viewBox="0 0 24 24" class="w-[18px] h-[18px]" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12.663 1.5h-1.326c-1.069 0-1.49.09-1.921.27-.432.181-.792.453-1.084.82-.292.365-.493.746-.784 1.774L7.368 5H5a1 1 0 0 0 0 2h.563l.703 11.25c.082 1.32.123 1.98.407 2.481a2.5 2.5 0 0 0 1.083 1.017C8.273 22 8.935 22 10.258 22h3.484c1.323 0 1.985 0 2.502-.252a2.5 2.5 0 0 0 1.083-1.017c.284-.5.325-1.16.407-2.482L18.437 7H19a1 1 0 1 0 0-2h-2.367l-.18-.636c-.292-1.028-.493-1.409-.785-1.775a2.694 2.694 0 0 0-1.084-.819c-.431-.18-.852-.27-1.92-.27zm1.89 3.5-.025-.09c-.203-.717-.29-.905-.424-1.074a.696.696 0 0 0-.292-.221c-.2-.084-.404-.115-1.149-.115h-1.326c-.745 0-.95.031-1.149.115a.696.696 0 0 0-.292.221c-.135.169-.221.357-.424 1.074L9.446 5h5.108zM9.61 8.506a.75.75 0 0 0-.724.776l.297 8.495a.75.75 0 0 0 1.499-.053l-.297-8.494a.75.75 0 0 0-.775-.724zm4.008.724a.75.75 0 0 1 1.499.052l-.297 8.495a.75.75 0 0 1-1.499-.053l.297-8.494z"
                fill="currentColor" />
            </svg>
          </button>
        </li>
        <li class="flex  w-full max-w-[500px] justify-end gap-6 items-center py-1 pl-8 pr-16 relative">
          <div class="dropdown">
            <div class="relative w-[224px] h-6 flex gap-3 items-center cursor-pointer" tabindex="0">
              <span class="whitespace-nowrap text-base font-medium">Добавить цель</span>
              <button class=" btn btn-circle btn-outline w-6 h-6 min-h-6   group-hover:flex">
                <svg viewBox="0 0 24 24" class="w-[18px] h-[18px]" stroke="currentColor" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 3a1 1 0 0 0-1 1v7H4a1 1 0 1 0 0 2h7v7a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2h-7V4a1 1 0 0 0-1-1z"
                    fill="currentColor" />
                </svg>
              </button>
            </div>
            <div tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52" ref="dropdownAdd">
              <input type="text" placeholder="Введите название"
                class="input input-bordered input-primary w-full max-w-xs mb-4" v-model="nameGoal" />
              <button class="btn btn-primary" @click="addGoal">Добавить</button>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <MessageComponent  />
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue'
import MessageComponent from "../components/MessageComponent.vue";
import useAlerts from "../composables/useAlert";

const { useAlert } = useAlerts()
const { open } = useAlert('successful')

const goals = ref([]);
const nameGoal = ref('');
const newNameGoal = ref('');
const dropdownAdd = ref(null);

const addGoal = () => {
  fetch('http://localhost:3000/goals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: nameGoal.value })
  })
    .then(response => {
      document.activeElement.blur();
      getGoals();
      nameGoal.value = '';
      open()
      console.log(response);
    })

    .catch(error => {
      console.error(error)
    });
}
const deleteGoal = (id) => {
  fetch(`http://localhost:3000/goals/${id}`, {
    method: 'DELETE'
  })
    .then(response => {
      document.activeElement.blur();
      getGoals();
      console.log(response);
    })
    .catch(error => {
      console.error(error)
    });
}
const editGoal = (id) => {
  fetch(`http://localhost:3000/goals/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: newNameGoal.value })
  })
    .then(response => {
      document.activeElement.blur()
      getGoals()
      newNameGoal.value = '';
      console.log(response);
    })
    .catch(error => {
      console.error(error)
    });
}
const getGoals = () => {
  goals.value = []
  fetch('http://localhost:3000/goals')
    .then(res => res.json())
    .then(data => goals.value = [...goals.value, ...data])
    .catch(error => console.log(error))
}

onMounted(async () => {
  await getGoals()
})
</script>