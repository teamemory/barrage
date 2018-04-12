var barrage = require('../../utils/barrage.js');
var danmu = new barrage.barrage();
Page({
  data: {
    dm_list: [],
    arr1: [{ 'img': '../../images/icon.jpg', 'text': '我爱你' }, { 'img': '../../images/icon.jpg', 'text': '你好啊' }, { 'img': '../../images/icon.jpg', 'text': '天呐，我这么喜欢你' }, { 'img': '../../images/icon.jpg', 'text': '今天天气不错' }],
    show_first: false,
    danmu_num: 0
  },
  onLoad: function () {

  },
  // 发送弹幕
  set_danmu: function (e) {
    this.setData({
      dm_list: danmu.set(e.detail.value)
    })
  },
  // 打开关闭
  switch1Change: function (e) {
    var that = this;
    if (e.detail.value) {
      // 计算总共的弹幕条数
      that.setData({
        show_first: true,
        danmu_num: danmu.start(that.data.arr1).length
      })
      setTimeout(function () {
        that.setData({
          dm_list: danmu.start(that.data.arr1)
        })
      }, 2000)
    } else {
      that.setData({
        show_first: false,
        dm_list: danmu.close()
      })
    }
  }

})

