import { describe, test, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia, setActivePinia } from 'pinia';
import HomeView from '@/views/HomeView.vue';

//se debe declarar pinia porque dentro de esta vista hay un componente que la usa

describe('HomeView', () => {
  //declarar router y pinia global para no repetir
  let router, pinia;

  // Crear la instancia de Vue Router antes de cada prueba
  beforeEach(() => {
    router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        }
      ],
    });

    // Inicializar Pinia
    pinia = createPinia();
    setActivePinia(pinia);
  });

  test('Probando la existencia de la vista HomeView', async () => {
    // Navegar a la ruta home y esperar que el router esté listo
    router.push({ name: 'home' });
    await router.isReady();

    // Montar el componente con el router y pinia
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router, pinia], // Inyectar el router y pinia en el componente
      }
    });

    // Verificar que HomeView existe
    expect(wrapper.exists()).toBe(true); // Asegurarse de que el componente HomeView está montado
  });

});
