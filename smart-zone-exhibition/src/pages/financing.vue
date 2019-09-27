<template>
	<div class="hello">
		<Head :title="title" :isShow = false></Head>
		<div class="contBox">
			<!-- 投融资 -->
			<div class="financing">
				<div class="financTitle">
					<span>投资领域</span>
				</div>
				<div id="investment" class="addTz"></div>
				<div class="financTitle financTitle1 financTitle2">
					<span>项目投资阶段</span>
				</div>
				<div id="xmtz" class="addXmtz"></div>
			</div>
			<!-- 技术咨询 -->
			<div class="technology">
				<div class="top">
					<div class="item left">
						<div class="leftTitle">
							<div class="leftTop">
								<img src="../assets/imgs/tourongz_icon_zsbk@2x.png" alt="">
								<span>创意信息<b>(条)</b></span>
							</div>
							<div class="num">{{count}}</div>
						</div>
						<div id="originality" class="originality"></div>
					</div>
					<div class="item right">
						<div class="leftTitle">
							<div class="leftTop">
								<img src="../assets/imgs/tourongz_icon_zsbk@2x.png" alt="">
								<span>需求信息<b>(条)</b></span>
							</div>
							<div class="num">{{total}}</div>
						</div>
						<div id="servies" class="originality"></div>
					</div>
				</div>
				<div class="bottom">
					<div class="marquee">
						<div class="marquee_title">
							<span>创意名称</span>
							<span>创意发布时间</span>
							<span>创意公司</span>
						</div>
						<div class="marquee_box">
							<ul class="marquee_list" :class="{marquee_top:animate}" @webkitTransitionEnd="watchAni">
								<li v-for="(item,index) in ideaTable" :key="index">
									<span>{{item.ideaName}}</span>
									<span>{{item.publishtime}}</span>
									<span>{{item.orgname}}</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="marquee">
						<div class="marquee_title">
							<span>需求名称</span>
							<span>需求发布时间</span>
							<span>需求人</span>
						</div>
						<div class="marquee_box">
							<ul class="marquee_list" :class="{marquee_top:animate1}" @webkitTransitionEnd="watchAni1">
								<li v-for="(item,index) in tableDate1" :key="index">
									<span>{{item.demandname}}</span>
									<span>{{item.pushTime}}</span>
									<span>{{item.orgname}}</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!-- 发布统计 -->
			<div class="statistics">
				<div class="financTitle">
					<span>技术咨询</span>
				</div>
				<div id="jszx" class="addTz"></div>
				<div class="financTitle financTitle1">
					<span>投融资</span>
				</div>
				<div id="trz" class="addXmtz"></div>
			</div>
		</div>
	</div>
</template>

<script>
	var that;
	var timer;
	var timer1;
	import Head from '../components/header.vue';
	import echarts from 'echarts'
	import api from '../libs/api'
	export default {
		data() {
			return {
				title: "投融资·技术咨询",
				animate:false,
				animate1:false,

				investmentData:[{
								name: "企业服务", value: 21
							},{
								name: "医疗健康", value: 23
							}, {
								name: "文化娱乐", value: 22
							},{
								name: "电子商务", value: 19
							},{
								name: "工业", value: 10
							}],    					//投资领域
				projectInvest:[{name: "种子轮", value: 15}, 
							{name: "天使轮", value: 16}, 
							{name: "A轮", value: 20}, 
							{name: "B轮", value: 17}, 
							{name: "C轮", value: 10}],						//项目投资阶段
				progectName:["种子轮","天使轮","A轮","B轮","C轮"],

				ideaData:[{name: "影视", value: 253}, 
							{name: "动画", value: 300}, 
							{name: "设计", value: 326}, 
							{name: "品牌", value: 279}, 
							{name: "创意", value: 250}],    			 			//创意空间
				count:"3600",        						//创意信息数量
				ideaTable:[
					{
						"ideaName": "本地化校园oto服务app",
						"orgname": "盛元",
						"publishtime": "2019-05-14 10:56:46",
					},
					{
						"ideaName": "虚拟教育的发展规划建议",
						"orgname": "盛元",
						"publishtime": "2019-05-14 08:46:33",
					},
					{
						"ideaName": "共享“双”刀",
						"orgname": "盛元",
						"publishtime": "2019-05-14 11:47:50",
					},
					{
						"ideaName": "模拟音咖",
						"orgname": "盛元",
						"publishtime": "2019-05-14 14:21:20",
					},
					{
						"ideaName": "社交信息",
						"orgname": "盛元",
						"publishtime": "2019-05-14 11:47:50",
					},
					{
						"ideaName": "后街音痴",
						"orgname": "盛元",
						"publishtime": "2019-05-14 14:21:20",
					}
				],    						//创意信息表格
				tableDate1: [{demandname: "前端工程师", offloadTime: "2019-04-26", orgname: "盛元", pushTime: "2019-04-19"},
							{demandname: "项目经理", offloadTime: null, orgname: "盛元", pushTime: "2019-04-25"},
							{demandname: "UI支持", offloadTime: null, orgname: "盛元", pushTime: "2019-05-16"},
							{demandname: "java测试工程师", offloadTime: null, orgname: "盛元", pushTime: "2019-05-16"},
							{demandname: "实施人员", offloadTime: null, orgname: "盛元", pushTime: "2019-04-25"},
							{demandname: "测试经理", offloadTime: null, orgname: "盛元", pushTime: "2019-05-16"},
							{demandname: "产品经理", offloadTime: null, orgname: "盛元", pushTime: "2019-05-16"}],							//需求信息Table

				serviceData:[{name: "产品/UI设计", value: 1},
							{name: "APP开发", value: 2},
							{name: "JAVA设计", value: 3},
							{name: "前端开发", value: 1}],                         //服务众包
				total:"2764",

				originalityData:[225,345,162,634,221,152,163],                     //柱状图创意信息Y轴
				originalityY:[200,243,153,196,186,177,213,255],                        //柱状图需求信息Y轴
				originalityName:['2019-05-11','2019-05-12','2019-05-13','2019-05-14','2019-05-15','2019-05-16','2019-05-17'],                     //柱状图创意信息X轴

				personY:[103,122,163,172,50,20,16,45],                             //柱状图投融资投资人Y轴
				projectY:[132,152,142,263,342,213,123],  							//柱状图投融资投资项目Y轴
				personX:['2019-05-11','2019-05-12','2019-05-13','2019-05-14','2019-05-15','2019-05-16','2019-05-17']								//柱状图投融资X轴
			}
		},
		methods: {
			//创意空间
			idea(){
				that.get(api.getTechnology,{},function(res){
					console.log(res,'222222')
					if(res.code == 0){
						let data = res.data;
						// that.ideaData = data.list
						that.ideaData = [{name: "影视", value: 253}, 
							{name: "动画", value: 300}, 
							{name: "设计", value: 326}, 
							{name: "品牌", value: 279}, 
							{name: "创意", value: 250}]
						// that.count = data.count
						that.count = 3600
						that.ideaTable = data.list1
						// that.ideaTable = 
						if(that.ideaTable.length > 4){
							that.animate = true
						}else{
							that.animate = false
						}

						console.log(that.animate)
						that.originality()
					}
				})
			},
			originality() {
				let myChart = that.$echarts.init(document.getElementById('originality'));
				myChart.setOption({
					title: {
						text: '创意空间',
						fontSize: '9px',
						fontWeight: 'normal',
						textStyle: {
							color: '#ccc'
						}
					},

					tooltip: {
						trigger: 'item',
						formatter: "{b}: {c}个 ({d}%)"
					},

					series: [{
						name: '访问来源',
						type: 'pie',
						radius: '40%',
						center: ['46%', '50%'],
						data: that.ideaData,
						color: ['#A859FF', '#00FFF6', '#EA3DFF', '#34ABFF','#FF4F26','#9141FF','#FF9000',],
						roseType: 'radius',
						label: {
							normal: {
								textStyle: {
									color: '#fff'
								},
								formatter: '{b|{b}:} {per|{d}%}  ',
								rich: {
									a: {
										color: '#999',
										lineHeight: 22,
										align: 'center'
									},
									hr: {
										borderColor: '#aaa',
										width: '100%',
										borderWidth: 0.5,
										height: 0
									},
									b: {
										fontSize: 12,
										lineHeight: 33
									},
									per: {
										color: '#eee'
									}
								}
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '20',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								lineStyle: {
									color: '#28B1C7'
								},
								length: 5,
								length2: 10
							}
						},
						itemStyle: {
							normal: {
								color: '',
								shadowBlur: 200,
								shadowColor: 'rgba(0, 0, 0, 0.5)',
							}
						},

						animationType: 'scale',
						animationEasing: 'elasticOut',
						animationDelay: function(idx) {
							return Math.random() * 200;
						}
					}]
				})
			},
			//投资领域
			getInvestment(){
				that.get(api.getInvestment,{},function(res){
					console.log(res,'111111')
					if(res.code == 0){
						let data = res.data;
						let arr = [];
						// that.investmentData = data.list
						that.investmentData = [{
								name: "企业服务", value: 21
							},{
								name: "医疗健康", value: 23
							}, {
								name: "文化娱乐", value: 22
							},{
								name: "电子商务", value: 19
							},{
								name: "工业", value: 10
							}]
						// that.projectInvest = data.list1
						that.projectInvest = [{name: "种子轮", value: 15}, 
							{name: "天使轮", value: 16}, 
							{name: "A轮", value: 20}, 
							{name: "B轮", value: 17}, 
							{name: "C轮", value: 10}]
						that.projectInvest.forEach((v,k) => {
							arr.push(v.name)
						})
						that.progectName = arr;
						that.investment()
						that.getProject()
					}
				})
			},
			investment() {
				let myChart = that.$echarts.init(document.getElementById('investment'));
				myChart.setOption({
					backgroundColor: '#081422',

					title: {
						show: false //不显示title
					},
					//提示框组件
					tooltip: {
						trigger: 'item',
						formatter: "{b}: {c}个 ({d}%)"
					},
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: '50%',
						center: ['50%', '50%'],
						data: that.investmentData,
						color: ['#9141FF', '#00FFF6', '#FF9000', '#FF4169', '#75D800','#C499FF','#00FFA2','#00BAFF','#F6FF00','#75D800'],
						roseType: 'radius',
						label: {
							normal: {
								textStyle: {
									color: '#fff'
								},
								formatter: '{b|{b}：} {per|{d}%}  ',
								rich: {
									a: {
										color: '#999',
										lineHeight: 22,
										align: 'center'
									},
									hr: {
										borderColor: '#aaa',
										width: '100%',
										borderWidth: 0.5,
										height: 0
									},
									b: {
										fontSize: 12,
										lineHeight: 33
									},
									per: {
										color: '#eee'
									}
								}
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '15',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								lineStyle: {
									color: '#28B1C7'
								},
								smooth: 0.2,
								length: 10,
								length2: 10
							}
						},
						itemStyle: {
							normal: {
								color: '',
								shadowBlur: 200,
								shadowColor: 'rgba(0, 0, 0, 0.5)',
							}
						},

						animationType: 'scale',
						animationEasing: 'elasticOut',
						animationDelay: function(idx) {
							return Math.random() * 200;
						}
					}]
				})
			},
			getProject() {
				let myChart = that.$echarts.init(document.getElementById('xmtz'));
				myChart.setOption({
					backgroundColor: '#081422',
					tooltip: {
						trigger: 'item',
						formatter: "{b}: {c}个 ({d}%)"
					},
					legend: {
						orient: 'vertical',
						x: 'left',
						top:'20%',
						left:"10",
						data: that.progectName,
						textStyle:{
							color:'#fff'
						}
					},
					color: ['#FF4873', '#4C63F2', '#1FB5A5','#75D800','#C499FF','#00FFA2', '#FCCE10', '#E87C25'],
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['35%', '50%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '30',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data:that.projectInvest
					}]
				})
			},
			//技术咨询
			consultation(){
				that.get(api.getpublishCount,{},function(res){
					console.log(res,'333333')
					if(res.code == 0){
						let data = res.data;
						let arr = [];
						let arr1 = [];
						let personY = [];
						let personX = [];
						let projectY = [];
						data.list1.forEach((v,k) => {
							arr.push(v.value)
							arr1.push(v.label)
						})
						data.list2.forEach((v,k) => {
							personY.push(v.value)
							personX.push(v.label)
						})
						data.list3.forEach((v,k) => {
							projectY.push(v.value)
						})
						that.originalityData = arr;
						that.originalityName = arr1;
						that.personY = personY;
						that.personX = personX;
						that.projectY = projectY;
						that.cyInfo()
						that.trz()
					}
				})
			},
			//需求信息
			demandPush(){
				that.get(api.demandPush,{},function(res){
					console.log(res,'444')
					if(res.code == 0){
						let data = res.data;
						let arr = [];
						data.forEach((v,k) => {
							arr.push(v.count)
						})
						that.originalityY = arr;
						that.cyInfo()
					}
				})
			},
			cyInfo() {
				let myChart = that.$echarts.init(document.getElementById('jszx'));
				myChart.setOption({
					title: {
						text: '世界人口总量',
						show: false
					},
					tooltip: {
						trigger: 'axis',
						formatter:function(params)  {  
                            var relVal = params[0].name;  
                            for (var i = 0, l = params.length; i < l; i++) {  
                                    relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"条";  
                                }  
                            return relVal;  
                        },
						axisPointer: {
							type: 'shadow'
						}
					},
					legend: {
						data: ['创意信息', '需求信息'],
						right:10,
						textStyle:{
							color:'#fff'
						}
					},
					grid: {
						left: '2%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						data: that.originalityName,
						axisLine: {
							lineStyle: {
								color: '#eee'
							}
						},
						axisLabel: {
							rotate: -60
						}
					},
					yAxis: {
						name: '单位：条',
						type: 'value',
						axisLine: {
							lineStyle: {
								color: '#eee'
							}
						},
						nameTextStyle: {
							color: "#eee",
							fontSize: '12px'
						}
					},
					series: [{
							name: '创意信息',
							type: 'bar',
							barWidth:18,
							data: that.originalityData,
							itemStyle: {
								normal: {
									color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: '#039EE6'
									}, {
										offset: 1,
										color: '#7006D9'
									}])
								}
							}
						},
						{
							name: '需求信息',
							type: 'bar',
							barWidth:18,
							data: that.originalityY,
							itemStyle: {
								normal: {
									color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: '#28B2FA'
									}, {
										offset: 1,
										color: '#01D8B2'
									}])
								}
							}
						}
					]
				})
			},
			trz() {
				let myChart = that.$echarts.init(document.getElementById('trz'));
				myChart.setOption({
					title: {
						text: '世界人口总量',
						show: false
					},
					tooltip: {
						trigger: 'axis',
						formatter:function(params)  {  
                            var relVal = params[0].name;  
                            for (var i = 0, l = params.length; i < l; i++) {  
                                    relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"条";  
                                }  
                            return relVal;  
                        },
						axisPointer: {
							type: 'shadow'
						}
					},
					legend: {
						data: ['投资人', '投资项目'],
						right:10,
						textStyle:{
							color:'#fff'
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						data:that.personX,
						boundaryGap: [0, 0.01],
						axisLine: {
							lineStyle: {
								color: '#eee'
							}
						},
						nameTextStyle: {
							color: "#eee",
							fontSize: '12px'
						},
						axisLabel: {
							rotate: -60
						}
					},
					yAxis: {
						name: '单位：条',
						type: 'value',
						boundaryGap: [0, 0.01],
						axisLine: {
							lineStyle: {
								color: '#eee'
							}
						},
						nameTextStyle: {
							color: "#eee",
							fontSize: '12px'
						}
					},
					series: [{
							name: '投资人',
							type: 'bar',
							barWidth:18,
							data: that.personY,
							itemStyle: {
								normal: {
								color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: '#C2CAFF'
									}, {
										offset: 1,
										color: '#6452ED'
									}])
								}
							}
						},
						{
							name: '投资项目',
							type: 'bar',
							barWidth:18,
							data: that.projectY,
							itemStyle: {
								normal: {
								color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: '#BDFFF3'
									}, {
										offset: 1,
										color: '#70F7DF'
									}])
								}
							}
						}
					]
				});
			},
			//服务众包
			serviceStatistics(){
				that.get(api.serviceStatistics,{},function(res){
					console.log(res,'555')
					if(res.code == 0){
						let data = res.data;
						that.serviceData = data.service;
						that.total = data.total;
						that.servies()
					}
				})
			},
			//服务众包表格
			serviceDemand(){
				that.get(api.serviceDemand,{},function(res){
					if(res.code == 0){
						that.tableDate1 = res.data;
						if(that.tableDate1.length > 4){
							that.animate = true
						}else{
							that.animate = false
						}
					}
				})
			},
			servies() {
				let myChart = that.$echarts.init(document.getElementById('servies'));
				myChart.setOption({
					title: {
						text: '服务众包',
						fontSize: '9px',
						fontWeight: 'normal',
						textStyle: {
							color: '#ccc'
						}
					},
					tooltip: {
						trigger: 'item',
						formatter: "{b}: {c}个 ({d}%)"
					},
					color: ['#A55FE6','#5C6DFF','#F2C851','#FF4169', '#85D9F8', '#F2C851','#EA3DFF'],
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['25%', '40%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								textStyle: {
									color: '#fff'
								},
								formatter: '{b|{b}:} {per|{d}%}  ',
								rich: {
									a: {
										color: '#999',
										lineHeight: 22,
										align: 'center'
									},
									hr: {
										borderColor: '#aaa',
										width: '100%',
										borderWidth: 0.5,
										height: 0
									},
									b: {
										fontSize: 12,
										lineHeight: 33
									},
									per: {
										color: '#eee'
									}
								}
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '16',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								lineStyle: {
									color: '#28B1C7'
								},
								length: 5,
								length2: 10
							}
						},
						data: that.serviceData
					}]
				})
			},
			showMarquee: function () {              
                that.animate = true;                
            },
            watchAni(){
                that.ideaTable.push(that.ideaTable[0]);               
                that.ideaTable.shift();                
                that.animate = false;            
			},
			showMarquee1: function () {                
                that.animate1 = true;                
            },
            watchAni1(){
                that.tableDate1.push(that.tableDate1[0]);               
                that.tableDate1.shift();                
                that.animate1 = false;            
            }
		},
		mounted(){
			//that.idea();             //创意空间
			//that.getInvestment()     //投资领域
			//that.consultation()      //技术咨询
			//that.demandPush()        //发布统计需求信息
			//that.serviceStatistics() //服务众包圆环图
			//that.serviceDemand()     //服务众包需求名称表格
			that.originality()
			that.cyInfo()
			that.trz()
			that.investment()
			that.getProject()
			that.servies()
			timer && clearInterval(timer)
			timer = setInterval(that.showMarquee, 2000)
			timer1 && clearInterval(timer1)
            timer1 = setInterval(that.showMarquee1, 2000)
		},
		created(){
			that = this;
		},
		components: {
			Head
		}
	}
</script>

<style scoped lang="scss">
	.contBox {
		width: 960px;
		height: 475px;
		overflow: hidden;
		position: absolute;
		top: 54px;
		left: 0;
		display: flex;
		justify-content: space-between;
		&>div {
			height: 475px;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			align-items: center;
			.financTitle {
				width: 100%;
				height: 25px;
				background: url('../assets/imgs/trzjszx_icon_zbktb@2x.png')no-repeat;
				background-size: 100% 100%;
				margin-top: 38px;
				line-height: 25px;
				span {
					font-size: 12px;
					color: rgba(1, 255, 252, 1);
					margin-left: 36px;
				}
			}
			.financTitle.financTitle1 {
				margin-top: 15px;
			}
			.financTitle.financTitle2 {
				background: url('../assets/imgs/trzjszx_icon_zbkt@2x.png')no-repeat;
				background-size: 100% 100%;
			}
			.addTz {
				width: 221px;
				height: 159px;
				margin-top: 7px;
				display: flex;
				justify-content: center;
			}
			.addXmtz {
				width: 221px;
				height: 177px;
				margin-top: 7px;
				display: flex;
				justify-content: center;
			}
		}
	}
	
	.financing {
		width: 250px;
		background: url('../assets/imgs/trzjszx_icon_zbk@2x.png')no-repeat;
		background-size: 100% 100%;
	}
	
	.technology {
		width: 425px;
		background: url('../assets/imgs/trzjszx_icon_zjbk@2x.png')no-repeat;
		background-size: 100% 100%;
	}

	.top {
		width: 100%;
		height: 237.5px;
		display: flex;
		padding: 0 24px;
		.item {
			flex: 1;
			.leftTitle {
				margin-top: 44px;
				.leftTop {
					height: 15px;
					display: flex;
					align-items: center;
					img {
						width: 15px;
						height: 15px;
						display: inline-block;
					}
					span {
						font-size: 11px;
						color: rgba(255, 255, 255, 1);
						b{
							font-size: 8px;
						}
					}
				}
				.num {
					width: 107px;
					height: 31px;
					background: url('../assets/imgs/trzjszx_icon_zjxbk@2x.png')no-repeat;
					background-size: 100% 100%;
					text-align: center;
					line-height: 31px;
					font-size: 14px;
					color: rgba(100, 220, 210, 1);
				}
			}
			.originality {
				height: 150px;
				margin-top: 10px;
			}
		}
	}
	.bottom {
		width:100%;
		height:236px;
		padding:0 20px 15px;
		box-sizing: border-box;
	}

	.marquee{
		height:118px;
		overflow: hidden;		
        box-sizing: border-box;	
        overflow: hidden;
	}
	.marquee_title {
		display: flex;
		height: 22px;
		line-height: 22px;
		font-size: 8px;
		text-align: center;
		background: #1C536B;
		color: #fff;
		span {
			flex: 1;
		}
	}
	.marquee_box {
		display: block;
		position: relative;
		height: 80px;
		overflow: hidden;
	}

	.marquee_list {
		width: 100%;
        display: block;
        position: absolute;
        top: 0;
		/*left: 20px;*/
	}
	.marquee_list li{
		display: flex;
		height: 20px;
		line-height: 20px;
		font-size: 8px;
		span {
			flex: 1;
			height: 20px;
			line-height: 20px;
			font-size: 8px;
			text-align: center;
			color: #3CB4D4;
			overflow: hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
		}
	}

	.marquee_top {
		transition: all 0.5s;
		margin-top: -20px;
	}
	
	.statistics {
		width: 250px;
		background: url('../assets/imgs/rlzy_icon_ybk@2x.png')no-repeat;
		background-size: 100% 100%;
	}
</style>
