<template>
	<div class="post-item-one-image-and-text-box ">
		<div class="post-item-header-box" style="margin-top: 15rpx; margin-left: 30rpx;">
			<image class="post-item-header-image" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F99%2Fa7%2Fef%2F99a7ef12a7d254862af1956ace3af1b5.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654413743&t=41215eabee1addf5993c012707b0c186" mode=""></image>
			<text>用户昵称</text>
		</div>
		<div class="post-item-one-image-and-text-content-box">
			<text class="comment-text-4-line">这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容</text>
			<img src="https://img0.baidu.com/it/u=4099742550,108429572&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500" />
		</div>
		<div class="post-item-one-image-and-text-footer-box">
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
.post-item-one-image-and-text-box {
	background-color: #FFFFFF;
	border-bottom: solid 1px #e2e2e2;
}

.post-item-one-image-and-text-content-box {
	margin: 20rpx 30rpx 20rpx 30rpx;
	display: flex;
}

.post-item-one-image-and-text-content-box img{
	height: 150rpx;
	width: 200rpx;
	margin-left: 30rpx;
}

.post-item-one-image-and-text-footer-box {
	margin: 20rpx 30rpx 10rpx 30rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
