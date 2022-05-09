<template>
	<div class="post-item-common-content-box">
		<text class="comment-text-3-line">{{model.contentData.content}}</text>
		<div class="post-item-common-imageGroup-box">
			<uni-grid :column="model.contentData.imageList.length === 2 ? 2 : 3" :showBorder="false" :highlight="false">
				<uni-grid-item
	                    v-for="(item, index) in model.contentData.imageList"
	                    :key="index"
	            >
				<div v-if="model.contentData.imageList.length != 2" class="post-item-common-image-box" :style="{paddingLeft: `${index} === 3 || ${index} === 6 || ${index} === 9 : '0px' : '10rpx'`}">
					<u--image :radius="10" :lazy-load="true" :showLoading="true" :src="item.icon" width="217rpx" height="217rpx" mode="aspectFill"></u--image>
				</div>
				<div v-else class="post-item-common-image-box" :style="{paddingLeft: `${index} === 1 :'0px' : '20rpx'`}">
					<u--image :radius="10" :lazy-load="true" :showLoading="true" :src="item.icon" width="335rpx" height="335rpx" mode="aspectFill"></u--image>
				</div>
	            </uni-grid-item>
			</uni-grid>
		</div>
	</div>
</template>

<script>
import uniGrid from '@/uni_modules/uni-grid/components/uni-grid/uni-grid.vue';
import uniGridItem from '@/uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.vue';
export default {
	components: {
		uniGrid,
		uniGridItem
	},
	props: {
		model: {
			type: Object,
			value: {}
		}
	}
}
</script>

<style>
.post-item-common-imageGroup-box {
	margin-top: 10rpx;
	background-color: #FFFFFF;
}

.post-item-common-content-box {
	margin: 20rpx 30rpx 10rpx 30rpx;
}

.post-item-common-image-box {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
}

</style>
