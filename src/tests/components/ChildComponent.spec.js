import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ChildComponent from '@/components/ChildComponent.vue'

describe('ChildComponent', () =>  {
  //se monta el componente
  let wrapper = mount(ChildComponent)
  
  it('El formulario envia un texto al hacer click en el boton', async () => {
    //se busca el textarea del componente mediante su etiqueta
    const textarea = wrapper.find('textarea')
    //se busca el formulario del componente mediante su etiqueta
    const form = wrapper.find('form')

    //se settea el valor dummy
    await textarea.setValue('Texto para prueba')
    //se desencadena el evento submit del formulario
    await form.trigger('submit')

    //se espera que la emision del evento sea verdadera
    expect(wrapper.emitted('handle-submit')).toBeTruthy() 
    //se emite el evento y se pregunta por el texto de prueba
    expect(wrapper.emitted('handle-submit')[0]).toEqual(['Texto para prueba']) 
  })
})