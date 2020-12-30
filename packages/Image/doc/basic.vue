<template>
  <div style="width: 100%;">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="demonstration">{{ fit }}</span>
      <Image style="width: 100px; height: 100px;" :src="url" :fit="fit" />
    </div>
  </div>
  <div class="demo-image__lazy">
    <Image v-for="nurl in urls" :key="nurl" :src="nurl" lazy />
  </div>
  <div class="demo-image__preview">
    <Image style="width: 100px; height: 100px;" :src="url" :preview-src-list="srcList" />
  </div>
</template>

<script>
import Image from '@rol-ui/image'
export default {
  components: {
    Image,
  },
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601907229699&di=5bd995bc34ca49a20fa6d66116d53b4e&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170612%2Fe58ba916bfc6461f87f071f6262cb378_th.jpg',
      urls: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
      ],

      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
      ],
    }
  },
}
</script>

<style lang="scss">
.block {
  padding: 30px 0;
  text-align: center;
  border-right: 1px solid #eff2f6;
  display: inline-block;
  width: 20%;
  box-sizing: border-box;
  vertical-align: top;
  
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
}

.demo-image__lazy {
  height: 400px;
  overflow-y: auto;
}

.demo-image__lazy .rol-image {
  display: block;
  min-height: 200px;
  margin-bottom: 10px;
}
</style>
