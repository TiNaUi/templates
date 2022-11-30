<template>
  <ListViweMode0 v-if="listMode === 0" :item="item" :index="index" :show_excerpt="show_excerpt" />
  <ListViweMode1 v-if="listMode === 1" :item="item" :index="index" :show_excerpt="show_excerpt" />
  <ListViweMode2 v-if="listMode === 2" :item="item" :index="index" :show_excerpt="show_excerpt" />
  <ListViweMode3 v-if="listMode === 3" :item="item" :index="index" :show_excerpt="show_excerpt" />
  <ListViweMode4 v-if="listMode === 4" :item="item" :index="index" :show_excerpt="show_excerpt" />
</template>

<script lang="ts" setup>
import ListViweMode0 from '@/components/listView/modeOne.vue'
import ListViweMode1 from '@/components/listView/modeTwo.vue'
import ListViweMode2 from '@/components/listView/modeThree.vue'
import ListViweMode3 from '@/components/listView/modeFore.vue'
import ListViweMode4 from '@/components/listView/modeFive.vue'

defineOptions({
  name: 'HomeListView'
})

const { listMode, item, index, show_excerpt } = defineProps<{
  listMode: number,
  show_excerpt: boolean
  item: any
  index: number
}>()

</script>

<style lang="scss" scoped>

</style>
