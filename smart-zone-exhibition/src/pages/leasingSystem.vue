<template>
	<div class="hello">

		<Head :title="'智能租赁'" :isShow = false></Head>
		<div class="contBox">
			<div class="contBox_item contBox_left">
				<div class="left_item left_top">
					<div class="item_title">
						<img class="title_logo" src="../assets/imgs/znzl_icon_tb@2x.png">
						<span class="title_name">到期提醒</span>
						<span class="count">{{tableDate.length}}</span>
					</div>
					<div class="left_table">
						<div class="marquee">
							<div class="marquee_title">
								<span>单元号</span>
								<span>楼宇类型</span>
								<span>到期日期</span>
							</div>
							<div class="marquee_box">
								<ul class="marquee_list" :class="{marquee_top:animate}" @webkitTransitionEnd="c_marquee">
									<li v-for="(item,index) in tableDate" :key="index" :class="{active: index % 2 == 1}">
										<span>{{item.buildingName}}-{{item.unitNum}}</span>
										<span>{{item.bizModelVal}}</span>
										<span>{{item.rentEndTime}}</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="left_item left_middle">
					<div class="item_title">
						<img class="title_logo" src="../assets/imgs/znzl_icon_tb@2x.png">
						<span class="title_name">入驻企业行业分析</span>
					</div>
					<div id="chart1" class="chart1"></div>
				</div>
				<div class="left_item left_bottom">
					<div class="item_title">
						<img class="title_logo" src="../assets/imgs/znzl_icon_tb@2x.png">
						<span class="title_name">招商来源分析</span>
					</div>
					<div id="chart2" class="chart2"></div>
				</div>
			</div>
			<div class="contBox_item contBox_middle">
				<div class="middle_top">
					<div class="middle_top_item">
						<p class="p_top p_top1"></p>
						<p class="p_name">
							总面积
							<span class="p_unit">（㎡）</span>
						</p>
						<p class="p_area">{{toatlArea.totalArea}}</p>
						<p class="p_type">已租</p>
						<p class="p_count">{{toatlArea.tongBi}}</p>
						<p class="p_type">空置</p>
						<p class="p_count p_count1">{{toatlArea.huanBi}}</p>
					</div>
					<div class="middle_top_item">
						<p class="p_top p_top2"></p>
						<p class="p_name">已租总面积<span class="p_unit">（㎡）</span></p>
						<p class="p_area">{{alreadyArea.totalArea}}</p>
						<p class="p_type">同比</p>
						<p class="p_count">{{alreadyArea.tongBi}}</p>
						<p class="p_type">环比</p>
						<p class="p_count p_count1" style="color: #f00;">{{alreadyArea.huanBi}}</p>
					</div>
					<div class="middle_top_item">
						<p class="p_top p_top3"></p>
						<p class="p_name">空置总面积<span class="p_unit">（㎡）</span></p>
						<p class="p_area">{{nullArea.totalArea}}</p>
						<p class="p_type">同比</p>
						<p class="p_count">{{nullArea.tongBi}}</p>
						<p class="p_type">环比</p>
						<p class="p_count p_count1">{{nullArea.huanBi}}</p>
					</div>
				</div>
				<div class="middle_bottom">
					<div class="item_title">
						<img class="title_logo" src="../assets/imgs/znzl_icon_tb@2x.png">
						<span class="title_name">
							已租总面积
							<span class="title_unit">（ ㎡ ）</span>
						</span>
					</div>
					<div id="chart3" class="chart3"></div>
				</div>
			</div>
			<div class="contBox_item contBox_right">
				<div class="right_item">
					<div class="item_title">
						<img class="title_logo" src="../assets/imgs/znzl_icon_tb@2x.png">
						<span class="title_name">楼宇租赁分析</span>
					</div>
					<div id="chart4" class="chart4"></div>
				</div>
				<div class="right_item">
					<div class="item_title">
						<img class="title_logo" src="../assets/imgs/znzl_icon_tb@2x.png">
						<span class="title_name">签约面积分析（㎡）</span>
					</div>
					<div id="chart5" class="chart5"></div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	var that
	let timer;
	import api from '../libs/api'
	import echarts from 'echarts'
	import Head from '../components/header.vue';
	export default {
		data() {
			return {
				tableDate: [],
				industryArr: [], // 入驻企业行业数据
				industryCount: 0, // 入驻企业行业总数
				sourceArr: [], // 招商来源分析表数据
				sourceCount: 0, // 招商来源总数
				toatlArea: {}, // 总面积数据
				alreadyArea: {}, // 已租面积
				nullArea: {}, // 空闲面积
				areaArr: [], // 已租总面积数据
				leaseArr: [], // 楼宇租赁情况数据
				unitArr: [],
				signingArr: [], // 签约面积数据
				signingxArr: [], // 签约面积X轴数据
				animate: false,
			}
		},
		components: {
			Head
		},
		mounted() {
			this.getTableDate()
			this.getIndustryData()
			this.getSourceData()
			this.getLeaseData()
			this.getSigningData()
			this.getRentalAreaData()
		},
		created: function() {
			that = this
		},
		methods: {
			showMarquee: function() {
				that.animate = true
				// setTimeout(() => {
					// that.tableDate.push(that.tableDate[0])
					// that.tableDate.shift()
				// 	that.animate = false
				// }, 500)
			},
			c_marquee() {
					that.tableDate.push(that.tableDate[0])
					that.tableDate.shift()
					that.animate = false;
			},
			// 获取到期提醒数据
			getTableDate() {
				that.get(api.getExpireRemind, {}, function(res) {
					if(res.code == 0) {
						//that.tableDate = res.data.expireRemindVO
						
//						if(that.tableDate.length > 4) {
//							setInterval(that.showMarquee, 2000)
//						}
					}
				})
				that.tableDate = [{
					bizModelVal: "写字楼",
					buildingName: "T1",
					rentEndTime: "2019-05-31",
					storeyName: "1F",
					unitNum: "1"
				}, {
					bizModelVal: "商业楼",
					buildingName: "T2",
					rentEndTime: "2020-05-08",
					storeyName: "1F",
					unitNum: "206"
				}, {
					bizModelVal: "写字楼",
					buildingName: "T3",
					rentEndTime: "2019-05-31",
					storeyName: "1F",
					unitNum: "101"
				}, {
					bizModelVal: "写字楼",
					buildingName: "T4",
					rentEndTime: "2019-05-31",
					storeyName: "1F",
					unitNum: "5"
				}, {
					bizModelVal: "商业楼",
					buildingName: "T5",
					rentEndTime: "2020-05-15",
					storeyName: "1F",
					unitNum: "1108"
				}, {
					bizModelVal: "写字楼",
					buildingName: "T6",
					rentEndTime: "2020-05-15",
					storeyName: "1F",
					unitNum: "12"
				}]
				timer && clearInterval(timer);
				timer = setInterval(that.showMarquee, 2000)
			},
			// 获取中间面积数据
			getRentalAreaData() {
//				that.get(api.getRentalArea, {}, function(res) {
//					if(res.code == 0) {
//						that.toatlArea = res.data.toatlArea // 总面积数据
//						that.alreadyArea = res.data.alreadyArea // 已租面积
//						that.nullArea = res.data.nullArea // 空闲面积
//						that.areaArr[0] = {
//							name: "办公楼",
//							value: res.data.officeArea
//						}
//						that.areaArr[1] = {
//							name: "商业楼",
//							value: res.data.businessArea
//						}
//						that.drawChart3()
//					}
//				})
				that.toatlArea = {
					huanBi: "99.94%",
					lastMonthArea: 17943,
					nowDayArea: 17985,
					tongBi: "0.06%",
					totalArea: 17985,
					yearArea: 0
				}
				that.alreadyArea = {
					huanBi: "-13.00%",
					lastMonthArea: 0,
					nowDayArea: 10,
					tongBi: "+11.00%",
					totalArea: 10,
					yearArea: 0
				}
				that.nullArea = {
					huanBi: "+11.00%",
					lastMonthArea: 17943,
					nowDayArea: 17975,
					tongBi: "+13.60%",
					totalArea: 17975,
					yearArea: 0
				}
				that.areaArr = [{
						value: 25000,
						name: '办公楼'
					},
					{
						value: 5000,
						name: '商业楼'
					}
				]

				that.drawChart3()
			},
			// 获取入驻企业行业数据
			getIndustryData() {
//				that.get(api.industryAnalysis, {}, function(res) {
//					if(res.code == 0) {
//						that.industryArr = res.data
//						that.industryArr.forEach(item => {
//							that.industryCount += item.value
//						})
//						that.drawChart1();
//					}
//				})
				that.industryArr = [{
						value: 18,
						name: '建筑业'
					},
					{
						value: 28,
						name: '教育/培训'
					},
					{
						value: 39,
						name: '制造业'
					},
					{
						value: 48,
						name: '餐饮业'
					},
					{
						value: 10,
						name: '休闲娱乐'
					}
				]

				that.industryArr.forEach(item => {
					that.industryCount += item.value
				})
				that.drawChart1();
			},
			// 入驻企业行业分析图表
			drawChart1() {
				var that = this;
				let myChart1 = this.$echarts.init(document.getElementById('chart1'))
				myChart1.setOption({
					title: {
						text: that.industryCount,
						textStyle: {
							fontSize: 12,
							fontWeight: 700,
							color: '#fff'
						},
						subtext: '企业(家)',
						subtextStyle: {
							fontSize: 12,
							fontWeight: 700,
							color: '#fff'
						},
						left: 'center',
						top: '40%'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{b}: {c} 家 ({d}%)"
					},
					color: ['#9141FF', '#73caea', '#FF9000', '#FF4169', '#75D800','#C499FF','#00FFA2','#00BAFF','#F6FF00','#75D800'],
					series: [{
						name: '总企业',
						type: 'pie',
						radius: ['40%', '55%'],
						label: {
							normal: {
								formatter: '{b|{b}：} \n{hr|}\n {c} 家 {per|{d}%}  ',
								rich: {
									a: {
										color: '#999',
										lineHeight: 22,
										align: 'center'
									},
									// abg: {
									//     backgroundColor: '#333',
									//     width: '100%',
									//     align: 'right',
									//     height: 22,
									//     borderRadius: [4, 4, 0, 0]
									// },
									hr: {
										borderColor: '#28B1C7',
										width: '100%',
										borderWidth: 0.5,
										height: 0
									},
									b: {
										fontSize: 12,
										lineHeight: 33
									},
									per: {
										color: '#eee',
										//backgroundColor: '#334455',
										padding: [2, 4],
										borderRadius: 2,
										lineHeight: 33
									}
								}
							}
						},
						data: that.industryArr
					}]
				});
			},
			// 获取招商来源数据
			getSourceData() {
//				that.get(api.sourceAnalysis, {}, function(res) {
//					if(res.code == 0) {
//						that.sourceArr = res.data
//						that.sourceArr.forEach(item => {
//							that.sourceCount += item.value
//						})
//						that.drawChart2();
//					}
//				})
					that.sourceArr = [{
						value: 18,
						name: '广告推广'
					},
					{
						value: 28,
						name: '独立经纪人'
					},
					{
						value: 39,
						name: '代理公司'
					},
					{
						value: 48,
						name: '业主关联方'
					}
				]

				that.sourceArr.forEach(item => {
					that.sourceCount += item.value
				})
				that.drawChart2();
			},
			// 招商来源分析图表
			drawChart2() {
				var that = this;
				let myChart2 = this.$echarts.init(document.getElementById('chart2'))
				myChart2.setOption({
					title: {
						text: that.sourceCount,
						textStyle: {
							fontSize: 12,
							fontWeight: 700,
							color: '#fff'
						},
						subtext: '总人数(人)',
						subtextStyle: {
							fontSize: 12,
							fontWeight: 700,
							color: '#fff'
						},
						left: 'center',
						top: '40%'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{b}: {c} 人 ({d}%)"
					},
					//颜色注释
					/*
						legend: {
							orient: 'vertical',
							x: 'left',
							data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
						},
					*/
					color: ['#75D800', '#9141FF', '#73caea', '#FF9000', '#FF4169', '#75D800','#C499FF','#00FFA2','#00BAFF','#F6FF00'],
					series: [{
						name: '总企业',
						type: 'pie',
						radius: ['40%', '55%'],
						label: {
							normal: {
								formatter: '{b|{b}：} \n{hr|}\n {c} 人  {per|{d}%}  ',
								rich: {
									a: {
										color: '#999',
										lineHeight: 22,
										align: 'center'
									},
									// abg: {
									//     backgroundColor: '#333',
									//     width: '100%',
									//     align: 'right',
									//     height: 22,
									//     borderRadius: [4, 4, 0, 0]
									// },
									hr: {
										borderColor: '#28B1C7',
										width: '100%',
										borderWidth: 0.5,
										height: 0
									},
									b: {
										fontSize: 12,
										lineHeight: 33
									},
									per: {
										color: '#eee',
										//backgroundColor: '#334455',
										padding: [2, 4],
										borderRadius: 2,
										lineHeight: 33
									}
								}
							}
						},
						data: that.sourceArr
					}]
				});
			},
			// 已租面积图表
			drawChart3() {
				var that = this;
				let myChart3 = this.$echarts.init(document.getElementById('chart3'))
				myChart3.setOption({
					title: {
						text: "办公楼           商业楼",
						textStyle: {
							fontSize: 14,
							fontWeight: 700,
							color: '#fff'
						},
						subtext: that.areaArr[0].value + "       " + that.areaArr[1].value,
						subtextStyle: {
							fontSize: 18,
							fontWeight: 700,
							color: '#E8BE53'
						},
						left: 'center',
						top: '45%'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{b}: {c} ㎡ ({d}%)"
					},
					color: ['#73caea', '#FFED24'],
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['65%', '80%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								formatter: '{b|{b}：} \n{hr|}\n {c} ㎡  {per|{d}%}  ',
								rich: {
									a: {
										color: '#999',
										lineHeight: 22,
										align: 'center'
									},
									// abg: {
									//     backgroundColor: '#333',
									//     width: '100%',
									//     align: 'right',
									//     height: 22,
									//     borderRadius: [4, 4, 0, 0]
									// },
									hr: {
										borderColor: '#28B1C7',
										width: '100%',
										borderWidth: 0.5,
										height: 0
									},
									b: {
										fontSize: 12,
										lineHeight: 33
									},
									per: {
										color: '#eee',
										//backgroundColor: '#334455',
										padding: [2, 4],
										borderRadius: 2,
										lineHeight: 33
									}
								}
							}
						},
						data: that.areaArr
					}]
				});
			},
			// 楼宇租赁情况数据

			getLeaseData() {
//				that.get(api.getRentalSituation, {}, function(res) {
//					if(res.code == 0) {
//						res.data.forEach(item => {
//							that.leaseArr.push(item.acreageSum)
//							that.unitArr.push(item.name)
//						})
//						that.drawChart4()
//					}
//				})
				that.leaseArr = [66, 88, 55, 33, 44, 11, 55, 89]
				that.unitArr = ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8"]
				that.drawChart4()
			},
			// 楼宇租赁情况图表
			drawChart4() {
				var that = this;
				// 基于准备好的dom，初始化echarts实例 
				let myChart4 = this.$echarts.init(document.getElementById('chart4'))
				// 绘制图表
				myChart4.setOption({
					color: ['#3398DB'],
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						},
						formatter:function(params){
							return params[0].name+"<br>" + params[0].seriesName + ": " + params[0].data + " 个"
						},
					},
					grid: {
						left: '3%',
						right: '8%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						//name: '单位:㎡',
						type: 'category',
						data: that.unitArr,
						axisTick: {
							alignWithLabel: true
						},
						axisLine: {
							lineStyle: {
								fontSize: 16,
								fontWeight: "bold",
								color: '#fff',
								width: 1, //这里是为了突出显示加上的  
							}
						}
					}],
					yAxis: [{
						type: 'value',
						axisLine: {
							show: false
						},
						axisTick: {
							show: false
						},
						axisLine: {
							lineStyle: {
								color: 'rgb(12, 28, 44)',
								width: 1, //这里是为了突出显示加上的  
							}
						},
						splitLine: {
							lineStyle: {
								color: ['rgba(255, 255, 255, .3)']
							}
						},
					}],
					series: [{
						name: '签约数',
						type: 'bar',
						barWidth: '50%',
						data: that.leaseArr,
						itemStyle: { //
							normal: {
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1, [{
											offset: 0,
											color: 'rgba(0, 212, 193, 1)'
										},
										{
											offset: 1,
											color: 'rgba(98, 117, 209, 0)'
										}
									]
								)
							},
						},
						symbol: 'emptydiamond',
					}]
				});
			},
			// 签约面积分析数据
			getSigningData() {
//				that.get(api.getAreaAnalysis, {}, function(res) {
//					if(res.code == 0) {
//						res.data.forEach(item => {
//							that.signingArr.push(item.unitCount)
//							that.signingxArr.push(item.areaRange)
//						})
//						that.drawChart5();
//					}
//				})
				that.signingArr = [66, 88, 55, 33, 44, 11, 55, 15]
				that.signingxArr = ["200以下", "201-300", "301-350", "351-400", "401-450", "451-500", "500-1000", "1000以上"]
				that.drawChart5();
			},
			// 签约面积分析图表
			drawChart5() {
				var that = this;
				// 基于准备好的dom，初始化echarts实例 
				let myChart5 = this.$echarts.init(document.getElementById('chart5'))
				// 绘制图表
				myChart5.setOption({
					color: ['#3398DB'],
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						},
						formatter:function(params){
							return params[0].name+"<br>" + params[0].seriesName + ": " + params[0].data + " 个"
						}
					},
					grid: {
						left: '3%',
						right: '8%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						//name: '单位:㎡',
						type: 'category',
						data: that.signingxArr,
						axisTick: {
							alignWithLabel: true
						},
						axisLine: {
							lineStyle: {
								fontSize: 16,
								fontWeight: "bold",
								color: '#fff',
								width: 1, //这里是为了突出显示加上的  
							}
						},
						axisLabel: {
							rotate: 30
						}
					}],
					yAxis: [{
						type: 'value',
						axisLine: {
							show: false
						},
						axisTick: {
							show: false
						},
						axisLine: {
							lineStyle: {
								color: 'rgb(12, 28, 44)',
								width: 1, //这里是为了突出显示加上的  
							}
						},
						splitLine: {
							lineStyle: {
								color: ['rgba(255, 255, 255, .3)']
							}
						},
						//show : false,
					}],
					series: [{
						name: '签约数',
						type: 'bar',
						barWidth: '50%',
						data: that.signingArr,
						itemStyle: { //
							normal: {
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1, [{
											offset: 0,
											color: 'rgba(211, 139, 45, 1)'
										},
										{
											offset: 1,
											color: 'rgba(98, 209, 200, 0)'
										}
									]
								)
							},
						},
						symbol: 'emptydiamond',
					}]
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.contBox {
		display: flex;
		box-sizing: border-box;
		width: 960px;
		height: 475px;
		padding: 0 8px;
		position: absolute;
		top: 54px;
		z-index: 100;
		.contBox_item {
			flex: 1;
			&.contBox_left {
				box-sizing: border-box;
				padding: 23px 23px 23px 33px;
				background: url('../assets/imgs/znzl_icon_zbk@2x.png')no-repeat;
				background-size: 100% 100%;
				.left_item {
					height: 30%;
					margin-bottom: 3%;
					&.left_top {
						.left_table {
							box-sizing: border-box;
							width: calc(100% - 15px);
							height: calc(100% - 15px);
							margin-left: 15px;
							padding: 20px 20px 15px;
							background: url('../assets/imgs/znzl_icon_zuobiankuang@2x.png')no-repeat;
							background-size: 100% 100%;
							.t_table {
								font-size: 9px;
								color: #fff;
								.t_thead {
									.t_tr {
										background: rgba(25, 177, 201, .2);
									}
								}
								.t_tbody {
									.t_tr.active {
										background: rgba(25, 177, 201, .2);
									}
								}
								.t_tr {
									height: 16px;
								}
							}
						}
					}
					.item_title {
						.title_logo {
							width: 12px;
							height: 12px;
							margin-right: 10px;
							vertical-align: middle;
						}
						.title_name {
							font-size: 9px;
							font-weight: 700;
							color: #FFFFFF;
							vertical-align: middle;
						}
						.count {
							display: inline-block;
							width: 60px;
							height: 15px;
							line-height: 15px;
							font-size: 10px;
							text-align: center;
							background: url('../assets/imgs/znzl_icon_title@2x.png')no-repeat;
							background-size: 100% 100%;
							color: #f00;
							vertical-align: middle;
						}
					}
					.chart1 {
						width: 100%;
						height: 120px;
					}
					.chart2 {
						width: 100%;
						height: 120px;
					}
				}
			}
			&.contBox_middle {
				box-sizing: border-box;
				padding: 20px;
				background: url('../assets/imgs/znzl_icon_zjbk@2x.png')no-repeat;
				background-size: 100% 100%;
				.middle_top {
					display: flex;
					justify-content: space-between;
					height: 50%;
					margin-bottom: 5%;
					.middle_top_item {
						flex: 1;
						text-align: center;
						.p_top {
							width: 31px;
							height: 2px;
							margin: 0 auto;
							margin-bottom: 20px;
							&.p_top1 {
								background: #4FB5BD;
							}
							&.p_top2 {
								background: #5B5DBE;
							}
							&.p_top3 {
								background: #CC6352;
							}
						}
						.p_name {
							margin-bottom: 20px;
							font-size: 11px;
							font-weight: 700;
							color: #fff;
							.p_unit {
								font-size: 9px;
							}
						}
						.p_area {
							margin-bottom: 32px;
							font-size: 16px;
							font-weight: 700;
							color: #CEAD58;
						}
						.p_type {
							margin-bottom: 10px;
							font-size: 13px;
							color: #fff;
						}
						.p_count {
							margin-bottom: 10px;
							font-size: 15px;
							font-weight: 700;
							color: #07C8BF;
							&.p_count1 {
								margin-bottom: 0;
							}
						}
					}
				}
				.middle_bottom {
					height: 45%;
					.item_title {
						.title_logo {
							width: 12px;
							height: 12px;
							margin-right: 10px;
							vertical-align: middle;
						}
						.title_name {
							font-size: 9px;
							font-weight: 700;
							color: #FFFFFF;
							vertical-align: middle;
							.title_unit {
								font-size: 7px;
							}
						}
					}
					.chart3 {
						width: 100%;
						height: calc(100% - 12px);
					}
				}
			}
			&.contBox_right {
				box-sizing: border-box;
				padding: 23px;
				background: url('../assets/imgs/znzl_icon_ybk@2x.png')no-repeat;
				background-size: 100% 100%;
				.right_item {
					height: 50%;
					.item_title {
						.title_logo {
							width: 12px;
							height: 12px;
							margin-right: 10px;
							vertical-align: middle;
						}
						.title_name {
							font-size: 9px;
							font-weight: 700;
							color: #FFFFFF;
							vertical-align: middle;
						}
					}
					.chart4 {
						width: 100%;
						height: calc(100% - 12px);
					}
					.chart5 {
						width: 100%;
						height: calc(100% - 12px);
					}
				}
			}
		}
	}
	
	.marquee {
		height: 95px;
		align-items: center;
		box-sizing: border-box;
		overflow: hidden;
	}
	
	.marquee_title {
		display: flex;
		height: 16px;
		line-height: 16px;
		font-size: 8px;
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
		height: 64px;
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
		margin-top: -16px;
	}
	
	.marquee_list li {
		display: flex;
		height: 16px;
		line-height: 16px;
		font-size: 9px;
		/*&.active {
			background: rgba(25, 177, 201, .2);
		}*/
		span {
			flex: 1;
			height: 16px;
			line-height: 16px;
			font-size: 8px;
			text-align: center;
			color: #fff;
		}
	}
</style>