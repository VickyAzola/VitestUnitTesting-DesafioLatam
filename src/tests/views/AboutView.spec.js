import { describe, test, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '@/views/AboutView.vue';

describe('HomeView', () => {
  //declarar router global para no repetir
  let router

  beforeEach(() => {
    // Crear la instancia de Vue Router antes de cada prueba
    router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/about',
          name: 'about',
          component: AboutView
        }
      ],
    });
  });

  test('Probando la existencia de la vista AboutView', async () => {
    // Navegar a la ruta about y esperar que el router esté listo
    router.push({ name: 'about' });
    await router.isReady();

    // Montar el componente con el router
    const wrapper = mount(AboutView, {
      global: {
        plugins: [router], // Inyectar el router
      }
    });

    // Verificar que AboutView existe
    expect(wrapper.exists()).toBe(true); // Asegurarse de que el componente AboutView está montado
  });

});
