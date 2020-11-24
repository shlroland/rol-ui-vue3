<template>
  <div
    :class="[
      'rol-progress',
      `rol-progress--${type}`,
      status ? `is-${status}` : '',
      { 'rol-progress--without-text': !showText, 'rol-progress--text-inside': textInside },
    ]"
    aria-valuemin="0"
    aria-valuemax="100"
    role="progressbar"
  >
    <div v-if="type === 'line'" class="rol-progress-bar">
      <div class="rol-progress-bar__outer" :style="{ height: `${strokeWidth}px` }">
        <div class="rol-progress-bar__inner" :style="barStyle">
          <div v-if="showText && textInside" class="rol-progress-bar__innerText">{{ content }}</div>
        </div>
      </div>
    </div>
    <div v-if="showText && !textInside" class="rol-progress__text" :style="{ fontSize: `${progressTextSize}px` }">
      <template v-if="!status">{{ content }}</template>
      <rol-icon v-else :name="iconClass"></rol-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import RolIcon from '@rol-ui/icon'

export default defineComponent({
  name: 'RolProgress',
  components: {
    RolIcon,
  },
  props: {
    type: {
      type: String,
      default: 'line',
      validator: (val: string): boolean => ['line', 'circle', 'dashboard'].indexOf(val) > -1,
    },
    percentage: {
      type: Number,
      default: 0,
      required: true,
      validator: (val: number): boolean => val >= 0 && val <= 100,
    },
    status: {
      type: String,
      default: '',
      validator: (val: string): boolean => ['', 'success', 'exception', 'warning'].indexOf(val) > -1,
    },
    showText: {
      type: Boolean,
      default: true,
    },
    textInside: {
      type: Boolean,
      default: false,
    },
    strokeWidth: {
      type: Number,
      default: 6,
    },
    width: {
      type: Number,
      default: 126,
    },
    color: {
      type: [String, Array, Function],
      default: '',
    },
    format: {
      type: Function,
      default: (percentage: number): string => `${percentage}%`,
    },
  },
  setup(props) {
    const barStyle = computed(() => {
      return {
        width: `${props.percentage}%`,
        backgroundColor: getCurrentColor(props.percentage),
      }
    })

    const content = computed(() => {
      return props.format(props.percentage)
    })

    const progressTextSize = computed(() => {
      return props.type === 'line' ? 12 + props.strokeWidth * 0.4 : props.width * 0.111111 + 2
    })

    const iconClass = computed(() => {
      if (props.status === 'warning') {
        return 'exclamation-circle'
      }
      if (props.type === 'line') {
        return props.status === 'success' ? ['far', 'check-circle'] : ['far', 'times-circle']
      } else {
        return props.status === 'success' ? 'check' : 'times'
      }
    })

    const getCurrentColor = (percentage: number) => {
      const { color } = props
      if (typeof color === 'function') {
        return color(percentage)
      } else if (typeof color === 'string') {
        return color
      } else {
        const span = 100 / color.length
        const seriesColors = color.map((seriesColor, index) => {
          if (typeof seriesColor === 'string') {
            return {
              color: seriesColor,
              percentage: (index + 1) * span,
            }
          }
          return seriesColor
        })
        const colorArray = seriesColors.sort((a, b) => a.percentage - b.percentage)

        for (let i = 0; i < colorArray.length; i++) {
          if (colorArray[i].percentage > percentage) {
            return colorArray[i].color
          }
        }
        return colorArray[colorArray.length - 1]?.color
      }
    }

    return {
      barStyle,
      content,
      progressTextSize,
      iconClass,
    }
  },
})
</script>

<style></style>
