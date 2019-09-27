<template>
    <div class="hello">
		<Head :title="title" :isShow = false></Head>
		<div class="contBox">
            <!-- 通知信息 -->
			<div class="noticeInfo">
                <div class="noticeTop">
                    <p class="thisP">空气质量</p>
                    <div class="kqzl">
                        <dl>
                            <dt>
                                <img src="../assets/imgs/xxjl_icon_kqzl@2x.png" alt="">
                                <span>{{air}}</span>
                            </dt>
                            <dd>
                                <span v-if="air_level == '优'" style="background:#84c731">{{air_level}}</span>
                                <span v-if="air_level == '良'" style="background:#d4d430">{{air_level}}</span>
                                <span v-if="air_level == '轻度污染'" style="background:#d49130">{{air_level}}</span>
                                <span v-if="air_level == '中度污染'" style="background:#d44b30">{{air_level}}</span>
                                <span v-if="air_level == '重度污染'" style="background:#973c6b">{{air_level}}</span>
                                <span v-if="air_level == '严重污染'" style="background:#993737">{{air_level}}</span>
                                <p>{{air_tips}}</p>
                            </dd>
                        </dl>
                    </div>
                    <div class="topMiddle">
                        <h5>未来空气质量报告</h5>
                        <ul>
                            <li v-for="(item,index) in futureAirArr" :key="index">
                                <span>{{item.aqiTitle}}</span>
                                <b v-if="item.aqiValue == '优'" style="background:#84c731">{{item.aqiValue}}</b>
                                <b v-if="item.aqiValue == '良'" style="background:#d4d430">{{item.aqiValue}}</b>
                                <b v-if="item.aqiValue == '轻度污染'" style="background:#d49130">{{item.aqiValue}}</b>
                                <b v-if="item.aqiValue == '中度污染'" style="background:#d44b30">{{item.aqiValue}}</b>
                                <b v-if="item.aqiValue == '重度污染'" style="background:#973c6b">{{item.aqiValue}}</b>
                                <b v-if="item.aqiValue == '严重污染'" style="background:#993737">{{item.aqiValue}}</b>
                            </li>
                        </ul>
                    </div>
                    <div class="nowDate">
                        <p>今日限号</p>
                        <div class="innerBox">
                            <div class="wrapper">
                                <b>{{number1[0]}}</b>
                                <span>V</span>
                                <b>{{number1[1]}}</b>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="noticeBtm">
                    <!-- <div class="btmInner"> -->
                        <!-- <ol :class="{marquee_top:animate}">
                            <li v-for="(value,key) in opinionData" :key="key" :class="{active:!key}">
                                {{value}}
                            </li>
                            <p class="mark"></p>
                        </ol> -->
                        <!-- <ol :class="opinionData.length>5?'active1':''">
                            <li v-for="(value,key) in opinionData" :key="key">
                                {{value}}
                            </li>
                        </ol> -->
                    <!-- </div> -->
                    <div class="marquee">         
                        <div class="marquee_box">                
                            <ul class="marquee_list" :class="{marquee_top:animate}" @webkitTransitionEnd="watchAni">                        
                                <li v-for="(item,index) in opinionData" :key="index">{{item}}</li>                
                            </ul>   
                        </div>
                    </div>
                </div>
            </div>
            <!-- 基本信息 -->
            <div class="infoInner">
                <div class="infoInnerTop">
                    <ul>
                        <li>
                            <div class="infoT">
                                <img src="../assets/imgs/xxjl_icon_yuanquan@2x.png" alt="">
                                <span>{{livecount}}</span>
                            </div>
                            <b>大咖秀信息发布数量(条)</b>
                        </li>
                        <li>
                            <div class="infoT">
                                <img src="../assets/imgs/xxjl_icon_yuanquan@2x.png" alt="">
                                <span>{{quantity}}</span>
                            </div>
                            <b>合作商家数量(条)</b>
                        </li>
                        <li>
                            <div class="infoT">
                                <img src="../assets/imgs/xxjl_icon_yuanquan@2x.png" alt="">
                                <span>{{linecount}}</span>
                            </div>
                            <b>时代生活圈发布数量(条)</b>
                        </li>
                    </ul>
                </div>
                <div class="infoInnerBtm" id="infoInnerBtm"></div>
            </div>
            <!-- 合作商家类型 -->
            <div class="cooperativeBusiness">
                 <div id="cakeLike" class="cakeLike">
                 </div>
                 <div class="discountInfo">
                    <h4>优惠信息</h4>
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item,index) in activity" :key="index">
                                <h3>{{item.name}}</h3>
                                <li>
                                    <b>活动时间：</b>
                                    <p>{{item.activityBegintime}}至{{item.activityEndtime}}</p>
                                </li>
                                <li>
                                    <b>活动地点：</b>
                                    <p>{{item.address}}</p>
                                </li>
                                <li>
                                    <b>活动内容：</b>
                                    <p>{{item.preferentialContent}}</p>
                                </li>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
    var that;
    let timer;
    import Head from '../components/header.vue';
    import api from '../libs/api'
    import Swiper from "swiper"
    const padDate = function (value) {
        return value < 10 ? `0${value}` : value;
    };
    export default {
        data(){
            return {
                title: "信息交流",
                //空气质量
                air:"",
                air_level:"",
                air_tips:"",          
                number1:[],           //今日限号
                futureAirArr:[],      //未来空气质量报告
                animate:false,
                key:0,
                //基本信息
                livecount:"78",        //大咖秀信息发布数量
                linecount:"246",       //时代生活圈布数量
                opinionData:["张师傅的清洁工作做的不错,发现有垃圾及时清理","现在绿化的草坪挺多的，能否多种些梅花","保安人员非常敬业，而且服务热情。","物管的保洁人员工作做得是蛮细的","这里的物管服务怎么说都是我看到最具性价比的","亦城时代广场APP很智能方便，解决问题很快；"],     //意见反馈

                //业务使用情况  
                umbrellaUse:[7,0,32,37,42,27,33,52,23,41,15,32],     //雨伞
                parkingUse:[5,10,21,10,14,22,13,21,20,41,11,37],      //车位
                elevatorUse:[20,2,12,31,12,20,11,22,14,25,15,32],     //货梯
                advertUse:[30,5,11,33,16,22,44,17,24,11,22,16],       //广告
                cartUse:[0,11,30,39,14,11,22,18,24,17,40,32],         //推车

                quantity:"135",        //合作商家数量
                activity:[{
                        name:"拾味馆",
                        activityBegintime: "2019-08-01",
                        activityEndtime: "2020-02-28",
                        address: "亦城时代广场",
                        preferentialContent: "开业当天进店消费即送8.8折会员卡当日消费满15元，+2元得乐意杯一个（数量有限，送完为止）",
                    },
                    {
                        name:"税邦会计有限公司",
                        activityBegintime: "2019-07-01",
                        activityEndtime: "2020-03-31",
                        address: "亦城时代广场",
                        preferentialContent: "代理记账限时8.8折，最高直降720元（仅限新客户参与）",
                    },
                    {
                        name:"北京法律事务所",
                        activityBegintime: "2019-06-01",
                        activityEndtime: "2020-04-30",
                        address: "亦城时代广场",
                        preferentialContent: "首次咨询，律师将提供免费一对一咨询。VIP专享8折优惠",
                    }],        //优惠信息
                statistics:[{name: "装修服务", value: 2}
                            ,{name: "商务服务", value: 1}
                            ,{name: "高端酒店", value: 2}
                            ,{name: "商务宴请", value: 3}
                            ,{name: "品牌设计", value: 2}
                            ,{name: "IT/软件服务", value: 1}
                            ,{name: "工程服务", value: 3}
                            ,{name: "代办服务", value: 1}],      //合作商家扇形图
                nameArr:["装修服务","商务服务","高端酒店","商务宴请","品牌设计","IT/软件服务","工程服务","代办服务"]
            }
        },
        components:{
            Head,
            Swiper,
        },
        methods:{
            cakeLike() {
				let myChart = that.$echarts.init(document.getElementById('cakeLike'));
				myChart.setOption({
                    title: {
						text: '合作商家',
						textStyle: {
							fontSize: 18,
							fontWeight: 600,
							color: '#fff'
						},
						left: 'center',
						top: '27%'
					},
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b}: {c}个 ({d}%)",
                    },
                    legend: {
                        orient: 'vertical',
                        width:'40%',
                        height:'100',
                        left:'30%',
                        bottom:'10%',
                        itemGap:10,
                        textStyle:{
                            color:'#fff'
                        },
                        data:that.nameArr
                    },
                    color: ['#00FFF6', '#9141FF', '#FF9000','#C499FF','#FF4169','#00FFA2','#00BAFF','#F6FF00','#B406FF'],
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['30%', '50%'],
                            center: ['50%', '30%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: false,
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
                            data:that.statistics
                        }
                    ]
                })
            },
            infoInnerBtm() {
				let myChart = that.$echarts.init(document.getElementById('infoInnerBtm'));
				myChart.setOption({
                    color : ['#00FFF6', '#9141FF', '#FF9000','#C499FF','#FF4169','#00FFA2','#00BAFF','#F6FF00','#B406FF'],
                    title: {
                        show:false,
                        text: '折线图堆叠'
                    },
                    tooltip: {
                        trigger: 'axis',
                        formatter:function(params)  {  
                            var relVal = params[0].name;  
                            for (var i = 0, l = params.length; i < l; i++) {  
                                    relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"条";  
                                }  
                            return relVal;  
                        } 
                    },
                    legend: {
                        data:['广告位', '推车','雨伞','货梯','停车位'],
                        textStyle:{
							color:'#4EC7FF'
						}
                    },
                    grid: {
                        left: '10%',
                        right: '10%',
                        bottom: '5%',
                        containLabel: true
                    },
                    toolbox: {
                        // feature: {
                        //     saveAsImage: {}
                        // }
                    },
                    xAxis: {
                        name: '（月份）',
                        type: 'category',
                        axisLine: {
                            lineStyle: {
                                color: '#4EC7FF'
                            }
                        },
                        boundaryGap: false,
                        data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
                    },
                    yAxis: {
                        name: '（条）',
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#4EC7FF'
                            }
                        },
                        nameTextStyle: {
                            color: "#4EC7FF",
                            fontSize: '14px'
                        },
                        splitLine: {
                            lineStyle: {
                                color: "#4EC7FF"
                            }
                        }
                    },
                    series: [
                        {
                            name:'广告位',
                            type:'line',
                            symbol: 'none',
                            smooth: true,
                            data: that.advertUse
                        },
                        {
                            name:'推车',
                            type:'line',
                            symbol: 'none',
                            smooth: true,
                            data: that.cartUse
                        },
                        {
                            name:'雨伞',
                            type:'line',
                            symbol: 'none',
                            smooth: true,
                            data: that.umbrellaUse
                        },
                        {
                            name:'货梯',
                            type:'line',
                            symbol: 'none',
                            smooth: true,
                            data: that.elevatorUse
                        },
                        {
                            name:'停车位',
                            type:'line',
                            symbol: 'none',
                            smooth: true,
                            data: that.parkingUse
                        }
                    ]
                })
            },
            //基本信息+每日意见反馈
            getBaseInfo(){
                that.get(api.getBaseInfo,{},function(res){
					console.log(res,'0000')
					if(res.code == 0){
                        let data = res.data;
                        that.livecount = data.livecount
                        that.linecount = data.linecount
                        that.opinionData = data.list
					}
				})
            },
            //业务使用情况
            getCartAndUmbrella(){
                that.get(api.cartAndUmbrella,{},function(res){
                    let umbrellaUse = [];
                    let parkingUse = [];
                    let elevatorUse = [];
                    let advertUse = [];
                    let cartUse = [];
					if(res.code == 0){
                        let data = res.data;
                        data.umbrellaUse.forEach((item,index) => {
                            umbrellaUse.push(item.count)
                        })
                        that.umbrellaUse = umbrellaUse;

                        data.parkingUse.forEach((item,index) => {
                            parkingUse.push(item.count)
                        })
                        that.parkingUse = parkingUse

                        data.elevatorUse.forEach((item,index) => {
                            elevatorUse.push(item.count)
                        })
                        that.elevatorUse = elevatorUse

                        data.advertUse.forEach((item,index) => {
                            advertUse.push(item.count)
                        })
                        that.advertUse = advertUse
                        
                        data.cartUse.forEach((item,index) => {
                            cartUse.push(item.count)
                        })
                        that.cartUse = cartUse
                        that.infoInnerBtm()
					}
				})
            },
            //合作商家圆环图，轮播活动，合作商家数量
            getCooperative(){
                that.get(api.cooperative,{},function(res){
					if(res.code == 0){
                        let data = res.data;
                        that.activity = data.activity
                        that.quantity = data.quantity
                        that.statistics = data.statistics
                        that.statistics.forEach((item,index) => {
                            that.nameArr.push(item.name)
                        })
                        that.cakeLike()
					}
				})
            },
            initSwiper(){
                new Swiper ('.swiper-container', {
                    autoplay:true,
                    loop:true
                })     
            },
            showMarquee: function () {                
                that.animate = true;                
            },
            watchAni(){
                that.opinionData.push(that.opinionData[0]);               
                that.opinionData.shift();                
                that.animate = false;            
            },
            //未来空气质量报告
            futureAir(){
                that.get(api.futureAir,{},function(res){
					if(res.code == 0){
                        that.futureAirArr = res.data;
					}
				})
            }
        },
        mounted(){
            that.infoInnerBtm()
            that.cakeLike()
            that.initSwiper()
            timer && clearInterval(timer)
            timer = setInterval(that.showMarquee, 2000)
            //空气质量
            that.$http.get("https://www.tianqiapi.com/api/?version=v6&appid=96298917&appsecret=aApml1ZJ")
                .then((res)=>{
                    let data = res.data;
                    that.air = data.air;
                    that.air_level = data.air_level;
                    that.air_tips = data.air_tips;
                })
            const date = new Date();
            const year = date.getFullYear();
            const month = padDate(date.getMonth() + 1);
            const day = padDate(date.getDate());

            const data = `${year}-${month}-${day}`
            //车辆限号
            this.$jsonp('https://api.jisuapi.com/vehiclelimit/query',
                {appkey:'9281f86c6355e662',city:'beijing',date:data}
            ).then(data => {
                let number = data.result.number;
                that.number1 = number.split('和');
            }).catch(err => {
                console.log(err,'错误')
            })
        },
        created(){
            that = this;
            // that.getBaseInfo()                  //基本信息
            //that.getCartAndUmbrella()            //业务使用情况
            // that.getCooperative()               //合作商家圆环图，轮播活动，合作商家数量
            that.futureAir()                       //未来空气质量报告
        }
    }
</script>

<style scoped lang="scss">
    @import "../../node_modules/swiper/dist/css/swiper.css";
    .contBox {
		width: 960px;
		height: 475px;
		overflow: hidden;
		position: absolute;
		top: 54px;
		left: 0;
		display: flex;
        justify-content:space-around;
        &>div{
            height:100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
    .noticeInfo{
        width:245px;
    }
    .noticeTop{
        height:270px;
        background: url('../assets/imgs/xxjl_icon_zsbk@2x.png')no-repeat;
        background-size: 100% 100%;
        color:rgba(255,255,255,1);
        padding:0 16px 0 10px;
        box-sizing: border-box;
        .thisP{
            margin-left:4px;
            margin-top:38px;
            font-size:10px;
        }
        .kqzl{
            width: 100%;
            height:50px;
            margin-top:3px;
            dl{
                height:100%;
                display: flex;
                align-items: center;
                dt{
                    width: 50px;
                    height:100%;
                    position: relative;
                    img{
                        width: 50px;
                        height:50px;
                    }
                    span{
                        position: absolute;
                        left:50%;
                        top:15px;
                        transform: translate(-50%);
                        font-size:20px;
                    }
                }
                dd{
                    flex:1;
                    margin-left:2px;
                    height:50px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    span{
                        width: 34px;
                        height:12px;
                        line-height: 12px;
                        text-align: center;
                        font-size:6px;
                        border-radius:2px;
                        margin-bottom:6px;
                    }
                    p{
                        font-size:7px;
                        line-height:10px;
                        color:rgba(255,255,255,1);
                    }
                }
            }
        }
        .topMiddle{
            width:100%;
            height:63px;
            margin-left:3px;
            background: #051A26;
            margin-top:9px;
            display: flex;
            flex-direction: column;
            h5{
                height:20px;
                line-height: 20px;
                padding-left:5px;
                font-size:8px;
            }
            ul{
                flex:1;
                display: flex;
                align-items: center;
                li{
                    flex:1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    span{
                        font-size:8px;
                    }
                    b{
                        width: 34px;
                        height:12px;
                        line-height: 12px;
                        text-align: center;
                        background: #FE5013;
                        border-radius:2px;
                        font-size:6px;
                        margin-top:5px;
                    }
                }
            }
        }
        .nowDate{
            margin-top:16px;
            p{
                margin-left:3px;
                font-size:10px;
            }
            .innerBox{
                width: 100%;
                height:50px;
                margin-left:3px;
                display: flex;
                justify-content: center;
                align-items: center;
                .wrapper{
                    width: 76px;
                    height:30px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    b{
                        font-size:30px;
                        color:rgba(34,248,255,1);
                        background:linear-gradient(180deg,rgba(67,155,239,1) 32.373046875%, rgba(185,49,255,1) 100%);
                        -webkit-background-clip:text;
                        -webkit-text-fill-color:transparent;
                    }
                    span{
                        font-size:12px;
                        color:rgba(34,248,255,1);
                        background:linear-gradient(180deg,rgba(67,155,239,1) 32.373046875%, rgba(185,49,255,1) 100%);
                        -webkit-background-clip:text;
                        -webkit-text-fill-color:transparent;
                        align-self:flex-end;
                        font-weight:600
                    }
                }
            }
        }
    }
    .noticeBtm{
        height:200px;
        background: url('../assets/imgs/xxjl_icon_zxbk.png')no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        // background: red;
        // .btmInner{
        //     width:200px;
        //     height:130px;
        //     margin-top:15px;
        //     overflow: hidden;
        //     margin:auto;
        //     position: relative;
        //     ol{
        //         // width:100%;
        //         // transition: all 2s;
        //         // animation:anis 10s linear infinite normal;
        //         // height:200px;
        //         // position:relative;
        //     }
        //     ol.active1{
        //         animation:anis 20s linear infinite normal;
        //         position:relative;
        //     }
        //     ol:hover{
        //         animation-play-state:paused;
        //         cursor:pointer;
        //     }
        //     ol li{
        //         width:100%;
        //         height:26px;
        //         line-height: 26px;
        //         padding-left:5px;
        //         font-size:9px;
        //         color:rgba(34,187,231,1);
        //         overflow: hidden;
        //         text-overflow:ellipsis;
        //         white-space: nowrap;
        //     }
        //     // ol li.active{
        //     //     height:26px;
        //     //     line-height: 26px;
        //     //     font-size:9px;
        //     //     background: #051A26;
        //     //     color:rgba(221,220,77,1);
        //     //     padding-left:5px;
        //     // }
        // }
        // @keyframes anis {
        //     0% { transform:translateY(0px)}
        //     100% { transform:translateY(-130px)}
        // }
    }
    .marquee {	
        width: 100%;	
        height: 130px;	
        align-items: center;	
        box-sizing: border-box;	
        overflow: hidden;
    }
    .marquee_box {
        display: block;
        position: relative;
        width: 100%;
        height: 130px;
        overflow: hidden;
    }
    .marquee_list {
        width: 100%;
        display: block;
        position: absolute;
        top: 0;
        left: 20px;
    }
    .marquee_list li{
        width:100%;
        height:26px;
        line-height: 26px;
        padding-left:5px;
        font-size:9px;
        color:rgba(34,187,231,1);
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .marquee_top {
		transition: all 0.5s;
		margin-top: -26px;
	}
    .infoInner{
        width:400px;
        .infoInnerTop{
            height:200px;
            background: url('../assets/imgs/xxjl_icon_zjsbk@2x.png')no-repeat;
            background-size: 100% 100%;
            padding:0 25px 0 19px;
            box-sizing: border-box;
            ul{
                width:100%;
                height:130px;
                margin-top:50px;
                display: flex;
                justify-content: space-around;
                li{
                    width:100px;
                    height:100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .infoT{
                        width:95px;
                        height:95px;
                        position:relative;
                        margin-top:5px;
                        margin-bottom:15px;
                        // background: #fff;
                        img{
                            width:95px;
                            height:95px;
                            position: absolute;
                            left:0px;
                            top:0px;
                            bottom:0px;
                            right:0px;
                            animation: myRotate 3s infinite linear;
                        }
                        span{
                            position: absolute;
                            left:50%;
                            top:28px;
                            transform: translate(-50%);
                            font-size:30px;
                            color:#fff;
                        }
                    }
                    b{
                        color:#fff;
                    }
                }
            }
        }
            @keyframes myRotate {
            0% {transform: rotate(0)}
            50% {transform: rotate(180)}
            100% {transform: rotate(360deg)}
        }
        .infoInnerBtm{
            height:270px;
            background: url('../assets/imgs/xx_title.png')no-repeat;
            background-size: 100% 100%;
            padding-top:50px;
            padding-bottom:10px;
            box-sizing:border-box;
            div{
                height:135px;
                canvas{
                    height:135px;

                }
            }
        }
    }
    .cooperativeBusiness{
        width:250px;
        background: url('../assets/imgs/xxjl_icon_ybk@2x.png')no-repeat;
        background-size: 100% 100%;
        padding:0 15px;
        box-sizing: border-box;
        .cakeLike{
            height:260px;
            margin-top:53px;
        }
        .discountInfo{
            height:160px;
            margin-bottom:16px;
            background: url('../assets/imgs/xxjl_icon_yxbk@2x.png')no-repeat;
            background-size: 100% 100%;
            h4{
                font-size:10px;
                margin:0;
                color: #90B3E3;
            }
            .swiper-container {
                width:100%;
                height:100%;
                .swiper-wrapper{
                    width:100%;
                    height:100%;
                    .swiper-slide{
                        width:100%;
                        height:100%;
                        padding:0 10px;
                        box-sizing: border-box;
                        h3{
                            width:100%;
                            text-align: right;
                            font-size:12px;
                            color:rgba(0,198,255,1);
                        }
                        li{
                            display: flex;
                            margin-top:10px;
                            color:#ccc;
                            font-size:8px;
                            b{
                                width:40px;
                            }
                            p{
                                flex:1;
                            }
                        }
                    }
                    .addAni{
                        transition: all 1s;
                        margin-top: -160px;
                    }
                }
            }
        }
    }
</style>
