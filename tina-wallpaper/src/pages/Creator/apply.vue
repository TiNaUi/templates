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
  </view>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

defineOptions({
  name: ''
})

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
</style>
