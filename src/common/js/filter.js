import Vue from 'vue'
import moment from 'moment/moment'

Vue.filter('moment', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm:ss'
  // return moment(value).format(formatString); // value可以是普通日期 20170723
  return moment(value).format(formatString) // 这是时间戳转时间
})
