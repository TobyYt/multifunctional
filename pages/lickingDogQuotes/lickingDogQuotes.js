import {
  getTianGou
} from "../../api/home"

Page({
  data: {
    result: "",
  },

  onLoad(options) {
    this.fetchGetRecorded()
  },

  // 疯狂星期四
  async fetchGetRecorded() {
    const res = await getTianGou()
    if (res.code === 200) {
      this.setData({
        result: res.content
      })
    }
  },

  // 再来一条
  onGetKfc() {
    this.fetchGetRecorded()
  },

  // 复制
  onCopy() {
    wx.setClipboardData({
      data: this.data.result,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
          icon: 'none',
          duration: 2000
        })
      },
    });
  },

  // 分享
  onShareAppMessage: function () {
    return {
      title: this.data.result,
      path: 'pages/lickingDogQuotes/lickingDogQuotes',
      desc: this.data.result
    }
  }
})