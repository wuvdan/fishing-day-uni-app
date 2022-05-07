<template>
	<div class="box">
		<mp-html ref="html" style="margin: 10rpx 30rpx; font-size: 36rpx;" :content="html" :editable="true" @editInput="getText"/>
	</div>
</template>

<script>
import mpHtml from '@/components/mp-html/mp-html.vue';
export default {
	components: {
		mpHtml
	},
	data() {
		return {
			html: ''
		};
	},
	onLoad() {

	},
	methods: {
		getText(e) {
			console.log(e);
		}
	}
};
</script>

<style>

</style>
