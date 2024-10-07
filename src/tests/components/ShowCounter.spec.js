import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import ShowCounter from '@/components/ShowCounter.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('ShowCounter', () => {
  //declarar wrapper como global para no repetir
  let wrapper

  //inicializar pinia antes de cada prueba
  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)

    //montar el componente ShowCounter usando pinia
    wrapper = mount(ShowCounter, {
      global: {
        plugins: [pinia] 
      }
    })
  })

  it('El contador recibe un valor inicial de "0"', () => {
    //se busca el counter en el componente
    const counter = wrapper.find('span')
    //se verifica que el texto sea 0
    expect(counter.text()).toBe('0')
  })

  //se verifica que el boton sumar exista
  it('Tiene un boton para sumar con el texto "Sumar"', () => {
    //buscar el boton en el componente
    const btnSumar = wrapper.find('#sumar')
    //verificar su texto
    expect(btnSumar.text()).toBe('Sumar')
  })

  //se verifica que el boton restar exista
  it('Tiene un boton para restar con el texto "Restar"', () => {
    //buscar el boton en el componente
    const btnRestar = wrapper.find('#restar')
    //verificar su texto
    expect(btnRestar.text()).toBe('Restar')
  })

  //se verifica que el boton sumar funcione correctamente
  it('El contador aumenta en 1 al hacer click en "Sumar"', async () => {
    //obtener el texto del counter antes del click y pasarlo a numero
    const counterAntes = Number(wrapper.find('span').text())
    //encontrar el boton mediente su id
    const btnSumar = wrapper.find('#sumar')
    //desencadenar el evento click
    await btnSumar.trigger('click')
    //obtener el texto del counter despues del click y pasarlo a numero
    const counterDespues = Number(wrapper.find('span').text())
    //comparar si el valor aumenta luego del click
    expect(counterAntes).toBeLessThan(counterDespues)
  })

  //se verifica que el boton restar funcione correctamente
  it('El contador disminuye en 1 al hacer click en "Restar"', async () => {
    //obtener el texto del counter antes del click y pasarlo a numero
    const counterAntes = Number(wrapper.find('span').text())
    //encontrar el boton mediente su id
    const btnRestar = wrapper.find('#restar')
    //desencadenar el evento click
    await btnRestar.trigger('click')
    //obtener el texto del counter despues del click y pasarlo a numero
    const counterDespues = Number(wrapper.find('span').text())
    //comparar si el valor disminuyo luego del click
    expect(counterDespues).toBeLessThan(counterAntes)
  })
})