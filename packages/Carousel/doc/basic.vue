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
      <div class="block">
        <span class="demonstration">Click 指示器触发</span>
        <Carousel trigger="click" height="150px">
          <CarouselItem v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
    <div>
      <Carousel indicator-position="outside">
        <CarouselItem v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </CarouselItem>
      </Carousel>
    </div>
    <div>
      <Carousel :interval="5000" arrow="never">
        <CarouselItem v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </CarouselItem>
      </Carousel>
    </div>
    <div>
      <Carousel :interval="4000" type="card" height="200px">
        <CarouselItem v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </CarouselItem>
      </Carousel>
    </div>
    <div style="margin: 10px 0;">
      <Carousel height="200px" direction="vertical" :autoplay="false">
        <CarouselItem v-for="item in 3" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </CarouselItem>
      </Carousel>
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
