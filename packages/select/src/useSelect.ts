import mitt from 'mitt'
import { computed, reactive } from 'vue'
import Select from './select'
import { RolSelectCtx, States } from './type'

export const useSelectStates = (props: { multiple?: boolean }) => {
  const selectEmitter = mitt()
  return reactive({
    options: [],
    cacheOptions: [],
    createdSelected: false,
    selected: props.multiple ? [] : ({} as any),
    inputLength: 20,
    inputWidth: 0,
    initialInputHeight: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: false,
    softFocus: false,
    selectedLabel: '',
    hoverIndex: -1,
    query: '',
    previousQuery: null,
    inputHovering: false,
    cachedPlaceHolder: '',
    menuVisibleOnFocus: false,
    isOnComposition: false,
    isSilentBlur: false,
    selectEmitter,
    currentPlaceholder: '请选择',
  })
}

export const useSelect = (props: InstanceType<typeof Select>['$props'], states: States, ctx: RolSelectCtx) => {
  const selectSize = computed(() => props.size || 'normal')

  return {
    selectSize,
  }
}
