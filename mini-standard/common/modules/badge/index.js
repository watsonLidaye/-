// common/modules/badge/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // primary default
    badgeCnt: {
      type: String,
      value: ''
    },
    badgeType: {
      type: String,
      value: ''
    },
    // normal press disable
    badgeStatus: {
      type: String,
      value: ''
    }
  },
  ready() {
    // console.log(this.data.badgeCnt)
    // console.log(this.data.badgeType)
    // console.log(this.data.badgeStatus)
  },
  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {}
});
