# vue-music

> Web Music APP for Vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

#音乐APP
    大致组件  
         1.主页    logo  个人中心  导航以及
         
	     2.推荐页
		    轮播图  歌单list  单机跳转到歌单组件   歌单信息由推荐页传
            递
            
	     3.歌手页面
		    展示所有歌手   两个scroll  同步滚动   滚动歌手信息时  加载当前组件高度位置  根据位置区间判断姓氏
		    点击歌手名称跳转到歌手展示组件  歌手信息由歌手页面传递 歌手展示页面加载所有歌手歌曲
            
	      4.排行页面 
		    类似
            
	      5.搜索页面
		    搜索框   优先搜索歌手  下面显示歌曲列表 
            
		    热门搜索
                 搜索历史  localStoreage 数组  
                 
	      6.播放器 
		    组件  传入歌曲信息 