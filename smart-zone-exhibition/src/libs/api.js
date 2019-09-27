const apiUtil = {
    // 智能租赁系统
    	// 到期提醒数据
    	getExpireRemind: 'api-rental/rentalEcharts/expireRemind',
    	// 面积数据
    	getRentalArea: 'api-rental/rentalEcharts/rentalArea',
    	// 楼宇租赁情况数据
    	getRentalSituation: 'api-rental/rentalEcharts/rentalSituation',
    	// 签约面积分析数据
    	getAreaAnalysis: 'api-rental/rentalEcharts/areaAnalysis',
    	// 入驻企业分析数据
    	industryAnalysis: 'api-rental/rentalEcharts/industryAnalysis',
    	// 招商来源数据
    	sourceAnalysis: 'api-rental/rentalEcharts/sourceAnalysis',
    	
    // 智能报修系统
    	// 报修总单数
    	getRepairCount: 'api-rental/repairAnalysis/getRepairCount',
    	// 报修数量
    	getRepairNumber: 'api-rental/repairAnalysis/getRepairNumber',
    	// 本月报修数量
    	getMonthRepairCount: 'api-rental/repairAnalysis/getMonthRepairCount',
    	// 根据楼宇获取报修单数
    	getRepairMonthNumber: 'api-rental/repairAnalysis/getRepairMonthNumber',
    	// 获取报修类别和报修评价数据
    	getRepairCategory: 'api-rental/repairAnalysis/getRepairCategory',
    //投融资、技术咨询接口
    //chenhao
    getHumanRec:'api-oa/human-resource/recruitStatistics',//招聘信息
    getHumanTra:'api-oa/human-resource/trainStatistics',//培训信息
    personCount:'api-oa/human-resource/personCount',//员工人数统计
    faCategory:'api-oa/oa-analysis/fixedAssetsCategory',//固定资产分类
    faCount:'api-oa/oa-analysis/fixedAssetsCount',//固定资产统计
    faDistribute:'api-oa/oa-analysis/fixedAssetsDistribute',//固定资产分布
    officesStatistics:'api-oa/oa-analysis/officesStatistics',//办公用品总数
    officesUse:'api-oa/oa-analysis/officesUse',//办公用品使用情况
    officesuppliesCategory:'api-oa/oa-analysis/officesuppliesCategory',//办公用品分类

    getTechnology: 'api-oa/idea-investmen-count/getTechnology',             //创意空间
    getInvestment: 'api-oa/idea-investmen-count/getInvestmenCount',         //投资领域
    getpublishCount: 'api-oa/idea-investmen-count/getpublishCount',         //技术咨询
    demandPush: 'api-oa/idea-investmen-count/demandPush',                   //发布统计需求信息
    serviceStatistics: 'api-oa/idea-investmen-count/serviceStatistics',     //服务纵包圆环图
    serviceDemand: 'api-oa/idea-investmen-count/serviceDemand',             //服务纵包需求名称表格

    //信息交流系统展示
    getBaseInfo: 'api-oa/info-exchange/getBaseInfo',                        //基本信息
    cartAndUmbrella: 'api-oa/info-exchange/cartAndUmbrella',                //业务使用情况
    cooperative: 'api-oa/info-exchange/cooperative',                        //合作商家圆环图，轮播活动，合作商家数量
    futureAir:'api-oa/info-exchange/futureAir'                              //未来空气质量报告
}

export default apiUtil