<template>
    <div class="header" :class="{is_cart:iscar}">
        <div class="backBtn" v-if="show" @click="back">
            <div class="_back" ></div>
        </div>
        <h3 class="gradient-text gradient-text-one">{{title}}</h3>
        <div class="fsmall gradient-text-one _time">
            <span class="_tip_t">{{date | formatDate}}</span>
            <!-- <span>10:00:20</span> -->
        </div>
        <div class="fsmall gradient-text-one _tq">
            <span>今日</span>
            <span class="_tip_d">{{wd}}</span>
            <span>{{tq}} </span>
            <!-- <span> {{fx}}</span> -->
        </div>
        <!--<div class="gotoCarPage" v-if="isShow" @click="gotoCarPage('map')">
            <img class="titleImg" src="../assets/imgs/znzl_icon_cd@2x.png" alt="">
        </div>-->
    </div>
</template>
<script>
    const padDate = function (value) {
        return value < 10 ? `0${value}` : value;
    };
    export default {
        data() {
            return {
                date: new Date(),
                wd:'',
                tq:'',
                fx:''
            };
        },
        props: {
            title: {
                type:String,
                default:'亦城时代智慧云平台',
                require: true
            },
            isShow: {
                type:Boolean,
                default:true
            },
            show: {
                type:Boolean,
                default:true
            },
            iscar: {
            	type:Boolean,
                default:false
            }
        },
        methods: {
            back() {
                this.$router.go(-1)
            },
            gotoCarPage(path){
                this.$router.push({path:path})
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
        mounted() {
            const _this = this;
            this.timer = setInterval(function () {
                _this.date = new Date();
            }, 1000);
            this.$http.get("http://wthrcdn.etouch.cn/weather_mini?city=北京")
                .then((res)=>{
                    // console.log(res,'ressss')
                    const tqMsg = res.data.data.forecast[0];
                    this.wd = parseInt(tqMsg.low.split(' ')[1]) + ' ~ ' + tqMsg.high.split(' ')[1];
                    this.tq = tqMsg.type;
                    this.fx = tqMsg.fengxiang;
                })
        },
        beforeDestroy() {
            if (this.timer) {
                clearInterval(this.timer);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .header {
        // background-color: rgba(0, 230, 255, 0.11);
        width: 960px;
        height: 42px;
        background-image: url('../assets/imgs/ycsd_icon_top@2x.png');
        background-size: 100%;
        background-position: 0 -6px;
        position: absolute;
        top: 7px;
        left: 0;
        &.is_cart {
        	background-image: url('../assets/imgs/top.png');
        }
        .backBtn{
            width: 50px;
            height: 40px;
            // background: #eee;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            left: 6px;
            ._back {
                width: 30px;
                height: 27px;
                background: url("../assets/imgs/_back.png")no-repeat;
                background-size: 100% 100%;
            }
        }
        ._time {
            position: absolute;
            top: 16px;
            left: 60px;
        }
        ._tq {
            position: absolute;
            top: 16px;
            right: 60px;
        }
        .gradient-text{
            text-align: center;
            font-size:24px;
            letter-spacing: 4px;
        }
        .fsmall {
            font-size: 10px;
            ._tip_d {
                margin:0 4px 0 2px;
            }
        }
        .gradient-text-one{
            // background-image:-webkit-linear-gradient(bottom,#41acbd,#41acbd); 
            // -webkit-background-clip:text;
            // -webkit-text-fill-color:transparent;
            color:#41acbd;
        }
        .gotoCarPage{
            width:25px;
            height:25px;
            position:fixed;
            right:25px;
            top:10px;
            img{
                width:100%;
                height:100%;
                display: block;
            }
        }
    }
</style>