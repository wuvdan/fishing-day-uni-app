<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
@import "uview-ui/index.scss";

.container {
	background-color: #f8f8f8;
	display: flex;
	flex-direction: column;
	/*  #ifdef  H5 */
	min-height: calc(100vh - 44px - var(--status-bar-height));
	/*  #endif  */
	
	/*  #ifndef  H5 */
	min-height: calc(100vh);
	/*  #endif  */
}

.comment-flex-center {
	display: flex;
	align-items: center;
	justify-content: center;
}

.comment-text-3-line {
text-overflow:ellipsis;
overflow:hidden;
display:-webkit-box;
-webkit-line-clamp:3;
/*! autoprefixer:off */
-webkit-box-orient:vertical;
}

.comment-text-4-line {
text-overflow:ellipsis;
overflow:hidden;
display:-webkit-box;
-webkit-line-clamp:4;
/*! autoprefixer:off */
-webkit-box-orient:vertical;
}
	
</style>
