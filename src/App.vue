<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
    <fieldset>
      <legend>
        请打开控制台，查看原生滚动事件自增count与节流之后自增count值的差别
      </legend>
      <div style="text-align:left;">自定义指令：v-throttle</div>
      <div
        class="box"
        v-throttle="changeNum"
        v-watermark="{
          text: message,
          font: '48px',
          color: 'rgba(0, 250, 154, .2)',
          width: 150,
          height: 150,
          rotate: 30
        }"
      >
        <span>count: {{ num }}</span>
      </div>
    </fieldset>
  </div>
  <router-view />
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class Index extends Vue {
  num = 0;

  message = "©Cid";

  changeNum = () => {
    ++this.num;
  };
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.box {
  margin: 0 auto;
  height: 400px;
  border: 2px dotted hotpink;
  text-align: center;
  line-height: 400px;
  font-size: 30px;
}
</style>
