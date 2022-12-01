<template>
  <ListViweMode0 v-if="listMode === 0" :item="item" :index="index" :show_excerpt="show_excerpt" @itemClick="itemClick"/>
  <ListViweMode1 v-if="listMode === 1" :item="item" :index="index" :show_excerpt="show_excerpt" @itemClick="itemClick"/>
  <ListViweMode2 v-if="listMode === 2" :item="item" :index="index" :show_excerpt="show_excerpt" @itemClick="itemClick"/>
  <ListViweMode3 v-if="listMode === 3" :item="item" :index="index" :show_excerpt="show_excerpt" @itemClick="itemClick"/>
  <ListViweMode4 v-if="listMode === 4" :item="item" :index="index" :show_excerpt="show_excerpt" @itemClick="itemClick"/>
</template>

<script lang="ts" setup>
import ListViweMode0 from '@/components/listView/modeOne.vue'
import ListViweMode1 from '@/components/listView/modeTwo.vue'
import ListViweMode2 from '@/components/listView/modeThree.vue'
import ListViweMode3 from '@/components/listView/modeFore.vue'
import ListViweMode4 from '@/components/listView/modeFive.vue'
import { navigatorTo } from '../../utils/common';

defineOptions({
  name: 'HomeListView'
})

const emit = defineEmits<{
  (event: 'itemClick', params: { item: any, index: number }): void
}>()

const { listMode, item, index, show_excerpt } = defineProps<{
  listMode: number,
  show_excerpt: boolean
  item: any
  index: number
}>()

const itemClick = (params: { item: any, index: number }) => {
  emit('itemClick', params)
  navigatorTo({
    url: '/pages/view/index',
    query: {
      id: item.id
    }
  })
}
</script>

<style lang="scss" scoped>

</style>
