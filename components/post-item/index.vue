<template>
	<div class="post-item-item-box">
		<div class="post-item-item-header-box" style="margin-top: 15rpx; margin-left: 30rpx;">
			<image class="post-item-header-image" :src="model.headerIcon" mode=""></image>
			<text style="font-size: 30rpx; font-weight: 430; color: #333333;">{{model.userName}}</text>
		</div>
		<div>
			<post-item-text v-if="model.contentData.imageList.length === 0" :model="model"></post-item-text>
			<post-item-single-image v-else-if="model.contentData.content.length === 0 && model.contentData.imageList.length === 1" :model="model"></post-item-single-image>
			<post-item-one-image-and-text v-else-if="model.contentData.content.length > 0 && model.contentData.imageList.length === 1" :model="model"></post-item-one-image-and-text>
			<post-item-common v-else :model="model"></post-item-common>
		</div>
		<div class="post-item-item-footer-box">
			<div style="display: flex; align-items: center; justify-content: space-between;">
				<div style="font-size: 24rpx; font-weight: 400; color: #999999;">{{model.footerData.comment}}</div>
				<div style="font-size: 24rpx; font-weight: 400; color: #999999; margin-left: 10rpx;">{{model.footerData.time}}</div>
			</div>
			<div style="font-size: 24rpx; font-weight: 400; color: #2979FF;">合肥市西七里塘</div>
		</div>
	</div>
</template>

<script>
import postItemText from './Text.vue';
import postItemSingleImage from './SingleImage.vue';
import postItemOneImageAndText from './OneImageAndText.vue';
import postItemCommon from './Common.vue';

export default {
	components: {
		postItemText,
		postItemSingleImage,
		postItemOneImageAndText,
		postItemCommon
	},
	props: {
		model: {
			type: Object,
			value: {}
		},
	}
}
</script>

<style>
	.post-item-item-box {
		background-color: #FFFFFF;
		border-bottom: solid 1px #e2e2e2;
	}
	
	.post-item-item-header-box {
		display: flex;
		align-items: center;
	}
	
	.post-item-header-box {
		display: flex;
		align-items: center;
		color: #666666;
		font-size: 30rpx;
		font-weight: 400;
	}
	
	.post-item-header-image {
		height: 60rpx;
		width: 60rpx;
		border-radius: 30rpx;
		margin-right: 20rpx;
	}
	
	.post-item-item-footer-box {
		margin: 20rpx 30rpx 10rpx 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
