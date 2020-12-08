import { mount } from '@vue/test-utils'
import Button from '../src/Button.vue'

const defaultSlot = 'default'

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(Button, {
      props: { type: 'primary' },
    })
    expect(wrapper.classes()).toContain('is-primary')
  })
  it('size', () => {
    const wrapper = mount(Button, {
      props: { size: 'small' },
    })
    expect(wrapper.classes()).toContain('is-small')
  })
  it('nativeType', () => {
    const wrapper = mount(Button, {
      props: { nativeType: 'submit' },
    })
    expect(wrapper.attributes('type')).toBe('submit')
  })
  it('shape', () => {
    const wrapper = mount(Button, {
      props: { shape: 'round' },
    })
    expect(wrapper.classes()).toContain('is-round')
  })
  it('icon', () => {
    const wrapper = mount(Button, {
      props: { icon: 'chevron-right' },
    })
    expect(wrapper.find('.rol-button-icon').exists()).toBeTruthy()
  })
  it('light', () => {
    const wrapper = mount(Button, {
      props: { light: true },
    })
    expect(wrapper.classes()).toContain('is-light')
  })
  it('fullwidth', () => {
    const wrapper = mount(Button, {
      props: { fullwidth: true },
    })
    expect(wrapper.classes()).toContain('is-fullwidth')
  })
  it('outlined', () => {
    const wrapper = mount(Button, {
      props: { outlined: true },
    })
    expect(wrapper.classes()).toContain('is-outlined')
  })
  it('inverted', () => {
    const wrapper = mount(Button, {
      props: { inverted: true },
    })
    expect(wrapper.classes()).toContain('is-inverted')
  })
  it('hovered', () => {
    const wrapper = mount(Button, {
      props: { hovered: true },
    })
    expect(wrapper.classes()).toContain('is-hovered')
  })
  it('focused', () => {
    const wrapper = mount(Button, {
      props: { focused: true },
    })
    expect(wrapper.classes()).toContain('is-focused')
  })
  it('active', () => {
    const wrapper = mount(Button, {
      props: { active: true },
    })
    expect(wrapper.classes()).toContain('is-active')
  })
  it('static', () => {
    const wrapper = mount(Button, {
      props: { isStatic: true },
    })
    expect(wrapper.classes()).toContain('is-static')
  })
  it('selected', () => {
    const wrapper = mount(Button, {
      props: { selected: true },
    })
    expect(wrapper.classes()).toContain('is-selected')
  })
  it('render text', () => {
    const wrapper = mount(Button, {
      slots: {
        default: defaultSlot,
      },
    })
    expect(wrapper.text()).toEqual(defaultSlot)
  })
  it('handle click', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: defaultSlot,
      },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })
  it('handle click inside', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: '<span class="inner-slot"></span>',
      },
    })
    await (<HTMLElement>wrapper.element.querySelector('.inner-slot')).click()
    expect(wrapper.emitted()).toBeDefined()
  })
  test('loading implies disabled', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: defaultSlot,
      },
      props: { loading: true },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
  it('disabled', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
})
