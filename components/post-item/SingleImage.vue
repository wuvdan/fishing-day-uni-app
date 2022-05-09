<template>
	<u--image :lazy-load="true" style="margin-left: 30rpx; margin-top: 20rpx;" :showLoading="true" :src="model.contentData.imageList[0].icon" :width="`${model.contentData.imageList[0].width}rpx`" :height="`${model.contentData.imageList[0].height}rpx`" mode="aspectFill"></u--image>
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
</style>
