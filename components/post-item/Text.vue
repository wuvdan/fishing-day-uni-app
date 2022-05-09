<template>
	<div class="post-item-text-text-box">
		<text class="comment-text-3-line">{{model.contentData.content}}</text>
	</div>
</template>

<script>
export default {
	props: {
		model: {
			type: Object,
			value: {}
		}
	},
	mounted() {
		console.log(this.model);
	}
}
</script>

<style>
.post-item-text-text-box {
	margin: 20rpx 30rpx 20rpx 30rpx;
}
</style>
