<template>
    <div id="app" class="hello">
    <!-- <div id="app"> -->
        <vue-particles
            v-if="isRouterAlive"
            color="#05A5E9"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="4"
            linesColor="#02FFFF"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="2"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
            class="lizi"
        >
        </vue-particles>
        <router-view></router-view>
        
    </div>
</template>

<script>
// import widgets from 'cesium/Widgets/widgets.css'
    export default {
        name:'App',
        provide () {
            return {
                reload: this.reload
            }
        },
        data() {
            return {
                isRouterAlive: true
            }
        },
        methods: {
            reload () {
                this.isRouterAlive = false;
            }
        },
        mounted() {
            // this.$nextTick(()=>{
            //     let oDom = document.querySelector('#waterMark');
            //     oDom.style.opacity = '0';

            // })
        },
    };
</script>

<style lang="scss">
    @import './assets/css/base.scss';
    .hello {
        width: 100vw;
        height:100vh;
        background: url('./assets/imgs/app_bg.jpg') no-repeat;
        background-size: 100% 100%;
        position: relative;
        overflow: hidden;
    }
    .lizi {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 0;
    }
    html,body {
        cursor: url('./assets/imgs/Arrow.png'),auto;
    }
</style>