<template>
  <div class='hello'>
    <navagation-bar></navagation-bar>
    <carousel></carousel>
    <div class="section">
      <div class="section-inner">
        <ul class="list clearfix">
          <li class="item">
            <h3>五折普惠</h3>
            <p class="item-content">新老用户认证即享，云服务器、云数据购买时长越长越优惠，五折上云</p>
          </li>
          <li class="item">
            <h3>五折普惠</h3>
            <p class="item-content">新老用户认证即享，云服务器、云数据购买时长越长越优惠，五折上云</p>
          </li>
          <li class="item">
            <h3>五折普惠</h3>
            <p class="item-content">新老用户认证即享，云服务器、云数据购买时长越长越优惠，五折上云</p>
          </li>
          <li class="item">
            <h3>五折普惠</h3>
            <p class="item-content">新老用户认证即享，云服务器、云数据购买时长越长越优惠，五折上云</p>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import { getXmlData, getJsonpData } from 'api/data'
import { ERR_OK } from 'api/config'
import { mapGetters, mapMutations } from 'vuex'
import Carousel from 'base/carousel/carousel'
import NavagationBar from 'base/navigation-bar/navigation-bar'

export default {
  name: 'HelloWorld',
  created() {
    this._getXmlData()
    this._getJsonpData()
    this._setStoreData()
  },
  data() {
    return {
      xmlData: [],
      jsonpData: []
    }
  },
  computed: {
    ...mapGetters(['data'])
  },
  methods: {
    ...mapMutations({ setData: 'SET_DATA' }),
    _getXmlData() {
      getXmlData().then(res => {
        if (res.code === ERR_OK) {
          this.xmlData = res.data
        }
      })
    },
    _getJsonpData() {
      getJsonpData().then(res => {
        if (res.code === ERR_OK) {
          this.jsonpData = res.data
        }
      })
    },
    _setStoreData() {
      let data = [
        {
          'id': 1005,
          'name': '数据5'
        },
        {
          'id': 1006,
          'name': '数据6'
        }
      ]
      this.setData(data)
    }
  },
  components: {
    Carousel,
    NavagationBar
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss'>
.section{
  background: #f7f8fa;
  .section-inner{
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    box-sizing: border-box;
    padding: 0 10px;
  }
}
.list{
  position: relative;
  width: 100%;
  .item{
    float: left;
    padding: 30px 20px;
    width: 25%;
    height: 140px;
    box-sizing: border-box;
    border-right: 1px solid #dadee4;
    &:last-child{
      border-right: 1px solid transparent;
    }
    .item-content{
      margin-top: 10px;
      color: #666;
    }
  }
}

</style>
