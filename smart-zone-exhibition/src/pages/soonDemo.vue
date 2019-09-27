<template>
    <div id="xwContainer"></div>
</template>
<script>
export default {
    // mounted() {
    //     SoonSpace.init(
    //         document.getElementById("xwContainer"),
    //         {
    //             // 选择坐标 （点击空间任何地方都会触发）
    //             selectPosition: function(param) {
    //                 console.log("selectPosition",param)
    //             },
    //             // 相机视角切换
    //             cameraChanged: function(param) {
    //                 console.log("cameraChanged",param)
    //             },
    //             // POI 点击
    //             poiClick: function(param) {
    //                 console.log("poiClick",param)
    //             },
    //             // POI 双击
    //             poiDblClick: function(param) {
    //                 console.log("poiDblClick",param)
    //             },
    //             // 模型点击
    //             libraryClick: function(param) {
    //                 console.log("libraryClick",param)
    //             },
    //             // 模型双击
    //             libraryDblClick: function(param) {
    //                 let { position, rotation } = SoonSpace.editor.camera;
    //                 console.log( '{x: '+ position.x +', y: '+ position.y +', z: '+ position.z +'}, {x: '+ rotation.x +', y: '+ rotation.y +', z: '+ rotation.z +'}')
    //             }
    //         },
    //         {
    //             //   option 是一个设置内部环境变量的对象。
    //             // type: Boolean 
    //             // tips: 用于设置在选择对象时是否使用修改控件。 如果未设置，则默认值为 false。
    //             enableTransform: false,
    //             // type: Boolean 
    //             // tips: 是否调用持续渲染的布尔值。默认值为 true，如果未设置，则渲染将逐帧进行。 如果设置为 false，则应该在屏幕更新时调用渲染函数。
    //             continuousRender: true,
    //             // type: Boolean 
    //             // tips: 指示在双击对象时是否使用该函数来聚焦该对象。 默认值是 false。
    //             enableFocus: false,
    //             // type: Boolean 
    //             // tips: 确定网格对象是否可见。 默认值是 false。
    //             showGrid: false,
    //             // type: 十六进制值
    //             // tips: 屏幕背景颜色。 默认值是黑色(0x000000)
    //             backgroundColor: 0x000000,
    //             // type: Boolean
    //             // tips: 用于确定在选择对象时是否突出显示对象的轮廓。 默认值是 true
    //             enableSelect: true,
    //             // type: Boolean
    //             // tips: 用于设置是否在屏幕顶部显示 fps。 默认值是 false。
    //             displayStats: false,
    //             // type: Boolean
    //             // tips: 
    //             enableBoundedSelection: true,
    //             // type: Boolean
    //             // tips: 
    //             enableBloomEffect: true
    //         }
    //     );
    //     //创建poi实例
    //     SoonSpace.editor.createLabelRenderer("#viewport");
    //     //设置底色
    //     SoonSpace.setBackgroundColor("#000204");
    //     //设置选择模式
    //     SoonSpace.setSelectMode(VB.Editor.SelectMode.deviceobject);
    //     //设置默认光
    //     SoonSpace.SetDefaultLight();
    //     //创建天空
    //     SoonSpace.createSky("./static/model/sunnysky/");
    //     //模型加载完成回调
    //     var param;
    //     function onLoad() {
    //     };
    //     //加载xml回调
    //     function callbackProgress(progress) {
    //         console.log("callbackProgress")
    //     };
    //     //查找模型
    //     function findXmlEl(id) {
    //         return SoonSpace.editor.LibraryManager.GetComponent(id + "_0");
    //     }
    //     // 动态poi方法
    //     function dynamicPoi(option) {
        
    //         option.param.device.HideCSToolTip();
    //         $("." + option.poiName).remove(); // 精喂仪dom

    //         $(document.body).append(option.addDom);

    //         option.param.device.createInfoForm(option.poiName, false);
    //         option.param.device.ShowCSToolTip();

    //         var floorTime = null;

    //         if (floorTime != null) {
    //             window.clearInterval(floorTime);
    //         }

    //         refreshCount();

    //         $("." + option.poiName).remove();

    //         var floorTime = window.setInterval(refreshCount, 1000);

    //         var tick = 0; // 计数器

    //         function refreshCount() {
    //             tick += 1;

    //             option.findEl && option.findEl.map(item => {
    //                 let dom = $(`#${option.id}`).find("." + item.className);

    //                 item.callbackDom(dom);
    //             });

    //             dom = null; // 清空空间
    //         }
    //     };
    //     //加载xml
    //     SoonSpace.importAssetXML("./static/model/final/ass1.xml", onLoad, callbackProgress);
    //     //设置被观察者坐标
    //     SoonSpace.editor.camera.position.set(3814, 954, 2696);
    //     //设置观察者坐标
    //     SoonSpace.editor.camera.rotation.set(-0.256621183776872, 0.870037428946274,0.19794500155057806);
    // },
}
</script>
<style lang="scss">
    #xwContainer {
        width: 100vw;
        height: 100vh;
    }
</style>