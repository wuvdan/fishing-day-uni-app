<template>
	<div class="post-item-text-box ">
		<div class="post-item-header-box" style="margin-top: 15rpx; margin-left: 30rpx;">
			<image class="post-item-header-image" :src="model.headerIcon" mode=""></image>
			<text>{{model.userName}}</text>
		</div>
		<div class="post-item-text-text-box">
			<text class="comment-text-3-line">{{model.contentData.content}}</text>
		</div>
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
.post-item-text-box {
	background-color: #FFFFFF;
	border-bottom: solid 1px #e2e2e2;
}

.post-item-text-text-box {
	margin: 20rpx 30rpx 20rpx 30rpx;
}

.post-item-text-footer-box {
	margin: 20rpx 30rpx 10rpx 30rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
