<template>
	<!-- 汽车产业园数据运维中心 -->
	<div class="hello">
		<Head :title="title" :isShow = false :iscar=true></Head>
		<div class="contBox">
			<div class="carInner">
				<div class="left">
					<div class="title">
						<img class="titleImg" src="../assets/imgs/title_icon@2x.png" alt="">
						<span>安全预警</span>
					</div>
					<div class="countNum">
						<div class="item">
							预警数量
							<span>2</span>
						</div>
						<div class="item">
							一般数量
							<span class="lastColor">4</span>
						</div>
					</div>
					<div class="left_table">
						<div class="marquee">
							<div class="marquee_title">
								<span>序号</span>
								<span>报警时间</span>
								<span>报警地点</span>
								<span>严重程度</span>
								<span>事件类型</span>
							</div>
							<div class="marquee_box">
								<ul class="marquee_list" :class="{marquee_top:animate}" @webkitTransitionEnd="c_marquee">
									<li v-for="(item,index) in tableDate" :key="index">
										<span>
                                            <em class="addBack">{{item.num}}</em>
                                        </span>
										<span>{{item.time}}</span>
										<span>{{item.address}}</span>
										<span class="addRed" v-if="item.degree == '一般'">{{item.degree}}</span>
										<span class="addYell" v-else>{{item.degree}}</span>
										<span>{{item.type}}</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="centerBox">
						<div class="centerLeft">
							<div class="title">
								<img class="titleImg" src="../assets/imgs/title_icon@2x.png" alt="">
								<span>今日隐患数量统计</span>
							</div>
							<div class="statisticalChart" id="dangersTotal"></div>
						</div>
						<div class="centerRight">
							<div class="title title1">
								<img class="titleImg" src="../assets/imgs/title_icon@2x.png" alt="">
								<span>安全监督</span>
							</div>
							<div class="canvasBox">
								<ul>
									<li>
										<div id="pieDiagram" class="pieDiagram"></div>
										<span>已整改</span>
									</li>
									<li>
										<div id="pieDiagram1" class="pieDiagram"></div>
										<span>未整改</span>
									</li>
									<li>
										<div id="pieDiagram2" class="pieDiagram"></div>
										<span>整改中</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="videoBox">
						<div class="title videoTitle">
							<img class="titleImg" src="../assets/imgs/title_icon@2x.png" alt="">
							<span>视频监控</span>
						</div>
						<div class="videoInner">
							<ol>
								<li>
									<img class="backImg" src="../assets/imgs/qcy_left_3.png" alt="">
									<span>{{date - 6000 | formatDate}}</span>
								</li>
								<li>
									<img class="backImg" src="../assets/imgs/qcy_left_4.png" alt="">
									<span>{{date - 3000 | formatDate}}</span>
								</li>
								<li>
									<img class="backImg" src="../assets/imgs/qcy_left_5.png" alt="">
									<span>{{date - 12000 | formatDate}}</span>
								</li>
								<li>
									<img class="backImg" src="../assets/imgs/qcy_left_6.png" alt="">
									<span>{{date | formatDate}}</span>
								</li>
							</ol>
						</div>
					</div>
				</div>
				<div class="center">
					<div class="centerTop">
						<div class="titleBox">
							<div class="title">
								<img class="titleImg" src="../assets/imgs/title_icon@2x.png" alt="">
								<span>组织综合情况</span>
							</div>
							<div class="title">
								<img class="titleImg" src="../assets/imgs/title_icon@2x.png" alt="">
								<span>教育学习</span>
							</div>
						</div>
						<div class="top_center">
							<div id="chartLeft" class="top_cen_left"></div>
							<div class="top_cen_right">
								<div class="item item1">
									党课出勤率
									<span>92.28%</span>
								</div>
								<div class="item item2">
									在线学习率
									<span>96.81%</span>
								</div>
								<div class="item item3">
									考核优秀率
									<span>97.54%</span>
								</div>
							</div>
						</div>
						<div class="partyMember">
							<div class="addFlex">
								<ul>
									<li>
										<div class="addPosi">
											<b>512</b>
											<img src="../assets/imgs/culture_bg_01@2x.png" alt="">
										</div>
										<span>党员人数</span>
									</li>
									<li>
										<div class="addPosi">
											<b class="addSecond">50</b>
											<img src="../assets/imgs/culture_bg_02@2x.png" alt="">
										</div>
										<span>新党员人数</span>
									</li>
								</ul>
							</div>
							<div class="title titleDy">
								<img class="titleImg" src="../assets/imgs/title_icon@2x.png" alt="">
								<span>党员信息</span>
							</div>
							<div class="addFlex">
								<ul>
									<li>
										<div class="addPosi">
											<b class="addThree">113</b>
											<img src="../assets/imgs/culture_bg_03@2x.png" alt="">
										</div>
										<span>迁入党员</span>
									</li>
									<li>
										<div class="addPosi">
											<b class="addFour">20</b>
											<img src="../assets/imgs/culture_bg_04@2x.png" alt="">
										</div>
										<span>迁出党员</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="centerMiddle">
						<div class="center_menu">
							<!--<div class="center_center"></div>-->
							<div class="menu_left" @mouseenter="selectMenu(1)"></div>
							<div class="menu_top" @mouseenter="selectMenu(2)"></div>
							<div class="menu_right" @mouseenter="selectMenu(3)"></div>
							<div class="menu_bottom" @mouseenter="selectMenu(4)"></div>
						</div>
						<div class="menu_list">
							<div class="list_item list_left" v-show="menuIndex == 1"></div>
							<div class="list_item list_top" v-show="menuIndex == 2"></div>
							<div class="list_item list_right" v-show="menuIndex == 3"></div>
							<div class="list_item list_bottom" v-show="menuIndex == 4"></div>
						</div>
					</div>
					<div class="centerBottom">
						<div class="titleBox titleBox1">
							<div class="title">
								<img class="titleImg" src="../assets/imgs/title_icon@2x.png" alt="">
								<span>智慧路灯</span>
							</div>
							<div class="title">
								<img class="titleImg" src="../assets/imgs/title_icon@2x.png" alt="">
								<span>智慧停车</span>
							</div>
						</div>
						<div class="centerBottomInner">
							<div class="btmLeftr">
								<div class="item item1">
									照明用电
									<span>120度</span>
								</div>
								<div class="item item2">
									节电率
									<span style="color:#737EA3">82%</span>
								</div>
								<div class="item item3">
									耗材统计
									<span style="color:#737EA3">12</span>
								</div>
							</div>
							<div class="btmRight">
								<div class="rightTopNum">
									<div class="num1">
										<span>可用车位</span>
										<p>
											<span>0</span>
											<span>0</span>
											<span>8</span>
											<span>6</span>
										</p>
									</div>
									<div class="num1">
										<span>车位总数</span>
										<p>
											<span>1</span>
											<span>0</span>
											<span>0</span>
											<span>0</span>
										</p>
									</div>
									<div class="num1">
										<span>今日总入园车次</span>
										<p>
											<span>0</span>
											<span>5</span>
											<span>0</span>
											<span>0</span>
										</p>
									</div>
								</div>
								<div class="centerBtmChart" id="centerBtmChart"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="right">
					<div class="right_top">
						<div class="title">
							<img class="titleImg" src="../assets/imgs/title_icon@2x.png" alt="">
							<span class="title_txt">企业垃圾分类处理积分排行榜</span>
						</div>
						<table border="1" cellspacing="0">
							<tr>
								<th class="tab_index">排名</th>
								<th class="tab_name" style="text-align: center;">企业</th>
								<th class="tab_count">数量</th>
							</tr>
							<tr v-for="(item, index) in garbageData" :key="index">
								<td class="tab_index">{{index + 1}}</td>
								<td class="tab_name">{{item.name}}</td>
								<td class="tab_count">
									<div class="fb_bg" :class="fb_start">
										<div class="fb_co" :style="`width:${item.val*4}%`"></div>
									</div>
									<div class="fb_label">{{item.count}}</div>
								</td>
							</tr>
						</table>
					</div>
					<div class="right_middle">
						<div class="title">
							<img class="titleImg" src="../assets/imgs/title_icon@2x.png" alt="">
							<span>环境监测</span>
						</div>
						<div id="chart2" class="chart2"></div>
					</div>
					<div class="right_bottom">
						<div class="bottom_top">
							<div class="title">
								<img class="titleImg" src="../assets/imgs/title_icon@2x.png" alt="">
								<span>实时能耗监测</span>
							</div>
							<div class="top_select">
								<div class="selected_box">
									<span class="selected_txt">{{selectName}}</span>
									<img class="selected_icon" @click="goSelect" src="../assets/imgs/ep_select_show@2x.png" alt="">
								</div>
								<div class="select_list" v-show="showSelect">
									<div class="select_item" @click="selected(item)" v-for="(item, index) in selectList" :key="index">{{item}}</div>
								</div>
							</div>
						</div>
						<div id="chart3" class="chart3" v-show="selectName == '电能耗'"></div>
						<div id="chart4" class="chart4" v-show="selectName == '水能耗'"></div>
						<div id="chart5" class="chart5" v-show="selectName == '气能耗'"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	let timer;
	var that;
	import Head from '../components/header.vue';
	import echarts from 'echarts'
	const padDate = function (value) {
        return value < 10 ? `0${value}` : value;
    };
	export default {
		data() {
			return {
				title: "高端汽车及新能源汽车关键零配件产业园",
				date: new Date(),
				tableDate: [{
						num: 1,
						time: "2019-05-31",
						address: "N19M1高层厂房",
						degree: "一般",
						type: "烟雾"
					}, {
						num: 2,
						time: "2019-06-07",
						address: "N12M1高层厂房",
						degree: "预警",
						type: "空气质量"
					}, {
						num: 3,
						time: "2019-07-14",
						address: "N20M1高层厂房",
						degree: "一般",
						type: "烟雾"
					}, {
						num: 4,
						time: "2019-07-22",
						address: "N19M1单层厂房",
						degree: "一般",
						type: "温度过高"
					}, {
						num: 5,
						time: "2019-08-03",
						address: "N12M1单层厂房",
						degree: "一般",
						type: "烟雾"
					}, {
						num: 6,
						time: "2019-08-14",
						address: "N20M1单层厂房",
						degree: "预警",
						type: "空气质量"
					}],
				animate: false,
				originalityName: ['机械伤害', '化学伤害', '消防隐患', '车辆隐患'],
				originalityData: [1200, 1800, 2400, 1200],
				lifeData:[],
				textData:[],
				personData:[],
				xName:[],

				//进度条数据 6680
				fb_start: '',
				garbageData: [{ // 企业垃圾分类数据
						name: "海斯坦普汽车组件（北京）有限公司",
						count: 1437,
						val: 21.5
					}, {
						name: "麦格纳汽车系统（北京）有限公司",
						count: 1387,
						val: 20.8
					}, {
						name: "北京青谷科技有限公司",
						count: 1156,
						val: 17.3
					}],
				indicatorName: [], // 指标名称
				indicatorVal: [], // 指标数据
				achievementRate: [], // 达标率
				showSelect: false, // 展示下拉框
				selectName: "电能耗",
				selectList: ["电能耗", "水能耗", "气能耗"],
				electricData: [], // 电数据
				waterData: [], // 水数据
				gasData: [], // 气数据
				electricYData: [], // 电数据Y轴
				menuIndex: 1, // 中间选中的菜单索引
			}
		},
		components: {
			Head
		},
		created() {
			that = this;
		},
		computed:{
			containerStyle() {
				return {
					transform:`translate3d(${this.distance}px, 0, 0)`
				}
			}
		},
		mounted() {
			timer && clearInterval(timer);
			timer = setInterval(that.showMarquee, 2000);
			that.timer1 = setInterval(function () {
                that.date = new Date();
            }, 1000);
			that.dangersTotalCharts();  //今日隐患数量统计
			
			setTimeout(() => {
				this.fb_start = 'fb_start';
			}, 100)
			this.getEnvironmentalData()
			this.getEnergyData()
			this.getEnvironmentalData1() 	//中间组织综合情况
			this.areaEcharts()   			//车流量统计
			this.canvasInit()				//安全监督（已整改）
			this.canvasInit1()				//安全监督（未整改）
			this.canvasInit2()				//安全监督（整改中）
		},
		methods: {

			c_marquee() {
				that.tableDate.push(that.tableDate[0])
				that.tableDate.shift()
				that.animate = false;
			},
			showMarquee() {
				that.animate = true
			},
			canvasInit(){
				let myChart = that.$echarts.init(document.getElementById('pieDiagram'));
				myChart.setOption({
					grid: {
						top: 5,
						bottom: 5,
					},
					color: ['#DA0051','#3C404C' ],
					series: [{
						type: 'pie',
						center: ['50%', '50%'], // 饼图的圆心坐标
						radius: ['70%', '80%'],
						avoidLabelOverlap: false,
						hoverAnimation: false,
						label: { //  饼图图形上的文本标签
							normal: { // normal 是图形在默认状态下的样式
								show: true,
								position: 'center',
								color: '#ccc',
								fontSize: 12,
								fontWeight: 'bold',
								formatter: '{b}\n{c}%' // {b}:数据名； {c}：数据值； {d}：百分比
							}
						},
						data: [
							{
								value: 50,
								label: {
									normal: {
										show: true
									}
								}
							},
							{
								value: 50,
								label: {
									normal: {
										show: false
									}
								}
							},
						]
					}]
				})	
			},
			canvasInit1(){
				let myChart = that.$echarts.init(document.getElementById('pieDiagram1'));
				myChart.setOption({
					grid: {
						top: 5,
						bottom: 5,
					},
					color: ['#FFB508','#3C404C','#3C404C','#3C404C' ],
					series: [{
						type: 'pie',
						center: ['50%', '50%'], // 饼图的圆心坐标
						radius: ['70%', '80%'],
						avoidLabelOverlap: false,
						hoverAnimation: false,
						label: { //  饼图图形上的文本标签
							normal: { // normal 是图形在默认状态下的样式
								show: true,
								position: 'center',
								color: '#ccc',
								fontSize: 12,
								fontWeight: 'bold',
								formatter: '{b}\n{c}%' // {b}:数据名； {c}：数据值； {d}：百分比
							}
						},
						data: [
							{
								value: 25,
								label: {
									normal: {
										show: true
									}
								}
							},
							{
								value: 75,
								label: {
									normal: {
										show: false
									}
								}
							}
						]
					}]
				})	
			},
			canvasInit2(){
				let myChart = that.$echarts.init(document.getElementById('pieDiagram2'));
				myChart.setOption({
					grid: {
						top: 5,
						bottom: 5,
					},
					color: ['#01BD8D','#3C404C','#3C404C','#3C404C' ],
					series: [{
						type: 'pie',
						center: ['50%', '50%'], // 饼图的圆心坐标
						radius: ['70%', '80%'],
						avoidLabelOverlap: false,
						hoverAnimation: false,
						label: { //  饼图图形上的文本标签
							normal: { // normal 是图形在默认状态下的样式
								show: true,
								position: 'center',
								color: '#ccc',
								fontSize: 12,
								fontWeight: 'bold',
								formatter: '{b}\n{c}%' // {b}:数据名； {c}：数据值； {d}：百分比
							}
						},
						data: [
							{
								value: 25,
								label: {
									normal: {
										show: true
									}
								}
							},
							{
								value: 75,
								label: {
									normal: {
										show: false
									}
								}
							}
						]
					}]
				})	
			},
			//今日隐患数量统计
			dangersTotalCharts() {
				let myChart = that.$echarts.init(document.getElementById('dangersTotal'))
				myChart.setOption({
					tooltip: {
						trigger: 'axis',
						formatter: function(params) {
							var relVal = params[0].name;
							for(var i = 0, l = params.length; i < l; i++) {
								relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value + "件";
							}
							return relVal;
						},
						axisPointer: {
							type: 'shadow'
						}
					},
					grid: {
						x: 80,
						y: 40,
						left: '5%',
						right: '5%',
						bottom: '6%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						data: that.originalityName,
						axisLine: {
							lineStyle: {
								color: '#83ECF3'
							}
						},
						splitLine: {
							lineStyle: {
								color: "#115372"
							}
						},
						axisLabel: {
							show: true,
							textStyle: {
								color: '#83ECF3',
							},
							fontSize: 10, //字体大小
							interval: 0 // 让字体完全显示
						}
					},
					yAxis: {
						name: '单位（/件）',
						type: 'value',
						axisLine: {
							lineStyle: {
								color: '#ccc'
							}
						},
						nameTextStyle: {
							color: "#ccc",
							fontSize: '6px'
						},
						splitLine: {
							show: true,
							lineStyle: {
								color: "#115372",
								type: 'dashed'
							}
						}
					},
					series: [{
						name: '隐患数量',
						type: 'bar',
						barWidth: '24',
						data: that.originalityData,
						itemStyle: {
							normal: {
								color: "red"
							}
						}
					}]
				})
			},
			// 获取中间组织综合情况数据
			getEnvironmentalData1() {
				that.lifeData = [200, 350, 150, 450, 150, 300, 350, 200, 440, 320, 410, 160]
				that.textData = [80, 500, 250, 380, 100, 280, 200, 350, 60, 270, 150,50]
				that.personData = [440,380,200,450,500,100,390,200,420,200,460,450]
				that.xName = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
				that.drawChartCenter();
			},
			// 中间组织综合情况数据图表
			drawChartCenter() {
				let myChart2 = this.$echarts.init(document.getElementById('chartLeft'))
				myChart2.setOption({
					tooltip: {
						trigger: 'axis',
						 formatter:function(params){ return params[0].name+"<br>"+params[0].seriesName+":"+params[0].data+"个" +"<br>"+params[1].seriesName+":"+params[1].data+"个"+ "<br>"+params[2].seriesName+":"+params[2].data+"个" }
					},
					legend: {
						data: ['组织人数', '组织生活','文章发布'],
						textStyle: {
							color: '#fff'
						}
					},
					grid: {
						top:25,
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: that.xName,
						axisLine: {
							lineStyle: {
								fontSize: 8,
								fontWeight: "bold",
								color: '#fff',
								width: 1, //这里是为了突出显示加上的  
							}
						},
						axisLabel: {
							show: true,
							textStyle: {
								color: '#FFFFFF',
							},
							fontSize: 8, //字体大小
							interval: 0 // 让字体完全显示
						}
					}],
					yAxis: [{
						type: 'value',
						axisLabel: {
							color: '#ccc',
							formatter: '{value} '
						},
						axisLine: {
							lineStyle: {
								color: '#ccc',
								width: 1, //这里是为了突出显示加上的  
							}
						},
						splitLine: {
							lineStyle: {
								color: ['#434C61']
							}
						}
					}],
					color: ['rgba(225, 244, 21, .3)'],
					series: [{
							name: '组织人数',
							type: 'bar',
							barWidth: '10',
							itemStyle: { 
								normal: {
									color: new echarts.graphic.LinearGradient(
										0, 0, 0, 1, [{
												offset: 0,
												color: '#6275D1'
											},
											{
												offset: 1,
												color: '#00D4C1'
											}
										]
									)
								},
							},
							data: that.personData
						},
						{
							name: '组织生活',
							type: 'line',
							symbol: 'none', //这句就是去掉点的   
							itemStyle: {
								normal: {
									color: new echarts.graphic.LinearGradient(
										0, 0, 0, 1, [{
												offset: 0,
												color: 'rgba(206, 171, 85, 0.25)'
											},
											{
												offset: 0.5,
												color: 'rgba(206, 171, 85, 0.5)'
											},
											{
												offset: 1,
												color: 'rgba(206, 171, 85, 1)'
											}
										]
									)
								}
							},
							areaStyle: {
								normal: {
									color: new echarts.graphic.LinearGradient(
										0, 0, 0, 1, [{
												offset: 0,
												color: 'rgba(206, 171, 85, 0.25)'
											},
											{
												offset: 0.5,
												color: 'rgba(206, 171, 85, 0.5)'
											},
											{
												offset: 1,
												color: 'rgba(206, 171, 85, 1)'
											}
										]
									)
								}
							},
							data: that.lifeData
						},
						{
							name: '文章发布',
							type: 'line',
							symbol: 'none', //这句就是去掉点的  
							itemStyle: {
								normal: {
									color: new echarts.graphic.LinearGradient(
										0, 0, 0, 1, [{
												offset: 0,
												color: 'rgba(112,110,229,0.25)'
											},
											{
												offset: 0.5,
												color: 'rgba(112,110,229,0.5)'
											},
											{
												offset: 1,
												color: 'rgba(112,110,229,1)'
											}
										]
									)
								}
							},
							areaStyle: {
								normal: {
									color: new echarts.graphic.LinearGradient(
										0, 0, 0, 1, [{
												offset: 0,
												color: 'rgba(112,110,229,0.25)'
											},
											{
												offset: 0.5,
												color: 'rgba(112,110,229,0.5)'
											},
											{
												offset: 1,
												color: 'rgba(112,110,229,1)'
											}
										]
									)
								}
							},
							data: that.textData
						}
					]
				})
			},
			areaEcharts() {
				let myChart = that.$echarts.init(document.getElementById('centerBtmChart'));
				myChart.setOption({
					title: {
						text: '车流量统计（天）',
						show: true,
						textStyle: {
							color: '#BAC2CC',
							fontSize: '6px'
						},
						left: 50,
						top: 2
					},
					tooltip: {
						trigger: 'axis'
					},
					color: ['rgba(108,192,66,1)'],
					grid: {
						top: '16%',
						left: '2%',
						right: '2%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['01', '02', '03', '04', '05', '06', '07', '08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],
						axisLine: {
							lineStyle: {
								color: '#969CA4'
							}
						},
						splitLine: {
							show: false
						},
						axisLabel: {
							show: true,
							textStyle: {
								color: '#eee',
							},
							fontSize: 8, //字体大小
							interval: 0 // 让字体完全显示
						}
					},
					yAxis: {
						// name: '单位：条',
						type: 'value',
						// scale : true,
						// max : 1400,
						// min : 0,
						// splitNumber : 7,
						axisLine: {
							lineStyle: {
								color: '#969CA4'
							}
						},
						nameTextStyle: {
							color: "#eee",
							fontSize: '8px'
						},
						splitLine: {
							show: true,
							lineStyle: {
								color: "#115372",
								type: 'dashed'
							}
						},
						axisLabel: {
							show: true,
							textStyle: {
								color: '#eee',
							},
							fontSize: 8, //字体大小
							interval: 0 // 让字体完全显示
						}
					},
					series: [{
						name: '车流量',
						data: [4000, 2212, 1640, 1800, 2012, 3251, 3205, 2340,2100,1635,2003,2100,2340,1635,2003,3251,2340,2003,2019,3152,3100,2822,2212],
						type: 'line',
						symbol: 'none', //取消折点圆圈
						smooth: true, //这句就是让曲线变平滑的 
						areaStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0,
									color: 'rgba(255,255,0,1)' // 0% 处的颜色
								},{
									offset: 0.5,
									color: 'rgba(255,255,0,0.6)' // 0% 处的颜色
								},
								 {
									offset: 1,
									color: 'rgba(255,255,0,0.1)' // 100% 处的颜色
								}],
								global: false // 缺省为 false
							}
						},
						lineStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 0,
								colorStops: [{
									offset: 0,
									color: 'rgba(255,255,0,0.8)' // 0% 处的颜色
								}, {
									offset: 1,
									color: 'rgba(255,255,0,0.8)' // 100% 处的颜色
								}],
								global: false // 缺省为 false
							}
						}
					}]
				})
			},
			

			// 获取环境监测数据
			getEnvironmentalData() {
				//				that.get(api.getRepairMonthNumber,{},function(res){
				//			 		if(res.code == 0){
				//			 			res.data.forEach(item => {
				//			 				if(item.name == '本月') {
				//			 					that.thisMonthReporting.push(item.total)
				//			 				}else {
				//			 					that.lastMonthReporting.push(item.total)
				//			 				}
				//			 				if(that.buildingNameList.indexOf(item.buildingName) == -1){
				//			 					that.buildingNameList.push(item.buildingName)
				//			 				}
				//			 				
				//			 			})
				//			 			that.drawChart2();
				//			 		}
				//			 	})
				that.achievementRate = [1, 8, 5, 7, 2, 5, 0, 6, 3, 7, 5, 0, 9, 2]
				that.indicatorVal = [80, 72, 63, 56, 49, 88, 71, 60, 48, 81, 79, 66, 45, 89]
				that.indicatorName = ["一氧化碳", "二氧化碳", "甲醛", "甲苯", "颗粒物", "PM2.5", "氮气", "噪音", "水质", "湿度", "扬尘", "氢气", "亚硝酸", "甲烷"]
				that.drawChart2();
			},
			// 环境监测图表
			drawChart2() {
				let myChart2 = this.$echarts.init(document.getElementById('chart2'))
				myChart2.setOption({
					tooltip: {
						trigger: 'axis',
						 formatter:function(params){ return params[0].name+"<br>"+params[0].seriesName+":"+params[0].data+"次" +"<br>"+params[1].seriesName+":"+params[1].data+"次"}
					},
					legend: {
						data: ['本月达标次数', '本月超标次数'],
						textStyle: {
							color: '#fff'
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '0',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: that.indicatorName,
						axisLine: {
							lineStyle: {
								fontSize: 8,
								fontWeight: "bold",
								color: '#fff',
								width: 1, //这里是为了突出显示加上的  
							}
						},
						axisLabel: {
							show: true,
							textStyle: {
								color: '#FFFFFF',
								// fontSize: '38',//字体大小
							},
							fontSize: 8, //字体大小
							interval: 0 // 让字体完全显示
						}
					}],
					yAxis: [{
						//name: "单位: 单",
						type: 'value',
						axisLabel: {
							show: false,
							formatter: '{value}'
						},
						axisLine: {
							lineStyle: {
								color: '#446FBD',
								width: 1, //这里是为了突出显示加上的  
							}
						},
						splitLine: {
							show: false,
							lineStyle: {
								color: ['#fafafa']
							}
						}
					}],
					color: ['rgba(225, 244, 21, .3)'],
					series: [{
							name: '本月达标次数',
							type: 'bar',
							barWidth: '20%',
							itemStyle: { //
								normal: {
									//barBorderRadius: [8, 8, 8, 8],
									color: new echarts.graphic.LinearGradient(
										0, 0, 0, 1, [{
												offset: 0,
												color: '#58A1FD'
											},
											{
												offset: 1,
												color: '#58A1FD'
											}
										]
									)
								},
							},
							data: that.indicatorVal
						},
						{
							name: '本月超标次数',
							type: 'line',
							symbol: 'none', //这句就是去掉点的  
							smooth: true, //这句就是让曲线变平滑的 
							areaStyle: {
								normal: {
									color: new echarts.graphic.LinearGradient(
										0, 0, 0, 1, [{
												offset: 0,
												color: '#FFFF00'
											},
											{
												offset: 0.5,
												color: '#6A7116'
											},
											{
												offset: 1,
												color: '#22312B'
											}
										]
									)
								}
							},
							data: that.achievementRate
						}
					]
				});
			},
			// 展示下拉框
			goSelect() {
				this.showSelect = !this.showSelect
			},
			// 选中事件
			selected(item) {
				this.selectName = item
				this.showSelect = false
			},
			// 获取能耗数据
			getEnergyData() {
				this.electricData = [958, 1300, 2358, 1499, 888, 999, 1222], // 电数据
					this.waterData = [1499, 888, 1999, 2999, 689, 1333, 1888], // 水数据
					this.gasData = [666, 899, 389, 788, 1688, 1277, 288], // 气数据
					this.electricYData = ["1", "2", "3", "4", "5", "6", "7"], // 电数据Y轴
					this.drawChart3()
				this.drawChart4()
				this.drawChart5()
			},
			// 电能耗图表
			drawChart3() {
				let myChart = that.$echarts.init(document.getElementById('chart3'));
				myChart.setOption({
					title: {
						//text: '电能耗',
						show: true,
						textStyle: {
							color: '#BAC2CC',
							fontSize: '6px'
						},
						left: 50,
						top: 2
					},
					tooltip: {
						trigger: 'axis',
						formatter:function(params){
							return params[0].name+"<br>" + params[0].seriesName + ": " + params[0].data + "kw/h"
						},
					},
					color: ['#CF9BFF'],
					grid: {
						top: '16%',
						left: '2%',
						right: '8%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: that.electricYData,
						axisLine: {
							lineStyle: {
								color: '#969CA4'
							}
						},
						splitLine: {
							show: false
						},
					},
					yAxis: {
						// name: '单位：条',
						type: 'value',
						// scale : true,
						// max : 1400,
						// min : 0,
						// splitNumber : 7,
						axisLine: {
							lineStyle: {
								color: '#969CA4'
							}
						},
						nameTextStyle: {
							color: "#eee",
							fontSize: '12px'
						},
						splitLine: {
							show: true
						},
					},
					series: [{
						name: '电能耗',
						data: that.electricData,
						type: 'line',
						symbol: 'none', //取消折点圆圈
						areaStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0,
									color: '#312A67' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#161F43' // 100% 处的颜色
								}],
								global: false // 缺省为 false
							}
						},
						lineStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 0,
								colorStops: [{
									offset: 0,
									color: '#CF9BFF' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#CF9BFF' // 100% 处的颜色
								}],
								global: false // 缺省为 false
							}
						}
					}]
				})
			},
			// 水能耗图表
			drawChart4() {
				let myChart = that.$echarts.init(document.getElementById('chart4'));
				myChart.setOption({
					title: {
						//text: '电能耗',
						show: true,
						textStyle: {
							color: '#BAC2CC',
							fontSize: '6px'
						},
						left: 50,
						top: 2
					},
					tooltip: {
						trigger: 'axis',
						formatter:function(params){
							return params[0].name+"<br>" + params[0].seriesName + ": " + params[0].data + "t"
						},
					},
					color: ['#2893F4'],
					grid: {
						top: '16%',
						left: '2%',
						right: '8%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: that.electricYData,
						axisLine: {
							lineStyle: {
								color: '#969CA4'
							}
						},
						splitLine: {
							show: false
						},
					},
					yAxis: {
						// name: '单位：条',
						type: 'value',
						// scale : true,
						// max : 1400,
						// min : 0,
						// splitNumber : 7,
						axisLine: {
							lineStyle: {
								color: '#969CA4'
							}
						},
						nameTextStyle: {
							color: "#eee",
							fontSize: '12px'
						},
						splitLine: {
							show: true
						},
					},
					series: [{
						name: '水能耗',
						data: that.waterData,
						type: 'line',
						symbol: 'none', //取消折点圆圈
						areaStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0,
									color: '#143F6E' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#102C50' // 100% 处的颜色
								}],
								global: false // 缺省为 false
							}
						},
						lineStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 0,
								colorStops: [{
									offset: 0,
									color: '#2893F4' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#2893F4' // 100% 处的颜色
								}],
								global: false // 缺省为 false
							}
						}
					}]
				})
			},
			// 气能耗图表
			drawChart5() {
				let myChart = that.$echarts.init(document.getElementById('chart5'));
				myChart.setOption({
					title: {
						//text: '电能耗',
						show: true,
						textStyle: {
							color: '#BAC2CC',
							fontSize: '6px'
						},
						left: 50,
						top: 2
					},
					tooltip: {
						trigger: 'axis',
						formatter:function(params){
							return params[0].name+"<br>" + params[0].seriesName + ": " + params[0].data + "m³"
						},
					},
					color: ['#FF9745'],
					grid: {
						top: '16%',
						left: '2%',
						right: '8%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: that.electricYData,
						axisLine: {
							lineStyle: {
								color: '#969CA4'
							}
						},
						splitLine: {
							show: false
						},
					},
					yAxis: {
						// name: '单位：条',
						type: 'value',
						// scale : true,
						// max : 1400,
						// min : 0,
						// splitNumber : 7,
						axisLine: {
							lineStyle: {
								color: '#969CA4'
							}
						},
						nameTextStyle: {
							color: "#eee",
							fontSize: '12px'
						},
						splitLine: {
							show: true
						},
					},
					series: [{
						name: '气能耗',
						data: that.gasData,
						type: 'line',
						symbol: 'none', //取消折点圆圈
						areaStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0,
									color: '#4E3E39' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#3D393F' // 100% 处的颜色
								}],
								global: false // 缺省为 false
							}
						},
						lineStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 0,
								colorStops: [{
									offset: 0,
									color: '#FF9745' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#FF9745' // 100% 处的颜色
								}],
								global: false // 缺省为 false
							}
						}
					}]
				})
			},
			// 中间鼠标移入事件
			selectMenu(val) {
				this.menuIndex = val
			}
		},
		filters: {
            formatDate: function (value) {
                const date = new Date(value);
                const year = date.getFullYear();
                const month = padDate(date.getMonth() + 1);
                const day = padDate(date.getDate());
                const hours = padDate(date.getHours());
                const minutes = padDate(date.getMinutes());
                const seconds = padDate(date.getSeconds());
                return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            }
		},
		beforeDestroy() {
            if (that.timer1) {
                clearInterval(that.timer1);
            }
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
		padding: 0 13px;
		box-sizing: border-box;
		background: url('../assets/imgs/con_bg@2x.png')no-repeat;
		background-size: 100% 100%;
		background-clip: content-box;
	}
	
	.carInner {
		box-sizing: border-box;
		position: relative;
		display: flex;
		justify-content: center;
		height: 100%;
		padding: 0 10px;
		border-right: 1.5px solid #15555F;
		border-left: 1.5px solid #2F357F;
		&>div {
			width: 320px;
			height: 100%;
			position: absolute;
			top: 0;
		}
		.left {
			left: 0;
		}
		.center {
			position: relative;
			width: 450px;
			.centerMiddle {
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				width: 236px;
				height: 236px;
				margin: auto;
				border-radius: 50%;
				background: url('../assets/imgs/center_photo@2x.png')no-repeat center center;
				background-size: 158px 158px;
				.center_menu {
					position: absolute;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					width: 186px;
					height: 186px;
					margin: auto;
					border-radius: 50%;
					/*background: url('../assets/imgs/qcy_float@2x.png')no-repeat;
					background-size: 100% 100%;*/
					z-index: 99;
					.center_center {
						position: absolute;
						top: 0;
						right: 0;
						bottom: 0;
						left: 0;
						width: 82.5px;
						height: 82.5px;
						margin: auto;
						border-radius: 50%;
						background: #fff;
					}
					.menu_left {
						position: absolute;
						top: 42px;
						left: 12px;
						width: 27px;
						height: 100px;
						border-radius: 50px 0 0 50px;
						/*background: #F49345;*/
					} 
					.menu_top {
						position: absolute;
						top: 12px;
						left: 42px;
						width: 100px;
						height: 27px;
						border-radius: 50px 50px 0 0;
						/*background: #F49345;*/
					} 
					.menu_right {
						position: absolute;
						top: 40px;
						right: 12px;
						width: 27px;
						height: 100px;
						border-radius: 0 50px 50px 0;
						/*background: #F49345;*/
					} 
					.menu_bottom {
						position: absolute;
						bottom: 12px;
						left: 42px;
						width: 100px;
						height: 27px;
						border-radius: 0 0 50px 50px;
						/*background: #F49345;*/
					}
				}
				.menu_list {
					position: absolute;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					width: 236px;
					height: 236px;
					margin: auto;
					border-radius: 50%;
					.list_item {
						position: absolute;
						top: 0;
						right: 0;
						bottom: 0;
						left: 0;
						width: 236px;
						height: 236px;
						margin: auto;
						border-radius: 50%;
						&.list_left {
							/*transform:rotateZ(0.6deg);*/
							background: url('../assets/imgs/qcy_center_safe@2x.png')no-repeat;
							background-size: 100% 100%;
						} 
						&.list_top {
							background: url('../assets/imgs/qcy_center_culture@2x.png')no-repeat;
							background-size: 100% 100%;
						} 
						&.list_right {
							/*transform:rotateZ(-1deg);*/
							background: url('../assets/imgs/qcy_center_ep@2x.png')no-repeat;
							background-size: 100% 100%;
						} 
						&.list_bottom {
							background: url('../assets/imgs/qcy_center_wisdom@2x.png')no-repeat;
							background-size: 100% 100%;
						}
					}
					
				} 
			}
		}
		.right {
			right: 0;
			margin-right: 10px;
			.right_top {
				width: 220px;
				margin: 13px 0 0 100px;
				.title {
					margin: 0;
				}
				table {
					width: 100%;
					margin-top: 12px;
					border-color: #267194;
					font-size: 7px;
					tr {
						height: 32px;
						
						.tab_index {
							width: 20px;
						}
						.tab_name {
							box-sizing: border-box;
							width: 62px;
							padding: 0 2px;
							text-align: left;
						}
						.tab_count {
							width: 138px;
							.fb_bg {
								float: left;
								width: 0;
								position: relative;
								top: 1.5px;
								transition: 1s all ease;
								overflow: hidden;
								&.fb_start {
									width: 108px;
								}
								.fb_co {
									float: left;
									height: 6px;
									background: #00A99E;
								}
							}
							.fb_label {
								float: left;
								color: #fff;
							}
						}
					}
					th {
						color: #fff;
					}
					td {
						text-align: center;
						color: #22BBE7;
					}
				}
			}
			.right_middle {
				margin-top: 10px;
				.title {
					margin: 0;
				}
				.chart2 {
					width: 100%;
					height: 140px;
				}
			}
			.right_bottom {
				margin: 13px 0 0 80px;
				.bottom_top {
					display: flex;
					justify-content: space-between;
					.title {
						margin: 0;
					}
					.top_select {
						position: relative;
						width: 55px;
						height: 12px;
						line-height: 12px;
						font-size: 6px;
						background: url('../assets/imgs/ep_select_bg@2x.png')no-repeat;
						background-size: 100% 100%;
						text-align: center;
						color: #2CCAD9;
						.selected_box {
							// .selected_txt {}
							.selected_icon {
								width: 8px;
								height: 4px;
								margin-left: 6px;
							}
						}
						.select_list {
							position: absolute;
							left: 0;
							top: 14px;
							width: 55px;
							z-index: 99;
							.select_item {
								width: 55px;
								height: 12px;
								line-height: 12px;
								font-size: 6px;
								text-align: center;
								color: #2CCAD9;
							}
						}
					}
				}
				.chart3,
				.chart4,
				.chart5 {
					width: 240px;
					height: 105px;
				}
			}
		}
	}
	
	.title {
		display: flex;
		height: 10px;
		align-items: center;
		margin: 13px 0 0 10px;
		overflow: hidden;
		.titleImg {
			width: 10px;
			height: 10px;
			z-index: 1;
		}
		span {
			height: 100%;
			line-height: 10px;
			background: url('../assets/imgs/title2.png')no-repeat;
			background-size: 100% 100%;
			font-size: 7px;
			color: rgba(255, 255, 255, 1);
			padding: 0 10px;
			box-sizing: border-box;
			margin-left: -5px;
			&.title_txt {
				margin-left: -10px;
				padding: 0 5px;
				text-indent: 10px;
			}
		}
	}
	
	//left_class
	.countNum {
		margin: 10px 0 7px 22px;
		display: flex;
		.item {
			width: 67px;
			height: 18px;
			margin-right: 10px;
			background: url('../assets/imgs/safe_tip_bg@2x.png')no-repeat;
			background-size: 100% 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 6px;
			color: #fff;
			span {
				margin-left: 3px;
				font-size: 8px;
				font-weight: 600;
				color: rgba(244, 216, 58, 1);
			}
			span.lastColor {
				color: rgba(131, 236, 243, 1);
			}
		}
	}
	.left_table {
		width: 241px;
		height: 128px;
		margin-left: 15px;
		background: url('../assets/imgs/safe_chart_bg@2x.png')no-repeat;
		background-size: 100% 100%;
		padding: 10px 7px;
		box-sizing: border-box;
		.marquee {
			height: 108px;
			align-items: center;
			box-sizing: border-box;
			overflow: hidden;
		}
		.marquee_title {
			display: flex;
			height: 16px;
			line-height: 16px;
			font-size: 6px;
			text-align: center;
			background: rgba(25, 177, 201, .2);
			color: #fff;
			span {
				flex: 1;
			}
		}
		.marquee_box {
			display: block;
			position: relative;
			height: 100px;
			overflow: hidden;
		}
		.marquee_list {
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
		}
		.marquee_top {
			transition: all 0.5s;
			margin-top: -22px;
		}
		.marquee_list li {
			display: flex;
			align-items: center;
			height: 17px;
			font-size: 6px;
			background: rgba(25, 177, 201, .1);
			margin-top: 5px;
			span {
				flex: 1;
				height: 17px;
				line-height: 17px;
				font-size: 6px;
				text-align: center;
				color: rgba(131, 236, 243, 1);
				.addBack {
					display: inline-block;
					width: 8px;
					height: 8px;
					background: rgba(83, 129, 202, 1);
					border-radius: 50%;
					line-height: 8px;
					color: #Fff;
				}
			}
			span.addRed {
				color: rgba(131, 236, 243, 1);
			}
			span.addYell {
				color: rgba(244, 216, 58, 1);
			}
		}
	}
	
	.centerBox {
		display: flex;
		height: 97px;
		.centerLeft {
			width: 170px;
			.statisticalChart {
				margin: 12px 14px 16px 17px;
				width: 170px;
				height: 75px;
				border: 1px solid rgba(56, 174, 225, 0.46);
				border-radius: 8px;
			}
		}
		.centerRight {
			.title1 {
				margin-left: 28px;
			}
			.canvasBox {
				margin-left: 28px;
				width: 132px;
				height: 60px;
				margin-top:20px;
				ul {
					display: flex;
					justify-content: space-between;
					height: 100%;
					li {
						width: 44px;
						height: 60px;
						text-align: center;
						display: flex;
						flex-direction: column;
						justify-content: center;
						span {
							font-size: 6px;
							color: rgba(186, 194, 204, 1);
							margin-top: 6px;
						}
						.pieDiagram{
							width: 44px;
							height:44px;
						}
					}
				}
			}
		}
	}
	
	.videoBox {
		margin-top: 32px;
		.videoInner {
			width: 189px;
			margin-left: 17px;
			margin-top: 11px;
			ol {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				li {
					width: 92px;
					height: 50px;
					margin-bottom: 5px;
					position: relative;
					img {
						width: 100%;
						height: 100%;
					}
					span {
						padding: 0 5px;
						box-sizing: border-box;
						background: rgba(0, 0, 0, 1);
						opacity: 0.6;
						position: absolute;
						right: 3px;
						top: 3px;
						font-size: 6px;
						color: #fff;
						border-radius: 1px;
					}
				}
			}
		}
	}
	
	//center_class
	.titleBox{
		width:100%;
		display: flex;
		justify-content: space-between;
		margin-top: 7px;
		padding:0 24px;
		box-sizing:border-box;
		.title{
			margin:0;
		}
	}
	.top_center{
		width:320px;
		height:57px;
		margin-left:65px;
		margin-top:5px;
		display: flex;
		.top_cen_left{
			width:200px;
			height:100%;
		}
		.top_cen_right{
			width:120px;
			position:relative;
			.item {
				width: 74px;
				height: 14px;
				background: url('../assets/imgs/culture_tip_bg@2x.png')no-repeat;
				background-size: 100% 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 6px;
				color: #fff;
				margin-bottom:5px;
				position:absolute;
				span {
					margin-left: 3px;
					font-size: 8px;
					font-weight: 600;
					color: #2CCAD9;
				}
			}
			.item.item1{
				right:0;
				top:0;
			}
			.item.item2{
				right:20px;
				top:19px;
			}
			.item.item3{
				right:40px;
				top:38px;
			}
		}
	}
	.partyMember{
		width:230px;
		height:35px;
		margin-left:110px;
		margin-top:4px;
		display: flex;
		div{
			flex:1;
		}
		.titleDy{
			margin-top:8px;
		}
		.addFlex{
			ul{
				width:100%;
				height:100%;
				display: flex;
				justify-content: space-between;
				li{
					width:50%;
					height:100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;
					.addPosi{
						width:24px;
						height:24px;
						position:relative;
						text-align:center;
						line-height: 24px;
						img{
							position: absolute;
							left:0;
							top:0;
							width:24px;
							height:24px;
							border-radius:50%;
							animation: mymove 5s linear infinite;
						}
						b{
							color:rgba(91,255,218,1);
							font-size:6px;
							font-weight:bold;
						}
						b.addSecond{
							color:#FFF15B;
						}
						b.addThree{
							color:#B779FD;
						}
						b.addFour{
							color:#53B8FF;
						}
					}
					span{
						font-size:4px;
						color:#fff;
						transform: scale(0.8)
					}
				}
			}
		}
		@keyframes mymove {
			0% {
				transform: rotate(0)
			}
			100% {
				transform: rotate(360deg)
			}
		}
	}

	.centerBottom{
		position:absolute;
		left:0;
		bottom:0;
	}
	.titleBox.titleBox1{
		width:230px;
		margin-left:110px;
	}
	.centerBottomInner{
		width:320px;
		height:95px;
		margin-left:65px;
		margin-top:10px;
		display: flex;
		.btmLeftr{
			width:120px;
			position:relative;
			.item {
				width: 61px;
				height: 18px;
				background: url('../assets/imgs/culture_tip_bg@2x.png')no-repeat;
				background-size: 100% 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 6px;
				color: #fff;
				margin-top:8px;
				position:absolute;
				span {
					margin-left: 3px;
					font-size: 8px;
					font-weight: 600;
					color: #2CCAD9;
				}
			}
			.item.item1{
				left:40px;
				bottom:60px;
			}
			.item.item2{
				left:20px;
				bottom:34px;
			}
			.item.item3{
				left:0;
				bottom:8px;
			}
		}
		.btmRight{
			.rightTopNum{
				width:180px;
				height:24px;
				display: flex;
				&>div{
					flex:1;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;
					&>span{
						font-size:7px;
						font-family:Adobe Heiti Std R;
						color:rgba(254,254,254,1);
					}
					p{
						width:38px;
						display: flex;
						justify-content: space-between;
						span{
							width:8px;
							height:10px;
							text-align: center;
							line-height: 10px;
							font-size:7px;
							font-family:MicrosoftYaHei-Bold;
							font-weight:bold;
							color:rgba(229,182,39,1);
							background:linear-gradient(27deg,rgba(5,18,35,0.8) 0%,rgba(18,72,170,0.19) 100%);
						}
					}
				}
			}
		}
		.centerBtmChart{
			width:200px;
			height:70px;
		}
	}
</style>