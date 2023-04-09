<template>
  <TransitionRoot :show="isShow" enter="transition-opacity ease-out duration-400" enter-from="opacity-0"
    enter-to="opacity-100" leave="transition-opacity ease-in duration-400" leave-from="opacity-100" leave-to="opacity-0"
    class="relative z-[950]">
    <div class=" alert fixed bottom-12 left-12 max-w-fit alert-success shadow-lg">

      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{{ 'Успех' }}</span>

    </div>

  </TransitionRoot>
</template>

<script setup>
import { TransitionRoot } from '@headlessui/vue';
import useAlerts from "../composables/useAlert";

const { useAlert } = useAlerts()
const { isShow } = useAlert('successful')

</script>

<style scoped></style>