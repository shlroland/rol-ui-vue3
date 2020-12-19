import { App } from 'vue'
import Modal from './src/modal'

Modal.install = (app: App): void => {
    app.component(Modal.name, Modal)
}

export default Modal
