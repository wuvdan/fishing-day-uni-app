<template>
	<div class="post-item-single-image-box">
		<div class="post-item-header-box" style="margin-top: 15rpx; margin-left: 30rpx;">
			<image class="post-item-header-image" :src="model.headerIcon" mode=""></image>
			<text>{{model.userName}}</text>
		</div>
		<u--image style="height: 334rpx; width: 500rpx; margin-left: 30rpx; margin-top: 20rpx;" :src="model.contentData.imageList[0].url"></u--image>
		<div class="post-item-text-footer-box">
			<div style="display: flex; align-items: center; justify-content: space-between;">
				<div style="font-size: 24rpx; font-weight: 400; color: #999999;">100评论</div>
				<div style="font-size: 24rpx; font-weight: 400; color: #999999; margin-left: 10rpx;">10分钟前</div>
			</div>
			<div style="font-size: 24rpx; font-weight: 400; color: #2979FF;">合肥市西七里塘</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		model: {
			type: Object,
			value: {}
		}
	}
}
</script>

<style>
@import url("./index.css");
.post-item-single-image-box {
	background-color: #FFFFFF;
	border-bottom: solid 1px #e2e2e2;
}

.post-item-single-image-image-box {
	margin-left: 30px;
}

.post-item-text-footer-box {
	margin: 20rpx 30rpx 10rpx 30rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
