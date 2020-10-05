<template>
  <Popover v-model:visible="visible" v-bind="$attrs" trigger="click">
    <template #content>
      <div class="rol-popconfirm">
        <p class="rol-popconfirm__main">
          <Icon v-if="!hideIcon" :name="icon" class="rol-popconfirm__popIcon" :style="{ color: iconColor }" />
          {{ title }}
        </p>
        <div class="rol-popconfirm__action">
          <Button size="small" type="text" @click="cancel">
            {{ cancelButtonText }}
          </Button>
          <Button size="small" type="primary" @click="confirm">
            {{ confirmButtonText }}
          </Button>
        </div>
      </div>
    </template>

    <template #reference>
      <slot name="reference"></slot>
    </template>
  </Popover>
</template>

<script lang="ts">
import Popover from '@rol-ui/popover'
import Button, { RButtonType } from '@rol-ui/button'
import Icon from '@rol-ui/icon'
import { PropType, reactive, toRefs } from 'vue'
import { IconProps } from '@rol-ui/icon'
import { ON_CANCEL, ON_CONFIRM } from '@rol-ui/utils/constants'

export default {
  name: 'Popconfirm',
  components: {
    Popover,
    Button,
    Icon,
  },
  props: {
    title: {
      type: String,
    },
    confirmButtonText: {
      type: String,
      default: '确定',
    },
    cancelButtonText: {
      type: String,
      default: '取消',
    },
    confirmButtonType: {
      type: String as PropType<RButtonType>,
      default: '',
      validator: (val: string) => {
        return [
          'primary',
          'success',
          'warning',
          'danger',
          'info',
          'link',
          'text',
          'white',
          'light',
          'Dark',
          'black',
          '',
        ].includes(val)
      },
    },
    cancelButtonType: {
      type: String as PropType<RButtonType>,
      default: '',
      validator: (val: string) => {
        return [
          'primary',
          'success',
          'warning',
          'danger',
          'info',
          'link',
          'text',
          'white',
          'light',
          'Dark',
          'black',
          '',
        ].includes(val)
      },
    },
    icon: {
      type: [Object, Array, String] as PropType<IconProps>,
      default: 'exclamation-circle',
    },
    iconColor: {
      type: String,
      default: '#FF470F',
    },
    hideIcon: {
      type: Boolean,
      default: false,
    },
  },
  emits: [ON_CONFIRM, ON_CANCEL],
  setup(props, { emit }) {
    const state = reactive({
      visible: false,
    })

    const confirm = () => {
      state.visible = false
      emit(ON_CONFIRM)
    }

    const cancel = () => {
      state.visible = false
      emit(ON_CANCEL)
    }
    return {
      ...toRefs(state),
      confirm,
      cancel,
    }
  },
}
</script>

<style></style>
