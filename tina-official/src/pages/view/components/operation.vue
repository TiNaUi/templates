<template>
  <view class="jiangqie-operation" wx:if="{{post.switch_comment==1}}">
    <view
      class="jiangqie-operation-left jiangqie-col-5 jiangqie-height-full jiangqie-ptop-zero"
    >
      <view
        bindtap="__e"
        class="jiangqie-btn-comment"
        data-event-opts="{{[ [ 'tap',[ [ 'commentClickAction',['$event'] ] ] ] ]}}"
        >发表你的评论...</view
      >
    </view>
    <view class="jiangqie-operation-right jiangqie-right-flex jiangqie-col-7">
      <view
        bindtap="__e"
        class="jiangqie-operation-item"
        data-event-opts="{{[ [ 'tap',[ [ 'commentClickAction',['$event'] ] ] ] ]}}"
        hoverClass="opcity"
        hoverStayTime="150"
      >
        <image mode="widthFix" src="/static/images/btn_com.png"></image>
        <text>{{ post.comment_count }}</text>
      </view>
      <view
        bindtap="__e"
        class="jiangqie-operation-item"
        data-event-opts="{{[ [ 'tap',[ [ 'likeClickAction',['$event'] ] ] ] ]}}"
      >
        <image
          mode="widthFix"
          src="/static/images/btn_fav_on.png"
          wx:if="{{post_like==1}}"
        ></image>
        <image
         
          mode="widthFix"
          src="/static/images/btn_fav.png"
          wx:else
        ></image>
        <text>{{ like_count }}</text>
      </view>
      <view
        bindtap="__e"
        class="jiangqie-operation-item"
        data-event-opts="{{[ [ 'tap',[ [ 'favoriteClickAction',['$event'] ] ] ] ]}}"
      >
        <image
          mode="widthFix"
          src="/static/images/btn_star_on.png"
          wx:if="{{post_favorite==1}}"
        ></image>
        <image
          mode="widthFix"
          src="/static/images/btn_star.png"
          wx:else
        ></image>
        <text>{{ post.favorites }}</text>
      </view>
      <button
        class="jiangqie-operation-item"
        hoverClass="opcity"
        hoverStayTime="150"
        openType="share"
      >
        <image mode="widthFix" src="/static/images/btn_share.png"></image>
      </button>
    </view>
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: ''
})
</script>

<style lang="scss" scoped></style>
