import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ChildComponent from '@/components/ChildComponent.vue'
import ParentComponent from '@/components/ParentComponent.vue'

describe('ParentComponent', () => {
  //se monta el componente
  const wrapper = mount(ParentComponent)

  it('El componente padre muestra el texto emitido por su hijo', async () => {
    // se busca el componente Child dentro del padre
    const child = wrapper.findComponent(ChildComponent)

    // simular la emisión del evento desde el componente Child
    child.vm.$emit('handle-submit', 'Texto para prueba')

    // se fuerza la actualización del DOM para reflejar los cambios al enviar el formulario
    await wrapper.vm.$nextTick()

    // se verifica que el texto sea mostrado en el componente padre
    expect(wrapper.html()).toContain('Texto para prueba')
  })
})