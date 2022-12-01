<template>
  <view
    class="jiangqie-list-view jiangqie-list-float-l"
    wx:if="{{recommend.length>0}}"
  >
    <view class="jiangqie-cmt-title">
      <text>猜你喜欢</text>
    </view>
    <view
      bindtap="__e"
      class="jiangqie-list-block jiangqie-list-float"
      data-event-opts="{{[ [ 'tap',[ [ 'recPostClickAction',['$event'] ] ] ] ]}}"
      data-id="{{item.id}}"
      data-link="{{item.direct_link}}"
      data-swith="{{item.direct_link_switch}}"
      wx:for="{{recommend}}"
      wx:key="index"
    >
      <view class="jiangqie-list-image">
        <image-loader
          bind:__l="__l"
          defaultImage="/static/images/placeholder800x400.png"
          lazyLoad="{{true}}"
          mode="aspectFill"
          originalImage="{{item.thumbnail}}"
          vueId="{{'3f3801a0-5-'+index}}"
        ></image-loader>
      </view>
      <view class="jiangqie-list-title">{{ item.title }}</view>
      <view class="jiangqie-list-info">
        <view class="jiangqie-list-cmt">{{ '浏览 ' + item.views + '' }}</view>
        <view class="jiangqie-list-cmt">{{ '点赞 ' + item.likes + '' }}</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: ''
})
</script>

<style lang="scss" scoped></style>
