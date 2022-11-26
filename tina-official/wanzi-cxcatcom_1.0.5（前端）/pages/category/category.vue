<template>
	<view>
		
		<view class="ui-sence-recommend">
		  <view class="ui-recommend-title">
		    分类栏目
		  </view>
		  <view class="ui-commend-subtitle">
		    最新、最全、最具特色的资讯
		    <view class="cell-arrow-top">
		      <image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAOCAYAAAFLFEySAAAABGdBTUEAALGPC/xhBQAAASRJREFUOBGlVLtuhDAQxIiGQxQUiC9JfanzV/dTqXN1fgREgRDCSAjhMCh7rH32ZVGQLPY1M7uLRRT5nnmeDc4j17btdXdgeLNuUPV9b9I0fVAEjbquDyFepbXeu2iaZuTxiBKkSQXK6plBpmliHjMxDrERC0s/mxxA8vR2CRTgAGRZ9pUkyTObE+m6TldVlTnhw8WqQHhEBBbaQouYUwwmEM0mArsgETgECoH3rQJUFMXlr/GXZYnGcXwvy/Iuv5GMNXhzWI1lYsPoDgvDgS3e+i/TPqLF6nFAuq7rZ57nF/dyYexhGHQcxx8Y3QO3Qi8FXwlZLJsjFfYKnhE6K2wJ/kdIKqy2D38zxlyVUm++b+QSnfVp1ZvG96ZxD/78zhJL638A4n5rjTdLRDAAAAAASUVORK5CYII="></image>
		    </view>
		  </view>
		  <view class="ui-sence-list">
		    <view @tap='bindCateByID(item.id)' class="ui-sence-item "  v-for="(item,index) in category" :key="index">
		      <view class="cell-sence-icon">
		        <image :src="item.cover"></image>
		      </view>
		      <view class="cell-content-box">
		        <view class="cell-content">
		          <view class="cell-title text-overflow">{{item.name}}
		          </view>
		          <view class="cell-subtitle">{{item.description}}</view>
		          <view class="cell-description">
		            <view class="cell-time">{{item.count}}篇文章</view>
		            <view class="cell-peoples">{{item.date}}</view>
		          </view>
		        </view>
		        <view class="cell-link">
		          <text class="icon-right-arrow"></text>
		        </view>
		      </view>
		    </view>
		  </view>
		</view>
	</view>
</template>

<script>
	import API from '@/api/api.js';
	export default {
		data() {
			return {
				isBottom:false,
				category:[]
			}
		},
		onLoad(){
			this.getCategories();
		},
		methods: {
			  getCategories: function () {
			    API.getCategories().then(res => {
			      let args = {}
			      if (res.length < 10) {
			          this.isLastPage= true;
			      }
			      if (this.isBottom) {
			        uni.showToast({
			          title: '加载下一页',
			          icon: 'loading',
			          duration: 1000
			        })
			        this.category = this.category.concat(res)
			        this.page = this.page + 1
			      } else {
			        this.category = res
			        this.page =this.page + 1
			      }
			      uni.stopPullDownRefresh()
			    })
			    .catch(err => {
			      console.log(err)
			     uni.stopPullDownRefresh()
			    })
			  },
			  bindCateByID:function(id){
				  uni.navigateTo({
				  	url:'/pages/list/list?id='+id
				  })
			  }
		}
	}
</script>

<style>
.ui-sence-recommend {
  padding: 100rpx 32rpx 32rpx 20rpx;
  text-align: left;
}

.ui-sence-recommend .ui-recommend-title {
  font-size: 40rpx;
  color: #262626;
  font-weight: bold;
}

.ui-sence-recommend .ui-commend-subtitle {
  height: 64rpx;
  border: solid 1rpx #fafafa;
  border-radius: 32rpx;
  font-size: 24rpx;
  color: #8c8c8c;
  display: inline-block;
  line-height: 64rpx;
  padding: 0 24rpx;
  background: #fbfbfb;
  box-shadow: 0 0 2rpx 0 rgba(0, 0, 0, 0.15);
  margin: 18rpx 0;
  position: relative;
}

.ui-sence-recommend .ui-commend-subtitle .cell-arrow-top {
  display: flex;
  position: absolute;
  top: -14rpx;
  left: 60rpx;
  width: 28rpx;
  height: 14rpx;
}

.ui-sence-recommend .ui-commend-subtitle .cell-arrow-top image {
  width: 100%;
  height: 100%;
}

.ui-sence-recommend .ui-sence-list {
  border-bottom: solid 1rpx #e8e8e8;
}

.ui-sence-recommend .ui-sence-list .ui-sence-item {
  padding: 24rpx 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ui-sence-recommend .ui-sence-list .ui-sence-item .cell-sence-icon {
  width: 144rpx;
  height: 144rpx;
  border-radius: 8rpx;
  overflow: hidden;
}

.ui-sence-recommend .ui-sence-list .ui-sence-item .cell-sence-icon image {
  width: 100%;
  height: 100%;
}

.ui-sence-recommend .ui-sence-list .ui-sence-item .cell-content-box {
  flex: 1;
  height: 144rpx;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 24rpx;
  text-align: left;
}

.ui-sence-recommend .ui-sence-list .ui-sence-item .cell-content-box .cell-content .cell-title {
  width: 418rpx;
  font-size: 32rpx;
  color: #595959;
  font-weight: bold;
  margin-top: 4rpx;
}

.ui-sence-recommend .ui-sence-list .ui-sence-item .cell-content-box .cell-content .cell-title .cell-hot-icon {
  width: 40rpx;
  margin-left: 12rpx;
}

.ui-sence-recommend .ui-sence-list .ui-sence-item .cell-content-box .cell-content .cell-subtitle {
  font-size: 24rpx;
  color: #8c8c8c;
  line-height: 40rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  margin-bottom:20rpx;
}

.ui-sence-recommend .ui-sence-list .ui-sence-item .cell-content-box .cell-content .cell-description {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 20rpx;
  color: #bfbfbf;
  margin-top: 10rpx;
}

.ui-sence-recommend .ui-sence-list .ui-sence-item .cell-content-box .cell-content .cell-description .cell-peoples {
  padding: 0 16rpx;
  position: relative;
}

.ui-sence-recommend .ui-sence-list .ui-sence-item .cell-content-box .cell-content .cell-description .cell-peoples::before {
  content: '';
  width: 1rpx;
  height: 16rpx;
  background: #e8e8e8;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
}

.ui-sence-recommend .ui-sence-list .ui-sence-item .cell-content-box .cell-link text {
  font-size: 24rpx;
  color: #bfbfbf;
  line-height: 144rpx;
}

</style>
