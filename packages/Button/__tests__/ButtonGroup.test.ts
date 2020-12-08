import { mount } from '@vue/test-utils'
import Button from '../src/Button.vue'
import ButtonGroup from '../src/ButtonGroup.vue'

describe('Button Group', () => {
  const TestComponent = {
    components: {
      'rol-button-group': ButtonGroup,
      'rol-button': Button,
    },
    template: `<rol-button-group :addons="addons" :position="position" :groupSize="groupSize">
      <rol-button type="primary">Prev</rol-button>
      <rol-button type="primary">Next</rol-button>
    </rol-button-group>`,
    props: {
      addons: {
        type: Boolean,
        default: true,
      },
      position: {
        type: String,
        default: '',
        validator: (val: string) => {
          return ['center', 'right', ''].includes(val)
        },
      },
      groupSize: {
        type: String,
        default: '',
        validator: (val: string) => {
          return ['small', 'medium', 'large'].includes(val)
        },
      },
    },
  }
  it('create', () => {
    const wrapper = mount(TestComponent)
    expect(wrapper.classes()).toContain('rol-buttons')
    expect(wrapper.findAll('button').length).toBe(2)
  })
  it('groupSize', () => {
    const wrapper = mount(TestComponent, {
      props: {
        groupSize: 'small',
        position: '',
        addons: false,
      },
    })
    expect(wrapper.classes()).toContain('are-small')
  })
  it('addons', () => {
    const wrapper = mount(TestComponent, {
      props: {
        groupSize: 'normal',
        position: '',
        addons: true,
      },
    })
    expect(wrapper.classes()).toContain('has-addons')
  })
  it('position', () => {
    const wrapper = mount(TestComponent, {
      props: {
        groupSize: 'normal',
        position: 'left',
        addons: false,
      },
    })
    expect(wrapper.classes()).toContain('is-left')
  })
})
