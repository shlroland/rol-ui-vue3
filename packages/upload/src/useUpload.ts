import { PropType } from 'vue'
import { ListType } from './upload'
import { NOOP } from '@vue/shared'

export const uploadProps = {
  action: {
    type: String,
    required: true,
  },
  headers: {
    type: Object as PropType<Headers>,
    default: () => ({}),
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: 'file',
  },
  drag: {
    type: Boolean,
    default: false,
  },
  withCredentials: Boolean,
  showFileList: {
    type: Boolean,
    default: true,
  },
  accept: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'select',
  },
  beforeUpload: {
    type: Function,
    default: NOOP,
  },
  beforeRemove: {
    type: Function,
    default: NOOP,
  },
  onRemove: {
    type: Function,
    default: NOOP,
  },
  onChange: {
    type: Function,
    default: NOOP,
  },
  onPreview: {
    type: Function,
    default: NOOP,
  },
  onSuccess: {
    type: Function,
    default: NOOP,
  },
  onProgress: {
    type: Function,
    default: NOOP,
  },
  onError: {
    type: Function,
    default: NOOP,
  },
  onExceed: {
    type: Function,
    default:  NOOP,
  },
  fileList: {
    type: Array,
    default: () => {
      return []
    },
  },
  autoUpload: {
    type: Boolean,
    default: true,
  },
  listType: {
    type: String as PropType<ListType>,
    default: 'text' as ListType, // text,picture,picture-card
  },
  disabled: Boolean,
  limit: {
    type: Number as PropType<Nullable<number>>,
    default: null,
  },
}
