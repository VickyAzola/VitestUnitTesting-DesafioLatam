<script setup>
import { ref } from 'vue'
import ChildComponent from '@/components/ChildComponent.vue'

//variable reactiva para guardar el texto enviado desde el componente hijo
const textoIngresado = ref('')

//funcion que recive el texto del emit y lo guarda en la varibale reactiva textoIngresado
function handleSubmit(texto) {
  textoIngresado.value = texto
}

</script>

<template>
  <div class="container">
    <h3>ParentComponent</h3>
    <ChildComponent @handle-submit="handleSubmit" />
    <h4>El texto ingresado es: 
      <span>
        {{ textoIngresado }}
      </span>
    </h4>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid rgb(3, 184, 3);
}

h3 {
  font-size: 1rem;
  color: rgb(155, 155, 155);
}

h4 {
  text-align: center;
  font-weight: bold;
}

span {
  display: block;
}
</style>