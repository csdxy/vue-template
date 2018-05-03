<template>
  <div>
    <el-carousel
    :interval="5000"
    trigger="click"
    height="440px"
    arrow="never">
      <el-carousel-item v-for="item in imgurls" :key="item">
        <img :src="item">
        <div class="des"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script type="ecmascript-6">
export default {
  data() {
    return {
      imgnames: ['1001.jpg', '1002.jpg', '1003.jpg', '1004.jpg']
    }
  },
  computed: {
    imgurls() {
      return this.imgnames.map(v => {
        return './static/' + v
      })
    }
  }
}
</script>

<style lang="scss">
.el-carousel__item {
  img {
    width: 100%;
    height: 100%;
  }
  .des{
    position: absolute;
    top: 0px;
    left: 0px;
  }
}
.el-carousel__button {
  height: 3px;
  width: 30px;
}
</style>