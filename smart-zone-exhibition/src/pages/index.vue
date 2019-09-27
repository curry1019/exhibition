<template>
	<div class="hello">

		<Head :title="title" :show=false></Head>
		<div class="contBox">

			<!-- 智能资源服务平台 -->
			<div class="resources">
				<div class="firstTitle">
					<p class="line"></p>
					<h4>智能资源服务平台</h4>
				</div>
				<!-- 智能租赁 -->
				<div class="lease">
					<div class="title">
						<span>智能租赁</span>
					</div>
					<!-- 总面积 -->
					<div class="allArea">
						<div class="leftCount">
							<div class="areaTitle">
								<img src="../assets/imgs/tourongz_icon_zsbk@2x.png" alt="">
								<span>总面积(m²)</span>
							</div>
							<div class="count">48350.15</div>
							<div class="middleInner">
								<span>35100.05m²</span>
								<b>已租 16.52%</b>
							</div>
							<div class="middleInner">
								<span>13250.10m²</span>
								<b>空置 16.52%</b>
							</div>
						</div>
						<div class="rightEchars1 rightEchars" id="areaEcharts"></div>
					</div>
					<!-- 到期提醒 -->
					<div class="untilTips">
						<div class="leftCount">
							<div class="areaTitle">
								<img src="../assets/imgs/tourongz_icon_zsbk@2x.png" alt="">
								<span>到期提醒</span>
								<b>15</b>
							</div>
							<div class="marquee">
								<div class="marquee_title">
									<span class="beforeUnti">单元</span>
									<span class="afterUnti">到期时间</span>
								</div>
								<div class="marquee_box">
									<ul class="marquee_list" :class="{marquee_top:animate}" @webkitTransitionEnd="watchAni">
										<li v-for="(item,index) in ideaTable" :key="index">
											<span class="beforeCont">{{item.unit}}</span>
											<span class="afterCont">{{item.endTime}}</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="rightEchars2 rightEchars" id="untilEcharts"></div>
					</div>
				</div>
				<!-- 行政服务 -->
				<div class="administrationServer">
					<div class="title">
						<span>行政服务</span>
					</div>
					<div class="wrapper">
						<div class="huan1 position1">
							<img src="../assets/imgs/xz_icon_bl@2x.png" alt="">
							<span>代办代理</span>
						</div>
						<div class="huan1 position2">
							<img src="../assets/imgs/xz_icon_hj@2x.png" alt="">
							<span>环境美化</span>
						</div>
						<div class="huan1 position3">
							<img src="../assets/imgs/xz_icon_design@2x.png" alt="">
							<span>设计服务</span>
						</div>
						<div class="huan1 position4">
							<img src="../assets/imgs/xz_icon_zx@2x.png" alt="">
							<span>咨询服务</span>
						</div>
						<div class="huan1 position5">
							<img src="../assets/imgs/xz_icon_pt@2x.png" alt="">
							<span>配套服务</span>
						</div>
					</div>
				</div>
				<!-- 合作商家 -->
				<div class="businessmen">
					<div class="title">
						<span>合作商家</span>
					</div>
					<div id="investment" class="addTz"></div>
				</div>
			</div>

			<!-- 智慧物业管理凭条平台 -->
			<div class="property">
				<div class="property_top">
					<div class="pic1"></div>
					<div class="pic2"></div>
					<div class="pic3"></div>
					<div class="pic4"></div>
					<div class="pic5" @click="toPages('home')"></div>
					<div class="pic6"></div>
					<div class="pic7"></div>
				</div>
				<div class="property_bottom">
					<div class="property_bottom_title">
						<p class="line"></p>
						<h4>智能物业管理平台</h4>
					</div>
					<div class="property_bottom_content">
						<div class="content_item">
							<div class="areaTitle">
								<img src="../assets/imgs/title_tip@2x.png" />
								<span>物业报修</span>
							</div>
							<div class="item_content">
								<div class="item_content_left">
									<div class="content_left_item">
										<span class="left_item_txt">今日报修</span>
										<span class="left_item_count" style="color: #E81919;">{{todayCount}}</span>
									</div>
									<div class="content_left_item">
										<span class="left_item_txt">昨日报修</span>
										<span class="left_item_count" style="color: #737EA3;">{{yesterdayCount}}</span>
									</div>
								</div>
								<div class="item_content_right">
									<div id="chart7" class="chart7"></div>
								</div>
							</div>
						</div>
						<div class="content_item">
							<div class="areaTitle">
								<img src="../assets/imgs/title_tip@2x.png" />
								<span>增值服务</span>
							</div>
							<div class="server_list">
								<div class="server_item_wrapper">
									<div class="server_item">
										<div class="server_item_left">
											<div class="server_item_left_bg"></div>
											<img src="../assets/imgs/zsfu_icon_zlbj@2x.png" />
										</div>
										<div class="server_item_right">楼宇配套服务</div>
									</div>
									<div class="server_item">
										<div class="server_item_left">
											<div class="server_item_left_bg"></div>
											<img src="../assets/imgs/zsfu_icon_cjf@2x.png" />
										</div>
										<div class="server_item_right">&nbsp;&nbsp;设备设施厂商数据库</div>
									</div>
								</div>
								<div class="server_item_wrapper">
									<div class="server_item">
										<div class="server_item_left">
											<div class="server_item_left_bg"></div>
											<img src="../assets/imgs/zsfu_icon_zlgj@2x(1).png" />
										</div>
										<div class="server_item_right">直联管家</div>
									</div>
								</div>
								<div class="server_item_wrapper">
									<div class="server_item">
										<div class="server_item_left">
											<div class="server_item_left_bg"></div>
											<img src="../assets/imgs/zsfu_icon_zlgj@2x.png" />
										</div>
										<div class="server_item_right">直联保洁服务</div>
									</div>
									<div class="server_item">
										<div class="server_item_left">
											<div class="server_item_left_bg"></div>
											<img src="../assets/imgs/zsfu_icon_znbc@2x(1).png" />
										</div>
										<div class="server_item_right">智能班车</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- 智慧能源管理平台 -->
			<div class="energy">
				<div class="energy_title">
					<p class="line"></p>
					<h4>智能资源服务平台</h4>
				</div>
				<div class="warning_box">
					<div class="box_title">
						<span>实时预警中心</span>
					</div>
					<div class="list list_fitment">
						<div class="list_left">
							<img class="left_logo" src="../assets/imgs/yj_icon01@2x.png" />
							<span class="left_txt">正在装修业主</span>
						</div>
						<div class="list_right">
							<div class="swiper-container">
								<div class="swiper-wrapper">
									<div class="swiper-slide" v-for="(item,index) in fitmentList" :key="index">
										<div class="right_txt">{{item}}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="list list_roadshow">
						<div class="list_left">
							<img class="left_logo" src="../assets/imgs/yj_icon02@2x.png" />
							<span class="left_txt">路演预告</span>
						</div>
						<div class="list_right">
							<div class="swiper-container">
								<div class="swiper-wrapper">
									<div class="swiper-slide" v-for="(item,index) in roadshowList" :key="index">
										<div class="">
											<span class="right_txt">{{item.time}} {{item.name}}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="list list_shangbao">
						<div class="list_left">
							<img class="left_logo" src="../assets/imgs/yj_icon03@2x.png" />
							<span class="left_txt">意见反馈</span>
						</div>
						<div class="list_right">
							<div class="swiper-container">
								<div class="swiper-wrapper">
									<div class="swiper-slide" v-for="(item,index) in userShangbao" :key="index">
										<!--<img class="right_logo" src="../assets/imgs/yj_warn@2x.png" />-->
										<span class="right_txt">{{item}}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="list list_parking">
						<div class="list_left">
							<img class="left_logo" src="../assets/imgs/yj_icon04@2x.png" />
							<span class="left_txt">停车场车位</span>
						</div>
						<div class="list_right">
							<div class="swiper-container">
								<div class="swiper-wrapper">
									<div class="swiper-slide" v-for="(item,index) in parkingList" :key="index">
										<img class="right_logo" src="../assets/imgs/yj_warn@2x.png" />
										<span class="right_txt">{{item}}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="list list_repairs">
						<div class="list_left">
							<img class="left_logo" src="../assets/imgs/yj_icon_05@2x.png" />
							<span class="left_txt">物业报修</span>
						</div>
						<div class="list_right">
							<div class="swiper-container">
								<div class="swiper-wrapper">
									<div class="swiper-slide" v-for="(item,index) in repairsList" :key="index">
										<span class="right_txt">{{item}}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="resource_box">
					<div class="box_title">
						<span>智慧能源</span>
					</div>
					<div class="resource_content">
						<div class="resource_left">
							<div class="resource_left_title">
								<img class="left_title_logo" src="../assets/imgs/title_tip@2x.png" />
								<span>设备运转情况</span>
							</div>
							<div class="water_electricity">
								<div class="water_electricity_box water_box">
									<div class="water_electricity_title water_title">水表</div>
									<div class="water_box_count">
										<span class="water_box_txt">2133</span>
										<span class="water_box_txt1">2135</span>
									</div>
								</div>
								<div class="water_electricity_box electricity_box">
									<div class="water_electricity_title electricity_title">电表</div>
									<div class="water_box_count">
										<span class="water_box_txt">2133</span>
										<span class="water_box_txt1">2135</span>
									</div>
								</div>
							</div>
							<div class="trouble_box">
								<div class="trouble_title">故障信息数据</div>
								<div class="trouble_content">
									<p class="trouble_count">2</p>
									<p>2</p>
								</div>
							</div>
							<div class="resource_left_title">
								<img class="left_title_logo" src="../assets/imgs/title_tip@2x.png" />
								<span>预警信息</span>
								<span class="warning_count">{{tableDate.length}}</span>
							</div>
							<div class="warning_list_wrapper">
								<div class="marquee1">
									<div class="marquee_title1">
										<span>单元</span>
										<span>状态</span>
									</div>
									<div class="marquee_box1">
										<ul class="marquee_list1" :class="{marquee_top1:animate1}" @webkitTransitionEnd="c_marquee">
											<li v-for="(item,index) in tableDate" :key="index" :class="{active: index % 2 == 1}">
												<span>{{item.unit}}</span>
												<span style="color: #FA2828;" v-if="item.status == '用电异常'">{{item.status}}</span>
												<span style="color: #2CFBF2;" v-else>{{item.status}}</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="resource_right">
							<div class="resource_right_top">
								<div class="right_top_item">
									<div class="resource_left_title">
										<img class="left_title_logo" src="../assets/imgs/title_tip@2x.png" />
										<span>总用水量</span>
									</div>
									<div class="right_top_count">483501m³</div>
								</div>
								<div class="right_top_item">
									<div class="resource_left_title">
										<img class="left_title_logo" src="../assets/imgs/title_tip@2x.png" />
										<span>总用电量</span>
									</div>
									<div class="right_top_count">293501KW·h</div>
								</div>
							</div>
							<div class="resource_right_content">
								<div class="right_content_title">用水实时能耗曲线</div>
								<div id="chart5" class="chart5"></div>
							</div>
							<div class="resource_right_content">
								<div class="right_content_title">用电实时能耗曲线</div>
								<div id="chart6" class="chart5"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	var that
	let timer1;
	let timer;
	import Swiper from "swiper"
	import Head from '../components/header.vue';
	import echarts from 'echarts'
	export default {
		name: 'index',
		data() {
			return {
				title: "亦城时代智慧云平台",
				tableDate: [],
				animate1: false,
				animate: false,
				ideaTable: [{
						"unit": "T5-02",
						"endTime": "2019-05-11",
					},
					{
						"unit": "T5-02",
						"endTime": "2019-05-22",
					},
					{
						"unit": "T5-02",
						"endTime": "2019-06-13",
					},
					{
						"unit": "T5-02",
						"endTime": "2019-06-24",
					},
					{
						"unit": "T5-02",
						"endTime": "2019-07-16",
					},
					{
						"unit": "T5-02",
						"endTime": "2019-07-29",
					}
				],
				investmentData: [{
					name: "企业服务",
					value: 40
				}, {
					name: "医疗健康",
					value: 26
				}, {
					name: "文化娱乐",
					value: 27
				}, {
					name: "电子商务",
					value: 30
				}, {
					name: "工业",
					value: 29
				}],
				todayCount: "",
				yesterdayCount: "",
				thisWeekReporting: [],
				lastWeekReporting: [],
				fitmentList: ['T5-0933', 'T7-0612'],
				roadshowList: [{
					time: '2019-07-11 16:30',
					name: '建筑园区规划'
				}, {
					time: '2019-07-19 14:30',
					name: '亦城时代大咖秀'
				}],
				userShangbao: ['亦城时代APP智能方便', '工作人员服务效率高'],
				parkingList: ["T5停车位已满", "T3停车位已满"],
				repairsList: ['T6-1003', 'T3-1008'],
				descAreaName: "N43",
				desc: {
					name: "北汽新能源高端智能生态工厂",
					area: "占地：917.85亩（61.19公顷）",
					address: "西临红凤路，北临融兴街南侧，南临亦通北二街，东临同义路。",
					introduction: "已征面积：272亩（18.16万平方米），代征面积：	645.85（43.03万平方米）",
					imgList: ["http://kodo.smart-zone.51yuqian.net/Fq9EKWF04UVx7ySqWp4qCzw3tCzy"]
				},
				dataObj: {
					'1': 2018,
					'2': 2019,
				}
			}
		},
		components: {
			Head,
			Swiper
		},
		created: function() {
			that = this
		},
		mounted() {
			timer && clearInterval(timer)
			timer = setInterval(that.showMarquee, 2000)
			that.investment()
			that.areaEcharts()
			that.untilEcharts()
			this.getRepairNumber()
			this.getTableDate()
			this.drawChart5()
			this.drawChart6()
			that.initSwiper()
		},
		methods: {
			selectArea(val) {
				switch(val) {
					case "N43":
						this.desc = {
							name: "北汽新能源高端智能生态工厂",
							area: "占地：917.85亩（61.19公顷）",
							address: "西临红凤路，北临融兴街南侧，南临亦通北二街，东临同义路。",
							introduction: "已征面积：272亩（18.16万平方米），代征面积：	645.85（43.03万平方米）",
							imgList: ["http://kodo.smart-zone.51yuqian.net/Fq9EKWF04UVx7ySqWp4qCzw3tCzy"]
						}
						break;
					case "N12":
						this.desc = {
							name: "高端汽车及新能源汽车关键零配件产业园",
							area: "101774.9平方米",
							address: "北京市南部大兴区，在南六环路以南，属亦庄经济开发区。基地紧邻亦庄新城，其北侧与亦庄新城 核心相距约6公里，距离北京大兴新机场35公里。",
							introduction: "项目为高端汽车及新能源汽车关键零配件产业园建筑项目。本项目拟在北京经济技术开发区路南区N12M1、N19M1、N20M1三个地块内新建汽车零部件制造标准厂房及相关配套设施。主要为北京奔驰及北汽新能源等整车企业配套生产零部件提供标准化厂房，为已入区和将入区的汽车零部件制造企业提供一个完善的产业发展空间，进一步提高汽车制造产业集聚效应。项目总用地264388.9平米。其中：N12M1地块，用地面积101774.9平米。N19M1地块，用地面积84655.5平米。N20M1地块，用地面积77958.5平米。本案地处园区核心，临近奔驰总装厂。厂址南临荣兴街，西临瑞和东一路，东临瑞和东三路。本案基地周边基础设施完善。",
							imgList: ["http://kodo.smart-zone.51yuqian.net/FqWbiCGIdkfti8Z9Dg2iu0pTdaqj"]
						}
						break;
					case "N19":
						this.desc = {
							name: "高端汽车及新能源汽车关键零配件产业园",
							area: "84655.5平方米",
							address: "北京市南部大兴区，在南六环路以南，属亦庄经济开发区。基地紧邻亦庄新城，其北侧与亦庄新城 核心相距约6公里，距离北京大兴新机场35公里。",
							introduction: "项目为高端汽车及新能源汽车关键零配件产业园建筑项目。本项目拟在北京经济技术开发区路南区N12M1、N19M1、N20M1三个地块内新建汽车零部件制造标准厂房及相关配套设施。主要为北京奔驰及北汽新能源等整车企业配套生产零部件提供标准化厂房，为已入区和将入区的汽车零部件制造企业提供一个完善的产业发展空间，进一步提高汽车制造产业集聚效应。项目总用地264388.9平米。其中：N12M1地块，用地面积101774.9平米。N19M1地块，用地面积84655.5平米。N20M1地块，用地面积77958.5平米。本案地处园区核心，临近奔驰总装厂。厂址南临荣兴街，西临瑞和东一路，东临瑞和东三路。本案基地周边基础设施完善。",
							imgList: ["http://kodo.smart-zone.51yuqian.net/FqWbiCGIdkfti8Z9Dg2iu0pTdaqj"]
						}
						break;
					case "N20":
						this.desc = {
							name: "高端汽车及新能源汽车关键零配件产业园",
							area: "77958.5平方米",
							address: "北京市南部大兴区，在南六环路以南，属亦庄经济开发区。基地紧邻亦庄新城，其北侧与亦庄新城 核心相距约6公里，距离北京大兴新机场35公里。",
							introduction: "项目为高端汽车及新能源汽车关键零配件产业园建筑项目。本项目拟在北京经济技术开发区路南区N12M1、N19M1、N20M1三个地块内新建汽车零部件制造标准厂房及相关配套设施。主要为北京奔驰及北汽新能源等整车企业配套生产零部件提供标准化厂房，为已入区和将入区的汽车零部件制造企业提供一个完善的产业发展空间，进一步提高汽车制造产业集聚效应。项目总用地264388.9平米。其中：N12M1地块，用地面积101774.9平米。N19M1地块，用地面积84655.5平米。N20M1地块，用地面积77958.5平米。本案地处园区核心，临近奔驰总装厂。厂址南临荣兴街，西临瑞和东一路，东临瑞和东三路。本案基地周边基础设施完善。",
							imgList: ["http://kodo.smart-zone.51yuqian.net/FqWbiCGIdkfti8Z9Dg2iu0pTdaqj"]
						}
						break;
					case "N9":
						this.desc = {
							name: "北京亦庄细胞治疗研究及中试基地",
							area: "47662.6平方米",
							address: "位于瑞合西一路与融兴北二街交汇处",
							introduction: "",
							imgList: ["http://kodo.smart-zone.51yuqian.net/FnnPDFK7qHXs-2Emi2FdUIgkwGKD"]
						}
						break;
					case "C9":
						this.desc = {
							name: "北京加科思研发生产基地",
							area: "40936.25平方米",
							address: "位于经海三路与科创十一街交汇处。基地东南西北为已建工业园区。东侧临近城市快速路，西侧临近地铁亦庄线。",
							introduction: "",
							imgList: ["http://kodo.smart-zone.51yuqian.net/FtSmGEGFHE6JDZWOyTf1WpnKrEdL", "http://kodo.smart-zone.51yuqian.net/Fkyjd1ZFs0S6NEzTGJ3gBV9c-ZxP"]
						}
						break;
					case "66":
						this.desc = {
							name: "北京首药控股新药研发与产业化基地",
							area: "26114.2平方米平方米",
							address: "位于景园街与东环南路交汇处。",
							introduction: "",
							imgList: ["http://kodo.smart-zone.51yuqian.net/FjxYoq1TDh3EATyeIntyLpNRSiwm"]
						}
					case "A18":
						this.desc = {
							name: "亦城时代广场",
							area: "43.54万平方米",
							address: "北京亦庄经济技术开发区，经海路与科创五街主干道交叉口。",
							introduction: "亦城时代广场由北京亦庄盛元投资开发有限公司开发，总建筑面积约43万㎡，整个项目由12栋商务甲级写字楼和7栋临街商铺组成，其中一期产品为T5、T6、T7、T8、T9五栋写字楼和B3、B4、B5、B6四栋临街商铺。 项目位于北京经济技术开发区科创五街与经海路交汇处。作为路东区“产业升级廊道”的重要组成部分，亦城时代广场以超体量的建筑集群傲立于首都科技创新中心的主阵地和京津冀一体化协同发展的桥头堡。12栋建筑定鼎城市恢弘气质形象，构筑约43万㎡国际标准写字楼聚落，必将成为亦庄标志性建筑和开发区构建高精尖产业的前沿阵地。",
							imgList: ["http://kodo.smart-zone.51yuqian.net/FjxYoq1TDh3EATyeIntyLpNRSiwm"]
						}
						break;
				}
			},
			initSwiper() {
				new Swiper('.swiper-container', {
					autoplay: true,
					loop: true,
					direction: 'vertical'
				})
			},
			toPages(path) {
				this.$router.push({
					path: path
				});
			},
			watchAni() {
				that.ideaTable.push(that.ideaTable[0]);
				that.ideaTable.shift();        
				that.animate = false;      
			},
			showMarquee: function() {        
				that.animate = true;        
			},
			investment() {
				let myChart = that.$echarts.init(document.getElementById('investment'));
				myChart.setOption({
					title: {
						show: false //不显示title
					},
					//提示框组件
					tooltip: {
						trigger: 'item',
						formatter: "{b}: {c}个 ({d}%)"
					},
					series: [{
						name: '',
						type: 'pie',
						radius: [10, 50],
						center: ['50%', '50%'],
						data: that.investmentData,
						color: ['#ED5450', '#325DF9', '#FF4169', '#75D800', '#C499FF', '#00FFA2', '#00BAFF', '#F6FF00', '#75D800'],
						roseType: 'radius',
						label: {
							normal: {
								textStyle: {
									color: '#fff'
								},
								backgroundColor: 'rgba(41, 29, 134, .6)',
								borderColor: 'rgba(45, 162, 253, 1)',
								borderWidth: 1,
								borderRadius: 4,
								padding: [0, 3],
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
										lineHeight: 24
									},
									per: {
										color: ''
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
								length: 5,
								length2: 5
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
			//面积
			areaEcharts() {
				let myChart = that.$echarts.init(document.getElementById('areaEcharts'));
				myChart.setOption({
					title: {
						text: '意向客户数量',
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
						formatter: function(params) {
							// return that.dataObj[params[0].name] + "-" + params[0].name + "<br>" + params[0].seriesName + ": " + params[0].data + " 个"
							return params[0].name + "<br>" + params[0].seriesName + ": " + params[0].data + " 个"

						},
					},
					color: ['rgba(108,192,66,1)'],
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
						data: ['1', '2', '3', '4', '5', '6', '7', '8'],
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
							show: false
						},
					},
					series: [{
						name: '意向客户数量',
						data: [0, 1200, 200, 600, 200, 1330, 900, 600],
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
									color: 'rgba(108,192,66,1)' // 0% 处的颜色
								}, {
									offset: 1,
									color: 'rgba(46,254,245,0.08)' // 100% 处的颜色
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
									color: 'rgba(44,254,245,1)' // 0% 处的颜色
								}, {
									offset: 1,
									color: 'rgba(99,213,44,1)' // 100% 处的颜色
								}],
								global: false // 缺省为 false
							}
						}
					}]
				})
			},
			// 到期提醒
			untilEcharts() {
				let myChart2 = this.$echarts.init(document.getElementById('untilEcharts'))
				myChart2.setOption({
					title: {
						text: '每月成交面积',
						show: true,
						textStyle: {
							color: '#BAC2CC',
							fontSize: '6px'
						},
						left: 50,
						top: 2
					},
					grid: {
						top: '16%',
						left: '2%',
						right: '8%',
						bottom: '3%',
						containLabel: true
					},
					tooltip: {
						trigger: 'axis'
					},
					xAxis: [{
						type: 'category',
						data: ['1', '2', '3', '4', '5', '6', '7', '8'],
						axisLine: {
							lineStyle: {
								fontSize: 16,
								fontWeight: "bold",
								color: '#969CA4',
								width: 1, //这里是为了突出显示加上的  
							}
						},
					}],
					yAxis: [{
						type: 'value',
						axisLabel: {
							formatter: '{value} '
						},
						axisLine: {
							lineStyle: {
								color: '#969CA4',
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
						name: '每月成交面积',
						type: 'bar',
						barWidth: '40%',
						itemStyle: {
							normal: {
								barBorderRadius: [8, 8, 0, 0],
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1, [{
											offset: 0,
											color: '#1EB0FC'
										},
										{
											offset: 1,
											color: '#EB5AFC'
										}
									]
								)
							},
						},
						data: ['1000', '800', '500', '600', '1000', '200', '900', '150']
					}]
				});
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
				that.drawChart7();
			},
			// 本周报修数量图表
			drawChart7() {
				var that = this;
				let myChart7 = this.$echarts.init(document.getElementById('chart7'))
				myChart7.setOption({
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
						},
						orient: 'vertical'
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
					grid: {
						top: '20%',
						left: '3%',
						right: '10%',
						bottom: '18%',
						containLabel: true
					},
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
			showMarquee1: function() {
				that.animate1 = true
				// setTimeout(() => {
				// that.tableDate.push(that.tableDate[0])
				// that.tableDate.shift()
				// 	that.animate = false
				// }, 500)
			},
			c_marquee() {
				that.tableDate.push(that.tableDate[0])
				that.tableDate.shift()
				that.animate1 = false;
			},
			getTableDate() {
				//				that.get(api.getExpireRemind, {}, function(res) {
				//					if(res.code == 0) {
				//						//that.tableDate = res.data.expireRemindVO
				//
				//						//						if(that.tableDate.length > 4) {
				//						//							setInterval(that.showMarquee, 2000)
				//						//						}
				//					}
				//				})
				that.tableDate = [{
					unit: "T5-02",
					status: "用水异常"
				}, {
					unit: "T5-06",
					status: "用水异常"
				}, {
					unit: "T7-05",
					status: "用电异常"
				}, {
					unit: "T9-08",
					status: "用水异常"
				}, {
					unit: "T8-12",
					status: "用水异常"
				}, {
					unit: "T8-02",
					status: "用电异常"
				}, {
					unit: "Q7-04",
					status: "用水异常"
				}]
				timer1 && clearInterval(timer1);
				timer1 = setInterval(that.showMarquee1, 2000)
			},
			// 用水量图表
			drawChart5() {
				var that = this;
				let myChart1 = this.$echarts.init(document.getElementById('chart5'))
				myChart1.setOption({
					title: {
						//text: '某楼盘销售情况',
						//subtext: '报修数量'
					},
					tooltip: {
						trigger: 'axis'
					},
					calculable: true,
					xAxis: [{
						type: 'category',
						boundaryGap: false,
						data: ['12:00', '14:00', '16:00', '18:00'],
						axisLine: {
							lineStyle: {
								fontSize: 12,
								fontWeight: "bold",
								color: '#969CA4',
								width: 1, //这里是为了突出显示加上的  
							}
						}
					}],
					yAxis: [{
						name: "单位: m³",
						type: 'value',
						axisLine: {
							lineStyle: {
								color: '#969CA4',
								width: 1, //这里是为了突出显示加上的  
							}
						},
						minInterval: 1000,
						splitLine: {
							show: false,
							lineStyle: {
								color: ['#fafafa']
							}
						}
					}],
					color: ['rgba(36, 81, 97, 1)'],
					grid: {
						top: '20%',
						left: '3%',
						right: '10%',
						bottom: '33%',
						containLabel: true
					},
					series: [{
						name: '用水量',
						type: 'line',
						//symbol: 'none', //这句就是去掉点的  
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
									color: 'rgba(88, 137, 142, 1)' // 0% 处的颜色
								}, {
									offset: 1,
									color: 'rgba(23, 28, 45, 0.08)' // 100% 处的颜色
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
									color: 'rgba(36, 81, 97, 1)' // 0% 处的颜色
								}, {
									offset: 1,
									color: 'rgba(91, 151, 156, 1)' // 100% 处的颜色
								}],
								global: false // 缺省为 false
							}
						},
						data: [1500, 1000, 2800, 3400]
					}]
				});
			},
			// 用电量图表
			drawChart6() {
				var that = this;
				let myChart6 = this.$echarts.init(document.getElementById('chart6'))
				myChart6.setOption({
					title: {
						//text: '某楼盘销售情况',
						//subtext: '报修数量'
					},
					tooltip: {
						trigger: 'axis'
					},
					calculable: true,
					xAxis: [{
						type: 'category',
						boundaryGap: false,
						data: ['12:00', '14:00', '16:00', '18:00'],
						axisLine: {
							lineStyle: {
								fontSize: 12,
								fontWeight: "bold",
								color: '#969CA4',
								width: 1, //这里是为了突出显示加上的  
							}
						}
					}],
					yAxis: [{
						name: "单位: KW·h",
						type: 'value',
						axisLine: {
							lineStyle: {
								color: '#969CA4',
								width: 1, //这里是为了突出显示加上的  
							}
						},
						minInterval: 1000,
						splitLine: {
							show: false,
							lineStyle: {
								color: ['#fafafa']
							}
						}
					}],
					color: ['rgba(143, 85, 47, 1)'],
					grid: {
						top: '20%',
						left: '3%',
						right: '10%',
						bottom: '33%',
						containLabel: true
					},
					series: [{
						name: '用电量',
						type: 'line',
						//symbol: 'none', //这句就是去掉点的  
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
									color: 'rgba(143, 85, 47, 1)' // 0% 处的颜色
								}, {
									offset: 1,
									color: 'rgba(70, 25, 30, 0.08)' // 100% 处的颜色
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
									color: 'rgba(131, 81, 57, 1)' // 0% 处的颜色
								}, {
									offset: 1,
									color: 'rgba(190, 89, 30, 1)' // 100% 处的颜色
								}],
								global: false // 缺省为 false
							}
						},
						data: [1500, 3800, 2000, 3400]
					}]
				});
			},
		},
	}
</script>

<style scoped lang="scss">
	.contBox {
		box-sizing: border-box;
		width: 960px;
		height: 475px;
		padding: 0 10px;
		/*overflow: hidden;*/
		position: absolute;
		top: 54px;
		left: 0;
		display: flex;
		justify-content: space-around;
		&>div {
			width: 245px;
			height: 100%;
			display: flex;
			flex-direction: column;
			// justify-content: space-between;
			/*border:1px solid #ccc;*/
		}
		.resources {
			background: url('../assets/imgs/title_bg@2x.png')no-repeat;
			background-size: 100% 100%;
		}
		.property {
			position: relative;
			margin-top: -54px;
			flex: 1;
			.property_top {
				position: relative;
				width: 100%;
				height: 450px;
				.pic1 {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					width: 100%;
					height: 100%;
					margin: auto;
					border-radius: 50%;
					background: url('../assets/imgs/menu_bg@2x.png')no-repeat;
					background-size: 100% 100%;
				}
				.pic2 {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					width: 375px;
					height: 375px;
					margin: auto;
					border-radius: 50%;
					background: url('../assets/imgs/menu_Clockwise@2x.png')no-repeat;
					background-size: 100% 100%;
					z-index: 110;
					animation: mymove1 180s infinite linear;
				}
				.pic3 {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					width: 250px;
					height: 250px;
					margin: auto;
					border-radius: 50%;
					background: url('../assets/imgs/menu_center_anticlockwise@2x.png')no-repeat;
					background-size: 100% 100%;
					animation: mymove2 48s infinite linear;
				}
				.pic4 {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					width: 240px;
					height: 240px;
					margin: auto;
					border-radius: 50%;
					background: url('../assets/imgs/menu_quan01@2x.png')no-repeat;
					background-size: 100% 100%;
					animation: mymove3 36s infinite linear;
				}
				.pic5 {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					width: 87.5px;
					height: 87.5px;
					margin: auto;
					border-radius: 50%;
					background: url('../assets/imgs/menu_Immobility@2x.png')no-repeat;
					background-size: 100% 100%;
					z-index: 999;
				}
				.pic6 {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					width: 309px;
					height: 309px;
					margin: auto;
					border-radius: 50%;
					background: url('../assets/imgs/menu_content@2x.png')no-repeat;
					background-size: 100% 100%;
					z-index: 99;
					animation: mymove4 180s infinite linear;
				}
				.pic7 {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					width: 220px;
					height: 220px;
					margin: auto;
					border-radius: 50%;
					background: url('../assets/imgs/menu_div@2x.png')no-repeat;
					background-size: 100% 100%;
					z-index: 666;
					animation: mymove1 180s infinite linear;
				}
				.pic7:hover {
					cursor: url('../assets/imgs/WechatIMG88.gif'), auto;
				}
			}
			.property_bottom {
				position: absolute;
				bottom: -54.5px;
				left: 18px;
				width: 415px;
				height: 137px;
				background: url('../assets/imgs/title_bg_wy@2x.png')no-repeat;
				background-size: 100% 100%;
				.property_bottom_title {
					width: 100%;
					height: 20px;
					display: flex;
					align-items: center;
					.line {
						width: 2.5px;
						height: 10px;
						background: rgba(6, 177, 255, 1);
						margin: 0 4.5px 0 10px;
					}
					h4 {
						font-size: 11px;
						color: rgba(6, 177, 255, 1);
					}
				}
				.property_bottom_content {
					display: flex;
					.content_item {
						box-sizing: border-box;
						flex: 1;
						height: 117px;
						padding: 11.5px;
						.item_content {
							display: flex;
							.item_content_left {
								width: 44px;
								margin-top: 16px;
								margin-right: 8px;
								.content_left_item {
									width: 100%;
									height: 16px;
									margin-bottom: 6.5px;
									line-height: 16px;
									background: url('../assets/imgs/wy_bottom_frame@2x.png') no-repeat;
									background-size: 100% 100%;
									text-align: center;
									.left_item_txt {
										font-size: 6px;
										font-family: MicrosoftYaHei;
										font-weight: 400;
										color: rgba(250, 250, 250, 1);
									}
									.left_item_count {
										font-size: 8px;
										font-family: MicrosoftYaHei;
										font-weight: bold;
									}
								}
							}
							.item_content_right {
								flex: 1;
								.chart7 {
									height: 94px;
								}
							}
						}
						.server_list {
							.server_item_wrapper {
								display: flex;
								justify-content: space-around;
								align-items: center;
								height: 21px;
								margin-top: 6px;
								.server_item {
									display: flex;
									align-items: center;
									.server_item_left {
										position: relative;
										width: 21px;
										height: 21px;
										.server_item_left_bg {
											position: absolute;
											top: 0;
											left: 0;
											width: 21px;
											height: 21px;
											background: url('../assets/imgs/zsfu_icon_znzx@2x.png') no-repeat;
											background-size: 100% 100%;
											animation: mymove5 4s infinite linear;
										}
										img {
											display: block;
											width: 10px;
											height: 10px;
											margin: 5.5px auto;
										}
									}
									.server_item_right {
										width: 70px;
										height: 16px;
										margin-left: -3.5px;
										line-height: 16px;
										border-bottom: 1px solid #2862A2;
										font-size: 6px;
										font-family: PingFangSC-Medium;
										font-weight: 500;
										text-align: center;
										color: rgba(5, 169, 234, 1);
									}
								}
							}
						}
					}
				}
			}
		}
		.firstTitle {
			width: 100%;
			height: 20px;
			display: flex;
			align-items: center;
			.line {
				width: 2.5px;
				height: 10px;
				background: rgba(238, 187, 108, 1);
				margin: 0 4.5px 0 10px;
			}
			h4 {
				font-size: 11px;
				color: rgba(238, 187, 108, 1);
			}
		}
		.lease {
			height: 200px;
			padding: 0 10px 0 9px;
			box-sizing: border-box;
			margin-top: 12px;
		}
		.title {
			width: 220px;
			height: 8px;
			background: url('../assets/imgs/subtitle_line_zy@2x.png') no-repeat;
			background-size: 100% 100%;
			position: relative;
			span {
				font-size: 9px;
				font-family: Adobe Heiti Std R;
				color: rgba(238, 187, 108, 1);
				position: absolute;
				top: -7px;
			}
		}
		.allArea {
			height: 95px;
			margin-top: 8px;
			display: flex;
		}
		.leftCount {
			width: 66px;
			height: 100%;
		}
		.areaTitle {
			height: 8px;
			display: flex;
			align-items: center;
			margin-bottom: 6px;
			img {
				width: 8px;
				height: 8px;
				display: inline-block;
				margin-right: 2.5px;
			}
			span {
				font-size: 8px;
				color: rgba(254, 254, 254, 1);
			}
			b {
				width: 16px;
				height: 7px;
				background: rgba(18, 78, 98, 0.2);
				text-align: center;
				line-height: 7px;
				font-size: 7px;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(250, 40, 40, 1);
				margin-left: 4px;
			}
		}
		.count {
			height: 16px;
			background: url('../assets/imgs/wy_bottom_frame@2x.png') no-repeat;
			background-size: 100% 100%;
			text-align: center;
			line-height: 16px;
			font-size: 8px;
			font-family: Adobe Heiti Std R;
			font-weight: normal;
			color: rgba(40, 178, 250, 1);
		}
		.middleInner {
			height: 27px;
			background: url('../assets/imgs/zl_area_bg@2x.png') no-repeat;
			background-size: 100% 100%;
			margin-top: 4.5px;
			text-align: center;
			span {
				display: block;
				font-size: 5px;
				font-family: MicrosoftYaHei-Bold;
				font-weight: bold;
				color: rgba(229, 182, 39, 1);
				padding-top: 5.5px;
			}
			b {
				display: block;
				font-size: 5px;
				font-family: MicrosoftYaHei;
				font-weight: 400;
				color: rgba(40, 178, 250, 1);
				padding-top: 3px;
			}
		}
		.rightEchars {
			flex: 1;
			margin-left: 14px;
		}
		.untilTips {
			height: 90px;
			margin-top: 8px;
			display: flex;
		}
		.marquee {
			height: 68px;
			overflow: hidden;
			box-sizing: border-box;
			background: url('../assets/imgs/zl_line_dq@2x.png') no-repeat;
			background-size: 100% 100%;
		}
		.marquee_title {
			display: flex;
			height: 19px;
			line-height: 19px;
			font-size: 5px;
			text-align: center;
			color: #fff;
			.beforeUnti {
				width: 24px;
			}
			.afterUnti {
				width: 40px;
			}
			span {
				text-align: center;
			}
		}
		.marquee_box {
			display: block;
			position: relative;
			height: 49px;
			overflow: hidden;
		}
		.marquee_list {
			width: 100%;
			display: block;
			position: absolute;
			top: 0;
			left: 0;
		}
		.marquee_list li {
			display: flex;
			height: 16px;
			line-height: 16px;
			font-size: 4px;
			span {
				height: 16px;
				line-height: 16px;
				font-size: 4px;
				text-align: center;
				color: #2CFBF2;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.beforeCont {
				width: 24px;
				color: #F0F0F0;
			}
			.afterCont {
				width: 40px;
			}
		}
		.marquee_top {
			transition: all 0.5s;
			margin-top: -16px;
		}
		.administrationServer {
			height: 115px;
			margin-top: 15px;
			/*margin-bottom:5px;*/
			padding: 0 10px 0 9px;
			box-sizing: border-box;
		}
		.wrapper {
			height: 94px;
			margin-top: 5px;
			position: relative;
		}
		.huan1 {
			width: 43px;
			height: 43px;
			background: url('../assets/imgs/xz_icon_bg@2x.png') no-repeat;
			background-size: 100% 100%;
			text-align: center;
			img {
				width: 15px;
				height: 15px;
				margin-top: 7px;
				margin-left: 14px;
				display: block;
			}
			span {
				font-size: 5px;
				color: rgba(255, 255, 255, 1);
			}
		}
		.position1 {
			position: absolute;
			left: 15px;
			top: 6.5px;
			animation: mymove6 5s linear infinite;
		}
		.position2 {
			position: absolute;
			left: 90px;
			top: 6.5px;
			animation: mymove6 5s linear infinite;
		}
		.position3 {
			position: absolute;
			left: 160px;
			top: 6.5px;
			animation: mymove6 5s linear infinite;
		}
		.position4 {
			position: absolute;
			left: 52px;
			top: 42.5px;
			animation: mymove6 5s linear 3s infinite;
		}
		.position5 {
			position: absolute;
			left: 125px;
			top: 42.5px;
			animation: mymove6 5s linear 3s infinite;
		}
		.businessmen {
			height: 102px;
			// border:1px solid yellow;
			padding: 0 10px 0 9px;
			box-sizing: border-box;
		}
		.addTz {
			height: 87px;
			display: flex;
			margin-top: 4px;
			justify-content: center;
			// border:1px solid #ccc;
		}
		.energy {
			background: url('../assets/imgs/title_bg@2x.png')no-repeat;
			background-size: 100% 100%;
			background-color: linear-gradient(0deg, rgba(245, 101, 61, 0.73), rgba(250, 140, 110, 0.73));
			border: 1px solid rgba(2, 245, 247, 0.1);
			.energy_title {
				width: 100%;
				height: 20px;
				display: flex;
				align-items: center;
				background: linear-gradient(90deg, rgba(32, 156, 255, 0.49), rgba(1, 5, 20, 0));
				.line {
					width: 2.5px;
					height: 10px;
					background: #6CEEAF;
					margin: 0 4.5px 0 10px;
				}
				h4 {
					font-size: 11px;
					color: #6CEEAF;
				}
			}
			.box_title {
				position: relative;
				width: 220px;
				height: 8px;
				margin: 16px auto 10px;
				background: url('../assets/imgs/subtitle_line_ny@2x.png') no-repeat;
				background-size: 100% 100%;
				span {
					position: absolute;
					top: -7px;
					font-size: 9px;
					font-family: Adobe Heiti Std R;
					color: #6CEEAF;
				}
			}
			.warning_box {
				.list {
					box-sizing: border-box;
					display: flex;
					width: 215px;
					height: 20px;
					margin: 0 auto;
					padding: 0 8px;
					line-height: 20px;
					justify-content: space-between;
					.list_left {
						.left_logo {
							width: 10px;
							height: 10px;
							margin-right: 3px;
							vertical-align: middle;
						}
						.left_txt {
							font-size: 8px;
							font-weight: 600;
							vertical-align: middle;
						}
					}
					.list_right {
						font-size: 8px;
						color: #58B9FC;
						.swiper-container {
							height: 20px;
							overflow: hidden;
							.swiper-wrapper {
								height: 20px;
								.swiper-slide {
									height: 20px;
									text-align: right;
								}
							}
						}
						.right_logo {
							width: 10px;
							height: 10px;
							margin-right: 3px;
							vertical-align: middle;
						}
						.right_time {
							margin-right: 3px;
							vertical-align: middle;
						}
						.right_txt {
							vertical-align: middle;
						}
					}
				}
				.list_fitment {
					background: rgba(57, 117, 174, 0.15);
					.left_txt {
						background: linear-gradient(0deg, rgba(7, 235, 159, 0.73) 0%, rgba(162, 252, 222, 0.73) 100%);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}
				}
				.list_roadshow .left_txt {
					background: linear-gradient(0deg, rgba(245, 101, 61, 0.73) 0%, rgba(250, 140, 110, 0.73) 100%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}
				.list_shangbao {
					background: rgba(57, 117, 174, 0.15);
					.left_txt {
						background: linear-gradient(0deg, rgba(7, 167, 177, 0.73) 0%, rgba(156, 243, 248, 0.73) 100%);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}
				}
				.list_parking .left_txt {
					background: linear-gradient(0deg, rgba(174, 61, 227, 0.73) 0%, rgba(217, 141, 252, 0.73) 100%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}
				.list_repairs {
					background: rgba(57, 117, 174, 0.15);
					.left_txt {
						background: linear-gradient(0deg, rgba(6, 177, 255, 0.73) 0%, rgba(80, 199, 254, 0.73) 100%);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}
				}
			}
			.resource_box {
				margin-top: 20px;
				.resource_content {
					box-sizing: border-box;
					display: flex;
					width: 100%;
					padding: 0 10px;
					justify-content: space-between;
					.resource_left_title {
						height: 20px;
						line-height: 20px;
						.left_title_logo {
							width: 8px;
							height: 8px;
							vertical-align: middle;
						}
						span {
							font-size: 8px;
							color: #FEFEFE;
							vertical-align: middle;
						}
						.warning_count {
							margin-left: 4px;
							padding: 0 4px;
							font-size: 7px;
							background: #124E62;
							color: #FA2828;
							vertical-align: middle;
						}
					}
					.resource_left {
						width: 90px;
						.water_electricity {
							display: flex;
							justify-content: space-between;
							.water_electricity_box {
								width: 40px;
								.water_electricity_title {
									width: 100%;
									height: 16px;
									margin-bottom: 3px;
									line-height: 16px;
									font-size: 7px;
									text-align: center;
									background: url('../assets/imgs/ny_div_bg@2x.png') no-repeat;
									background-size: 100% 100%;
									&.water_title {
										color: #78FD30;
									}
									&.electricity_title {
										color: #D2C820;
									}
								}
								.water_box_count {
									box-sizing: border-box;
									width: 100%;
									height: 37px;
									padding: 0 4px;
									line-height: 18.5px;
									font-size: 10px;
									background: url('../assets/imgs/ny_frame@2x.png') no-repeat;
									background-size: 100% 100%;
									.water_box_txt {
										display: block;
										color: #2CCAD9;
									}
									.water_box_txt1 {
										display: block;
										text-align: right;
										color: #28B2FA;
									}
								}
							}
						}
						.trouble_box {
							width: 100%;
							margin-top: 15px;
							margin-bottom: 23px;
							.trouble_title {
								height: 16px;
								line-height: 16px;
								font-size: 7px;
								text-align: center;
								background: url('../assets/imgs/ny_gz_bg@2x.png') no-repeat;
								background-size: 100% 100%;
								color: #62AFDF;
							}
							.trouble_content {
								display: flex;
								align-items: center;
								height: 27px;
								margin-top: 3px;
								line-height: 27px;
								font-size: 12px;
								text-align: center;
								background: url('../assets/imgs/ny_gz_frame@2x.png') no-repeat;
								background-size: 100% 100%;
								color: #FA2828;
								p {
									flex: 1;
									height: 14px;
									line-height: 14px;
								}
								.trouble_count {
									border-right: 1px solid #229CDD;
								}
							}
						}
					}
					.resource_right {
						width: 116px;
						.resource_right_top {
							display: flex;
							justify-content: space-between;
							.right_top_item {
								width: 50px;
								.right_top_count {
									width: 100%;
									height: 12.5px;
									line-height: 12.5px;
									border: 1px solid rgba(19, 106, 183, 0.5);
									border-radius: 3px;
									font-size: 8px;
									text-align: center;
									color: #28B2FA;
								}
							}
						}
						.resource_right_content {
							box-sizing: border-box;
							width: 100%;
							height: 95px;
							margin-top: 9px;
							border: 2px solid rgba(19, 106, 183, 0.5);
							border-radius: 3px;
							.right_content_title {
								height: 18px;
								line-height: 18px;
								font-size: 6px;
								text-indent: 9px;
								background: url('../assets/imgs/ny_chart_title_bg@2x.png') no-repeat;
								background-size: 100% 100%;
								color: #BAC2CC;
							}
							.chart5 {
								width: 100%;
								height: 100px;
							}
						}
					}
				}
			}
		}
	}
	
	.marquee1 {
		height: 60px;
		align-items: center;
		box-sizing: border-box;
		overflow: hidden;
	}
	
	.marquee_title1 {
		display: flex;
		height: 12px;
		line-height: 12px;
		font-size: 6px;
		text-align: center;
		background: #0C4474;
		color: #fff;
		span {
			flex: 1;
		}
	}
	
	.marquee_box1 {
		display: block;
		position: relative;
		height: 48px;
		overflow: hidden;
	}
	
	.marquee_list1 {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}
	
	.marquee_top1 {
		transition: all 0.5s;
		margin-top: -12px;
	}
	
	.marquee_list1 li {
		display: flex;
		height: 12px;
		line-height: 12px;
		font-size: 6px;
		span {
			flex: 1;
			height: 12px;
			line-height: 12px;
			font-size: 6px;
			text-align: center;
			color: #fff;
		}
	}
	
	@keyframes mymove1 {
		0% {
			transform: rotate(0) scale(1)
		}
		50% {
			transform: rotate(360deg) scale(1.1)
		}
		100% {
			transform: rotate(0deg) scale(1)
		}
	}
	
	@keyframes mymove2 {
		0% {
			transform: rotate(0)
		}
		50% {
			transform: rotate(-120deg)
		}
		100% {
			transform: rotate(0deg)
		}
	}
	
	@keyframes mymove3 {
		0% {
			transform: rotate(0)
		}
		50% {
			transform: rotate(-180deg)
		}
		100% {
			transform: rotate(0deg)
		}
	}
	
	@keyframes mymove4 {
		0% {
			transform: rotate(0) scale(1)
		}
		50% {
			transform: rotate(-360deg) scale(1.1)
		}
		100% {
			transform: rotate(0deg) scale(1)
		}
	}
	
	@keyframes mymove5 {
		0% {
			transform: rotate(0)
		}
		100% {
			transform: rotate(360deg)
		}
	}
	
	@keyframes mymove6 {
		0% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(0.85);
			opacity: 0.5;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
	/*#investment>div>canvas:hover{
        cursor: url('../assets/imgs/Arrow.png'),auto !important;
	}*/
</style>