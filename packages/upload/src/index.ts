import { defineComponent, h } from 'vue'
import { uploadProps } from './useUpload'
import Upload from './upload.vue'

export default defineComponent({
  name: 'RolUpload',
  components: { Upload },
  props: uploadProps,
  setup(props, { slots }) {
    return () => h(Upload, {}, null)
  },
})
