<template>
	<div class="container">
		<u-swiper :list="bannerList" previousMargin="30" nextMargin="30" circular :autoplay="false" radius="5" bgColor="#ffffff"></u-swiper>
		<u-sticky bgColor="#fff">
			<u-tabs
				:activeStyle="{
					color: '#007AFF',
					fontWeight: 'bold',
					transform: 'scale(1.2)'
				}"
				:inactiveStyle="{
					color: '#606266',
					transform: 'scale(1)'
				}"
				:list="menuList"
				:current="menuCurrentIndex"
				:scrollable="false"
				@click="changeMenuIndexAction"
				style="height: 80rpx"
			></u-tabs>
		</u-sticky>
		<swiper style="height: 500px;" :autoplay="false" :current="menuCurrentIndex" @change="changePagesIndexAction">
			<swiper-item>
				<u-list style="height: 100%;">
					<u-list-item v-for="(item, index) in postModelArray" :key="index">
						<post-item :model="item"></post-item>
					</u-list-item>
				</u-list>
			</swiper-item>
			<swiper-item>
				<u-list style="height: 100%;">
					<u-list-item v-for="(item, index) in postModelArray" :key="index">
						<post-item :model="item"></post-item>
					</u-list-item>
				</u-list>
			</swiper-item>
			<swiper-item>
				<u-list style="height: 100%;">
					<u-list-item v-for="(item, index) in postModelArray" :key="index">
						<post-item :model="item"></post-item>
					</u-list-item>
				</u-list>
			</swiper-item>
			<swiper-item>
				<u-list style="height: 100%;">
					<u-list-item v-for="(item, index) in postModelArray" :key="index">
						<post-item :model="item"></post-item>
					</u-list-item>
				</u-list>
			</swiper-item>
			<swiper-item>
				<u-list style="height: 100%;">
					<u-list-item v-for="(item, index) in postModelArray" :key="index">
						<post-item :model="item"></post-item>
					</u-list-item>
				</u-list>
			</swiper-item>
			<swiper-item>
				<u-list style="height: 100%;">
					<u-list-item v-for="(item, index) in postModelArray" :key="index">
						<fish-pond-item></fish-pond-item>
					</u-list-item>
				</u-list>
			</swiper-item>
		</swiper>
		
		<button style="position: absolute; bottom: 100rpx; right: 30rpx; width: 80rpx; height: 80rpx; border-radius: 40rpx; background-color: #007AFF;" @click="gotoPostPage"></button>
	</div>
</template>

<script>
import postItem from '../../components/post-item/index.vue';
import fishPondItem from '../../components/fish-pond-list-item/index.vue';
import {dataJSON} from './test-post.js';
export default {
	components: {
		postItem,
		fishPondItem
	},
	data() {
		return {
			bannerList: [
				{
					image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					url: 'https://cdn.uviewui.com/uview/swiper/swiper1.png'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					url: 'https://cdn.uviewui.com/uview/swiper/swiper2.png'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					url: 'https://cdn.uviewui.com/uview/swiper/swiper3.png'
				}
			],
			menuList: [
				{
					name: '关注'
				},
				{
					name: '推荐'
				},
				{
					name: '本地'
				},
				{
					name: '教学'
				},
				{
					name: '求助'
				},
				{
					name: '鱼塘'
				}
			],
			menuCurrentIndex: 1,
			postModelArray: []
		};		
	},
	onLoad() {
		this.postModelArray = dataJSON
	},
	methods: {
		changeMenuIndexAction(event) {
			this.menuCurrentIndex = event.index;
		},

		changePagesIndexAction(event) {
			this.menuCurrentIndex = event.detail.current;
		},
		
		gotoPostPage() {
			uni.navigateTo({
				url: `/pages/post/index`
			})
		}
	}
};
</script>

<style></style>
