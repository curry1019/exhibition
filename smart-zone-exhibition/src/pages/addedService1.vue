<template>
    <div class="hello">
        <Head :title="'增值服务'" :isShow = false></Head>
        <div class="contBox">
            <ul class="clearfix">
                <li>
                    <img class="zzq" src="../assets/imgs/zzq.png" alt="">
                    <img class="zz" src="../assets/imgs/zz1.png" alt="">
                    <img class="zzbq" src="../assets/imgs/zzbq.png" alt="">
                    <div class="text">智能装修申请</div>
                </li>
                <li>
                    <img class="zzq" src="../assets/imgs/zzq.png" alt="">
                    <img class="zz" src="../assets/imgs/zz2.png" alt="">
                    <img class="zzbq" src="../assets/imgs/zzbq.png" alt="">
                    <div class="text">楼宇配套服务</div>
                </li>
                <li>
                    <img class="zzq" src="../assets/imgs/zzq.png" alt="">
                    <img class="zz" src="../assets/imgs/zz3.png" alt="">
                    <img class="zzbq" src="../assets/imgs/zzbq.png" alt="">
                    <div class="text">直联保洁服务</div>
                </li>
                <li>
                    <img class="zzq" src="../assets/imgs/zzq.png" alt="">
                    <img class="zz" src="../assets/imgs/zz4.png" alt="">
                    <img class="zzbq" src="../assets/imgs/zzbq.png" alt="">
                    <div class="text">设备设施厂数据库</div>
                </li>
                <li>
                    <img class="zzq" src="../assets/imgs/zzq.png" alt="">
                    <img class="zz" src="../assets/imgs/zz5.png" alt="">
                    <img class="zzbq" src="../assets/imgs/zzbq.png" alt="">
                    <div class="text">直联管家</div>
                </li>
                <li>
                    <img class="zzq" src="../assets/imgs/zzq.png" alt="">
                    <img class="zz" src="../assets/imgs/zz6.png" alt="">
                    <img class="zzbq" src="../assets/imgs/zzbq.png" alt="">
                    <div class="text">定时催缴费</div>
                </li>
                <li>
                    <img class="zzq" src="../assets/imgs/zzq.png" alt="">
                    <img class="zz" src="../assets/imgs/zz7.png" alt="">
                    <img class="zzbq" src="../assets/imgs/zzbq.png" alt="">
                    <div class="text">空调加时</div>
                </li>
                <li>
                    <img class="zzq" src="../assets/imgs/zzq.png" alt="">
                    <img class="zz" src="../assets/imgs/zz8.png" alt="">
                    <img class="zzbq" src="../assets/imgs/zzbq.png" alt="">
                    <div class="text">智能班车</div>
                </li>
                <li>
                    <img class="zzq" src="../assets/imgs/zzq.png" alt="">
                    <img class="zz" src="../assets/imgs/zz9.png" alt="">
                    <img class="zzbq" src="../assets/imgs/zzbq.png" alt="">
                    <div class="text">节目查询</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Head from '../components/header.vue';
export default {
    components:{
        Head
    },
    data () {
        return {
        
        }
    },
    methods: {
    	toPages(path) {
            this.$router.push({path:path});
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    ul {
        width: 786px;
        height: 350px;
        margin: 0 auto;
        li {
            float: left;
            width: 262px;
            height: 116.66666px;
            position: relative;
            .zzq {
                width: 66px;
                height: 66px;
                border-radius: 50%;
                position: absolute;
                top: 20px;
                left: 30px;
                z-index: 2;
                box-shadow: 1px 1px 16px #02FEFF;
                animation:mymove 10s infinite linear;
            }
            .zz {
                width: 40px;
                height: 40px;
                position: absolute;
                top: 34px;
                left: 44px;
                z-index: 3;
                transition: 1s all linear;
                &:hover {
                    transform: scale(1.4);
                }
            }
            .zzbq {
                width: 150px;
                height: 28px;
                position: absolute;
                top: 37px;
                left: 81px;
                z-index: 1;
            }
            .text {
                width: 150px;
                height: 28px;
                line-height: 28px;
                color: #05a9ea;
                font-size: 15px;
                text-align: center;
                position: absolute;
                top: 37px;
                left: 81px;
                z-index: 1;
            }
        }
    }
	.contBox {
		width: 838px;
		height: 399px;
        padding-top: 26px;
		position: absolute;
		top: 80px;
        left:50%;
        transform: translateX(-50%);
		z-index: 100;
        background: url('../assets/imgs/zzBg.png')no-repeat;
        background-size: 100% 100%;
	}
	@keyframes mymove {
        0%   {transform: rotate(0)}
        100% {transform: rotate(360deg)}
    }
</style>