import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  //variable reactiva para almacenar el contador
  const counter = ref(0)
  
  //funcion para sumar al contador
  function increment() {
    counter.value++
  }

  //funcion para restar al contador
  function decrement() {
    counter.value--
  }

  //se retornan la variable y las funciones para usarlas en otros componentes
  return { counter, increment, decrement }
})
