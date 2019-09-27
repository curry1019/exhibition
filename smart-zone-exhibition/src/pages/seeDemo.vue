<template>
    <div>
        <div id="XW3DContainer" @click="fly"></div>
    </div>
</template>
<script type="text/javascript">
// import SoonCity from 'sooncity';
// import '../assets/js/SoonSpace.js'
// import '../assets/js/san'
export default {
    data() {
        return {
            sn:null
        }
    },
    methods: {
        fly() {
            let that = this;
            this.sn.camera.flyTo({
            //                                           经度           纬度        高度
            destination: SoonCity.Cartesian3.fromDegrees(116.5391795898, 39.8091677714, 3000),
            duration:10,
            complete() {
                that.$router.push({
                    name:'soonDemo'
                })
                // window.location.href=""
                console.log(this)
            }

            });
        }
        
    },
    mounted() {
        // this.sn = new SoonCity.SoonViewer(
        //     "XW3DContainer",
        //     {
        //         baseLayerPicker: false,                         // 是否启用 地图风格选择器
        //         sceneModePicker: false,                         // 是否启用 位置显示类型切换器（球体，矩形，45°矩形）
        //         navigationHelpButton: false,                    // 是否启用 帮助说明（提示）
        //         homeButton: false,                              // 是否启用 快捷定位到主页
        //         geocoder: false,                                // 是否启用 搜索框
        //         infoBox: false,                                 // 是否显示 touch后关联信息
        //         selectionIndicator: false,                      // 是否启用 选择区域指示
        //         shadows: false,                                 // 是否启用 阴影
        //         animation: false,                               // 是否启用 模拟昼夜活动(光照变化，球体自转)动画
        //         timeline: false,                                // 是否显示 24小时时间线
        //         fullscreenButton: false,                        // 是否显示 全屏按钮
        //         vrButton: false,                                // 是否显示 vr功能控制按钮
        //         scene3DOnly: true,                              // 如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
        //         navigationInstructionsInitiallyVisible: false,  // 导航指令
        //         showRenderLoopErrors: false,                    // 渲染循环错误提示
        //         SOONCITY_BASE_URL: '',                          // 设置根路径
        //         inputHandlerListener: {                         // 是否开启全局鼠标监听
        //             leftClick: true,
        //             rightClick: true,
        //             mouseMove: true
        //         },
        //         shouldAnimate: true                             // 是否显示 过度动画
        //     }
        // )
        
    }
}
</script>
<style lang="scss">
    #XW3DContainer {
        width: 100vw;
        height: 100vh;
    }
</style>