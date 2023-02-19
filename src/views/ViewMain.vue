<template>
  <div>
    <ComponentHeader />
    <ul class="goals">
    </ul>
  </div>
</template>

<script >
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
  methods: {
  },
  mounted() {
  }
}
</script>