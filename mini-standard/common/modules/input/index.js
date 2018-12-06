// common/modules/input/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mode: {
      type: String,
      value: 'single'
    },
    title: {
      type: String,
      value: '姓名'
    },
    placeholder: {
      type: String,
      value: ''
    },
    line: {
      type: String,
      value: ''
    }
  },
  ready() {
    // console.log(this.data);
  },
  /**
   * 组件的初始数据
   */
  data: {},
  /**
   * 组件的方法列表
   */
  methods: {
    inputer(e) {
      let value = e.detail.value;
      this.triggerEvent('input', value);
    }
  }
});
