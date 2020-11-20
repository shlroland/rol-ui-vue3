<template>
  <transition-group
    tag="ul"
    :class="['rol-upload-list','rool-upload-list--' + listType, { 'is-disabled': disabled }]"
    name="rol-list"
  >
    <li
      v-for="([id,file]) in files"
      :key="id"
      :class="['rol-upload-list__item',`is-${file.status}`, focusing ? 'focusing' : '']"
      tabindex="0"
      @focus="focusing = true"
      @blur="focusing = false"
      @click="onFileClicked"
    >
      <slot :file="file">
        <!-- <img src="" alt=""> -->
        <a class="rol-upload-list__item-name" @click="handleClick(file)">
          <rol-icon :name="['far','file-alt']"></rol-icon>
          {{ file.name }}
        </a>
        <label class="rol-upload-list__item-status-label">
          <rol-icon class="rol-icon-upload-success" :name="iconType"></rol-icon>
        </label>
        <rol-icon v-if="!disabled" class="rol-icon-close" :name="['far','times-circle']"></rol-icon>
        <i v-if="!disabled" class="rol-icon-close-tip">按delete可删除</i>
      </slot>
    </li>
  </transition-group>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import RolIcon from '@rol-ui/icon'
import { ListType, RolUploadFile } from './upload'

export default defineComponent({
  components: {
    RolIcon,
  },
  props: {
    files: {
      type: Map as PropType<Map<string, RolUploadFile>>,
      default: () => new Map(),
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
  setup(props) {
    const focusing = ref(false)

    const onFileClicked = (e: Event) => {
      ;(e.target as HTMLElement).focus()
    }

    const iconType = computed(() => {
      if (props.listType === 'text') {
        return ['far', 'check-circle']
      } else {
        return ['fas', 'check']
      }
    })

    const handleClick = () => {
      console.log(1)
    }

    return {
      focusing,
      onFileClicked,
      handleClick,
      iconType,
    }
  },
})
</script>

<style>
</style>
