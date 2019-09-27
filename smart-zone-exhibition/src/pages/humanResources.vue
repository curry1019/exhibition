<template>
    <div class="hello">
        <Head :title="'人力资源'"></Head>
        <div class="hrBox clearfix">
            <div class="hrContLeft">
                <div class="hr_msg">
                    <h3>培训信息</h3>
                    <div class="hr_msg_box">
                        <span class="hr_msg_num">{{pxTb.nowDay}}</span>
                        <span>条</span>
                        <span class="_ml">同比增长</span>
                        <span class="hr_msg_bl">{{pxTb.tongBi}}</span>
                        <i></i>
                    </div>
                </div>
                <div class="hr_msg msg_bom">
                    <h3>招聘信息</h3>
                    <div class="hr_msg_box">
                        <span class="hr_msg_num">{{zpTb.nowDay}}</span>
                        <span>条</span>
                        <span class="_ml">同比增长</span>
                        <span class="hr_msg_bl">{{zpTb.tongBi}}</span>
                        <i></i>
                    </div>
                </div>
                <div class="fbChartBox">
                    <h3>招聘与培训信息分析</h3>
                    <div class="fbChart" id="fbChart"></div>
                </div>
            </div>
            <div class="hrContCenter">
                <div class="_ctBox">
                    <h3>基本信息</h3>
                    <h4 class="_tips"><i></i>人才数据库</h4>
                    <div class="cont_num clearfix">
                        <div class="_bl">
                            <p>56</p>
                            <span>合作高校数</span>
                        </div>
                        <div class="_ye">
                            <p>128</p>
                            <span>合作企业数</span>
                        </div>
                    </div>
                    <h4 class="_tips _bom"><i></i>来源渠道</h4>
                    <ul class="jd clearfix">
                        <li class="fb_cont clearfix" v-for="(item, index) in jdObj" :key="index">
                            <div class="fb_label">{{item.name}}</div>
                            <div class="fb_bg" :class="fb_start">
                                <div class="fb_co" :title="item.num + '条 ' + item.val+ '%'" :class="item.code" :style="`width:${item.val*3}%`"></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="_cbBox">
                    <h3>员工人数<span class="_text">236/人</span></h3>
                    <ul class="bt clearfix">
                        <li>
                            <div class="btChart" id="oBtChart"></div>
                            <div class="obt_tips"></div>
                        </li>
                        <li>
                            <div class="btChart" id="tBtChart"></div>
                            <div class="obt_tips"></div>
                        </li>
                        <li>
                            <div class="btChart" id="sBtChart"></div>
                            <div class="obt_tips"></div>
                        </li>
                        <li>
                            <div class="btChart" id="fBtChart"></div>
                            <div class="obt_tips"></div>
                        </li>
                    </ul>
                </div>
                
            </div>
            <div class="hrContRight">
                <h3>发布统计</h3>
                <h4 class="_tips"><i></i>培训类型</h4>
                <div class="pxChart" id="pxChart"></div>
                <h4 class="_tips _bom"><i></i>招聘类型</h4>
                <div class="zpChart" id="zpChart"></div>
                <div class="obt_tips"></div>
                <div class="obt_img_tips"></div>
            </div>
        </div>
    </div>
</template>
<script>
import Head from '../components/header.vue';
import echarts from 'echarts';
import api from '../libs/api';
// let oBtData = {
//     legendData:['20~30岁','30~40岁','40岁以上'],
//     seriesData:[
//         {name:'20~30岁',value:120},
//         {name:'30~40岁',value:280},
//         {name:'40岁以上',value:400},
//     ]
// };
// let tBtData = {
//     legendData:['男','女'],
//     seriesData:[
//         {name:'男',value:320},
//         {name:'女',value:80}
//     ]
// };
// let sBtData = {
//     legendData:['硕士','本科','专科'],
//     seriesData:[
//         {name:'硕士',value:20},
//         {name:'本科',value:60},
//         {name:'专科',value:80},
//     ]
// };
// let fBtData = {
//     legendData:['销售部','行政部','研发部','生产部','财务部'],
//     seriesData:[
//         {name:'销售部',value:12},
//         {name:'行政部',value:8},
//         {name:'研发部',value:44},
//         {name:'生产部',value:56},
//         {name:'财务部',value:5},
//     ]
// };
// let pxData = {
//     legendData:['电子商务','医疗健康','游戏','其他'],
//     seriesData:[
//         {name:'电子商务',value:12},
//         {name:'医疗健康',value:10},
//         {name:'游戏',value:15},
//         {name:'其他',value:11}
//     ]
// };
let zpScale = 1;
let zpData = [
    {value: 214,name: '批发和零售业'}, 
    {value: 384,name: '电子商务'},
    {value: 315,name: '游戏'},
    {value: 355,name: '互联网'},
    {value: 384,name: '医疗健康'},
    {value: 254,name: '其他'}
    ];
let zpRich = {
    total: {
        color: "#ffc72b",
        fontSize: 20 * zpScale,
        align: 'left'
    },
    white: {
        color: "#fff",
        align: 'left',
        fontSize: 14 * zpScale,
        padding: [4, 0]
    },
    blue: {
        fontSize: 14 * zpScale,
        align: 'left',
        padding: [4, 0]
    },
     hr: {
        borderColor: '#2296AA',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
}
export default {
    data() {
        return {
            //进度条数据
            fb_start: '',
            pxTb:{
                nowDay: 220,
                tongBi: "56.25%"
            },
            zpTb:{
                nowDay: 3560,
                tongBi: "63.78%"
            },
            jdObj: [
                {
                    name:'现场招聘',
                    num:123,
                    val:'21.56',
                    code:'xc'
                },
                {
                    name:'内部招聘',
                    num:223,
                    val:'10.34',
                    code:'nb'
                },
                {
                    name:'网络招聘',
                    num:133,
                    val:'27.10',
                    code:'wl'
                },
                {
                    name:'员工推荐',
                    num:323,
                    val:'15.05',
                    code:'yg'
                },
                {
                    name:'校园招聘',
                    num:163,
                    val:'33.33',
                    code:'xy'
                },
                {
                    name:'人才介绍机构',
                    num:433,
                    val:'8.50',
                    code:'rc'
                },
                {
                    name:'传统媒体广告',
                    num:123,
                    val:'6.60',
                    code:'ct'
                },
                {
                    name:'其他渠道',
                    num:83,
                    val:'32.80',
                    code:'qt'
                }
            ],
            zpData: [
                {name: "电子商务", value: 32},
                {name: "网络游戏", value: 12},
                {name: "医疗健康", value: 23},
                {name: '批发零售', value: 42},
                {name: "互联网", value: 19},
                {name: "房屋租赁", value: 14}
            ],
            pxData: {
                legendData:["电子商务","网络游戏","医疗健康","批发零售","互联网","房屋租赁","品牌家装"],
                seriesData:[
                    {name: "电子商务", value: 22},
                    {name: "网络游戏", value: 32},
                    {name: "医疗健康", value: 23},
                    {name: '批发零售', value: 22},
                    {name: "互联网", value: 19},
                    {name: "房屋租赁", value: 23}
                ]
            },
            fBtData: {
                legendData:['人事部','销售部','产品部','技术部','采购部'],
                seriesData:[
                    {name:'人事部',value: 18},
                    {name:'销售部',value: 32},
                    {name:'产品部',value: 16},
                    {name:'技术部',value: 119},
                    {name:'采购部',value: 12}
                ]
            },
            sBtData: {
                legendData:['初中','高中','大专','本科','硕士及以上'],
                seriesData:[
                    {name:'初中',value: 18},
                    {name:'高中',value: 42},
                    {name:'大专',value: 346},
                    {name:'本科',value: 59},
                    {name:'硕士及以上',value: 87}
                ]
            },
            tBtData: {
                legendData:['男','女'],
                seriesData:[
                    {name:'男',value: 362},
                    {name:'女',value: 256}
                ]
            },
            oBtData: {
                legendData:['20-30岁','30-40岁','40-50岁','50-60岁','60以上'],
                seriesData:[
                    {name:'20-30岁',value: 48},
                    {name:'30-40岁',value: 132},
                    {name:'40-50岁',value: 146},
                    {name:'50-60岁',value: 59},
                    {name:'60以上',value: 7}
                ]
            },
            fbData:{
                pxFb:[123,145,165,112,232,114,189],
                zpFb:[89,68,43,123,156,56,101],
                legendData:['周一','周二','周三','周四','周五','周六','周日']
            },
        }
    },
    methods: {
        echartsInit(){
            //center charts
            let oBtChart = this.$echarts.init(document.getElementById('oBtChart'));
            oBtChart.setOption(this.oBtOption());
            let tBtChart = this.$echarts.init(document.getElementById('tBtChart'));
            tBtChart.setOption(this.tBtOption());
            let sBtChart = this.$echarts.init(document.getElementById('sBtChart'));
            sBtChart.setOption(this.sBtOption());
            let fBtChart = this.$echarts.init(document.getElementById('fBtChart'));
            fBtChart.setOption(this.fBtOption());
            let pxChart = this.$echarts.init(document.getElementById('pxChart'));
            pxChart.setOption(this.pxOption());
            let zpChart = this.$echarts.init(document.getElementById('zpChart'));
            zpChart.setOption(this.zpOption());
            let fbChart = this.$echarts.init(document.getElementById('fbChart'));
            fbChart.setOption(this.fbOption());
        },
        //年龄
        oBtOption() {
            return {
                title : {
                    text: '年龄段',
                     textStyle: {
                        color: '#fff',
                        fontSize: 16,
                        // align: 'center'
                    },
                    x: 'center',
                    y: 'center',
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{b} : {c}人 ({d}%)"
                },
                legend: {
                    type: 'scroll',
                    orient: 'vertical',
                    right: 0,
                    top: 20,
                    bottom: 20,
                    show:true,
                    itemHeight:8,
                    itemWidth:12,
                    textStyle: {
                        fontSize: 10,
                        color: '#f2f2f2'
                    },
                    data: this.oBtData.legendData,
                },
                color : ['#C22950','#319DE4','#F6B221','#0058C4','#845AED'],
                series : [
                    {
                        type: 'pie',
                        hoverOffset: 4,
                        startAngle: 190,
                        radius: ['50%', '70%'],
                        center: ['50%', '50%'],
                        tooltip: {
                            show: true
                        },
                        label: {
                            normal: {
                                formatter: '{c}人 ({d}%)'
                            }
                        },
                        data: this.oBtData.seriesData,
                        itemStyle: {
                            normal: {
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                    }
                ]
            }
        },
        //性别
        tBtOption() {
            return {
                title : {
                    text: '性别',
                     textStyle: {
                        color: '#fff',
                        fontSize: 16,
                        // align: 'center'
                    },
                    x: 'center',
                    y: 'center',
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{b} : {c}人 ({d}%)"
                },
                legend: {
                    type: 'scroll',
                    orient: 'vertical',
                    right: 0,
                    top: 20,
                    bottom: 20,
                    show:true,
                    itemHeight:8,
                    itemWidth:12,
                    textStyle: {
                        fontSize: 10,
                        color: '#f2f2f2'
                    },
                    data: this.tBtData.legendData,
                },
                color : ['#C22950','#319DE4','#F6B221','#0058C4','#845AED'],
                series : [
                    {
                        type: 'pie',
                        hoverOffset: 4,
                        startAngle: 190,
                        radius: ['50%', '70%'],
                        center: ['50%', '50%'],
                        tooltip: {
                            show: true
                        },
                        label: {
                            normal: {
                                formatter: '{c}人 ({d}%)'
                            }
                        },
                        data: this.tBtData.seriesData,
                        itemStyle: {
                            normal: {
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                    }
                ]
            }
        },
        //学历
        sBtOption() {
            return {
                title : {
                    text: '学历',
                     textStyle: {
                        color: '#fff',
                        fontSize: 16,
                        // align: 'center'
                    },
                    x: 'center',
                    y: 'center',
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{b} : {c}人 ({d}%)"
                },
                legend: {
                    type: 'scroll',
                    orient: 'vertical',
                    right: 0,
                    top: 20,
                    bottom: 20,
                    show:true,
                    itemHeight:8,
                    itemWidth:12,
                    textStyle: {
                        fontSize: 10,
                        color: '#f2f2f2'
                    },
                    data: this.sBtData.legendData,
                },
                color : ['#C22950','#319DE4','#F6B221','#0058C4','#845AED'],
                series : [
                    {
                        type: 'pie',
                        hoverOffset: 4,
                        startAngle: 100,
                        radius: ['50%', '70%'],
                        center: ['50%', '50%'],
                        tooltip: {
                            show: true
                        },
                        label: {
                            normal: {
                                formatter: '{c}人 ({d}%)'
                            }
                        },
                        data: this.sBtData.seriesData,
                        itemStyle: {
                            normal: {
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                    }
                ]
            }
        },
        //部门
        fBtOption() {
            return {
                title : {
                    text: '部门',
                     textStyle: {
                        color: '#fff',
                        fontSize: 16,
                        // align: 'center'
                    },
                    x: 'center',
                    y: 'center',
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{b} : {c}人 ({d}%)"
                },
                legend: {
                    type: 'scroll',
                    orient: 'vertical',
                    right: 0,
                    top: 20,
                    bottom: 20,
                    show:true,
                    itemHeight:8,
                    itemWidth:12,
                    textStyle: {
                        fontSize: 10,
                        color: '#f2f2f2'
                    },
                    data: this.fBtData.legendData,
                },
                color : ['#C22950','#319DE4','#F6B221','#0058C4','#845AED'],
                series : [
                    {
                        type: 'pie',
                        startAngle: 190,
                        hoverOffset: 4,
                        radius: ['50%', '70%'],
                        center: ['50%', '50%'],
                        tooltip: {
                            show: true
                        },
                        label: {
                            normal: {
                                formatter: '{c}人 ({d}%)'
                            }
                        },
                        data: this.fBtData.seriesData,
                        itemStyle: {
                            normal: {
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                    }
                ]
            }
        },
        //培训信息
        pxOption() {
            return {
                title : {
                    show:false
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{b} : {c}条 ({d}%)"
                },
                legend: {
                    type: 'scroll',
                    orient: 'vertical',
                    right: 10,
                    top: 20,
                    bottom: 20,
                    show:false,
                    data: this.pxData.legendData,
                },
                color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
                series : [
                    {
                        type: 'pie',
                        startAngle: 60,
                         hoverOffset: 4,
                        radius: '60%',
                        center: ['48%', '50%'],
                        tooltip: {
                            show: true
                        },
                        label: {
                            normal: {
                                formatter: '{b|{b}}\n{b|{d}%}',
                                rich: {
                                    b: {
                                        align:'right',
                                        fontSize: 14,
                                        lineHeight: 16
                                    }
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        // data: btData.seriesData.sort(function (a, b) { return a.value - b.value; }),
                        data: this.pxData.seriesData,
                        roseType: 'radius'
                    }
                ]
            }
        },
        //招聘信息
        zpOption() {
            return {
                title: {
                    text:'招聘总数',
                    left:'center',
                    top:'52%',
                    textStyle:{
                        color:'#fff',
                        fontSize:18*zpScale,
                        align:'center'
                    }
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{b} : {c}条 ({d}%)"
                },
                legend: {
                    selectedMode:false,
                    formatter: function(name) {
                        var total = 0; //各科正确率总和
                        var averagePercent; //综合正确率
                        zpData.forEach(function(value, index, array) {
                            total += value.value;
                        });
                        return '{total|' + total + '条}';
                    },
                    data: [this.zpData[0].name],
                    // data: ['高等教育学'],
                    // itemGap: 50,
                    left: 'center',
                    top: 'center',
                    icon: 'none',
                    align:'center',
                    textStyle: {
                        color: "#fff",
                        fontSize: 16 * zpScale,
                        rich: zpRich
                    },
                },
                series: [{
                    type: 'pie',
                    hoverOffset: 4,
                    radius: ['40%', '60%'],
                    tooltip:{
                        show:true
                    },
                    color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
                    label: {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                var total = 0; //考生总数量
                                var percent = 0; //考生占比
                                zpData.forEach(function(value, index, array) {
                                    total += value.value;
                                });
                                percent = ((params.value / total) * 100).toFixed(1);
                                return '{white|' + params.name + '}\n{hr|}\n{blue|' + params.value + '条}  {blue|' + percent + '%}';
                            },
                            rich: zpRich
                        },
                    },
                    data: this.zpData
                }]
            }
        },
        //信息发布统计
        fbOption() {
            return {
                tooltip: { //提示框组件
                    trigger: 'axis',
                    formatter: '{b}<br />{a0}: {c0}条<br />{a1}: {c1}条',
                    axisPointer: {
                        type: 'shadow',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    },
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    }
                },
                grid: {
                    left: '1%',
                    right: '4%',
                    bottom: '6%',
                    top:30,
                    padding:'0 0 10 0',
                    containLabel: true,
                },
                legend: {//图例组件，颜色和名字
                    right:10,
                    top:0,
                    itemGap: 16,
                    itemWidth: 18,
                    itemHeight: 10,
                    data:[{
                        name:'招聘信息',
                        //icon:'image://../wwwroot/js/url2.png', //路径
                    },
                    {
                        name:'培训信息',
                    }],
                    textStyle: {
                        color: '#a8aab0',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,            
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,//坐标轴两边留白
                        data: this.fbData.legendData,
                        axisLabel: { //坐标轴刻度标签的相关设置。
                            interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                            margin:15,
                            textStyle: {
                                color: '#fff',
                                fontStyle: 'normal',
                                fontFamily: '微软雅黑',
                                fontSize: 12,
                            }
                        },
                        axisTick:{//坐标轴刻度相关设置。
                            show: false,
                        },
                        axisLine:{//坐标轴轴线相关设置
                            lineStyle:{
                                color:'#fff',
                                opacity:0.2
                            }
                        },
                        splitLine: { //坐标轴在 grid 区域中的分隔线。
                            show: false,
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        splitNumber: 5,
                        axisLabel: {
                            textStyle: {
                                color: '#a8aab0',
                                fontStyle: 'normal',
                                fontFamily: '微软雅黑',
                                fontSize: 12,
                            }
                        },
                        axisLine:{
                            show: true,
                            lineStyle: {
                                color: ['#fff'],
                                opacity:1
                            }
                        },
                        axisTick:{
                            show: true,
                            lineStyle: {
                                color: ['#fff'],
                                opacity:1
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: ['#fff'],
                                opacity:0.06
                            }
                        }

                    }
                ],
                series : [
                    {
                        name:'招聘信息',
                        type:'bar',
                        data:this.fbData.zpFb,
                        barWidth: 12,
                        barGap:0,//柱间距离
                        label: {//图形上的文本标签
                            normal: {
                            show: false,
                            position: 'top',
                            textStyle: {
                                color: '#a8aab0',
                                fontStyle: 'normal',
                                fontFamily: '微软雅黑',
                                fontSize: 12,   
                            },
                            },
                        },
                        itemStyle: {//图形样式
                            normal: {
                                barBorderRadius: [5, 5, 0, 0],
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 1, color: 'rgba(49, 157, 228, 0.6)'
                                },{
                                    offset: 0.9, color: 'rgba(49, 157, 228,0.7)'
                                },{
                                    offset: 0.31, color: 'rgba(49, 157, 228, 0.8)'
                                },{
                                    offset: 0.15, color: 'rgba(49, 157, 228, 0.9)'
                                }, {
                                    offset: 0, color: 'rgba(49, 157, 228, 1)'
                                }], false),
                            },
                        },
                    },
                    {
                        name:'培训信息',
                        type:'bar',
                        data:this.fbData.pxFb,
                        barWidth: 12,
                        barGap:0.4,//柱间距离
                        label: {//图形上的文本标签
                            normal: {
                            show: false,
                            position: 'top',
                            textStyle: {
                                color: '#a8aab0',
                                fontStyle: 'normal',
                                fontFamily: '微软雅黑',
                                fontSize: 12,   
                            },
                            },
                        },
                        itemStyle: {//图形样式
                            normal: {
                                barBorderRadius: [5, 5, 0, 0],
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 1, color: 'rgba(50, 233, 184, 0.2)'
                                },{
                                    offset: 0.9, color: 'rgba(50, 233, 184, 0.4)'
                                },{
                                    offset: 0.25, color: 'rgba(50, 233, 184, 0.6)'
                                }, {
                                    offset: 0, color: 'rgba(50, 233, 184, 0.7)'
                                }], false),
                            },
                        },
                    }
                ]
            }
        },
        getData() {
            // let https = [
            //     {url:api.getHumanRec},
            //     {url:api.getHumanTra},
            //     {url:api.personCount}
            // ]
            // this.all(https).then(this.$http.spread((zpRes,pxRes,ygRes)=>{
                // let resZpData = zpRes.data.data;
                // let resPxData = pxRes.data.data;
                // let resYgData = ygRes.data.data;
                //年龄
                // this.oBtData.seriesData = resYgData.personAge;
                // console.log(this.oBtData);
                // this.oBtData.legendData = [];
                // this.oBtData.seriesData.forEach((ele)=>{
                //     this.oBtData.legendData.push(ele.name);
                // })
                // //性别
                // this.tBtData.seriesData = resYgData.personGender;
                // this.tBtData.legendData = [];
                // this.tBtData.seriesData.forEach((ele)=>{
                //     this.tBtData.legendData.push(ele.name);
                // })
                // //学历
                // this.sBtData.seriesData = resYgData.personEducation;
                // this.sBtData.legendData = [];
                // this.sBtData.seriesData.forEach((ele)=>{
                //     this.sBtData.legendData.push(ele.name);
                // })
                // //部门
                // this.fBtData.seriesData = resYgData.personDept;
                // this.fBtData.legendData = [];
                // this.fBtData.seriesData.forEach((ele)=>{
                //     this.fBtData.legendData.push(ele.name);
                // })
                // //招聘信息
                // this.zpData = resZpData.industry;
                // zpData = resZpData.industry;
                // //培训信息
                // this.pxData.seriesData = resPxData.catogery;
                // this.pxData.legendData = [];
                // this.pxData.seriesData.forEach((ele)=>{
                //     this.pxData.legendData.push(ele.name);
                // })
                // //信息发布统计
                // this.fbData.pxFb = [];
                // this.fbData.zpFb = [];
                // this.fbData.legendData = [];
                // resZpData.week.forEach(ele=>{
                //     this.fbData.legendData.push(ele.time);
                //     this.fbData.zpFb.push(ele.count)
                // })
                // resPxData.week.forEach(ele=>{
                //     this.fbData.pxFb.push(ele.count)
                // })
                // //同比增长率
                // this.pxTb = resPxData.tongbi;
                // this.zpTb = resZpData.tongbi;
                this.echartsInit();
            // }))
        }
    },
    components:{
        Head
    },
    mounted(){
        this.getData();
        setTimeout(()=>{
            this.fb_start = 'fb_start';
        },100)
    }
}
</script>
<style lang="scss" scoped>
    .hrBox {
        width: 960px;
        position: absolute;
        top: 50px;
        padding: 0 20px;
        &>div {
            float: left;
        }
        .hrContLeft {
            width: 235px;
            height: 465px;
            .fbChartBox {
                width: 235px;
                height: 260px;
                background: url('../assets/imgs/hr1.png')no-repeat;
                background-size: 100% 100%;
                position: relative;
                .fbChart {
                    width: 222px;
                    height: 220px;
                    margin: 6px auto 0;
                }
                h3 {
                    color: #00E5FF;
                    font-size: 12px;
                    padding: 11px 0 0 14px;
                }
            }
            .hr_msg {
                height: 102px;
                background: url('../assets/imgs/hr4.png')no-repeat;
                background-size: 100% 100%;
                h3 {
                    color: #00E5FF;
                    font-size: 12px;
                    padding: 11px 0 0 14px;
                }
                .hr_msg_box {
                    padding-top: 26px;
                    padding-left: 16px;
                    position: relative;
                    span {
                        color: #6A88E4;
                        font-size: 10px; 
                    }
                    .hr_msg_num {
                        color: #B62C57;
                        font-size: 26px;
                        font-weight: 600;
                    }
                    .hr_msg_bl {
                        color: #B62C57;
                    }
                    ._ml {
                        margin-left: 12px;
                    }
                    i {
                        width: 16px;
                        height: 16px;
                        position: absolute;
                        top: 41px;
                        right: 13px;
                        background: url('../assets/imgs/hrup1.png')no-repeat;
                        background-size: 100% 100%;
                    }
                }
                &.msg_bom {
                    .hr_msg_num {
                        color: #FF9745;
                    }
                    .hr_msg_bl {
                        color: #FF9745;
                    }
                    i {
                        background: url('../assets/imgs/hrup2.png')no-repeat;
                    }
                }
            }
        }
        .hrContCenter {
            width: 430px;
            height: 465px;
            margin-left: 8px;
            position: relative;
            ._ctBox {
                padding-bottom: 20px;
                background: url('../assets/imgs/hrt.png')no-repeat;
                background-size: 100% 100%;
            }
            ._cbBox {
                padding-bottom: 20px;
                background: url('../assets/imgs/hrb.png')no-repeat;
                background-size: 100% 100%;
            }
            ul.jd {
                width: 380px;
                margin: 40px auto 0;
                li {
                    float: left;
                    width: 50%;
                }
            }
            ul.bt {
                width: 400px;
                height: 170px;
                margin: 0 auto;
                li {
                    float: left;
                    width: 50%;
                    height: 85px;
                    position: relative;
                    .btChart {
                        width: 100%;
                        height: 85px;
                        position: absolute;
                        top: 6px;
                        left: 0;
                        z-index: 1;
                    }
                    .obt_tips {
                        position: absolute;
                        top: 30.5px;
                        left: 82.19px;
                        z-index: 0;
                        width: 36px;
                        height: 36px;
                        border-radius: 50%;
                        background-color: rgba(3, 79, 172,0.2);
                    }
                }
            }
            h3 {
                color: #00E5FF;
                font-size: 12px;
                padding: 13px 0 0 20px;
                ._text {
                    color: #fff;
                    font-size: 9px;
                    margin-left: 10px;
                }
            }
            h4 {
                position: absolute;
                top: 45px;
                left: 23px;
                &._bom {
                    top: 122px;
                }
            }
            .cont_num {
                margin: 32px auto 0;
                width: 246px;
                &>div {
                    float: left;
                    width: 95px;
                    height: 48px;
                    color: #fff;
                    text-align: center;
                    padding-top: 5px;
                    p {
                        font-size: 16px;
                        line-height: normal;
                    }
                    span {
                        font-size: 11px;
                    }
                }
                ._bl {
                    background: url('../assets/imgs/hrr.png')no-repeat;
                    background-size: 100% 100%;
                }
                ._ye {
                    margin-left: 54px;
                    background: url('../assets/imgs/hrl.png')no-repeat;
                    background-size: 100% 100%;
                }
            }
        }
        .hrContRight {
            float: right;
            width: 240px;
            height: 465px;
            background: url('../assets/imgs/hr3.png')no-repeat;
            background-size: 100% 100%;
            position: relative;
            .pxChart {
                width: 220px;
                height: 160px;
                margin: 20px auto 0;
            }
            .zpChart {
                width: 220px;
                height: 180px;
                margin: 30px auto 0;
                position: relative;
                z-index: 1;
            }
            h3 {
                color: #00E5FF;
                font-size: 12px;
                padding: 15px 0 0 20px;
            }
            h4 {
                top: 17px;
                left: 23px;
                &.bom {
                    top: 200px;
                }
            }
            .obt_tips {
                position: absolute;
                bottom: 74.5px;
                left: 88.19px;
                z-index: 0;
                width: 64px;
                height: 64px;
                border-radius: 50%;
                background-color: rgba(3, 79, 172,0.6);
            }
            .obt_img_tips {
                position: absolute;
                bottom: 41.5px;
                left: 55.19px;
                z-index: 0;
                width: 130px;
                height: 130px;
                border-radius: 50%;
                background: url('../assets/imgs/hrq.png')no-repeat;
                background-size: 100% 100%;
            }
        }
    }
    .hr_peo_num {
        width: 140px;
        height: 35px;
        background: url('../assets/imgs/hr5.png')no-repeat;
        background-size: 100% 100%;
        margin: 20px auto 0;
        font-size: 9px;
        color: #fff;
        padding-left: 18px;
        padding-top: 11px;
    }
    .fb_cont {
        height: 20px;
        padding-top: 6px;
        &>div {
            float: left;
        }
        .fb_label {
            width: 60px;
            color: #fff;
            font-size: 7px;
            position: relative;
            top: -0.1vw;
            text-align: right;
        }
        .fb_bg {
            float: left;
            margin-left: 16px;
            width: 0;
            height: 8px;
            position: relative;
            transition: 1s all ease;
            overflow: hidden;
            &.fb_start {
                width: 100px;
            }
            .fb_co {
                float: left;
                height: 8px;
                &.xc,&.nb {
                    background: linear-gradient(to right,#468CFF,#91E3F7);
                }
                &.wl,&.yg {
                    background: linear-gradient(to right,#326DCE,#619DFF);
                }
                &.xy,&.rc {
                    background: linear-gradient(to right,#7D6CFF,#ABA0FF);
                }
                &.ct {
                    background: linear-gradient(to right,#F7707A,#FFAFB5);
                }
                &.qt {
                    background: linear-gradient(to right,#F49345,#FFF480);
                }
            }
        }
    }
    h4._tips {
        padding-left: 20px;
        padding-top: 2px;
        color: #fff;
        font-size: 9px;
        position: relative;
        i {
            width: 18px;
            height: 18px;
            position: absolute;
            left: 0;
            top: 0;
            background: url('../assets/imgs/hr_tips.png')no-repeat;
            background-size: 100% 100%;
        }
    }
</style>