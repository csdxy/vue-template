import jsonp from 'common/js/jsonp'
import { options } from './config'
import axios from 'axios'

export function getXmlData() {
  const url = './static/data.json'
  const data = {}
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getJsonpData() {
  const url = './static/data.js'
  const data = {}
  return jsonp(url, data, options)
}