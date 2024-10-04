<script setup>
import { useCounterStore } from "@/stores/counter.js";

//se crea una variable para usar el store counter
const useCounter = useCounterStore()

//funcion para sumar mediante la accion creada en el store counter
function handleSuma() {
  useCounter.increment()
}

//funcion para restar mediante la accion creada en el store counter
function handleResta() {
  useCounter.decrement()
}

</script>

<template>
  <h1>El contador esta en: 
    <!-- valor del counter que viene desde el store -->
    <span>{{ useCounter.counter }}</span> 
  </h1>
  <div>
    <button id="sumar" @click="handleSuma">Sumar</button>
    <button id="restar" @click="handleResta">Restar</button>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: 1.5rem;
}
span {
  color: rgb(45, 214, 45);
  font-weight: bold;
  display: block;
}

div {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}
button {
  padding: .3rem 1rem;
  cursor: pointer;
}
</style>