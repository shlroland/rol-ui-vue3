import { mount } from '@vue/test-utils'
import Alert from '../src/index.vue'

const defaultSlot = '测试提示的文案'

describe('Alert.vue', () => {
  it('render test', () => {
    const wrapper = mount(Alert, {
      props: {
        title: defaultSlot,
      },
    })
    expect(wrapper.find('.rol-alert__title').text()).toEqual(defaultSlot)
    expect(wrapper.find('.rol-alert').classes()).toContain('rol-alert--info')
    expect(wrapper.find('.rol-alert__closebtn')).toBeDefined()
  })
  it('type', () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'test',
        type: 'success',
      },
    })
    expect(wrapper.find('.rol-alert').classes()).toContain('rol-alert--success')
  })
  it('description', () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'test',
        description: defaultSlot,
      },
    })
    expect(wrapper.find('.rol-alert__description').text()).toEqual(defaultSlot)
  })
  it('center', () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'test',
        center: true,
      },
    })
    expect(wrapper.find('.rol-alert').classes()).toContain('is-center')
  })
  it('light', () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'test',
        light: true,
      },
    })
    expect(wrapper.find('.rol-alert').classes()).toContain('is-light')
  })
  it('title slot', () => {
    const wrapper = mount(Alert, {
      slots: {
        title: defaultSlot,
      },
    })
    expect(wrapper.find('.rol-alert__title').text()).toEqual(defaultSlot)
  })

  it('title description slot', () => {
    const wrapper = mount(Alert, {
      slots: {
        title: 'test',
        default: defaultSlot,
      },
    })
    expect(wrapper.find('.rol-alert__title').text()).toEqual('test')
    expect(wrapper.find('.rol-alert__description').text()).toEqual(defaultSlot)
  })
  it('close', async () => {
    const wrapper = mount(Alert)
    const closeBtn = wrapper.find('.rol-alert__closebtn')
    await closeBtn.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })
})
