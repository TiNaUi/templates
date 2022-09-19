<template>
  <view class="container creator-apply-container">
    <view class="tips">点击添加图片说明/长按图片排序</view>
    <view class="drag__wrap tn-margin-top ">
      <tn-image-upload-drag :cols="3" :margin="1" v-model="list" :square="3 > 1" :itemHeight="40" :showDelete="true">
        <template #content="{ item, index }">
          <view class="sort-img-item">
            <image style="width: 100%; height: 100%; overflow: hidden;" :src="item" mode="aspectFill"></image>
          </view>
        </template>
        <template #append>
          <view class="tn-image-upload__add">
            <view class="tn-image-upload__item tn-image-upload__item-add" @click="selectFiles" hoverClass="tn-hover-class" hoverStayTime="150">
                <view class="tn-image-upload__item-add--icon tn-icon-add"></view>
                <view class="tn-image-upload__item-add__tips">上传图片</view>
            </view>
        </view>
        </template>
      </tn-image-upload-drag>
    </view>
    <view class="upload-form">
      <view class="tn-margin-top">
        <tn-list-view
          :card="true"
          backgroundColor="#EFEFEF"
        >
          <tn-list-cell :arrow="false" :arrowRight="false" :unlined="false" :lineLeft="false" :lineRight="false" padding="0px">
            <view class="input-container">
              <tn-input v-model="formData.title" @update:modelValue="inputHandler" type="text" placeholder="请输入标题"></tn-input>
              <view class="input-number">{{ titleLength }}/50</view>
            </view>
          </tn-list-cell>
          <tn-list-cell :arrow="true" :arrowRight="true" :unlined="false" :lineLeft="false" :lineRight="false" @click="selectCategory()">
            <view class="cell-list">
              <view class="list__left">
                <view class="list__left__text">选择分类</view>
              </view>
              <view class="list__right">{{ formData.categories.label }}</view>
            </view>
          </tn-list-cell>
          <tn-list-cell :arrow="true" :arrowRight="true" :unlined="false" :lineLeft="false" :lineRight="false" @click="openSelectTags()">
            <view class="cell-list">
              <view class="list__left">
                <view class="list__left__text">选择标签</view>
              </view>
              <view class="list__right">{{ formData.tags.join('/') }}</view>
            </view>
          </tn-list-cell>
          <tn-list-cell :arrow="true" :arrowRight="true" :unlined="false" :lineLeft="false" :lineRight="false">
            <view class="cell-list">
              <view class="list__left">
                <view class="list__left__text">下载权限</view>
              </view>
              <view class="list__right"></view>
            </view>
          </tn-list-cell>
          <tn-list-cell :arrow="false" :arrowRight="false" :unlined="true" :lineLeft="false" :lineRight="false">
            <tn-input v-model="formData.desc" type="textarea" placeholder="请输入描述"></tn-input>
            <view class="input-number">0/200</view>
          </tn-list-cell>
        </tn-list-view>
      </view>
    </view>
  </view>
  <tn-button width="100%" height="104" shape="default" :border="false" class="bottom-button">投稿作品</tn-button>
  <!-- category -->
  <tn-select
    v-model="cateShow"
    mode="single"
    title="请选择数据"
    :list="cates"
    :maskCloseable="true"
    @cancel="cancelCateSelect"
    @confirm="confirmCateSelect"
  >
  </tn-select>

  <!-- tags -->
  <tn-popup
    v-model="tagsShow"
    mode="bottom"
    width="100%"
    :popup="false"
    :maskCloseable="true"
    @close="closedPopup"
  >
    <view class="tags-wrapper">
      <tn-tag class="tag-item" :class="{ active: selectedIndexs.includes(index) }" v-for="(tag, index) in tags" :key="index" @click="selectTag(index)">{{ tag.name }}</tn-tag>
    </view>
    <view class="tags-button">
      <tn-button class="tags-cancel" @click="cancelTags">取消</tn-button>
      <tn-button class="tags-confirm" @click="confirmTags">确定</tn-button>
    </view>
  </tn-popup>
</template>

<script lang="ts" setup>
import { ref, computed, reactive, watch } from 'vue';

defineOptions({
  name: 'CreatorApply'
})

const formData = reactive({
  title: '',
  categories: {
    label: '',
    value: ''
  },
  tags: [] as string[],
  downloadPermession: true,
  desc: ''
})
const titleLength = computed(() => formData.title.length)
const inputHandler = (title: string) => {
  if(title.length > 50) {
    console.log('=====')
    formData.title = title.substring(0, 50)
    console.log('=====', formData.title)
  }
}

const list = ref([
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-bfeb00fba65b24a177b351798d2974c9_b.jpg&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665968389&t=745e3e471e2349bf2daa3e41b39d6da1',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F30%2F20200330172737_zgkvl.thumb.400_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665968389&t=6847883b7b7b95c3d93e35c2e2a595d3',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202006%2F27%2F20200627110821_jojos.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665968389&t=3eb56abb859ebe719d6e16ebe4b8eaa8',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201807%2F25%2F20180725020234_QYacy.thumb.400_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665968389&t=88e3bf16ec8e11ebca68c75a892ad42a',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F17%2F20200517211523_twwlv.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665968389&t=5cba23be1d4dd905bc24b59f79f79265',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201911%2F13%2F20191113184318_rwqxv.thumb.700_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665968389&t=03e8d47f18a81b079d9a2dca6f6ba326',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665968389&t=380fcfe79a9a1fa4db35f6296b457b53',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201703%2F18%2F20170318231357_RynUw.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665968389&t=a9e54e923acf2fb48e261c55ee66daa9'
])

const maxFileLength = 20
const canUploadLength = computed(() => maxFileLength - list.value.length)
const selectFiles = () => {
  console.log(uni)
  uni.chooseImage({
    count: canUploadLength.value > 9 ? 9 : canUploadLength.value,
    sourceType: ['album', 'camera'],
    sizeType: ['original', 'compressed'],
    success: (res) => {
      if (Array.isArray(res.tempFilePaths)) {
        res.tempFilePaths.forEach(file => {
          list.value.push(file)
        })
        doUpload()
        console.log(res)
      }
    },
    fail: () => {}
  })
}
const doUpload = () => {}

// ===== category ========
const cateShow = ref(false)
const cates = reactive([
  {
    value: 1,
    label: '美女'
  },
  {
    value: 2,
    label: '帅哥'
  },
  {
    value: 3,
    label: '风景'
  },
  {
    value: 4,
    label: '明星'
  },
  {
    value: 5,
    label: '动漫'
  },
  {
    value: 6,
    label: '游戏'
  },
  {
    value: 7,
    label: '星空'
  },
  {
    value: 8,
    label: '海景'
  },
  {
    value: 9,
    label: '静物'
  },
  {
    value: 10,
    label: '萌宠'
  },
  {
    value: 11,
    label: '街景'
  }
])
const selectCategory = () => {
  cateShow.value = true
}
const cancelCateSelect = () => {}
const confirmCateSelect = (event: any) => {
  console.log(event)
  formData.categories = event[0]
}

// ====== TAGS =====
const tagsShow = ref(false)
const tags = ref([
  {
    name: "小清新",
    color: "red"
  },
  {
    name: "动漫",
    color: "cyan"
  },
  {
    name: "沙雕",
    color: "blue"
  },
  {
    name: "搞笑",
    color: "green"
  },
  {
    name: "王者荣耀",
    color: "orange"
  },
  {
    name: "明星",
    color: "purplered"
  },
  {
    name: "日系动漫",
    color: "purple"
  },
  {
    name: "和平精英",
    color: "brown"
  },
  {
    name: "泰国",
    color: "yellowgreen"
  },
  {
    name: "风景",
    color: "grey"
} ])
const selectedIndexs = ref<number[]>([])
const selectTag = (index: number) => {
  const _selectedIndex = selectedIndexs.value.indexOf(index)
  if (_selectedIndex > -1) {
    selectedIndexs.value.splice(_selectedIndex, 1)
  } else {
    selectedIndexs.value.push(index)
  }
}
const openSelectTags = () => {
  tagsShow.value = true
}
const cancelTags = () => {
  tagsShow.value = false
}
const confirmTags = () => {
  formData.tags = tags.value.filter((tag, index) => selectedIndexs.value.includes(index)).map(tag => tag.name)
  cancelTags()
}
const closedPopup = () => {
  tagsShow.value = false
}
</script>

<style lang="scss" scoped>
.sort-img-item{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8upx;
  border-radius: 8upx;
  border: 1px solid var(--line-color);
  background: var(--bg-base);
  width: 100%;
  height: 100%;
}
.bottom{
  background: var(--bg-base);
  padding: 20upx 30upx;
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: 10;
}
.tn-image-upload__add {
  background-color: #e6e6e6;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  font-size: 30upx;
}
.tn-image-upload__item-add--icon {
  font-size: 60upx;
}
.input-container {
  display: flex;
  flex-wrap: nowrap;
  padding: 0upx 30rpx;
}
.input-number {
  font-size: 28upx;
  font-family: PingFang;
  font-weight: 400;
  color: #A6ACB0;
  text-align: right;
  line-height: 1.4em;
  padding-top: 16upx;
}
.bottom-button {
  width: 100%;
  height: 104upx;
  background: #17A0F7 !important;
  color: #fff;
  border: none;
  border-radius: 0 !important;
}

.tags-wrapper {
  padding: 30upx;
  .tag-item {
    border: 1px solid #dedede;
    border-radius: 16upx;
    padding: 8upx 32upx !important;
    height: 60upx !important;
    margin-bottom: 16upx !important;
    margin-right: 16upx !important;
    &.active {
      border: 1px solid $tn-main-color;
      color: $tn-main-color;
    }
  }
}
.tags-button {
  display: flex;
  flex-wrap: nowrap;
  margin: 30upx 0;
  justify-content: center;
  align-items: center;
}
.tags-cancel, .tags-confirm {
  border: 1px solid $tn-main-color;
  width: 240upx !important;
  margin-right: 60upx;
  color: $tn-main-color;
}
.tags-confirm {
  background-color: $tn-main-color !important;
  color: #fff;
}
.cell-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list {
  &__left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    &__icon, &__image {
      margin-right: 18rpx;
    }
    &__text {
      color: #A6ACB0;
    }
  }
  
  &__right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20upx;
  }
}
  
</style>
