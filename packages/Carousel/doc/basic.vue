<template>
  <div class="demo-carousel">
    <div>
      <div class="block">
        <span class="demonstration">默认 Hover 指示器触发</span>
        <Carousel height="150px">
          <CarouselItem v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, CarouselItem } from '@rol-ui/carousel'
export default {
  components: {
    Carousel,
    CarouselItem,
  },
}
</script>

<style>
.demo-carousel .block {
  padding: 30px;
  text-align: center;
  border-right: 1px solid #eff2f6;
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
}

.demo-carousel .demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}

.rol-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.rol-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.rol-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
