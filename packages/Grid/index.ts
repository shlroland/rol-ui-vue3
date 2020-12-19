// export { default as Row } from './src/Row'
// export { default as RCol } from './src/Col'
import { App } from 'vue'
import Row from './src/Row'
import Col from './src/Col'

Row.install = (app: App): void => {
  app.component(Row.name, Row)
}
Col.install = (app: App): void => {
  app.component(Col.name, Col)
}

export { Row, Col }
