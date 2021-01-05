<template>
  <div class="home">
    <button
      data="a"
      data1="b"
      data2="c"
      datad="d"
      datae="e"
      ref="btn"
      class="btn"
      style="font-size:14px;"
      @click="text"
    >
      点击
    </button>

    <HelloWorld :msg="msg" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  msg = 'Welcome to Your Vue.js + TypeScript App';

  mounted() {
    console.log('hello, vue3');
  }

  text() {
    this.msg = (~~(Math.random() * 99 + 1)).toString();
  }
}
</script>

<style lang="scss">
.home {
  font-size: 12px;
}
</style>
