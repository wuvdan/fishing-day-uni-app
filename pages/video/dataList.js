
const dateLists = [
	{
		id: 1,
		state: "pause",//视频初始状态 pause=暂停  play=播放
		video: "https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4",//视频地址
		is_poster: true,//是否显示封面图
		poster: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=269701426,3346071432&fm=26&gp=0.jpg",//封面图地址
		avatar: "http://img2.imgtn.bdimg.com/it/u=3208586113,2688222785&fm=26&gp=0.jpg",//用户头像地址，
		is_thumb: 0,//是否点赞，1=已经点赞，0=还没有点赞
		thumb_num: 29,//总点赞数量
		comment_num: 48,//总评论数量
		content_raw: "今天天气正不错，是一个很好的日子，来吧，打球，疯狂的来一场比赛，我等这场较量很久了",//视频标题
	},
	{
		id: 2,
		state: "pause",
		video: "https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-02.mp4",
		is_poster: true,
		poster: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4020517312,4048425275&fm=26&gp=0.jpg",//封面图地址
		avatar: "http://img2.imgtn.bdimg.com/it/u=1858137112,3715794968&fm=26&gp=0.jpg",
		is_thumb: 0,
		thumb_num: 38,
		comment_num: 45,
		content_raw: "是一个很好的日子，来吧，打球，疯狂的来一场比赛，我等这场较量很久了",
	},
	{
		id: 3,
		state: "pause",
		video: "https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-03.mp4",
		is_poster: true,
		poster: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2751113705,4207747395&fm=26&gp=0.jpg",//封面图地址
		avatar: "http://img5.imgtn.bdimg.com/it/u=3196197975,1282739574&fm=11&gp=0.jpg",
		is_thumb: 0,
		thumb_num: 62,
		comment_num: 989,
		content_raw: "疯狂的来一场比赛，我等这场较量很久了",
	},
	{
		id: 4,
		state: "pause",
		video: "https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4",
		is_poster: true,
		poster: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2746067537,3711799996&fm=26&gp=0.jpg",//封面图地址
		avatar: "http://img4.imgtn.bdimg.com/it/u=2721857507,1843023063&fm=26&gp=0.jpg",
		is_thumb: 0,
		thumb_num: 45,
		comment_num: 86,
		content_raw: "今天天气正不错",
	},
	{
		id: 5,
		state: "pause",
		video: "https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-02.mp4",
		is_poster: true,
		poster: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1108644283,2015031574&fm=26&gp=0.jpg",//封面图地址
		avatar: "http://img0.imgtn.bdimg.com/it/u=3593446461,3335288407&fm=26&gp=0.jpg",
		is_thumb: 0,
		thumb_num: 123,
		comment_num: 456,
		content_raw: "疯狂的来一场比赛，我等这场较量很久了",
	},
	{
		id: 6,
		state: "pause",
		video: "https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-03.mp4",
		is_poster: true,
		poster: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1615834827,3996974875&fm=26&gp=0.jpg",//封面图地址
		avatar: "http://img2.imgtn.bdimg.com/it/u=3111672122,2184096802&fm=26&gp=0.jpg",
		is_thumb: 0,
		thumb_num: 34,
		comment_num: 59,
		content_raw: "今天天气正不错，是一个很好的日子，",
	},
];
export default {
	lists: dateLists
}