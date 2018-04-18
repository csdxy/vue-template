<template>
  <div class='hello'>
    <h2>xml数据</h2>
    <ul v-for='item in xmlData' :key='item.id'>
      <li>{{item.name}}</li>
    </ul>
    <h2>jsonp数据</h2>
    <ul v-for='item in jsonpData' :key='item.id'>
      <li>{{item.name}}</li>
    </ul>
    <h2>store数据</h2>
    <ul v-for='item in data' :key='item.id'>
      <li>{{item.name}}</li>
    </ul>
  </div>
</template>

<script type='esmascript-6'>
import { getXmlData, getJsonpData } from 'api/data'
import { ERR_OK } from 'api/config'
import { mapGetters, mapMutations } from 'vuex'

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
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
ul {
  list-style: none;
}
</style>
