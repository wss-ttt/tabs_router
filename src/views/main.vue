<template>
	<div class="wrapper">
		<el-tabs v-model="activeTab"
		 closable
		 type=""
		 @tab-remove="removeTab"
		 @tab-click="selectedTabHandle">
			<!--此处循环遍历的是当前页面的tabsList中的数据-->
			<!--<el-tab-pane v-for="(item,index) in tabsList"
			 :key="item.name"
			 :label="item.title"
			 :name="item.name">
				{{item.content}}
			</el-tab-pane>-->
			<!--此处循环的是router>index.js中的数据-->
			<el-tab-pane 
			v-for="(item,index) in this.$router.options.routes[0].children"
			 :key="item.path"
			 :label="item.meta.title"
			 :name="item.name">
				<!--{{item.content}}-->
				<router-view></router-view>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				activeTab: '', // 默认显示哪一个tab标签页
				tabsList: [
					/*{
						title: '首页',
						name: 'shouye',
						content: '我是首页'
					},
					{
						title: '博客',
						name: 'blog',
						content: '我是博客'
					},
					{
						title: '新闻',
						name: 'news',
						content: '我是新闻'
					},
					{
						title: '相册',
						name: 'photo',
						content: '我是相册'
					},*/
				]
			}
		},
		mounted() {
			// console.log(this.$router.options.routes[0].children);
		},
		created(){
			// 刷新页面回到main路由上来
			this.$router.push({name:'main'});
		},
		methods: {
			removeTab(targetName) {
				// console.log(targetName);   // 输出的name属性值  
				let tabs = this.tabsList;
				let activeName = this.activeTab; // 当前活动的面板
				// 如果删除的是当前激活的tab,需要让其后一个tab进行active或者前一个
				if(activeName === targetName) {
					tabs.forEach((tab, index) => {
						if(tab.name === targetName) {
							let nextTab = tabs[index + 1] || tabs[index - 1];
							if(nextTab) {
								activeName = nextTab.name;
							}
						}
					})
				}
				// 设置active的tab
				this.activeTab = activeName;
				// 删除tab标签页
				this.tabsList = tabs.filter(tab => tab.name !== targetName);
				console.log(this.tabsList);
			},
			selectedTabHandle(tab, event) {
				console.log(tab);
				
				this.$router.push({
					name: tab.name
				});

			}
		}

	}
</script>