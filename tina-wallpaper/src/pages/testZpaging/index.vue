<!-- 普通模式演示(vue) -->
<template>
	<view class="content">
		<z-paging ref="paging" :fixed="false" :use-page-scroll="true" v-model="state.dataList" @query="queryList">
			<!-- 需要固定在顶部不滚动的view放在slot="top"的view中，如果需要跟着滚动，则不要设置slot="top" -->
			<!-- 注意！此处的z-tabs为独立的组件，可替换为第三方的tabs，若需要使用z-tabs，请在插件市场搜索z-tabs并引入，否则会报插件找不到的错误 -->
			<!-- <z-tabs slot="top" @change="tabChange" :list="state.tabList"></z-tabs> -->
			<!-- 如果希望其他view跟着页面滚动，可以放在z-paging标签内 -->
			<view class="item-container">
        <view class="item" :id="'id'+index" v-for="(item,index) in state.dataList" :key="index" @click="itemClick(item,index)">
				<view class="item-title">{{item.title}}</view>
				<view class="item-detail">{{item.detail}}</view>
				<view class="item-line"></view>
			</view>
      </view>
		</z-paging>
	</view>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
const state = reactive({
  //v-model绑定的这个变量不要在分页请求结束中自己赋值！！！
  dataList: [] as Array<{ title: string; detail: string }>,
  tabList: ['测试1','测试2','测试3','测试4'],
  tabIndex: 0,
})

const paging = ref<any>(null)

function tabChange(index: number) {
  state.tabIndex = index;
  //当切换tab或搜索时请调用组件的reload方法，请勿直接调用：queryList方法！！
  paging.value.reload();
}
let index = 0
let pageSize = 10
function fetchList(params: any): Promise<{ list: Array<{ title: string; detail: string }> }> {
  return new Promise((resolve, reject) => {
    const data = [] as Array<{ title: string; detail: string }>
    for (let i = 0; i < pageSize; i++) {
      data.push({
        title: String(index + i),
        detail: `第${i+index}项`
      })
    }
    index = pageSize - 1
    resolve({
      list: data
    })
  })
}

function queryList(pageNo: number, pageSize: number) {
  //组件加载时会自动触发此方法，因此默认页面加载时会自动触发，无需手动调用
  //这里的pageNo和pageSize会自动计算好，直接传给服务器即可
  //模拟请求服务器获取分页数据，请替换成自己的网络请求
  const params = {
    pageNo: pageNo,
    pageSize: pageSize,
    type: state.tabIndex + 1
  }
  fetchList(params).then(res => {
    //将请求的结果数组传递给z-paging
    paging.value.complete(res.list);
  }).catch(res => {
    //如果请求失败写this.$refs.paging.complete(false);
    //注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
    //在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
    paging.value.complete(false);
  })
}
function itemClick(item: any, index: number) {
  console.log('点击了', item.title);
}
</script>

<style>
  .item-container {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
  }
	.item {
		position: relative;
		height: 550rpx;
    width: 50%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0rpx 30rpx;
	}

	.item-detail {
		padding: 5rpx 15rpx;
		border-radius: 10rpx;
		font-size: 28rpx;
		color: white;
		background-color: #007AFF;
	}

	.item-line {
		position: absolute;
		bottom: 0rpx;
		left: 0rpx;
		height: 1px;
		width: 100%;
		background-color: #eeeeee;
	}
</style>
