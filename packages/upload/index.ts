import { App } from 'vue'
import Upload from './src/index'

Upload.install = (app: App): void => {
    app.component(Upload.name, Upload)
}

export default Upload
