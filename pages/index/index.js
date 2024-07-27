import { getShiPin } from "../../api/home"

Page({
  data: {
    homeData: [
      { id: 1, text: "疯狂星期四", text2: "随机返回一条疯狂星期四", icon: '../../static/img/kfc.jpg' },
      { id: 2, text: "舔狗日记", text2: "随机返回一篇舔狗日记", icon: "../../static/img/kfc.jpg" },
      { id: 3, text: "随机精选视频", text2: "随机精选视频", icon: "../../static/img/kfc.jpg" },
      { id: 4, text: "历史上的今天", text2: "随机返回", icon: "../../static/img/kfc.jpg" },
      { id: 5, text: "网易云热评", text2: "随机返回一条网易云热评", icon: "../../static/img/kfc.jpg" },
      { id: 6, text: "天气查询", text2: "输入地址查询", icon: "../../static/img/kfc.jpg" },
    ],
  },

  onLoad() {
    this.test()
  },

  async test() {
    const res = await getShiPin()
  },

  navigateTo(id) {
    const urls = {
      1: '/pages/kfc/kfc',
      2: '/pages/lickingDogQuotes/lickingDogQuotes',
      3: '/pages/sayWhateverWant/sayWhateverWant',
    };
    const url = urls[id];
    if (url) {
      wx.navigateTo({ url });
    } else {
      console.warn('页面未定义', id);
    }
  },

  onItem(item) {
    const id = item.currentTarget.dataset.item.id;
    this.navigateTo(id);
  },
})