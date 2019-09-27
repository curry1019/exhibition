<template>
	<div class="hello maphello">
		<div ref="mapCharts" @click="_toLoop" class="mapCharts"></div>
		<!-- <baidu-map ref='map' class="map" :mapStyle="mapStyle" :scroll-wheel-zoom="false" :center="center" :zoom="zoom" @ready="handler">
			<bm-marker @click="doShowMsg(titles[0])" :position="marPoints[0]" :title="texts[0]" :dragging="false" :icon="{url: iConUrl, size:iConSize}">
				<bm-label :content="titles[0]" :labelStyle="labelStyle" :offset="offSet" />
			</bm-marker>
			<bm-marker @click="doShowMsg(titles[1])" :position="marPoints[1]" :title="texts[1]" :dragging="false" :icon="{url: iConUrl, size:iConSize}">
				<bm-label :content="titles[1]" :labelStyle="labelStyle" :offset="offSet" />
			</bm-marker>
			<bm-marker @click="doShowMsg(titles[2])" :position="marPoints[2]" :title="texts[2]" :dragging="false" :icon="{url: iConUrl, size:iConSize}">
				<bm-label :content="titles[2]" :labelStyle="labelStyle" :offset="offSet" />
			</bm-marker>
			<bm-marker @click="doShowMsg(titles[3])" :position="marPoints[3]" :title="texts[3]" :dragging="false" :icon="{url: iConUrl, size:iConSize}">
				<bm-label :content="titles[3]" :labelStyle="labelStyle" :offset="offSet" />
			</bm-marker>
			<bm-marker @click="doShowMsg(titles[4])" :position="marPoints[4]" :title="texts[4]" :dragging="false" :icon="{url: iConUrl, size:iConSize}">
				<bm-label :content="titles[4]" :labelStyle="labelStyle" :offset="offSet" />
			</bm-marker>
			<bm-marker @click="doShowMsg(titles[5])" :position="marPoints[5]" :title="texts[5]" :dragging="false" :icon="{url: iConUrl, size:iConSize}">
				<bm-label :content="titles[5]" :labelStyle="labelStyle" :offset="offSet" />
			</bm-marker>
			<bm-marker @click="doShowMsg(titles[6])" :position="marPoints[6]" :title="texts[6]" :dragging="false" :icon="{url: iConUrl, size:iConSize}">
				<bm-label :content="titles[6]" :labelStyle="labelStyle" :offset="offSet" />
			</bm-marker>
			<bm-marker @click="doShowMsg(titles[7])" :position="marPoints[7]" :title="texts[7]" :dragging="false" :icon="{url: iConUrl, size:iConSize}">
				<bm-label :content="titles[7]" :labelStyle="labelStyle" :offset="offSet" />
			</bm-marker>
			<bm-polygon :path="polygonPath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="false" @lineupdate="updatePolygonPath" />
		</baidu-map> -->
		<div class="desc_box" v-show="showDesc">
			<div class="desc_title">
				<div class="desc_name">{{desc.name}}</div>
				<div class="desc_area">
					<span>占地：{{desc.area}}</span>
					<span class="look_more" @click="lookMore" v-show="showMore">查看更多</span>
				</div>
				<img class="close_logo" @click="showDesc = false" src="../assets/imgs/map_btn_close@2x.png" />
			</div>
			<div class="desc_content">
				<div class="desc_address">
					<img class="address_logo" src="../assets/imgs/map_icon_location@2x.png" />
					<div class="address_txt">{{desc.address}}</div>
				</div>
				<div class="content_box" v-if="desc.introduction">
					<h3 class="content_title">项目简介</h3>
					<div class="content_txt">{{desc.introduction}}</div>
				</div>
				<div class="desc_img">
					<div class="img_title">
						<h3 class="img_name">项目图片</h3>
						<img class="img_logo" @click="bigImg(0)" src="../assets/imgs/map_icon_goto@2x.png" />
					</div>
					<ul class="img_list">
						<li class="img_item" :class="{last_item: index == showImgList.length - 1}" v-for="(item, index) in showImgList" :key="index" @click="bigImg(index)">
							<img class="img_img" @click="_stop" :src="item" />
						</li>
					</ul>
				</div>
			</div>
		</div>
        <div v-if="showMark" class="mark">
			<div class="pictrueInner">
				<div class="leftBtn" @click.stop="prev">
					<img src="../assets/imgs/map_btn_left@2x.png" alt="">
				</div>
				<div class="showImg" >
					<img class="bigImg" :src="desc.imgList[num]">
				</div>
				<div class="leftBtn" @click.stop="next">
					<img src="../assets/imgs/map_btn_right@2x.png" alt="">
				</div>
			</div>
			<div class="closeDetial" @click="_toLoop">
                <img class="close_detial" src="../assets/imgs/map_btn_close@2x.png" />
                关闭查看
			</div>
		</div>
	</div>
</template>
<script>
import echarts from 'echarts';
import 'echarts/extension/bmap/bmap';
import mapConfig from '../data/map-config.json';
var index = 0;
var clearInterval;
var chinaGeoCoordMap = {
	'亦城国际中心': [116.5095011830,39.8087094898],
	'N43地块': [116.5333480000, 39.7303550000],
	'N20地块': [116.5222090000, 39.7327960000],
	'N19地块': [116.5179690000, 39.7317700000],
	'N12地块': [116.5176100000, 39.7352100000],
	'N9地块': [116.5066690000, 39.7320330000],
	'C9地块': [116.5588060000, 39.7901370000],
	'66地块': [116.5403000000, 39.7891110000],
	'A18地块': [116.5455708017, 39.8153874918]
};
var chinaDatas = [
	// [{ name: '亦城国际中心' }, { name: '亦城国际中心', value: 95 }],
	// [{ name: '亦城国际中心' }, { name: 'N43地块', value: 95 }],
    // [{ name: '亦城国际中心' }, { name: 'N20地块', value: 90 }],
    // [{ name: '亦城国际中心' }, { name: 'N19地块', value: 80 }],
    // [{ name: '亦城国际中心' }, { name: 'N12地块', value: 80 }],
    // [{ name: '亦城国际中心' }, { name: 'N9地块', value: 100 }],
    // [{ name: '亦城国际中心' }, { name: 'C9地块', value: 100 }],
    // [{ name: '亦城国际中心' }, { name: '66地块', value: 100 }],
    // [{ name: '亦城国际中心' }, { name: 'A18地块', value: 100 }]
	[{
		name: 'A18地块',
		value: 10
	}],
	[{
		name: 'C9地块',
		value:10
	}],
	[{
		name: '66地块',
		value: 10
	}],
	[{
		name: 'N43地块',
		value: 10
	}],
	[{
		name: 'N20地块',
		value: 10
	}],
	[{
		name: 'N19地块',
		value: 10
	}],
	[{
		name: 'N12地块',
		value: 10
	}],
	[{
		name: 'N9地块',
		value: 10
	}]
];
var convertData = function(data) {
	var res = [];
	for(var i = 0; i < data.length; i++) {
		var dataItem = data[i];
		var fromCoord = chinaGeoCoordMap[dataItem[0].name];
		var toCoord = [116.5095011830,39.8087094898];
		if(fromCoord && toCoord) {
			res.push([{
				coord: fromCoord,
				value: dataItem[0].value
			}, {
				coord: toCoord,
			}]);
		}
	}
	return res;
};
	export default {
		data() {
			return {
				mapStyle: {
					 'styleJson': [
					{
					'featureType': 'water',
					'elementType': 'all',
					'stylers': {
						'color': '#031628'
					}
					},
					{
					'featureType': 'land',
					'elementType': 'geometry',
					'stylers': {
						'color': '#000102'
					}
					},
					{
					'featureType': 'highway',
					'elementType': 'all',
					'stylers': {
						'visibility': 'off'
					}
					},
					{
					'featureType': 'arterial',
					'elementType': 'geometry.fill',
					'stylers': {
						'color': '#000000'
					}
					},
					{
					'featureType': 'arterial',
					'elementType': 'geometry.stroke',
					'stylers': {
						'color': '#0b3d51'
					}
					},
					{
					'featureType': 'local',
					'elementType': 'geometry',
					'stylers': {
						'color': '#000000'
					}
					},
					{
					'featureType': 'railway',
					'elementType': 'geometry.fill',
					'stylers': {
						'color': '#000000'
					}
					},
					{
					'featureType': 'railway',
					'elementType': 'geometry.stroke',
					'stylers': {
						'color': '#08304b'
					}
					},
					{
					'featureType': 'subway',
					'elementType': 'geometry',
					'stylers': {
						'lightness': -70
					}
					},
					{
					'featureType': 'building',
					'elementType': 'geometry.fill',
					'stylers': {
						'color': '#000000'
					}
					},
					{
					'featureType': 'all',
					'elementType': 'labels.text.fill',
					'stylers': {
						'color': '#857f7f'
					}
					},
					{
					'featureType': 'all',
					'elementType': 'labels.text.stroke',
					'stylers': {
						'color': '#000000'
					}
					},
					{
					'featureType': 'building',
					'elementType': 'geometry',
					'stylers': {
						'color': '#022338'
					}
					},
					{
					'featureType': 'green',
					'elementType': 'geometry',
					'stylers': {
						'color': '#062032'
					}
					},
					{
					'featureType': 'boundary',
					'elementType': 'all',
					'stylers': {
						'color': '#465b6c'
					}
					},
					{
					'featureType': 'manmade',
					'elementType': 'all',
					'stylers': {
						'color': '#022338'
					}
					},
					{
					'featureType': 'label',
					'elementType': 'all',
					'stylers': {
						'visibility': 'off'
					}
					}
					]
				},
				polygonPath: [{
						lng: 116.412732,
						lat: 39.911707
					},
					{
						lng: 116.39455,
						lat: 39.910932
					},
					{
						lng: 116.403461,
						lat: 39.921336
					}
				],
				center: {
					lng: 0,
					lat: 0
				},
				marPoints: [{
						lat: 39.7303550000,
						lng: 116.5333480000
					},
					{
						lat: 39.7327960000,
						lng: 116.5222090000
					},
					{
						lat: 39.7317700000,
						lng: 116.5179690000
					},
					{
						lat: 39.7352100000,
						lng: 116.5176100000
					},
					{
						lat: 39.7320330000,
						lng: 116.5066690000
					},
					{
						lat: 39.7901370000,
						lng: 116.5588060000
					},
					{
						lat: 39.7891110000,
						lng: 116.5403000000
					},
					{
						lat: 39.8153874918,
						lng: 116.5455708017
					}
				],
				titles: [
					"N43地块", "N20地块", "N19地块", "N12地块", "N9地块", "C9地块", "66地块", "A18地块",'亦城国际中心'
				],
				texts: [
					"北汽新能源高端智能生态工厂", "高端汽车及新能源汽车关键零配件产业园", "高端汽车及新能源汽车关键零配件产业园", "高端汽车及新能源汽车关键零配件产业园", "北京亦庄细胞治疗研究及中试基地", "北京加科思研发生产基地", "北京首药控股新药研发与产业化基地", "亦城时代广场"
				],
				showDesc: false,
				labelStyle: {
					color: '#000000',
					fontSize: '12px',
					border: '0',
					background: 'none'
				},
				offSet: {
					width: -6,
					height: 56
				},
				iConUrl: 'http://kodo.smart-zone.51yuqian.net/FkXZWH2M1Swb9obbVxZz4Eq3XRrg',
				iConSize: {
					width: 50,
					height: 50
				},
				// chart:null,
				zoom: 3,
				desc: {},
                showImgList: [],
                selectArea: '', // 选中的地块名
                showMore: false,
                //大图相关
                showMark:false,
				num:0,
				//实验代码
				chart: echarts.ECharts,
				bmap: {},
				linesSeries: [],
				scatterSeries: [],
				effectScatterSeries: [],
				mapZoom: 6,
				option:{},
				mapZb:[116.5095011830, 39.7707094898],
				trainIcon: `path://M678.4 122.9c75.1-11.3 145.5 11.7 202.6 65.8 58 54.9 85.7 127.4 77.9 203.3-7.9 75-48.8 149-117.8 214.4-19.3 18.3-71 67.5-145.1 138.2-33.3 31.8-68.9 65.7-104.6 99.8l-34.8 33.1-13.8 13.2c-16.6 15.8-43 15.8-59.6 0L363.1 775.9l-25.4-24.2c-50.9-48.5-101.9-97-152.8-145.4C116 541 75 466.9 67.1 391.8c-7.9-76 19.9-148.3 77.9-203.3 57.1-54.1 127.6-77.1 202.6-65.8 55.8 8.5 112.3 35.4 165.4 78.5 53.2-43 109.7-70 165.4-78.3z`
			}
		},
		mounted() {
			this.initMap();
		},
		destroyed() {
			this._stop();
		},
		methods: {
			_toLoop() {
				this.showMark = false;
				if(clearInterval)window.clearInterval(clearInterval);
				this.loop1();
			},
			_stop() {
				window.clearInterval(clearInterval);
			},
			ckCharts(params) {
				console.log(params);
			},
			initMap () { // echarts配置
				this.chart = echarts.init(this.$refs.mapCharts);
				
				// var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
				
				this.option = {
					// 如果需要hover显示详情
					tooltip: {
						trigger: 'item',
						backgroundColor: 'rgba(166, 200, 76, 0.82)',
						borderColor: '#FFFFCC',
						showDelay: 0,
						hideDelay: 0,
						enterable: true,
						transitionDuration: 0,
						extraCssText: 'z-index:100',
						formatter: function(params, ticket, callback) {
							//根据业务自己拓展要显示的内容
							var res = "";
							var name = params.name;
							var value = params.value[2];
							res = "<span style='color:#fff;'>" + name + "</span>"
							return res;
						}
					},
					bmap: {
						center:[116.5095011830, 39.7707094898],
						zoom: 14,
						roam: true,
						mapStyle: {
							'styleJson': mapConfig
						}
					},
					series:this.setSeries(chinaDatas)
				};
				// let clearInterval;
				this.chart.setOption(this.option);
				// 获取百度地图实例，使用百度地图自带的控件
				this.bmap = this.chart.getModel().getComponent('bmap').getBMap()
				this.bmap.setMinZoom(12) // 设置地图最小缩放比例
				this.bmap.setMaxZoom(18) // 设置地图最大缩放比例
				// this.bmap.addControl(new BMap.MapTypeControl({ mapTypes: [] })) // 不显示地图右上方的控件
				// this.bmap.addControl(new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT })) // 在左下角显示比例尺控件
				const _this = this;
				// 监听地图比例缩放， 可以根据缩放等级控制某些图标的显示
				this.bmap.addEventListener('zoomend', function () {
					_this.mapZoom = _this.bmap.getZoom()
				});
				// this.bmap.addEventListener('moving', function () {
				// 	window.clearInterval(clearInterval);
				// });
				//点击事件可获取echarts节点信息；
				this.chart.on('click', function (e) {
					// console.log(e);
					e.event.event.stopPropagation();//charts阻止事件冒泡
					_this.doShowMsg1(e.name);
				});
				// let iNow = 8;
				
				this.loop1();
				
				// loop();

				// function loop() {
				// 	console.log(1);
				// 	var index = 0;
				// 	var chinaDatas = chinaDatas.slice(0);

				// 	function __loop() {
				// 		setTimeout(function () {
				// 			// var current = chinaDatas.splice(index, 1);
				// 			var newSeries = []
				// 			for (var i = 0; i < chinaDatas.length; i++) {
				// 				newSeries.push([{ name: chinaDatas[index][1].name }, chinaDatas[i][1]]);
				// 			}
				// 			// console.log(newSeries);
				// 			_this.option.series = series(newSeries);
				// 			_this.chart.setOption(_this.option);
				// 			index++;
				// 			if (index === chinaDatas.length) {
				// 				index = 0;
				// 			}
				// 			__loop();
				// 		}, 500)
				// 	}

				// 	__loop();
				// }
			},
			updatePolygonPath(e) {
				this.polygonPath = e.target.getPath()
			},
			addPolygonPoint() {
				this.polygonPath.push({
					lng: 116.404,
					lat: 39.915
				})
			},
			setSeries(params) {
				var color = ['#a6c84c', '#00e2f7', '#fffc5f'];
				var series = [];
				let newColors = {
					'20':'#ff0000',
					'10':'#fffc5f'
				};
				[['亦城国际中心', params]].forEach(function(item, i) {
					// console.log(item)
					series.push(
						{
							coordinateSystem: 'bmap',
							type: 'lines',
							zlevel: 1,
							effect: {
								show: true,
								period:4,
								trailLength:0.7,
								// color: '#fff',
								symbolSize: 3
							},
							lineStyle: {
								normal: {
									color: color[1],
									width: 0,
									curveness: 1.2
								}
							},
							data: convertData(item[1])
						},
						{
							coordinateSystem: 'bmap',
							type: 'lines',
							zlevel: 1,
							effect: {
								show: true,
								period:4,
								trailLength:0.7,
								// color: '#fff',
								symbolSize: 3
							},
							lineStyle: {
								normal: {
									color: 'red',
									width: 0,
									curveness: -1.2
								}
							},
							data: convertData(item[1])
						},
						{
							coordinateSystem: 'bmap',
							type: 'lines',
							zlevel: 1,
							effect: {
								show: true,
								period:2,
								trailLength:0.7,
								// color: '#fff',
								symbolSize: 3
							},
							lineStyle: {
								normal: {
									color: 'blue',
									width: 0,
									curveness: 1.6
								}
							},
							data: convertData(item[1])
						},
						{
							coordinateSystem: 'bmap',
							type: 'lines',
							zlevel: 1,
							effect: {
								show: true,
								period:2,
								trailLength:0.7,
								// color: '#fff',
								symbolSize: 3
							},
							lineStyle: {
								normal: {
									color: '#ff00ff',
									width: 0,
									curveness: -1.6
								}
							},
							data: convertData(item[1])
						},
						{
							type: 'lines',
							zlevel: 2,
							coordinateSystem: 'bmap',
							symbol: ['none', 'none'],
							symbolSize: 10,
							effect: {
								show: true,
								period: 8,
								trailLength: 0,
								// symbol: planePath,
								symbol:'arrow',
								symbolSize: 15
							},
							lineStyle: {
								normal: {
									color: color[0],
									width: 1 ,
									opacity: 0.2,
									curveness: 1
								}
							},
							data: convertData(item[1])
						},
						// {
						// 	type: 'lines',
						// 	coordinateSystem: 'bmap',
						// 	zlevel: 2,
						// 	effect: {
						// 		show: true,
						// 		period: 4, //箭头指向速度，值越小速度越快
						// 		trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
						// 		symbol: 'arrow', //箭头图标
						// 		symbolSize: 5, //图标大小
						// 	},
						// 	lineStyle: {
						// 		normal: {
						// 			color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						// 					offset: 0,
						// 					color: "rgba(55,255,249,1)"
						// 				},
						// 				{
						// 					offset: 1,
						// 					color: "rgba(0,222,215,0.2)"
						// 				}
						// 			]),
						// 			width: 1, //尾迹线条宽度
						// 			opacity: 1, //尾迹线条透明度
						// 			curveness: .3 //尾迹线条曲直度
						// 		}
						// 	},
						// 	data: convertData(item[1])
						// }, 
						{
							type: 'effectScatter',
							coordinateSystem: 'bmap',
							zlevel: 2,
							rippleEffect: { //涟漪特效
								period: 10, //动画时间，值越小速度越快
								brushType: 'stroke', //波纹绘制方式 stroke, fill
								scale: 4 //波纹圆环最大限制，值越大波纹越大
							},
							label: {
								normal: {
									show: true,
									position: 'right', //显示位置
									offset: [5, 0], //偏移设置
									formatter: function(params){//圆环显示文字
										return params.data.name;
									},
									fontSize: 13
								},
								emphasis: {
									show: true
								}
							},
							symbol: 'circle',
							symbolSize: function(val) {
								return val[2]
							},
							itemStyle: {
								normal: {
									color:function (params) {
										return newColors[params.value[2]]
									}
								}
							},
							data: item[1].map(function(dataItem) {
								// console.log(dataItem);
								return {
									name: dataItem[0].name,
									value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
								};
							}),
						},
						//被攻击点
						{
							type: 'effectScatter',
							coordinateSystem: 'bmap',
							zlevel: 2,
							rippleEffect: { //涟漪特效
								period: 10, //动画时间，值越小速度越快
								brushType: 'stroke', //波纹绘制方式 stroke, fill
								scale: 4 //波纹圆环最大限制，值越大波纹越大
							},
							// showEffectOn:'emphasis',
							symbol:'image://http://kodo.smart-zone.51yuqian.net/FgggUCh0SJpknyXsbFzKJAKOVBCL',
							symbolSize: function (val) {
								return val[2];
							},
							label: {
								normal: {
									show: true,
									position: 'right',
									//offset:[5, 0],
									color: '#0f0',
									formatter: '{b}',
									textStyle: {
										color: "#0f0"
									}
								},
								// emphasis: {
								// 	show: true,
								// 	color: "#ff00ff"
								// }
							},
							itemStyle: {
								normal: {
									show:false,
									color: color[2]
								}
							},
							// symbol: 'pin',
							// symbolSize: 50,
							data: [{
								name: item[0],
								value: chinaGeoCoordMap[item[0]].concat([32]),
							}],
						}
					);
				});
				return series;
			},
			loop(_this) {
				for (var i = 0; i < chinaDatas.length; i++) {
						chinaDatas[i][0].value = 10;
					}
					chinaDatas[index][0].value = 20;
					// _this.option.bmap.center = chinaGeoCoordMap[chinaDatas[index][1].name];
					// _this.option.bmap.zoom = 17;
					// _this.option.series = 
					_this.chart.setOption({series:_this.setSeries(chinaDatas)}); //kaishi
					// _this.bmap.setCenter(chinaGeoCoordMap[chinaDatas[index][1].name]);
					// if(iNow == 0) {
					// 	iNow = 8;
					// }
					_this.doShowMsg(chinaDatas[index][0].name);
					// console.log(newSeries);
					
					// _this.chart.setOption(_this.option);
					
			},
			loop1(num) {
				if(num || num === 0) {
					index = num;
					this.loop(this);
					return;
				}
				// var chinaDatas = chinaDatas.slice(0);
				// console.log(chinaDatas)
				let _this = this;
				clearInterval = setInterval(()=>{
					this.loop(_this);
					index++;
					if (index === chinaDatas.length) {
						index = 0;
					}
				},10000)
			},
			doShowMsg1(val) {
				this.selectArea = val
				switch(val) {
					case "N43地块":
						window.clearInterval(clearInterval);
						this.loop1(3);
						this.showMore = false
						this.showDesc = true
						this.desc = {
							name: "北汽新能源高端智能生态工厂",
							area: "917.85亩（61.19公顷）",
							address: "西临红凤路，北临融兴街南侧，南临亦通北二街，东临同义路。",
							introduction: "已征面积：272亩（18.16万平方米），代征面积：	645.85（43.03万平方米）",
							imgList: ["http://kodo.smart-zone.51yuqian.net/Fq9EKWF04UVx7ySqWp4qCzw3tCzy"]
						}
						break;
					case "N12地块":
						window.clearInterval(clearInterval);
						this.loop1(6);
						this.showMore = true
						this.showDesc = true
						this.desc = {
							name: "高端汽车及新能源汽车关键零配件产业园",
							area: "101774.9平方米",
							address: "北京市南部大兴区，在南六环路以南，属亦庄经济开发区。基地紧邻亦庄新城，其北侧与亦庄新城 核心相距约6公里，距离北京大兴新机场35公里。",
							introduction: "项目为高端汽车及新能源汽车关键零配件产业园建筑项目。本项目拟在北京经济技术开发区路南区N12M1、N19M1、N20M1三个地块内新建汽车零部件制造标准厂房及相关配套设施。主要为北京奔驰及北汽新能源等整车企业配套生产零部件提供标准化厂房，为已入区和将入区的汽车零部件制造企业提供一个完善的产业发展空间，进一步提高汽车制造产业集聚效应。项目总用地264388.9平米。其中：N12M1地块，用地面积101774.9平米。N19M1地块，用地面积84655.5平米。N20M1地块，用地面积77958.5平米。本案地处园区核心，临近奔驰总装厂。厂址南临荣兴街，西临瑞和东一路，东临瑞和东三路。本案基地周边基础设施完善。",
							imgList: ["http://kodo.smart-zone.51yuqian.net/FqWbiCGIdkfti8Z9Dg2iu0pTdaqj"]
						}
						break;
					case "N19地块":
						window.clearInterval(clearInterval);
						this.loop1(5);
						this.showMore = true
						this.showDesc = true
						this.desc = {
							name: "高端汽车及新能源汽车关键零配件产业园",
							area: "84655.5平方米",
							address: "北京市南部大兴区，在南六环路以南，属亦庄经济开发区。基地紧邻亦庄新城，其北侧与亦庄新城 核心相距约6公里，距离北京大兴新机场35公里。",
							introduction: "项目为高端汽车及新能源汽车关键零配件产业园建筑项目。本项目拟在北京经济技术开发区路南区N12M1、N19M1、N20M1三个地块内新建汽车零部件制造标准厂房及相关配套设施。主要为北京奔驰及北汽新能源等整车企业配套生产零部件提供标准化厂房，为已入区和将入区的汽车零部件制造企业提供一个完善的产业发展空间，进一步提高汽车制造产业集聚效应。项目总用地264388.9平米。其中：N12M1地块，用地面积101774.9平米。N19M1地块，用地面积84655.5平米。N20M1地块，用地面积77958.5平米。本案地处园区核心，临近奔驰总装厂。厂址南临荣兴街，西临瑞和东一路，东临瑞和东三路。本案基地周边基础设施完善。",
							imgList: ["http://kodo.smart-zone.51yuqian.net/FqWbiCGIdkfti8Z9Dg2iu0pTdaqj"]
						}
						break;
					case "N20地块":
						window.clearInterval(clearInterval);
						this.loop1(4);
						this.showMore = true
						this.showDesc = true
						this.desc = {
							name: "高端汽车及新能源汽车关键零配件产业园",
							area: "77958.5平方米",
							address: "北京市南部大兴区，在南六环路以南，属亦庄经济开发区。基地紧邻亦庄新城，其北侧与亦庄新城 核心相距约6公里，距离北京大兴新机场35公里。",
							introduction: "项目为高端汽车及新能源汽车关键零配件产业园建筑项目。本项目拟在北京经济技术开发区路南区N12M1、N19M1、N20M1三个地块内新建汽车零部件制造标准厂房及相关配套设施。主要为北京奔驰及北汽新能源等整车企业配套生产零部件提供标准化厂房，为已入区和将入区的汽车零部件制造企业提供一个完善的产业发展空间，进一步提高汽车制造产业集聚效应。项目总用地264388.9平米。其中：N12M1地块，用地面积101774.9平米。N19M1地块，用地面积84655.5平米。N20M1地块，用地面积77958.5平米。本案地处园区核心，临近奔驰总装厂。厂址南临荣兴街，西临瑞和东一路，东临瑞和东三路。本案基地周边基础设施完善。",
							imgList: ["http://kodo.smart-zone.51yuqian.net/FqWbiCGIdkfti8Z9Dg2iu0pTdaqj"]
						}
						break;
					case "N9地块":
						window.clearInterval(clearInterval);
						this.loop1(7);
						this.showMore = false
						this.showDesc = true
						this.desc = {
							name: "北京亦庄细胞治疗研究及中试基地",
							area: "47662.6平方米",
							address: "位于瑞合西一路与融兴北二街交汇处",
							introduction: "",
							imgList: ["http://kodo.smart-zone.51yuqian.net/FnnPDFK7qHXs-2Emi2FdUIgkwGKD"]
						}
						break;
					case "C9地块":
						window.clearInterval(clearInterval);
						this.loop1(1);
						this.showMore = false
						this.showDesc = true
						this.desc = {
							name: "北京加科思研发生产基地",
							area: "40936.25平方米",
							address: "位于经海三路与科创十一街交汇处。基地东南西北为已建工业园区。东侧临近城市快速路，西侧临近地铁亦庄线。",
							introduction: "",
							imgList: ["http://kodo.smart-zone.51yuqian.net/FtSmGEGFHE6JDZWOyTf1WpnKrEdL", "http://kodo.smart-zone.51yuqian.net/Fkyjd1ZFs0S6NEzTGJ3gBV9c-ZxP"]
						}
						break;
					case "66地块":
						window.clearInterval(clearInterval);
						this.loop1(2);
						this.showMore = false
						this.showDesc = true
						this.desc = {
							name: "北京首药控股新药研发与产业化基地",
							area: "26114.2平方米平方米",
							address: "位于景园街与东环南路交汇处。",
							introduction: "",
							imgList: ["http://kodo.smart-zone.51yuqian.net/FjxYoq1TDh3EATyeIntyLpNRSiwm"]
						}
						break;
					case "A18地块":
						window.clearInterval(clearInterval);
						this.loop1(0);
						this.showMore = true
						this.showDesc = true
						this.desc = {
							name: "亦城时代广场",
							area: "43.54万平方米",
							address: "北京亦庄经济技术开发区，经海路与科创五街主干道交叉口。",
							introduction: "亦城时代广场由北京亦庄盛元投资开发有限公司开发，总建筑面积约43万㎡，整个项目由12栋商务甲级写字楼和7栋临街商铺组成，其中一期产品为T5、T6、T7、T8、T9五栋写字楼和B3、B4、B5、B6四栋临街商铺。 项目位于北京经济技术开发区科创五街与经海路交汇处。作为路东区“产业升级廊道”的重要组成部分，亦城时代广场以超体量的建筑集群傲立于首都科技创新中心的主阵地和京津冀一体化协同发展的桥头堡。12栋建筑定鼎城市恢弘气质形象，构筑约43万㎡国际标准写字楼聚落，必将成为亦庄标志性建筑和开发区构建高精尖产业的前沿阵地。",
							imgList: ["http://kodo.smart-zone.51yuqian.net/ljQuLfGgxoOzAJcZiNnTUezLNy5-", "http://kodo.smart-zone.51yuqian.net/ltDT28sS8gIlrM58we2LJVvOJf_5", "http://kodo.smart-zone.51yuqian.net/Fp1vilL4rjQZd_aQdF2RxClxjN8u", "http://kodo.smart-zone.51yuqian.net/FigcJhCxKxc5rC8iIZ39nzJ4MfZ8"]
						}
						break;
					default:
						this.showDesc = false;
						// this.loop1();
				}
				if(this.desc.imgList && this.desc.imgList.length > 4) {
					this.showImgList = this.desc.imgList.slice(0, 4)
				}else {
					this.showImgList = this.desc.imgList
				}
			},
			doShowMsg(val) {
				this.selectArea = val
				switch(val) {
					case "N43地块":
						this.showMore = false
						this.showDesc = true
						this.desc = {
							name: "北汽新能源高端智能生态工厂",
							area: "917.85亩（61.19公顷）",
							address: "西临红凤路，北临融兴街南侧，南临亦通北二街，东临同义路。",
							introduction: "已征面积：272亩（18.16万平方米），代征面积：	645.85（43.03万平方米）",
							imgList: ["http://kodo.smart-zone.51yuqian.net/Fq9EKWF04UVx7ySqWp4qCzw3tCzy"]
						}
						break;
					case "N12地块":
						this.showMore = true
						this.showDesc = true
						this.desc = {
							name: "高端汽车及新能源汽车关键零配件产业园",
							area: "101774.9平方米",
							address: "北京市南部大兴区，在南六环路以南，属亦庄经济开发区。基地紧邻亦庄新城，其北侧与亦庄新城 核心相距约6公里，距离北京大兴新机场35公里。",
							introduction: "项目为高端汽车及新能源汽车关键零配件产业园建筑项目。本项目拟在北京经济技术开发区路南区N12M1、N19M1、N20M1三个地块内新建汽车零部件制造标准厂房及相关配套设施。主要为北京奔驰及北汽新能源等整车企业配套生产零部件提供标准化厂房，为已入区和将入区的汽车零部件制造企业提供一个完善的产业发展空间，进一步提高汽车制造产业集聚效应。项目总用地264388.9平米。其中：N12M1地块，用地面积101774.9平米。N19M1地块，用地面积84655.5平米。N20M1地块，用地面积77958.5平米。本案地处园区核心，临近奔驰总装厂。厂址南临荣兴街，西临瑞和东一路，东临瑞和东三路。本案基地周边基础设施完善。",
							imgList: ["http://kodo.smart-zone.51yuqian.net/FqWbiCGIdkfti8Z9Dg2iu0pTdaqj"]
						}
						break;
					case "N19地块":
						this.showMore = true
						this.showDesc = true
						this.desc = {
							name: "高端汽车及新能源汽车关键零配件产业园",
							area: "84655.5平方米",
							address: "北京市南部大兴区，在南六环路以南，属亦庄经济开发区。基地紧邻亦庄新城，其北侧与亦庄新城 核心相距约6公里，距离北京大兴新机场35公里。",
							introduction: "项目为高端汽车及新能源汽车关键零配件产业园建筑项目。本项目拟在北京经济技术开发区路南区N12M1、N19M1、N20M1三个地块内新建汽车零部件制造标准厂房及相关配套设施。主要为北京奔驰及北汽新能源等整车企业配套生产零部件提供标准化厂房，为已入区和将入区的汽车零部件制造企业提供一个完善的产业发展空间，进一步提高汽车制造产业集聚效应。项目总用地264388.9平米。其中：N12M1地块，用地面积101774.9平米。N19M1地块，用地面积84655.5平米。N20M1地块，用地面积77958.5平米。本案地处园区核心，临近奔驰总装厂。厂址南临荣兴街，西临瑞和东一路，东临瑞和东三路。本案基地周边基础设施完善。",
							imgList: ["http://kodo.smart-zone.51yuqian.net/FqWbiCGIdkfti8Z9Dg2iu0pTdaqj"]
						}
						break;
					case "N20地块":
						this.showMore = true
						this.showDesc = true
						this.desc = {
							name: "高端汽车及新能源汽车关键零配件产业园",
							area: "77958.5平方米",
							address: "北京市南部大兴区，在南六环路以南，属亦庄经济开发区。基地紧邻亦庄新城，其北侧与亦庄新城 核心相距约6公里，距离北京大兴新机场35公里。",
							introduction: "项目为高端汽车及新能源汽车关键零配件产业园建筑项目。本项目拟在北京经济技术开发区路南区N12M1、N19M1、N20M1三个地块内新建汽车零部件制造标准厂房及相关配套设施。主要为北京奔驰及北汽新能源等整车企业配套生产零部件提供标准化厂房，为已入区和将入区的汽车零部件制造企业提供一个完善的产业发展空间，进一步提高汽车制造产业集聚效应。项目总用地264388.9平米。其中：N12M1地块，用地面积101774.9平米。N19M1地块，用地面积84655.5平米。N20M1地块，用地面积77958.5平米。本案地处园区核心，临近奔驰总装厂。厂址南临荣兴街，西临瑞和东一路，东临瑞和东三路。本案基地周边基础设施完善。",
							imgList: ["http://kodo.smart-zone.51yuqian.net/FqWbiCGIdkfti8Z9Dg2iu0pTdaqj"]
						}
						break;
					case "N9地块":
						this.showMore = false
						this.showDesc = true
						this.desc = {
							name: "北京亦庄细胞治疗研究及中试基地",
							area: "47662.6平方米",
							address: "位于瑞合西一路与融兴北二街交汇处",
							introduction: "",
							imgList: ["http://kodo.smart-zone.51yuqian.net/FnnPDFK7qHXs-2Emi2FdUIgkwGKD"]
						}
						break;
					case "C9地块":
						this.showMore = false
						this.showDesc = true
						this.desc = {
							name: "北京加科思研发生产基地",
							area: "40936.25平方米",
							address: "位于经海三路与科创十一街交汇处。基地东南西北为已建工业园区。东侧临近城市快速路，西侧临近地铁亦庄线。",
							introduction: "",
							imgList: ["http://kodo.smart-zone.51yuqian.net/FtSmGEGFHE6JDZWOyTf1WpnKrEdL", "http://kodo.smart-zone.51yuqian.net/Fkyjd1ZFs0S6NEzTGJ3gBV9c-ZxP"]
						}
						break;
					case "66地块":
						this.showMore = false
						this.showDesc = true
						this.desc = {
							name: "北京首药控股新药研发与产业化基地",
							area: "26114.2平方米平方米",
							address: "位于景园街与东环南路交汇处。",
							introduction: "",
							imgList: ["http://kodo.smart-zone.51yuqian.net/FjxYoq1TDh3EATyeIntyLpNRSiwm"]
						}
						break;
					case "A18地块":
						this.showMore = true
						this.showDesc = true
						this.desc = {
							name: "亦城时代广场",
							area: "43.54万平方米",
							address: "北京亦庄经济技术开发区，经海路与科创五街主干道交叉口。",
							introduction: "亦城时代广场由北京亦庄盛元投资开发有限公司开发，总建筑面积约43万㎡，整个项目由12栋商务甲级写字楼和7栋临街商铺组成，其中一期产品为T5、T6、T7、T8、T9五栋写字楼和B3、B4、B5、B6四栋临街商铺。 项目位于北京经济技术开发区科创五街与经海路交汇处。作为路东区“产业升级廊道”的重要组成部分，亦城时代广场以超体量的建筑集群傲立于首都科技创新中心的主阵地和京津冀一体化协同发展的桥头堡。12栋建筑定鼎城市恢弘气质形象，构筑约43万㎡国际标准写字楼聚落，必将成为亦庄标志性建筑和开发区构建高精尖产业的前沿阵地。",
							imgList: ["http://kodo.smart-zone.51yuqian.net/ljQuLfGgxoOzAJcZiNnTUezLNy5-", "http://kodo.smart-zone.51yuqian.net/ltDT28sS8gIlrM58we2LJVvOJf_5", "http://kodo.smart-zone.51yuqian.net/Fp1vilL4rjQZd_aQdF2RxClxjN8u", "http://kodo.smart-zone.51yuqian.net/FigcJhCxKxc5rC8iIZ39nzJ4MfZ8"]
						}
						break;
					default:
						this.showDesc = false
				}
				if(this.desc.imgList && this.desc.imgList.length > 4) {
					this.showImgList = this.desc.imgList.slice(0, 4)
				}else {
					this.showImgList = this.desc.imgList
				}
			},
			lookMore() {
				if(this.selectArea == 'N12地块' || this.selectArea == 'N19地块' || this.selectArea == 'N20地块') {
					this.$router.push({path:'carPark'})
				}else if(this.selectArea == 'A18地块') {
					this.$router.push({path:'index'})
				}
			},
			handler({
				BMap,
				map
			}) {
				console.log(BMap, map);
				this.center.lng = 116.5222064355;
				this.center.lat = 39.7320000000;
				this.zoom = 15.6;
            },
            //点击查看大图
            bigImg(index){
				this.showMark = true;
				this.num = index;
			},
			prev(){
                if(this.num == 0){
                    this.num = this.desc.imgList.length
                }
                this.num--;
                // console.log(this.num)
            },
            next(){
                if(this.num == this.desc.imgList.length-1 ){
                    this.num = -1;
                }
                this.num++;
			}
		}
	}
</script>
<style lang="scss">
	.anchorBL {
		display: none;
	}
	.maphello {
		background: #fff;
	}
	
	.map {
		width: 100vw;
		height: 100%;
		img {
			width: 25px;
		}
	}
	
	.desc_box {
		position: absolute;
		top: 30px;
		left: 18px;
		width: 184px;
		.desc_title {
			box-sizing: border-box;
			width: 100%;
			height: 48px;
			padding: 6px;
			background: #B38A56;
			color: #fff;
			.desc_name {
				margin-top: 6px;
				margin-bottom: 6px;
				margin-left: 3px;
				font-size: 8px;
			}
			.desc_area {
				display: flex;
				justify-content: space-between;
				margin-left: 3px;
				font-size: 6px;
				.look_more {
					text-decoration: underline;
				}
			}
			.close_logo {
				display: block;
				position: absolute;
				top: 6px;
				right: 6px;
				width: 10px;
				height: 10px;
			}
		}
		.desc_content {
			box-sizing: border-box;
			width: 100%;
			padding: 7.5px 10px 10px 10px;
			background: #fff;
			.desc_address {
				display: flex;
				padding-bottom: 7px;
				border-bottom: 1px solid #F2F2F2;
				.address_logo {
					display: block;
					width: 6px;
					height: 8px;
					margin-right: 4.5px;
					margin-top: 1px;
				}
				.address_txt {
					font-size: 6px;
					color: #4C4C4C;
				}
			}
			.content_box {
				padding: 10px 0 7px 0;
				border-bottom: 1px solid #F2F2F2;
				font-size: 6px;
				.content_title {
					font-weight: 600;
					color: #4C4C4C;
				}
				.content_txt {
					margin-top: 6px;
					color: #7A7A7A;
				}
			}
			.desc_img {
				.img_title {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 20px;
					margin-top: 3px;
					line-height: 20px;
					font-size: 6px;
					.img_name {
						font-weight: 600;
						color: #4C4C4C;
					}
					.img_logo {
						display: block;
						width: 10px;
						height: 10px;
					}
				}
				.img_list {
					width: 100%;
					height: 29px;
					.img_item {
						float: left;
						width: 38px;
						height: 29px;
						margin-right: 4px;
						&.last_item {
							margin-right: 0;
						}
						.img_img {
							display: block;
							width: 38px;
							height: 29px;
						}
					}
				}
			}
		}
	}

    .mark{
		position: fixed;
		left:0;
		top:0;
		bottom:0;
		right:0;
		z-index:9999;
		background:rgba(0, 0, 0, 0.5);
		.pictrueInner{
			width:444px;
			height:226px;
			position:absolute;
			left:50%;
			top:50%;
			margin-left:-222px;
			margin-top:-113px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.leftBtn{
				width:42px;
				height:42px;
				img{
					width:100%;
					height:100%;
					display: block;
				}
			}
			.showImg{
				width:300px;
				height:226px;
                box-shadow: 0 0 15px rgba(4,21,46,.8);
				img{
					width:100%;
					height:100%;
					display: block;
				}
			}
		}
		.closeDetial{
			width:76px;
			height:25px;
			line-height: 25px;
			text-align: center;
			position:absolute;
			bottom:20px;
			left:50%;
			margin-left:-38px;
			background:rgba(0,0,0,0.7);
			font-size:8px;
			font-family:PingFangSC-Semibold;
			color:rgba(255,255,255,1);
			.close_detial{
                width:10px;
                height:10px;
				margin-right:3px;
                vertical-align: middle;
			}
		}
	}
	.mapCharts {
		height:100%;
	}
</style>