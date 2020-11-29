<template>
  <transition-group
    tag="ul"
    :class="['rol-upload-list', 'rol-upload-list--' + listType, { 'is-disabled': disabled }]"
    name="rol-list"
  >
    <li
      v-for="file in files"
      :key="file.id"
      :class="['rol-upload-list__item', `is-${file.status}`, focusing ? 'focusing' : '']"
      tabindex="0"
      @keydown.delete="!disabled && handleRemove(file)"
      @focus="focusing = true"
      @blur="focusing = false"
      @click="onFileClicked"
    >
      <slot :file="file">
        <img
          v-if="file.status !== 'uploading' && ['picture-card', 'picture'].includes(listType)"
          class="rol-upload-list__item-thumbnail"
          :src="file.url"
          alt=""
        />
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
        <rol-progress
          v-if="file.status === 'uploading' && listType === 'text'"
          :stroke-width="2"
          :percentage="parsePercentage(file)"
        ></rol-progress>
        <span v-if="listType === 'picture-card'" class="rol-upload-list__item-actions" @click="handlePreview(file)">
          <span class="rol-upload-list__item-preview">
            <rol-icon name="search-plus"></rol-icon>
          </span>
          <span v-if="!disabled" class="rol-upload-list__item-delete" @click="handleRemove(file)">
            <rol-icon :name="['far', 'trash-alt']"></rol-icon>
          </span>
        </span>
      </slot>
    </li>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import RolIcon from '@rol-ui/icon'
import RolProgress from '@rol-ui/progress'
import { ListType, RolUploadFile } from './upload'
import { NOOP } from '@vue/shared'

export default defineComponent({
  components: {
    RolIcon,
    RolProgress,
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
    handlePreview: {
      type: Function as PropType<(file: RolUploadFile) => void>,
      default: () => NOOP,
    },
  },
  emits: ['remove'],
  setup(props, { emit }) {
    const focusing = ref(false)

    const parsePercentage = (file: RolUploadFile) => {
      return Math.floor((file.progress.bytesUploaded / file.progress.bytesTotal) * 100)
    }

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
      props.handlePreview(file)
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
      parsePercentage,
    }
  },
})
</script>

<style></style>
