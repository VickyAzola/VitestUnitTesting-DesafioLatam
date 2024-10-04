<script setup>
import { ref } from 'vue'

//variable reactiva para guardar el texto ingresado por el usuario
const texto = ref('')
//constante que define los emits utilizados en el componente
const emit = defineEmits(['handle-submit'])

//funcion que envia mediante emit una funcion y el valor de la variable reactiva
function handleSubmit() {
  emit('handle-submit', texto.value)
}

</script>

<template>
  <div>
    <h3>ChildComponent</h3>
    <form @submit.prevent="handleSubmit">
      <label>Ingresa un Comentario</label>
      <textarea v-model="texto" id="texto" required></textarea>
      <button>Enviar</button>
    </form>
  </div>
</template>

<style scoped>

h3 {
  font-size: 1rem;
  color: rgb(155, 155, 155);
}

div {
  border: 1px solid lightgreen;
  padding: 1rem;
  margin: 1rem;
}

form {
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

textarea {
  height: 4rem;
}

button {
  padding: .3rem;
}
</style>