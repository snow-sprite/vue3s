# vue3s

### vue组件开发规范
```javascript
export default {
  // 1. 首先告诉开发者该组件是什么
  name: 'Test',
  // 2. 组件依赖
  components: {
    Foo,
    Bar
  },
  // 3. 作为一个子组件在与父组件进行通信时，优先书写父组件传递的数据（对象方式优于数组方式）
  props: {
    msg: {
      type: String,
      default: '默认值',
      required: true
    }
  },
  // 4. mixins, directives等依次书写
  mixins: ['Foo', 'Bar'],
  directives: {
    ...
  },
  // 5. 组件自身的属性
  data() {
    return {
      ...
    }
  },
  // 6. 外部依赖，内部状态都声明后，我们需要知道生命周期都做了什么
  created() {},
  mounted() {},
  beforeDestry() {},
  destryed() {},
  // 7. 最后组件内部有什么api可调，例如methods，
  methods: {
    getFoo() {},
    setBar() {}
  }
}
```