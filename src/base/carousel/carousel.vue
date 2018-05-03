<template>
  <div>
    <el-carousel
    :interval="5000"
    trigger="click"
    height="440px"
    arrow="never">
      <el-carousel-item v-for="item in imgurls" :key="item">
        <img :src="item">
        <div class="des">ewrw但是范德萨发斯蒂芬第三方发的所发生的丰富的erewr</div>
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
  // background-color: #d3dce6;
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
</style>