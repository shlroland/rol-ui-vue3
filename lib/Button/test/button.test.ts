import { mount } from '@vue/test-utils'
import Button from '../Button.vue'

describe('Button.vue', () => {
  it('init',()=>{
    const wrapper = mount(Button,{

    })
    expect(wrapper.classes()).toContain('rol-button')
  })
})
