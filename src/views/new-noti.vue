<template>
  <h1>News</h1>
</template>

<script lang="ts">
import { usecourseStore } from '@/stores/store';
export default {
  setup() {
    const load = usecourseStore();
    const Data = load.$state.courses
    return { Data };
  }
}
</script>

<style scoped>
* {
  min-height: 100vh;
}
</style>