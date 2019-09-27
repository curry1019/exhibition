<template>
	<div class="hello">
		<Head :title="'智能报修'" :isShow = false></Head>
		<div class="contBox">
			<div class="contBox_item contBox_left">
				<div class="left_top">
					<div class="top_item top_item1">
						<span class="top_item_name">总单量</span>
						<span class="top_item_desc">
							{{repairCount}}
							<span class="top_item_unit">单</span>
						</span>
					</div>
					<div class="top_item">
						<span class="top_item_name">有效订单率</span>
						<span class="top_item_desc top_item_desc1">{{effectiveRate}}</span>
					</div>
				</div>
				<div class="left_bottom">
					<div class="left_bottom_top">
						<div class="bottom_top_item">
							<div class="top_item_name">
								今日报修数量
							</div>
							<div class="top_item_desc top_item_desc1">
								{{todayCount}}
								<span class="top_item_unit">单</span>
							</div>
						</div>
						<div class="bottom_top_item">
							<div class="top_item_name">
								昨日报修数量
							</div>
							<div class="top_item_desc">
								{{yesterdayCount}}
								<span class="top_item_unit">单</span>
							</div>
						</div>
					</div>
					<div id="chart1" class="chart1"></div>
				</div>
			</div>
			<div class="contBox_item contBox_middle">
				<div class="middle_top">
					<div class="middle_top_item">
						<div class="top_item_title top_item_title1">
							<img class="item_title_logo" src="../assets/imgs/znbx_icon_zsyq@2x.png" alt="">
							有效订单数量
						</div>
						<div class="top_item_desc">
							<span class="top_item_count top_item_count1">{{yxds}}</span>
							<span class="top_item_unit">单</span>
						</div>
					</div>
					<div class="middle_top_item">
						<div class="top_item_title top_item_title2">
							<img class="item_title_logo" src="../assets/imgs/znbx_icon_hsyq@2x.png" alt="">
							派单数量
						</div>
						<div class="top_item_desc">
							<span class="top_item_count top_item_count2">{{pdsl}}</span>
							<span class="top_item_unit">单</span>
						</div>
					</div>
					<div class="middle_top_item">
						<div class="top_item_title top_item_title3">
							<img class="item_title_logo" src="../assets/imgs/znbx_icon_lsyq@2x.png" alt="">
							接单数量
						</div>
						<div class="top_item_desc">
							<span class="top_item_count top_item_count3">{{jdsl}}</span>
							<span class="top_item_unit">单</span>
						</div>
					</div>
				</div>
				<div class="middle_bottom">
					<div id="chart2" class="chart2"></div>
				</div>
			</div>
			<div class="contBox_item contBox_right">
				<div class="right_top">
					<div id="chart3" class="chart3"></div>
				</div>
				<div class="right_bottom">
					<div id="chart4" class="chart4"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	var that
	import api from '../libs/api'
	import echarts from 'echarts'
	import Head from '../components/header.vue';
	export default {
		data() {
			return {
				repairCount: 0, // 报修总单量
				effectiveRate: 0, // 有效订单率 
				todayCount: 0, // 今日报修数量
				yesterdayCount: 0, // 昨日报修数量
				thisWeekReporting: [], // 本周报修数量
				lastWeekReporting: [], // 上周报修数量
				jdsl: 0, // 接单数量
			    pdsl: 0, // 派单数量
			    yxds: 0, // 有效订单数量
				thisMonthReporting: [], // 本月报修数量
				lastMonthReporting: [], // 上月报修数量
				buildingNameList: [], // 楼宇名称
				repairCategory: [], // 报修类别数据
				categoryList: [], // 报修类别列表
				repairEvaluation: [], // 报修评价
				evaluationCategory: [], // 评价类别
			}
		},
		components: {
			Head
		},
		mounted() {
			this.getRepairCount()
			this.getRepairNumber()
			this.getMonthRepairCount()
			
			
			this.getMonthReportingData()
			this.getRepairCategoryData()
		},
		created(){
			that = this;
		},
		methods: {
			// 获取总报修单量
			getRepairCount() {
//				that.get(api.getRepairCount,{},function(res){
//			 		if(res.code == 0){
//			 			that.repairCount = res.data.zds
//			 			that.effectiveRate = (res.data.yxds / res.data.zds * 100).toFixed(2) + "%"
//			 		}
//			 	})
				that.repairCount = 668
			 	that.effectiveRate = "98.6%"
			},
			// 日和周报修数量数据
			getRepairNumber() {
//				that.get(api.getRepairNumber,{},function(res){
//			 		if(res.code == 0){
//			 			that.todayCount = res.data.number[0].total // 今日报修数量
//						that.yesterdayCount = res.data.number[1].total // 昨日报修数量
//						res.data.week.forEach(item => {
//							if(item.name == '上周') {
//								that.lastWeekReporting.push(item.count)
//							}else {
//								that.thisWeekReporting.push(item.count)
//							}
//						})
//						that.drawChart1();
//			 		}
//			 	})
				that.todayCount = 10 // 今日报修数量
				that.yesterdayCount = 16 // 昨日报修数量
				that.thisWeekReporting = [10, 12, 21, 54, 26, 83, 71]
				that.lastWeekReporting = [15, 10, 28, 34, 18, 51, 20]
				that.drawChart1();
			},
			// 月报修数量
			getMonthRepairCount() {
//				that.get(api.getMonthRepairCount,{},function(res){
//			 		if(res.code == 0){
//			 			that.jdsl = res.data.jdsl // 接单数量
//					    that.pdsl = res.data.pdsl // 派单数量
//					    that.yxds = res.data.yxds // 有效订单数量
//			 		}
//			 	})
				that.jdsl = 108 // 接单数量
			    that.pdsl = 89 // 派单数量
			    that.yxds = 197 // 有效订单数量
			},
			// 本周报修数量图表
			drawChart1() {
				var that = this;
				let myChart1 = this.$echarts.init(document.getElementById('chart1'))
				myChart1.setOption({
					title: {
						//text: '某楼盘销售情况',
						//subtext: '报修数量'
					},
					tooltip: {
						trigger: 'axis'
					},

					legend: {
						data: ['本周报修统计', '上周报修统计'],
						textStyle: {
							color: '#fff'
						}
					},
					calculable: true,
					xAxis: [{
						type: 'category',
						boundaryGap: false,
						data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
						name: "单位: 单",
						type: 'value',
						axisLine: {
							lineStyle: {
								color: '#fff',
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
					color: ['#00D69C', '#4EC7FF'],
					series: [{
							name: '上周报修统计',
							type: 'line',
							symbol: 'none', //这句就是去掉点的  
							smooth: true, //这句就是让曲线变平滑的 
							itemStyle: {
								normal: {
									areaStyle: {
										type: 'default'
									}
								}
							},
							data: that.lastWeekReporting
						},
						{
							name: '本周报修统计',
							type: 'line',
							symbol: 'none', //这句就是去掉点的  
							smooth: true, //这句就是让曲线变平滑的 
							itemStyle: {
								normal: {
									areaStyle: {
										type: 'default'
									}
								}
							},
							data: that.thisWeekReporting
						}
					]
				});
			},
			// 获取本月报修数量数据
			getMonthReportingData() {
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
				that.thisMonthReporting = [100, 88, 77, 66, 99, 83, 71, 21]
				that.lastMonthReporting = [15, 10, 28, 34, 18, 51, 20, 49]
				that.buildingNameList = ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8"]
				that.drawChart2();
			},
			// 本月报修数量图表
			drawChart2() {
				var that = this;
				let myChart2 = this.$echarts.init(document.getElementById('chart2'))
				myChart2.setOption({
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['本月报修数量', '上月报修数量'],
						textStyle: {
							color: '#fff'
						}
					},
					xAxis: [{
						type: 'category',
						data: that.buildingNameList,
						axisLine: {
							lineStyle: {
								fontSize: 16,
								fontWeight: "bold",
								color: '#fff',
								width: 1, //这里是为了突出显示加上的  
							}
						},
//						axisLabel: {
//							rotate: 20
//						}
					}],
					yAxis: [{
						name: "单位: 单",
						type: 'value',
						axisLabel: {
							formatter: '{value} '
						},
						axisLine: {
							lineStyle: {
								color: '#fff',
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
					series: [
						{
							name: '本月报修数量',
							type: 'bar',
							barWidth: '20%',
							itemStyle: { //
								normal: {
									barBorderRadius: [8, 8, 8, 8],
									color: new echarts.graphic.LinearGradient(
										0, 0, 0, 1, [{
												offset: 0,
												color: '#0058C4'
											},
											{
												offset: 1,
												color: '#0058C4'
											}
										]
									)
								},
							},
							data: that.thisMonthReporting
						},
						{
							name: '上月报修数量',
							type: 'line',
							symbol: 'none', //这句就是去掉点的  
							smooth: true, //这句就是让曲线变平滑的 
							itemStyle: {
								normal: {
									areaStyle: {
										type: 'default',
										color: "#FFFC00"
									}
								}
							},
							data: that.lastMonthReporting
						}
					]
				});
			},
			// 获取报修类别和报修评价数据
			getRepairCategoryData() {
//				that.get(api.getRepairCategory,{},function(res){
//			 		if(res.code == 0){
//			 			that.repairCategory = res.data.category
//			 			that.repairCategory.forEach(item => {
//							that.categoryList.push(item.name)
//						})
//						that.drawChart3();
//			 			that.repairEvaluation = res.data.comment
//			 			that.repairEvaluation.forEach(item => {
//							that.evaluationCategory.push(item.name)
//						})
//						that.drawChart4();
//			 		}
//			 	})
				that.repairCategory = [{
						value: 10,
						name: '水'
					},
					{
						value: 5,
						name: '电'
					},
					{
						value: 15,
						name: '家电'
					},
					{
						value: 25,
						name: '暖气'
					},
					{
						value: 20,
						name: '电梯'
					},
					{
						value: 35,
						name: '中央空调'
					},
					{
						value: 30,
						name: '灯'
					},
					{
						value: 40,
						name: '单元楼门'
					}
				]
				that.repairCategory.forEach(item => {
					that.categoryList.push(item.name)
				})
				that.drawChart3();
				that.repairEvaluation = [{
						value: 100,
						name: '非常满意'
					},
					{
						value: 15,
						name: '满意'
					},
					{
						value: 25,
						name: '一般'
					}
				]
				that.repairEvaluation.forEach(item => {
					that.evaluationCategory.push(item.name)
				})
				that.drawChart4();
			},
			// 报修类别图表
			drawChart3() {
				var that = this;
				let myChart3 = this.$echarts.init(document.getElementById('chart3'))
				myChart3.setOption({
					title: {
						x: 'center'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{b} : {c} 单 ({d}%)"
					},
					legend: {
						x: 'center',
						y: 'top',
						data: that.categoryList,
						textStyle: {
							color: '#fff'
						}
					},
					calculable: true,
					color: ['#8d4bbb', '#44cef6', '#70f3ff', '#2edfa3', '#f0c239', '#ed5736', '#ff0097', '#ffb3a7'],
					series: [{
						//name: '面积模式',
						type: 'pie',
						radius: [30, 110],
						center: ['50%', '50%'],
						roseType: 'area',
						data: that.repairCategory
					}]
				});
			},
			// 报修类别图表
			drawChart4() {
				var that = this;
				let myChart4 = this.$echarts.init(document.getElementById('chart4'))
				myChart4.setOption({
					tooltip: {
						trigger: 'item',
						formatter: "{b} : {c} 单 ({d}%)"
					},
					legend: {
						left: 'right',
						data: that.evaluationCategory,
						textStyle: {
							color: '#fff'
						}
					},
					color: ['#FF8562', '#14D1B0', '#2397F0'],
					series: [{
						//name: '访问来源',
						type: 'pie',
						radius: '55%',
						center: ['50%', '60%'],
						data: that.repairEvaluation,
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.contBox {
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		width: 960px;
		height: 475px;
		padding: 0 15px;
		position: absolute;
		top: 54px;
		z-index: 100;
		.contBox_item {
			box-sizing: border-box;
			&.contBox_left {
				width: 245px;
				.left_top {
					box-sizing: border-box;
					height: 135px;
					padding: 25px 0 20px 25px;
					background: url('../assets/imgs/znbx_icon_zsbk@2x.png')no-repeat;
					background-size: 100% 100%;
					.top_item {
						&.top_item1 {
							margin-bottom: 15px;
						}
						.top_item_name {
							display: inline-block;
							width: 78px;
							margin-right: 12px;
							font-size: 15px;
							color: #4183CD;
						}
						.top_item_desc {
							display: inline-block;
							font-size: 23px;
							font-weight: 700;
							color: #fff;
							.top_item_unit {
								font-size: 9px;
								font-weight: 400;
							}
							&.top_item_desc1 {
								color: #5ACEFF;
							}
						}
					}
				}
				.left_bottom {
					box-sizing: border-box;
					height: 340px;
					padding: 55px 17px 55px 22px;
					background: url('../assets/imgs/znbx_icon_zxbk@2x.png')no-repeat;
					background-size: 100% 100%;
					.left_bottom_top {
						display: flex;
						justify-content: space-between;
						margin-bottom: 50px;
						.bottom_top_item {
							box-sizing: border-box;
							padding: 11px 13px 12px 13px;
							width: 98px;
							height: 50px;
							background: url('../assets/imgs/znbx_icon_zsxbk@2x.png')no-repeat;
							background-size: 100% 100%;
							text-align: center;
							color: #fff;
							.top_item_name {
								font-size: 12px;
							}
							.top_item_desc {
								font-size: 14px;
								.top_item_unit {
									font-size: 9px;
									font-weight: 400;
									color: #fff;
								}
								&.top_item_desc1 {
									color: #FF0000;
								}
							}
						}
					}
					.chart1 {
						width: 100%;
						height: 180px;
					}
				}
			}
			&.contBox_middle {
				width: 430px;
				.middle_top {
					display: flex;
					justify-content: space-between;
					box-sizing: border-box;
					height: 230px;
					padding: 45px 26px 45px 26px;
					background: url('../assets/imgs/znbx_icon_zjsbk@2x.png')no-repeat;
					background-size: 100% 100%;
					.middle_top_item {
						width: 100px;
						.top_item_title {
							position: relative;
							width: 100px;
							height: 100px;
							line-height: 100px;
							font-size: 11px;
							text-align: center;
							color: #fff;
							.item_title_logo {
								position: absolute;
								top: 0;
								left: 0;
								width: 100px;
								height: 100px;
								/*z-index: -1;*/
								animation:mymove 5s infinite linear;
							}
						}
						.top_item_desc {
							margin-top: 14px;
							text-align: center;
							.top_item_count {
								font-size: 17px;
								&.top_item_count1 {
									color: #A859FF;
								}
								&.top_item_count2 {
									color: #FF9745;
								}
								&.top_item_count3 {
									color: #34ABFF;
								}
							}
							.top_item_unit {
								font-size: 9px;
								color: #fff;
							}
						}
					}
				}
				.middle_bottom {
					box-sizing: border-box;
					height: 245px;
					padding: 48px 35px 35px 42px;
					background: url('../assets/imgs/znbx_icon_zjxbk@2x.png')no-repeat;
					background-size: 100% 100%;
					.chart2 {
						width: 100%;
						height: 190px;
					}
				}
			}
			&.contBox_right {
				box-sizing: border-box;
				width: 250px;
				padding: 49px 16px 21px 21px;
				background: url('../assets/imgs/znbx_icon_ybk@2x.png')no-repeat;
				background-size: 100% 100%;
				.right_top {
					.chart3 {
						width: 100%;
						height: 260px;
					}
				}
				.right_bottom {
					.chart4 {
						width: 100%;
						height: 150px;
					}
				}
			}
		}
	}
	@keyframes mymove {
        0%   {transform: rotate(0)}
        100% {transform: rotate(360deg)}
    }
</style>