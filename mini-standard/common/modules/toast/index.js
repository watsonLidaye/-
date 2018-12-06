// common/modules/toast/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    toastType: {
      type: String,
      value: ''
    },
    toastInfo: {
      type: String,
      value: ''
    },
    toastVisible: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},
  ready() {
    console.log(this.data.toastType);
    console.log(this.data.toastInfo);
    console.log(this.data.toastVisible);
  },
  /**
   * 组件的方法列表
   */
  methods: {}
});
