// export { default as Carousel } from './src/carousel.vue'
// export { default as CarouselItem } from './src/carousel-item.vue'
import { App } from 'vue'
import Carousel from './src/carousel.vue'
import CarouselItem from './src/carousel-item.vue'

Carousel.install = (app: App): void => {
  app.component(Carousel.name, Carousel)
}

CarouselItem.install = (app: App): void => {
  app.component(CarouselItem.name, CarouselItem)
}

export { Carousel, CarouselItem }
