<script lang="ts">
import { defineComponent, h, Transition } from 'vue'
import { RTagSize, RTagType } from './tag.vue'
import Tags from './tags.vue'
import Tag from './tag.vue'
import TagClose from './tag-close.vue'

export default defineComponent({
  name: 'RolTagsAddons',
  components: {
    Tags,
  },
  props: {
    mode: {
      type: String,
      default: 'free',
      validator: (val: string): boolean => {
        return ['badge', 'blog', 'free'].indexOf(val) !== -1
      },
    },
    size: RTagSize,
    leftText: String,
    rightText: String,
    leftType: RTagType,
    rightType: RTagType,
  },
  emits: ['click', 'close'],
  setup(props, ctx) {
    const handleClose = event => {
      event.stopPropagation()
      ctx.emit('close', event)
    }

    const handleClick = event => {
      ctx.emit('click', event)
    }

    return {
      handleClose,
      handleClick,
    }
  },
  render() {
    const { mode, size, leftText, rightText, leftType, rightType, handleClose, handleClick } = this
    if (mode === 'badge') {
      return h(
        Tags,
        {
          addons: true,
          allSize: size,
          onClick: handleClick,
        },
        {
          default: () => [
            h(
              Tag,
              {
                type: 'black',
              },
              [leftText],
            ),
            h(
              Tag,
              {
                type: rightType,
              },
              [rightText],
            ),
          ],
        },
      )
    } else if (mode === 'blog') {
      return h(
        Transition,
        { name: 'rol-zoom-in-center' },
        {
          default: () => [
            h(
              Tags,
              {
                addons: true,
                allSize: size,
                onClick: handleClick,
              },
              {
                default: () => [
                  h(
                    Tag,
                    {
                      type: leftType,
                    },
                    [leftText],
                  ),
                  h(TagClose, { onClick: handleClose }),
                ],
              },
            ),
          ],
        },
      )
    } else if (mode === 'free') {
      return h(
        Tags,
        {
          addons: true,
          allSize: size,
          onClick: handleClick,
        },
        {
          default: () => [
            h(
              Tag,
              {
                type: leftType,
              },
              [leftText],
            ),
            h(
              Tag,
              {
                type: rightType,
              },
              [rightText],
            ),
          ],
        },
      )
    } else {
      console.error('rol-tags-addons:mode property must be badge or blog or free')
      return null
    }
  },
})
</script>

<style></style>
