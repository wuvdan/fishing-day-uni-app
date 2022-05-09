<template>
		<div class="post-item-one-image-and-text-content-box">
			<text class="comment-text-4-line">{{model.contentData.content}}</text>
			<u--image :lazy-load="true" style="margin-left: 30rpx;" :showLoading="true" :src="model.contentData.imageList[0].icon" width="200rpx" height="150rpx" mode="aspectFill"></u--image>			
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
.post-item-one-image-and-text-content-box {
	margin: 20rpx 30rpx 20rpx 30rpx;
	display: flex;
}

</style>
