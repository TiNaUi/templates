<template>
  <view class="hot-tag-container">
    <SectionTitle title="热门标签" v-if="hasTitle" v-bind="titleProps" />
    <tn-tag v-for="(tag, index) in tags" :fontSize="24" class="hot-tag" backgroundColor="#eeeeee" shape="circle" margin="10rpx 10rpx" width="auto" :key="index">{{ tag }}</tn-tag>
  </view>
</template>

<script lang="ts" setup>
import SectionTitle from '@/components/sectionTitle/index.vue';
import { ref } from 'vue';

defineOptions({
  name: 'HotTag'
})

defineProps({
  hasTitle: {
    type: Boolean,
    default: true
  },
  titleProps: {
    type: Object,
    default: () => ({})
  }
})

const tags = ref(['小清新', '动漫', '沙雕', '搞笑', '王者荣耀', '明星', '日系动漫', '和平精英', '泰国', '风景'])

</script>

<style lang="scss" scoped>
.hot-tag-container {
  .hot-tag {
    background: #eeeeee;
    color: #6e6e6e;
  }
}
</style>
