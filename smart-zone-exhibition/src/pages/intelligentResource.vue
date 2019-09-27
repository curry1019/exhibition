<template>
    <div>
        <Head :isShow = false></Head>
        <div class="contBox">
            <div class="center">
                <img src="../assets/imgs/zy_bg.png" alt="">
                智慧资源管理平台
            </div>
            <div class="itemBox zy1" @click="toPages('leasingSystem')">
                <img src="../assets/imgs/zy5.png">
                <p>智能租赁</p>
            </div>
            <div class="itemBox zy2" @click="toPages('AdministrativeOffice')">
                <img src="../assets/imgs/zy4.png">
                <p>行政办公</p>
            </div>
            <div class="itemBox zy5" @click="toPages('financing')">
                <img src="../assets/imgs/zy3.png">
                <p>投融资 · 技术咨询</p>
            </div>
            <div class="itemBox zy4" @click="toPages('humanResources')">
                <img src="../assets/imgs/zy2.png">
                <p>人力资源</p>
            </div>
            <div class="itemBox zy3" @click="toPages('InformationExchange')">
                <img src="../assets/imgs/zy6.png">
                <p>信息交流</p>
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
        }
	},
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
			color: #C08F42;
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
		top: 37px;
		left: 180px;
	}
	.zy2 {
		top: 37px;
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
		left: 383px;
		width: 200px;
	}
    .center {
		width: 350px;
		height: 350px;
		margin: 0 auto;
		color: rgb(187, 133, 45);
		font-size: 24px;
		text-align: center;
		line-height: 350px;
		position: relative;
		top:-20px;
		text-shadow:0px 2px 5px rgba(167, 128, 45, 0.7);
		img {
				width: 350px;
				height: 350px;
				// background: url('../assets/imgs/zy_bg.png')no-repeat;
				// background-size: 100% 100%;
				// margin: 0 auto;
				// color: #C08F42;
				// font-size: 27px;
				// text-align: center;
				// line-height: 400px;
				position: absolute;
				top: 0;
				left: 0;
				animation:mymove 5s infinite linear;
				z-index: -1;
		}
	}
	@keyframes mymove {
        0%   {transform: rotate(0)}
        100% {transform: rotate(360deg)}
    }
		@keyframes fadein {
        0%   {opacity: 0.4;color: #00FDFF;}
				50% {opacity: 0.8;color: #C08F42;}
        100% {opacity: 0.4;color: #00FDFF;}
    }
		 @keyframes hx {
        0%   {transform: scale(0.8);opacity: 0.4;}
        50%   {transform: scale(0.9);opacity: 1;}
        100% {transform: scale(0.8);opacity: 0.4;}
    }
</style>