<template>
	<div class="hello box">
		<Head :title="'增值服务'" :isShow = false></Head>
		<div id="showcase" class="noselect" @mouseenter="enterDiv" @mouseleave="leaveDiv">
            <div :class="list[0]" @click="selectedItem" @mouseover="showTip(list[0],'s1')">
                <img class="cloud9-item" src="../assets/imgs/xzbg_icon_hjmh@2x.png" alt="Firefox">
                <p>直联管家</p>
            </div>
            <div :class="list[1]" @click="selectedItem" @mouseover="showTip(list[1],'s2')">
                <img class="cloud9-item" src="../assets/imgs/xzbg_icon_hjmh@2x.png" alt="Firefox">
                <p>直联保洁</p>
            </div>
            <div :class="list[2]" @click="selectedItem" @mouseover="showTip(list[2],'s3')">
                <img class="cloud9-item" src="../assets/imgs/xzbg_icon_hjmh@2x.png" alt="Firefox">
                <p class="small">设施设备厂商<br />数据库</p>
            </div>
            <div :class="list[3]" @click="selectedItem" @mouseover="showTip(list[3],'s4')">
                <img class="cloud9-item" src="../assets/imgs/xzbg_icon_hjmh@2x.png" alt="Firefox">
                <p>智能班车</p>
            </div>
            <div :class="list[4]" @click="selectedItem" @mouseover="showTip(list[4],'s5')">
                <img class="cloud9-item" src="../assets/imgs/xzbg_icon_hjmh@2x.png" alt="Firefox">
                <p>楼宇配套</p>
            </div>
            <div class="s6">
                <img src="../assets/imgs/zzfw.png" alt="Firefox">
                <div>项目服务</div>
            </div>
		</div>
		<div class="text_box" v-show="isShowTip" @mouseenter="enterDiv" @mouseleave="leaveDiv">
			<div class="line"></div>
			<div class="text_content">
                <div v-for="i in textData" :key="i">
                    <i></i>
                    <span>{{i}}</span>
                </div>
            </div>
		</div>
	</div>
</template>

<script>
	let timer = null
	import Head from '../components/header.vue';
	import { Carousel3d, Slide } from 'vue-carousel-3d';
	export default {
		data() {
			return {
                isShowTip:false,
                list:['s1','s2','s3','s4','s5'],
				index: 0,
				textData: ['智能装修申请','定时催缴费','空调加时']
			}
		},
		created() {
			// that = this;
		},
		components: {
			Head,
			Carousel3d,
    		Slide
		},
		mounted(){
			this.autoPlay()
		},
		methods: {
			enterDiv() {
				clearInterval(timer)
			},
			leaveDiv() {
				this.autoPlay()
			},
			autoPlay() {
				timer = setInterval(() => {
					this.list.push(this.list.shift());
					this.isShowTip = false;
				}, 2000)
			},
            showTip(item,str) {
                if(item != 's1') return;
                this.isShowTip = true;
                switch (str) {
                    case 's1':
                        this.textData = ['智能装修申请','定时催缴费','空调加时'];
                        break;
                    case 's2':
                        this.textData = ['日常保洁','空气净化','首次开荒'];
                        break;
                    case 's3':
                        this.textData = ['搭建设备设施厂家数据库','平台设备设施厂家推广'];
                        break;
                    case 's4':
                        this.textData = ['班车定制','班车查询','线路详情','车辆实时位置'];
                        break;
                    case 's5':
                        this.textData = ['公益图书馆','金融服务中心','美食商街','商务宴客厅','美体健身','电话网络'];
                        break;
                
                    default:
                        break;
                }
            },
            go(type) {
                let that = this;
                switch (type) {
                    case 'l1':
                        this.list.unshift(this.list.pop());
                        break;
                
                    case 'l2':
                        this.list.unshift(this.list.pop());
                        setTimeout(()=>{
                            that.list.unshift(that.list.pop());
                        },600)
                        break;
                
                    case 'r1':
                        this.list.push(this.list.shift());
                        break;
                
                    case 'r2':
                        this.list.push(this.list.shift());
                        setTimeout(()=>{
                            that.list.push(that.list.shift());
                        },600)
                        
                        break;
                
                    default:
                        break;
                }
                

                // push / pop: 末尾推入和弹出，改变原数组， 返回推入/弹出项

                // unshift / shift: 头部推入和弹出，改变原数组，返回操作项
            },
			selectedItem(e) {
                this.isShowTip = false;
                if(e.path[1].className =='s1') {
                    return;
                }
                
				switch (e.path[1].className) {
                    case 's2':
                        this.go('l1');
                        break;
                    case 's3':
                        this.go('l2');
                        break;
                    case 's4':
                        this.go('r2');
                        break;
                    case 's5':
                        this.go('r1');
                        break;
                
                    default:
                        break;
                }
			}
		}
	}
</script>

<style lang="scss" scoped>
	div.hello.box {
        width: 960px;
        height:540px;
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
      position: relative;
      margin: 50px auto;
      .cloud9-item {
            animation:rotate 10s infinite linear;
      }
      &>div {
          transition:0.6s transform cubic-bezier(0.92, 0.01, 0.15, 1.12);
          img {
              width: 100%;
              height: 100%;
          }
          
        &.s6>img {
            height: 120px;
        }
          p {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              font-size: 13px;
              font-weight: 500;
              letter-spacing: 2px;
              color: #003F74;
              line-height: 120px;
              text-align: center;
              text-shadow: 2px 4px 2.6px rgba(0, 0, 0, 0.45);
              &.small {
                  height: auto;
                  padding: 40px 0;
                  line-height: 20px;
                  font-size: 11px;
                  letter-spacing: normal;
              }
          }
      }
    }
    .s1 {
        position: absolute;
        width: 120px;
        height: 120px;
        overflow: hidden;
        transform-origin: 0px 0px;
        z-index: 100;
        transform: translate(423px, 256px) scale(1);
    }
    .s2 {
        position: absolute;
        width: 120px;
        height: 120px;
        overflow: hidden;
        transform-origin: 0px 0px;
        z-index: 81;
        transform: translate(180px, 203px) scale(0.81);
    }
    .s3 {
        position: absolute;
        width: 120px;
        height: 120px;
        overflow: hidden;
        transform-origin: 0px 0px;
            z-index: 62;
    transform: translate(300px, 130px) scale(0.62);
    }
    .s4 {
        position: absolute;
        width: 120px;
        height: 120px;
        overflow: hidden;
        transform-origin: 0px 0px;
        z-index: 62;
    transform: translate(590px, 130px) scale(0.62);
    }
    .s5 {
        position: absolute;
        width: 120px;
        height: 120px;
        overflow: hidden;
        transform-origin: 0px 0px;
        z-index: 87;
        transform: translate(670px, 203px) scale(0.81);
    }
    .s6 {
        position: absolute;
        width: 120px;
        height: 160px;
        overflow: hidden;
        transform-origin: 0px 0px;
        z-index: 101;
        transform: translate(420px, 90px) scale(1);
        div {
            color: #A9DAF3;
            font-size: 24px;
            letter-spacing: 4px;
            text-align: center;
        }
    }
   
    .text_box {
    	display: flex;
    	position: fixed;
    	top: 370px;
    	left: 524px;
    	.line {
    		width: 45px;
    		height: 30px;
    		margin-top: 15px;
    		margin-right: -15px;
    		background: url('../assets/imgs/xzbg_icon_xiantiao@2x.png') no-repeat;
        	background-size: 100% 100%;
    	} 
    	.text_content {
    		width: auto;
    		font-size: 8px;
    		background: url('../assets/imgs/xzfu_icon_juxing@2x.png') no-repeat;
        	background-size: 100% 100%;
        	color: #8ED8FE;
            
    	}
    }
    .text_content {
        padding: 20px;
        &>div {
            font-size: 10px;
            color: #8ED8FE;
            margin-bottom: 6px;
                i {
                    display: inline-block;
                    width: 14px;
                    height: 14px;
                    background: url('../assets/imgs/line.png')no-repeat;
                    background-size: 100% 100%;
                    position: relative;
                    top: 3.6px;
                }
            }
    }
    @keyframes rotate {
        0% {
           transform: rotate(0deg);
        }
        100% {
           transform: rotate(360deg);
        }
    }
</style>