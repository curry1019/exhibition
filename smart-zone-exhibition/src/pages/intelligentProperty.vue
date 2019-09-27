<template>
    <div>
        <Head :isShow = false></Head>
        <div class="contBox">
            <div class="center">
				<img class="lmx" src="../assets/imgs/lmx.png">
				<img class="xsj" src="../assets/imgs/xsj.png">
                <p>智慧物业管理平台</p>
            </div>
            <div class="itemBox zy1" @click="toPages('repairSystem')">
                <img src="../assets/imgs/wy2.png">
                <p>智能报修</p>
            </div>
            <div class="itemBox zy2" @click="toBim('BimDaemon://BimBuildingAutomation')">
                <img src="../assets/imgs/wy3.png">
                <p>楼宇自控</p>
            </div>
            <div class="itemBox zy3" @click="toBim('BimDaemon://BimSmartParking')">
                <img src="../assets/imgs/wy4.png">
                <p>智能停车</p>
            </div>
            <div class="itemBox zy4" @click="toBim('BimDaemon://BimSecurity')">
                <img src="../assets/imgs/wy1.png">
                <p>安全防范</p>
            </div>
            <div class="itemBox zy5" @click="toPages('addedService')">
                <img src="../assets/imgs/wy5.png">
                <p>增值服务</p>
            </div>
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
        },
		toBim(bim) {
            window.location.href = bim;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.contBox {
		width: 960px;
		height: 400px;
		position: absolute;
		top: 80px;
		z-index: 100;
	}
	.itemBox {
		text-align: center;
		width: 120px;
		font-size: 18px;
		position: absolute;
		color: #fff;
		p {
			// animation:fadein 3s infinite linear;
			color: #2BAAE1;
		}
		img {
			width: 70px;
			height: 70px;
			animation:hx 3s infinite linear;
			border-radius: 50%;
			box-shadow: 0 0 20px #2BAAE1;
		}
	}
	.zy1 {
		top: 30px;
		left: 180px;
	}
	.zy2 {
		top: 30px;
		right: 180px;
	}
	.zy3 {
		top: 210px;
		left: 180px;
	}
	.zy4 {
		top:210px;
		right: 180px;
	}
	.zy5 {
		top: 340px;
		left: 420px;
	}
	.zy6 {
		bottom: 0;
		right: 198px;
	}
    .center {
		width: 350px;
		height: 350px;
		// background: url('../assets/imgs/wy_bg.png')no-repeat;
		// background-size: 100% 100%;
		margin: 0 auto;
		color: #00FDFF;
		font-size: 24px;
		text-align: center;
		line-height: 336px;
		position: relative;
		top: -20px;
		// animation:mymove 8s infinite linear;
		p {
			// animation:fadein 3s infinite linear;
			text-shadow:0px 2px 6px #2BAAE1;
		}
		.lmx {
			width: 350px;
			height: 350px;
			position: absolute;
			left: 0;
			top: 0;
			animation:hx2 3s infinite linear;
		}
		.xsj {
			width: 250px;
			height: 225px;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			top: 36px;
			animation:hx1 3s infinite linear;
		}
		
	}
		@keyframes mymove {
			0%   {transform: scale(0.9);opacity: 0.4;}
			50%   {transform: scale(1);opacity: 1;}
			100% {transform: scale(0.9);opacity: 0.4;}
		}
		@keyframes fadein {
			0%   {opacity: 0.6;color: #00FDFF;}
			50% {opacity: 0.8;color: #2BAAE1;}
			100% {opacity: 0.6;color: #00FDFF;}
		}
		 @keyframes hx {
			0%   {transform:scale(0.8);opacity: 0.4;}
			50%   {transform: scale(0.9);opacity: 1;}
			100% {transform: scale(0.8);opacity: 0.4;}
		}
		 @keyframes hx1 {
			0%   {transform:translateX(-50%) scale(0.9);opacity: 0.4;}
			50%   {transform:translateX(-50%) scale(1);opacity: 1;}
			100% {transform:translateX(-50%) scale(0.9);opacity: 0.4;}
		}
		 @keyframes hx2 {
			0%   {transform:scale(1);opacity: 0.4;}
			50%   {transform:scale(0.9);opacity: 1;}
			100% {transform:scale(1);opacity: 0.4;}
		}
</style>