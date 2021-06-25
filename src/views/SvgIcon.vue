<template>
  <icon :data="tree" original width="200px" height="500px"></icon>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import tree from '@/assets/svgs/tree.svg'
export default class SvgIcon extends Vue {
  private tree: SvgIcon = tree
}
</script>
