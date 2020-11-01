import { off, on } from '@rol-ui/utils/dom'
import { computed, getCurrentInstance, h, inject, onUnmounted, Ref, ref } from 'vue'
import { BAR_MAP, renderThumbStyle } from './util'

export default {
  name: 'RolBar',
  props: {
    vertical: Boolean,
    size: String,
    move: Number,
  },
  setup(props) {
    const instance = getCurrentInstance()
    const thumb = ref(null)
    const wrap = inject('scroll-bar-wrap', {} as Ref<Nullable<HTMLElement>>)

    const bar = computed(() => {
      return BAR_MAP[props.vertical ? 'vertical' : 'horizontal']
    })

    const barStore = ref({})
    const cursorDown = ref(false)

    const mouseMoveDocumentHandler = (e: MouseEvent) => {
      if (cursorDown.value === false) return
      const prevPage = barStore.value[bar.value.axis]
      if (!prevPage) return
      const offset = (instance.vnode.el.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) * -1
      const thumbClickPosition = thumb.value[bar.value.offset] - prevPage
      const thumbPositionPercentage = ((offset - thumbClickPosition) * 100) / instance.vnode.el[bar.value.offset]
      wrap.value[bar.value.scroll] = (thumbPositionPercentage * wrap.value[bar.value.scrollSize]) / 100
    }

    const mouseUpDocumentHandler = () => {
      cursorDown.value = false
      barStore.value[bar.value.axis] = 0
      off(document, 'mousemove', mouseMoveDocumentHandler)
      document.onselectstart = null
    }

    const startDrag = (e: DragEvent) => {
      e.stopImmediatePropagation()
      cursorDown.value = true
      on(document, 'mousemove', mouseMoveDocumentHandler)
      on(document, 'mouseup', mouseUpDocumentHandler)
      document.onselectstart = () => false
    }

    const clickTrackHandler = (e: Event) => {
      const offset = Math.abs((e.target as HTMLElement).getBoundingClientRect()[bar.value.direction] - e[bar.value.client])
      const thumbHalf = (thumb.value[bar.value.offset] / 2)
      const thumbPositionPercentage = ((offset - thumbHalf) * 100 / instance.vnode.el[bar.value.offset])

      wrap.value[bar.value.scroll] = (thumbPositionPercentage * wrap.value[bar.value.scrollSize] / 100)
    }

    const clickThumbHandler = (e: DragEvent) => {
      if (e.ctrlKey || e.button === 2) {
        return
      }
      startDrag(e)
      barStore.value[bar.value.axis] =
        e.currentTarget[bar.value.offset] -
        (e[bar.value.client] - (e.currentTarget as HTMLElement).getBoundingClientRect()[bar.value.direction])
    }

    onUnmounted(() => {
      off(document, 'mouseup', mouseUpDocumentHandler)
    })

    return () =>
      h(
        'div',
        {
          class: ['rol-scrollbar__bar', 'is-' + bar.value.key],
          onMousedown: clickTrackHandler,
        },
        h('div', {
          ref: thumb,
          class: 'rol-scrollbar__thumb',
          onMousedown: clickThumbHandler,
          style: renderThumbStyle({
            size: props.size,
            move: props.move,
            bar: bar.value,
          }),
        }),
      )
  },
}
