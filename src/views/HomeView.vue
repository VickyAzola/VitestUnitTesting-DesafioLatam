<script setup>
import ShowCounter from '@/components/ShowCounter.vue'
import ParentComponent from '@/components/ParentComponent.vue'
</script>

<template>
  <main>
    <div class="container">
      <h2>Ejercicio 1</h2>
      <ShowCounter />
    </div>
    <div class="container">
      <h2>Ejercicio 3</h2>
      <ParentComponent />
    </div>
  </main>
</template>

<style scoped>
.container {
  margin: 1rem;
  padding: 1rem;
  border: 1px solid lightgray;
}

h2 {
  font-size: 1rem;
  color: rgb(126, 125, 125);
}
</style>