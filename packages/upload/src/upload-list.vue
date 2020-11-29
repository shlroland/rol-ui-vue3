<template>
  <transition-group
    tag="ul"
    :class="['rol-upload-list', 'rool-upload-list--' + listType, { 'is-disabled': disabled }]"
    name="rol-list"
  >
    <li
      v-for="file in files"
      :key="file.id"
      :class="['rol-upload-list__item', `is-${file.status}`, focusing ? 'focusing' : '']"
      tabindex="0"
      @focus="focusing = true"
      @blur="focusing = false"
      @click="onFileClicked"
    >
      <slot :file="file">
        <!-- <img src="" alt=""> -->
        <a class="rol-upload-list__item-name" @click="handleClick(file)">
          <span class="rol-upload-list__icon-container">
            <rol-icon :name="['far', 'file-alt']"></rol-icon>
          </span>
          {{ file.name }}
        </a>
        <label class="rol-upload-list__item-status-label">
          <span class="rol-icon-upload-success">
            <rol-icon v-if="file.status === 'success'" :name="iconType(file.status)"></rol-icon>
          </span>
          <span class="rol-icon-upload-fail">
            <rol-icon v-if="file.status === 'fail'" :name="iconType(file.status)"></rol-icon>
          </span>
        </label>
        <span v-if="!disabled" class="rol-icon-close">
          <rol-icon :name="['far', 'times-circle']" @click="handleRemove(file)"></rol-icon>
        </span>
        <i v-if="!disabled" class="rol-icon-close-tip">按delete可删除</i>
      </slot>
    </li>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import RolIcon from '@rol-ui/icon'
import { ListType, RolUploadFile } from './upload'

export default defineComponent({
  components: {
    RolIcon,
  },
  props: {
    files: {
      type: Object as PropType<Record<string, RolUploadFile>>,
      default: () => ({}),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    listType: {
      type: String as PropType<ListType>,
      default: 'text',
    },
  },
  emits: ['remove'],
  setup(props, { emit }) {
    const focusing = ref(false)

    // watch(
    //   uploadFiles,
    //   newVal => {
    //     console.log(newVal)
    //   },
    //   { deep: true },
    // )

    const onFileClicked = (e: Event) => {
      ;(e.target as HTMLElement).focus()
    }

    const iconType = (status: string) => {
      if (props.listType === 'text') {
        if (status === 'success') {
          return ['far', 'check-circle']
        } else if (status === 'fail') {
          return ['fas', 'exclamation-circle']
        }
      } else {
        if (status === 'success') {
          return ['fas', 'check']
        } else if (status === 'fail') {
          return ['fas', 'exclamation']
        }
      }
    }

    const handleClick = file => {
      console.log(file)
    }

    const handleRemove = (file: RolUploadFile) => {
      emit('remove', file)
    }

    return {
      focusing,
      onFileClicked,
      handleClick,
      iconType,
      handleRemove,
    }
  },
})
</script>

<style></style>
