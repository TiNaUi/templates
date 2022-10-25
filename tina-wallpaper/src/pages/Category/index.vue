<template>
  <PageWrapper>
    <view class="container">
      <HotTag :titleProps="{ hasRight: false }" />
      <SectionTitle title="分类" class="mt-30" :hasRight="false" />
      <CateList />
    </view>
  </PageWrapper>
</template>

<script lang="ts" setup>
import PageWrapper from '@/components/pageWrapper/index.vue';
import HotTag from '@/components/hotTag/index.vue';
import CateList from './components/cateList.vue';
import SectionTitle from '@/components/sectionTitle/index.vue';

defineOptions({
  name: 'Category'
})
</script>

<style lang="scss" scoped>

</style>
