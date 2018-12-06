// common/modules/textarea/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    maxlength: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: ''
    }
  },
  ready() {},
  /**
   * 组件的初始数据
   */
  data: {
    tapCount: 0,
    autoHeight: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    listenTapping(e) {
      if (this.data.tapCount > 240) {
        this.setData({ autoHeight: true });
      } else {
        this.setData({ autoHeight: false });
      }
      this.setData({
        tapCount: e.detail.value.length
      });
      this.triggerEvent('input', e.detail.value);
    }
  }
});
