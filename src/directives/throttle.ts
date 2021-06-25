export default {
  created() {},
  beforeMount() {},
  mounted(el: HTMLElement, { value }: { value: Function }) {
    if (typeof value !== 'function') {
      throw new Error('v-throttle: Error Type!(Must be a Function.)')
    }
    el['timer'] = null
    let count = 0
    el['_throttle'] = (delay = 100) => {
      let preTime = 0
      return () => {
        const currentTime = +Date.now()

        if (currentTime - preTime < delay) {
          clearTimeout(el['timer'])
          el['timer'] = setTimeout(() => {
            value()
            preTime = currentTime
            clearTimeout(el['timer'])
            el['timer'] = null
          }, delay)
        } else {
          value()
          preTime = currentTime
        }
        console.log('count:', ++count)
      }
    }

    el.addEventListener('mousemove', el['_throttle']())
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount(el: HTMLElement) {
    el.removeEventListener('mousemove', el['_throttle']())
    clearTimeout(el['timer'])
    el['timer'] = null
  },
  unMounted() {}
}
