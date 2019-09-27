<template>
    <div class="hello index_box">
        <!-- <Head :show="false"></Head> -->
        <div class="flex">
            <div class="cont_c" @click="toPages('intelligentProperty')">
                <div class="myMove">
                    <img src="../assets/imgs/ind02.png">
                </div>
                <div class="text_c">
                    <p class="_text_top">智慧物业</p>
                    <p class="_text_bottom">管理平台</p>
                </div>
            </div>
            <div class="cont_l" @click="toPages('intelligentResource')">
                <img src="../assets/imgs/ind01.png">
                <div class="text_c">
                    <p class="_text_top">智慧资源</p>
                    <p class="_text_bottom">管理平台</p>
                </div>
            </div>
            <div class="cont_r" @click="toBim">
                <div class="myMove">
                    <img src="../assets/imgs/ind03.png">
                </div>
                <div class="text_c">
                    <p class="_text_top">智慧能源</p>
                    <p class="_text_bottom">管理平台</p>
                </div>
            </div>
            
        </div>
        <div class="go_back" @click="back"></div>
    </div>
</template>

<script>
import Head from '../components/header.vue';
export default {
    name: 'home',
    data () {
        return {
        
        }
    },
    components:{
        Head
    },
    methods: {
        toPages(path) {
            this.$router.push({path:path});
        },
        back() {
            this.$router.go(-1)
        },
        toBim() {
            window.location.href = 'BimDaemon://BimSmartEnergy';
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .hello.index_box {
        background: url('../assets/imgs/shouye_photo_bg@2x.png') no-repeat;
        .go_back {
	    	position: absolute;
	    	top: 10px;
	    	left: 370px;
	    	width: 200px;
	    	height: 40px;
	    }
    }
    .flex {
        width: 960px;
        position: absolute;
        top: 90px;
        z-index: 100;
        &>div{
            width: 250px;
            height: 250px;
            margin-left: 52px;
            text-align: center;
            transition: 0.3s all linear;
            position: relative;
            // animation:mymove 5s infinite linear;
            // animation:hx 1s infinite linear;
            // animation:mymove 5s infinite linear;
            .text_c {
                width: 200px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                color: #fff;
                ._text_top {
                    font-size: 34px;
                    letter-spacing:5px;
                    text-shadow:0px 5px 4px rgba(0, 0, 0, 0.84);
                }
                ._text_bottom {
                    margin-top: 10px;
                    font-size: 20px;
                    letter-spacing:5px;
                    text-shadow:0px 5px 4px rgba(0, 0, 0, 0.84);
                }
            }
            img {
                width: 225px;
                height: 225px;
                position: relative;
                top: 20px;
                // left: 2.2px;
                // border-radius: 50%;
			    // box-shadow: 0 0 20px #2BAAE1;
            }
            &:hover {
                img {
                    animation-play-state:paused;
                }
            }
            &.cont_l {
                background: url('../assets/imgs/ind1.png')no-repeat;
                background-size: 210px 50px;
                background-position: 20px 107px;
                animation:mymove3 5s infinite linear;
            }
            &.cont_c {
                background: url('../assets/imgs/ind2.png')no-repeat;
                background-size: 220px 50px;
                background-position: 5px 106px;
                animation:mymove2 5s infinite linear;
                img{
                    animation:mymove 30s infinite linear;
                }
            }
            &.cont_r {
                background: url('../assets/imgs/ind3.png')no-repeat;
                background-size: 210px 50px;
                background-position: 15px 106px;
                animation:mymove2 5s infinite linear;
                img{
                    animation:mymove 30s infinite linear;
                }
            }
        }
        
    }
    
    @keyframes mymove {
        0%   {transform: rotate(0) }
        50%   {transform: rotate(180deg) }
        100% {transform: rotate(360deg) }
    }
    @keyframes mymove2 {
        0%   {transform: scale(0.8);opacity: 0.7;}
        50%   {transform: scale(0.9);opacity: 1;}
        100% {transform: scale(0.8);opacity: 0.7;}
    }
    @keyframes mymove3 {
        0%   {transform: scale(1)}
        50%   {transform: scale(1.2)}
        100% {transform: scale(1)}
    }
    @keyframes hx {
        0%   {transform: scale(0.5) rotate(-450deg) translateX(-500px)}
        50%   {transform: scale(1) rotate(800deg) translateX(0px)}
        100% {transform: scale(0.5) rotate(-450deg) translateX(-500px)}
    }
</style>