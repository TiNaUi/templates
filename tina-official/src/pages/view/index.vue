<template>
  <PageContent title="文章详情">
    <view class="zhuige-view-cover" v-if="post.show_header">
      <image mode="aspectFill" :src="post.thumbnail" />
    </view>
    <view
      class="jiangqie-article jiangqie-article-view"
      :style="post.show_header ? 'margin-top: -80rpx;' : ''"
    >
      <view class="jiangqie-view-head">
        <view class="jiangqie-view-head-icon" v-if="post.show_header">
          <view @click="clickPoster">
            <view class="custom-nav__search__icon tn-icon-moments"></view>
          </view>
          <button opentype="share">
            <view class="custom-nav__search__icon tn-icon-share"></view>
          </button>
        </view>
        <view class="jiangqie-title-opt">
          <text class="jiangqie-title-time">{{ post.time }}</text>
          <text class="jiangqie-title-type">{{ post.cats[0].name }}</text>
          <text class="jiangqie-title-count">{{ '浏览 ' + post.views }}</text>
        </view>
        <view class="jiangqie-title-text">{{ post.title }}</view>
      </view>
      <view
        class="jiangqie-article-head-ad"
        @click="adTopClick"
        :dataLink="ad_top.link"
        v-if="ad_top"
      >
        <img mode="widthFix" :src="ad_top.image" />
      </view>
      <view class="jiangqie-view-body">
        <mp-html :content="post.content"></mp-html>
        <template v-if="post.switch_score === 1 && post.switch_certify === 1">
          <view class="btn-jili" @click="clickCertify()">
            <text>{{ post.certify_require + ' 可直接阅读全文/下载' }}</text>
          </view>
          <view class="jiangqie-consume">
            <button @click="buyPostClick">
              {{ post.require_score + '积分阅读全文' }}
            </button>
          </view>
        </template>
        <block v-else>
          <view class="jiangqie-consume" v-if="post.switch_score == 1">
            <button @click="buyPostClick">
              {{ post.require_score + '积分阅读全文' }}
            </button>
          </view>
          <block v-else>
            <view class="jiangqie-identity-tips" v-if="post.switch_certify == 1">
              <view class="btn-jili" @click="clickCertify">
                <view>认证阅读全文</view>
              </view>
              <text>{{ post.certify_require + ' 可直接阅读全文/下载' }}</text>
            </view>
            <block v-else>
              <view class="btn-jili" @click="adJiliClick" v-if="post.switch_jili == 1 && show_jili">
                观看完整视频，阅读更多...
                <image mode="aspectFill" src="/static/images/more.png" />
              </view>
              <block v-else>
                <view
                  class="jiangqie-identity-tips"
                  @click="baiduDiskClick"
                  v-if="post.baidu_disk && post.baidu_disk.url && post.baidu_disk.name"
                >
                  <view v-if="post.baidu_disk.jili == 1 && show_baidu_jili"
                    >观看视频，获取网盘连接</view
                  >
                  <view v-else>百度网盘下载</view>
                </view>
              </block>
            </block>
          </block>
        </block>
        <view class="jiangqie-side-icon" @click="sideBackClick">
          <view>首页</view>
        </view>
        <view class="jiangqie-article-end">—— The End ——</view>
        <view class="jiangqie-cpinfo" v-if="copyright">{{ '' + copyright + '' }}</view>
        <view class="jiangqie-article-tag">
          <text
            @click="handlerTagClick"
            :dataId="item.id"
            :dataTag="item.name"
            v-for="(item, index) in post.tags"
            :key="item['id']"
            >{{ item.name }}</text
          >
        </view>
        <view class="jiangqie-article-adbox" v-if="ad.switch_banner == 'yes' && ad.id_banner != ''">
          <ad :unitid="ad.id_banner"></ad>
        </view>
      </view>
    </view>
    <view class="jiangqie-article-opt">
      <view class="jiangqie-article-line">
        <view
          class="jiangqie-article-btn"
          @click="subscribeClick"
        >
          <text>订阅更新</text>
          <image mode="aspectFill" src="/static/images/dingyue.png"></image>
        </view>
        <view
          class="jiangqie-article-btn"
          @click="clickPoster"
        >
          <text>分享海报</text>
          <image mode="aspectFill" src="/static/images/poster.png"></image>
        </view>
      </view>
      <view class="jiangqie-article-like">
        <view class="jiangqie-article-like-title">{{
          '- ' + like_count + '人已赞 -'
        }}</view>
        <view class="jiangqie-article-like-list">
          <image
            @click="avatarClickAction(+item.user_id)"
            mode="aspectFill"
            :src="item.avatar.length>0?item.avatar:'/static/images/default_avatar.jpg'"
            v-for="(item, index) in like_list"
            :key="index"
          ></image>
        </view>
      </view>
    </view>
    <view class="jiangqie-article-adbox" wx:if="{{ad.switch_video=='yes'&&ad.id_video!=''}}">
      <ad-custom :unitId="ad.id_video"></ad-custom>
    </view>
    <Recommend />
    <view bindtap="__e" class="jiangqie-view-adbox" data-event-opts="{{[ [ 'tap',[ [ 'adBottomClick',['$event'] ] ] ] ]}}" data-link="{{ad_bottom.link}}" wx:if="{{ad_bottom}}">
        <image mode="widthFix" src="{{ad_bottom.image}}"></image>
    </view>
    <ReplyList />
    <Operation />
  </PageContent>
</template>

<script lang="ts" setup>
import PageContent from '@/components/pageWrapper/content.vue'
import mpHtml from 'mp-html/dist/uni-app/components/mp-html/mp-html.vue'
import Recommend from './components/recommend.vue'
import ReplyList from './components/replayList.vue'
import Operation from './components/operation.vue'

import postData from '../../../mock/post.json'
import postInfo from '../../../mock/postInfo.json'
import { ref } from 'vue'

defineOptions({
  name: 'PageView'
})

const post = ref(postData.data as any)
console.log('🚀 ~ file: index.vue:126 ~ post', post)
const { ad_top, ad, copyright: copyrightInfo } = postInfo.data

const show_jili = ref(false)
const adJiliClick = () => {}

const clickPoster = () => {}
const adTopClick = () => {}
const clickCertify = () => {}
const buyPostClick = () => {}

// 百度相关
const show_baidu_jili = ref(false)
const baiduDiskClick = () => {}
const sideBackClick = () => {}

const copyright = ref(copyrightInfo)

const handlerTagClick = () => {}

const subscribeClick = () => {}


const like_list = ref(postData.data.like_list)
const like_count = ref(100)
const avatarClickAction = (userId: number) => {}
</script>

<style lang="scss" scoped src="./style.scss"></style>
