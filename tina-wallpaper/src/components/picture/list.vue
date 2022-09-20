<template>
  <view class="picture-list-container">
    <Item class="item" v-for="(item, index) in lists" :key="index"/>
  </view>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import Item from './item.vue';

defineOptions({
  name: 'PictureList'
})
const props = defineProps({
  lists: {
    type: Array as PropType<any[]>,
    default: () => ([])
  }
})

</script>

<style lang="scss" scoped>
.picture-list-container {
  display: flex;
  flex-wrap: wrap;
  .picture-item, .item {
    margin-right: 30upx;
    &:nth-of-type(3n) {
      margin-right: 0upx;
    }
  }
}
</style>
