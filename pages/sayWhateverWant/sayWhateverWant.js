import { getShiPin } from "../../api/home"

Page({
  data: {
    result: "",
    title: "",
    imgUrl: "",
  },

  onLoad(options) {
    this.fetchGetRecorded()
  },

  // 疯狂星期四
  async fetchGetRecorded() {
    const res = await getShiPin()
    if(res.code === "200") {
      this.setData({
        result: res.data.url,
        title: res.data.title,
        imgUrl: res.data.img_url
      })
    }
  },

  // 再来一条
  onGetKfc() {
    this.fetchGetRecorded()
  },

  // 分享
  onShareAppMessage: function () {
    return {
      title: this.data.title,
      path: 'pages/sayWhateverWant/sayWhateverWant',
      imageUrl: this.data.img_url,
      desc: this.data.result
    }
  }
})