<template>
	<div class="wrapper">
		
		<h1>index页面</h1>
		<router-view></router-view>
		
	</div>
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				activeTab:'shouye',  // 默认显示哪一个tab标签页
				tabsList:[
					{
						title:'首页',
						name:'shouye',
						content:'我是首页'
					},
					{
						title:'博客',
						name:'blog',
						content:'我是博客'
					},
					{
						title:'新闻',
						name:'news',
						content:'我是新闻'
					},
					{
						title:'相册',
						name:'photo',
						content:'我是相册'
					},
				]
			}
		},
		methods:{
			removeTab(targetName){
				// console.log(targetName);   // 输出的name属性值  
				let tabs = this.tabsList;
				let activeName = this.activeTab;   // 当前活动的面板
				// 如果删除的是当前激活的tab,需要让其后一个tab进行active或者前一个
				if(activeName === targetName){
					tabs.forEach((tab,index)=>{
						if(tab.name === targetName){
							let nextTab = tabs[index+1]||tabs[index-1];
							if(nextTab){
								activeName = nextTab.name;
							}
						}
					})
				}
				// 设置active的tab
				this.activeTab = activeName;
				// 删除tab标签页
				this.tabsList = tabs.filter(tab=>tab.name!==targetName);
				console.log(this.tabsList);
			},
			selectedTabHandle(tab,event){
				console.log(tab);
				console.log(event);
			},
			goto(){
				this.$router.push({name:"news"});
			}
		}
		
	}
</script>

<style scoped="scoped">
	.show{
		margin-top: 50px;
	}
</style>