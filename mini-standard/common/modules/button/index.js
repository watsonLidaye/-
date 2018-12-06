// common/modules/button/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // type用于分组
    btnType: {
      type: String,
      value: ''
    },
    // size 控制按钮的大小
    btnSize: {
      type: String,
      value: ''
    },
    // status 用于按钮状态的区分
    btnStatus: {
      type: String,
      value: ''
    },
    // cnt 按钮文字
    btnCnt: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  ready(){
    // console.log(this.data.btnType)
    // console.log(this.data.btnSize)
    // console.log(this.data.btnStatus)
    // console.log(this.data.btnCnt)
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
