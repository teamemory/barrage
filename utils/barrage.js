class barrage {
  constructor() {
    // 返回的弹幕数组
    this.dm_arr = [];
    // 弹幕滑动时间是否固定
    this.time = true;
    // 颜色是否随机
    this.randomColor = false;
    // 数组首个弹幕的延迟时间
    this.firstStep = 0;
    // 弹幕之间的间隔
    this.step = 0.2;
    // 是否是第一次开启
    this.firstStart = true

  }
  // 开启弹幕
  start(arr) {
    if (this.firstStart) {
      var that = this
      arr.forEach(function (item, index) {
        that.getObj(item);
      })
      this.firstStart = false;
      return this.dm_arr;
    } else {
      return this.dm_arr;
    }
  }
  // 关闭弹幕
  close() {
    return [];
  }
  // 发送弹幕
  set(new_discuss) {
    this.getObj(new_discuss);
    return this.dm_arr;
  }
  // 创立一个弹幕对象
  getObj(item) {
    var that = this;
    var obj = {}
    obj.text = item.text ? item.text:'没数据';
    obj.img = item.img ? item.img :'../../images/icon.jpg';
    obj.top = Math.ceil(Math.random() * 100)
    obj.time = that.time ? 3 : Math.ceil(Math.random() * 10);
    obj.color = that.randomColor ? that.getRandomColor() : '#ffffff';
    obj.step = that.firstStep;
    that.dm_arr.push(obj);
    that.firstStep += that.step;
  }
  // 随机颜色
  getRandomColor() {
    let rgb = []
    for (let i = 0; i < 3; ++i) {
      let color = Math.floor(Math.random() * 256).toString(16)
      color = color.length == 1 ? '0' + color : color
      rgb.push(color)
    }
    return '#' + rgb.join('')
  }
}




module.exports = {
  barrage: barrage
}