<template>
	<post-item-text v-if="model.contentData.imageList.length === 0" :model="model"></post-item-text>
	<post-item-single-image v-else-if="model.contentData.content.length === 0 && model.contentData.imageList.length === 1" :model="model"></post-item-single-image>
	<post-item-one-image-and-text v-else-if="model.contentData.content.length > 0 && model.contentData.imageList.length === 1" :model="model"></post-item-one-image-and-text>
	<post-item-common v-else :model="model"></post-item-common>
</template>

<script>
import postItemText from './Common.vue';
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
</style>
