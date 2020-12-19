import Container from './src/container.vue'
import Aside from './src/aside.vue'
import Footer from './src/footer.vue'
import Header from './src/header.vue'
import Main from './src/main.vue'
import { App } from 'vue'

Container.install = (app: App): void => {
  app.component(Container.name, Container)
}
Aside.install = (app: App): void => {
  app.component(Aside.name, Aside)
}
Footer.install = (app: App): void => {
  app.component(Footer.name, Footer)
}
Header.install = (app: App): void => {
  app.component(Header.name, Header)
}
Main.install = (app: App): void => {
  app.component(Main.name, Main)
}

export { Container, Aside, Footer, Header, Main }
