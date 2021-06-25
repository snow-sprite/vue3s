<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="addVal">增加</button>
    <ul>
      <li v-for="li in lis" :key="li">{{ li }}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component'
export default class About extends Vue {
  lis: Array<number> = [1, 2]

  addVal = (): void => {
    this.lis.push(~~(Math.random() * 9) + 1)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/about.scss';

$color: $hotPink;
li {
  color: $color;
  font-weight: 700;
  margin: 10px;
}
h1 {
  width: 50%;
  margin: 0 auto;
  border: 3px solid palevioletred;
  box-shadow: 10px 10px 10px 0 hotpink;
}
</style>
