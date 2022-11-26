<template>
  <tn-nav-bar
    :bottomShadow="false" 
    :fixed="true"
  >{{ title }}</tn-nav-bar>
</template>

<script lang="ts" setup>

defineOptions({
  name: 'CustomerNavBarNormal'
})

defineProps<{
  title: string
}>()

</script>

<style lang="scss" scoped>

</style>
