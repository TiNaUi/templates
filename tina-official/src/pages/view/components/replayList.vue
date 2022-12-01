<template>
  <view class="jiangqie-cmtbox" wx:if="{{post.switch_comment==1}}">
    <view class="jiangqie-cmt-title">
      <text>热门评论</text>
    </view>
    <block wx:if="{{comments.length>0}}">
      <view class="jiangqie-cmt-content" wx:for="{{comments}}" wx:key="id">
        <view class="jiangqie-cmt-avatar">
          <image
            bindtap="__e"
            data-event-opts="{{[ [ 'tap',[ [ 'avatarClickAction',['$event'] ] ] ] ]}}"
            data-user_id="{{item.user.id}}"
            mode="aspectFill"
            src="{{item.user.avatar.length>0?item.user.avatar:'/static/images/default_avatar.jpg'}}"
          ></image>
        </view>
        <view class="jiangqie-cmt-head"
          >{{ '' + item.user.name + ''
          }}<block wx:if="{{item.reply}}"> <text>回复</text>{{ item.reply }}</block>
        </view>
        <view class="jiangqie-cmt-text">
          <text class="jiangqie-cmt-text-world">{{ item.content }}</text>
        </view>
        <view class="jiangqie-cmt-time"
          >{{ '' + item.time + ''
          }}<text class="jiangqie-cmt-time" wx:if="{{item.approved!=1}}">待审核</text>
          <text
            bindtap="__e"
            data-event-opts="{{[ [ 'tap',[ [ 'commentReplyClickAction',['$event'] ] ] ] ]}}"
            data-id="{{item.id}}"
            >回复</text
          >
          <text
            bindtap="__e"
            class="comment-action"
            data-event-opts="{{[ [ 'tap',[ [ 'commentDeleteClickAction',['$event'] ] ] ] ]}}"
            data-id="{{item.id}}"
            wx:if="{{item.user.is_me==1}}"
            >删除</text
          >
        </view>
      </view>
      <jiangqie-loadmore
        bind:__l="__l"
        visible="{{loadding}}"
        vueId="3f3801a0-6"
      ></jiangqie-loadmore>
      <jiangqie-nomore bind:__l="__l" visible="{{!pullUpOn}}" vueId="3f3801a0-7"></jiangqie-nomore>
    </block>
    <block wx:else>
      <jiangqie-nodata
        bind:__l="__l"
        text="暂无评论，好尴尬啊..."
        vueId="3f3801a0-8"
        wx:if="{{loaded}}"
      ></jiangqie-nodata>
    </block>
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: ''
})
</script>

<style lang="scss" scoped></style>
