<template>
	<div class="hello">
		<Head :title="'行政办公'" :isShow = false></Head>
		<carousel-3d @click="selectedItem">
			<slide :index="0">
				<!--<img src="../assets/imgs/xzbg_icon_hjmh@2x.png" />-->
				<span>代理代办</span>
			</slide>
			<slide :index="1">
				<!--<img src="../assets/imgs/xzbg_icon_hjmh@2x.png" />-->
				<span>配套服务</span>
			</slide>
			<slide :index="2">
				<!--<img src="../assets/imgs/xzbg_icon_hjmh@2x.png" />-->
				<span>设计服务</span>
			</slide>
			<slide :index="3">
				<!--<img src="../assets/imgs/xzbg_icon_hjmh@2x.png" />-->
				<span>咨询服务</span>
			</slide>
			<slide :index="4">
				<!--<img src="../assets/imgs/xzbg_icon_hjmh@2x.png" />-->
				<span>环境美化</span>
			</slide>
		</carousel-3d>
		<div class="text_box">
			<div class="line"></div>
			<div class="text_content">{{txt}}</div>
		</div>
	</div>
</template>

<script>
	var that
	import Head from '../components/header.vue';
	import { Carousel3d, Slide } from 'vue-carousel-3d';
	export default {
		data() {
			return {
				index: 0,
				txt: "律师代理服务，房地产代理服务，工商代办服务",
				textData: ["律师代理服务，房地产代理服务，工商代办服务","健身服务，照相服务，网站建设，电话网络","动漫影视，工业设计，工程设计，网站建设","企业管理咨询服务，法律及政策咨询服务，税务咨询服务，财务咨询服务","绿植租摆服务，入室保洁服务，空气质量检测服务"]
			}
		},
		created() {
			that = this;
		},
		components: {
			Head,
			Carousel3d,
    		Slide
		},
		mounted() {
			var that = this
			$('.carousel-3d-slide').click(function() {
				var index = $('.carousel-3d-slide').index(this)
				that.txt = that.textData[index]
				console.log(that.txt)
			})
		},
		methods: {
			selectedItem() {
				console.log(1)
			}
		},
		updated(){
			
		}
	}
</script>

<style lang="scss" scoped>
	.hello {
		background: url('../assets/imgs/xzbg_photo_bg@2x.png') no-repeat;
        background-size: 100% 100%;
	}
	a {
      color: #da2020;
    }
    a:hover {
      color: #d6f300;
    }
    .wrap > h1 {
      margin: 26px auto;
    }
    #showcase {
      height: 460px;
      -webkit-border-radius: 8px;
      -moz-border-radius: 8px;
      border-radius: 8px;
    }
    #item-title {
      color: #F31414;
      font-size: 29px;
      letter-spacing: 0.13em;
      text-shadow: 1px 1px 6px #C72B2B;
      text-align: center;
      margin-top: 30px;
      margin-bottom: 22px;
    }
    #nav {
      text-align: center;
    }
    #nav > button {
      width: 64px;
      height: 36px;
      color: #666;
      font: bold 16px arial;
      text-align: center;
      margin: 5px;
      text-shadow: 0px 1px 0px #f5f5f5;
      background: #f6f6f6;
      border: solid 2px rgba(0, 0, 0, 0.4);
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      -webkit-box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.4);
      -moz-box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.4);
      box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.4);
      cursor: pointer;
    }
    #nav > button:active,
    #nav > button.down {
      background: #dfdfdf;
      border: solid 2px rgba(0, 0, 0, 0.6);
      box-shadow: none;
    }
    #share {
      top: -9px;
    }
    #credits {
      top: -15px;
    }
    .carousel-3d-container {
    	height: 200px !important;
    	margin: 180px auto;
    }
    .carousel-3d-slider {
    	height: 200px !important;
    }
    .carousel-3d-slide {
    	width: 200px !important;
    	height: 200px !important;
    	border: none;
    	text-align: center;
    	/*background-color: rgba(0,0,0,0);*/
    	background: url('../assets/imgs/xzbg_icon_hjmh@2x.png') no-repeat;
        background-size: 100% 100%;
    	img {
    		width: 100%;
    		height: 100%;
    	}
    	span {
    		line-height: 200px;
    		font-size: 20px;
    		color: #003F74;
    	}
    }
    .text_box {
    	display: flex;
    	position: fixed;
    	top: 335px;
    	left: 500px;
    	.line {
    		width: 45px;
    		height: 30px;
    		margin-top: 15px;
    		margin-right: -15px;
    		background: url('../assets/imgs/xzbg_icon_xiantiao@2x.png') no-repeat;
        	background-size: 100% 100%;
    	} 
    	.text_content {
    		width: 280px;
    		height: 75px;
    		line-height: 75px;
    		font-size: 8px;
    		background: url('../assets/imgs/xzfu_icon_juxing@2x.png') no-repeat;
        	background-size: 100% 100%;
        	text-align: center;
        	color: #8ED8FE;
    	}
    } 
</style>