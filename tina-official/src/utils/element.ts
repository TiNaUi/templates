export const rpx2px = (num: number) => num / 750 * uni.getSystemInfoSync().windowWidth
export const px2rpx = (num: number) => 750 / uni.getSystemInfoSync().windowWidth