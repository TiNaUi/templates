<template>
  <view class="loading" v-if="show" :style="fixed ? { position: 'fixed' } : {}">
    <view class="loading-center">
      <view class="loading-center-absolute">
        <view class="object" id="object_one"></view>
        <view class="object" id="object_two"></view>
        <view class="object" id="object_three"></view>
        <view class="object" id="object_four"></view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>

defineOptions({
  name: 'Loading'
})

const { show, fixed = true } = defineProps<{
  show: boolean,
  fixed: boolean
}>()

</script>

<style lang="scss">
.loading {
  height: 100%;
  margin-top: 0;
  // position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.loading-center {
  height: 100%;
  position: relative;
  width: 100%;
}

.loading-center-absolute {
  animation: loading-center-absolute 1s infinite;
  height: 60px;
  left: 50%;
  margin-left: -30px;
  margin-top: -30px;
  position: absolute;
  top: 50%;
  width: 60px;
}

.object {
  background-color: #458ffc;
  border-radius: 50% 50% 50% 50%;
  float: left;
  height: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  width: 20px;
}

.object:nth-child(2n+0) {
  margin-right: 0;
}

#object_one {
  animation: object_one 1s infinite;
}

#object_two {
  animation: object_two 1s infinite;
}

#object_three {
  animation: object_three 1s infinite;
}

#object_four {
  animation: object_four 1s infinite;
}

@-webkit-keyframes loading-center-absolute {
  100% {
    transform: rotate(1turn);
  }
}

@keyframes loading-center-absolute {
  100% {
    transform: rotate(1turn);
  }
}

@-webkit-keyframes object_one {
  50% {
    transform: translate(20px, 20px);
  }
}

@keyframes object_one {
  50% {
    transform: translate(20px, 20px);
  }
}

@-webkit-keyframes object_two {
  50% {
    transform: translate(-20px, 20px);
  }
}

@keyframes object_two {
  50% {
    transform: translate(-20px, 20px);
  }
}

@-webkit-keyframes object_three {
  50% {
    transform: translate(20px, -20px);
  }
}

@keyframes object_three {
  50% {
    transform: translate(20px, -20px);
  }
}

@-webkit-keyframes object_four {
  50% {
    transform: translate(-20px, -20px);
  }
}

@keyframes object_four {
  50% {
    transform: translate(-20px, -20px);
  }
}
</style>
