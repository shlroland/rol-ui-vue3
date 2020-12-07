import { mount } from '@vue/test-utils'
import Button from '../src/Button.vue'

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(Button, {
      props: { type: 'primary' },
    })
    expect(wrapper.classes()).toContain('is-primary')
  })
})
