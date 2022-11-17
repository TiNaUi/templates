<template>
  <view class="container creator-apply-container">
    <CustomerNavBarCapsule />
    <view class="tips" :style="'margin-top:'+customerNavBarHeight + 'px;color: #999;'">点击添加图片说明/长按图片排序</view>
    <view class="drag__wrap tn-margin-top ">
      <tn-image-upload-drag :cols="3" :margin="1" v-model="list" :square="3 > 1" :itemHeight="40" :showDelete="true">
        <template #content="{ item, index }">
          <view class="sort-img-item">
            <image style="width: 228rpx; height: 228rpx; overflow: hidden;" :src="item" mode="aspectFill"></image>
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
        <tn-list-view :card="true" backgroundColor="#EFEFEF">
          <tn-list-cell :arrow="false" :arrowRight="false" :unlined="false" :lineLeft="false" :lineRight="false" padding="0px">
            <view class="input-container">
              <tn-input v-model="formData.title" @update:modelValue="inputHandler" type="text" placeholder="请输入标题" style="width: 100%;"></tn-input>
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
              <view class="list__right">{{ formData.tags.map(tag => tag.tag_name).join('/') }}</view>
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
            <tn-input v-model="formData.info" type="textarea" placeholder="请输入描述"></tn-input>
            <view class="input-number">0/200</view>
          </tn-list-cell>
        </tn-list-view>
      </view>
    </view>
  </view>
  <view class="bottom-button" @click="applyHandler()">投 稿 作 品</view>
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
      <tn-tag class="tag-item" :class="{ active: selectedIndexs.includes(index) }" v-for="(tag, index) in tags" :key="index" @click="selectTag(index)">{{ tag.tag_name }}</tn-tag>
    </view>
    <view class="tags-button">
      <view class="tags-cancel" @click="cancelTags">取消</view>
      <view class="tags-confirm" @click="confirmTags">确定</view>
    </view>
  </tn-popup>
</template>

<script lang="ts" setup>
import { ref, computed, reactive, watch } from 'vue';
import CustomerNavBarCapsule from '@/components/customer-navbar/capsule.vue'
import { useAppStore, useTagsStore, useUserStore } from '@/store';
import { useCategoryStore } from '../../store/modules/category';
import { Tag } from '@/apis';
import { UserApi } from '../../apis/modules/user';
import { message } from '@tina-ui/ui';
import { useUpload } from '../../hooks/useUpload';

defineOptions({
  name: 'CreatorApply'
})

const appStore = useAppStore()
const userStore = useUserStore()
const tagStore = useTagsStore()
const cateStore = useCategoryStore()
const customerNavBarHeight = appStore.vuex_custom_bar_height

const userInfo = computed(() => userStore.userInfo)

const formData = reactive({
  title: '',
  categories: {
    label: '',
    value: ''
  },
  tags: [] as Tag.Item[],
  downloadPermession: true,
  info: ''
})
const titleLength = computed(() => formData.title.length)
const inputHandler = (title: string) => {
  if(title.length > 50) {
    formData.title = title.substring(0, 50)
  }
}

const list = ref<string[]>([])

const maxFileLength = 9
const canUploadLength = computed(() => maxFileLength - list.value.length)
const fileList = ref<UniApp.ChooseFileSuccessCallbackResultFile[]>([])
const selectFiles = () => {
  uni.chooseImage({
    count: canUploadLength.value > 9 ? 9 : canUploadLength.value,
    sourceType: ['album', 'camera'],
    sizeType: ['original', 'compressed'],
    success: (res) => {
      if (Array.isArray(res.tempFilePaths)) {
        res.tempFilePaths.forEach(file => {
          list.value.push(file)
        })
        fileList.value.push(...res.tempFiles as UniApp.ChooseFileSuccessCallbackResultFile[])
        console.log(res)
      }
    },
    fail: () => {}
  })
}
const doUpload = () => {}

// ===== category ========
const cateShow = ref(false)
const cates = computed(() => cateStore.cateList.map(item => ({ label: item.name, value: item.id })) || [])
const selectCategory = () => {
  cateShow.value = true
}
const cancelCateSelect = () => {}
const confirmCateSelect = (event: any) => {
  formData.categories = event[0]
}

// ====== TAGS =====
const tagsShow = ref(false)
const tags = computed(() => tagStore.tagList)
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
  formData.tags = tags.value.filter((tag, index) => selectedIndexs.value.includes(index))
  cancelTags()
}
const closedPopup = () => {
  tagsShow.value = false
}

const applyHandler = async () => {
  console.log(formData)
  try {
    const fileRes = await useUpload(fileList.value, { prefix: String(userInfo.value?.id || 'user') + '/' })
    console.log("🚀 ~ file: apply.vue ~ line 199 ~ applyHandler ~ fileRes", fileRes)
    const postData = {
      ...formData,
      category: +formData.categories.value,
      tags: formData.tags.map(tag => tag.id),
      user_id: userInfo.value?.id!,
      resource: fileRes.map(item => item.key)
    }
    UserApi.contribution(postData).then(res => {
      if (res.data.success) {
        message.toast('投稿成功，请耐心等待审核')
        uni.navigateTo({
          url: '/pages/Creator/applyLog'
        })
      }
    })
  } catch (e) {
    message.toast('上传失败，请重试')
  }
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
  flex: 1;
}
.bottom-button {
  width: 100%;
  height: 104upx;
  line-height: 104upx;
  background: #17A0F7 !important;
  color: #fff;
  border: none;
  border-radius: 0 !important;
  font-size: 36upx;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.tags-wrapper {
  padding: 30upx;
  display: flex;
  flex-wrap: wrap;
  .tag-item {
    border: 1px solid #dedede;
    border-radius: 16upx;
    padding: 8upx 32upx !important;
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
  height: 90upx;
  line-height: 90upx;
  text-align: center;
  border-radius: 16upx;
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
    width: 200upx;
    
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
