<template>
  <view>
    <ApplyLogItem v-if="extraData.id === 'applyLogItem'" :item="item" :index="index" :extraData="extraData" />
    <CreatorListItem v-if="extraData.id === 'creatorList'" :item="item" :index="index" :extraData="extraData" />
  </view>
</template>

<script lang="ts" setup>
import { PropType, computed, defineAsyncComponent, markRaw } from 'vue';
import ApplyLogItem from '@/pages/Creator/components/ApplyLogItem/index.vue'
import CreatorListItem from '@/pages/Creator/components/creatorListItem/index.vue'

defineOptions({
  name: 'ZpPublicVirtualCell'
})

const props = defineProps({
  item: {
    type: Object as PropType<any>,
    default: null
  },
  index: {
    type: Number,
    default: 0
  },
  extraData: {
    type: Object as PropType<{ id: string }>,
    default: null
  }
})

</script>

<style lang="scss" scoped>

</style>
