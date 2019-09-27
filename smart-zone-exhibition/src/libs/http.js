import axios from 'axios'

const baseUrl = (function () {
    switch (process.env.NODE_ENV != 'production' ? 'proxy' : 'production') {// 代理线上数据or生产
        case 'proxy':
            return 'http://smart-zone.51yuqian.net:8010/api/';
        case 'production':
            return 'http://smart-zone.51yuqian.net:8010/api/';
        default:
            throw new Error('请检查api前缀');
    }
}());

axios.defaults.baseURL = baseUrl;

const HttpFn = {
    install: function(Vue) {
        Vue.prototype.get = function(url, data, success) {
            axios({
                url: url,
                params: data
            }).then((res) => {
                if (res.status == 200) {
                    var resultMap = res.data;
                    success(resultMap)
                } else {
                    console.log(res.statusText,'error')
                }
            }).catch((error) => {})
        };
        Vue.prototype.post = function(url, data, success) {
            axios.post(url, data).then((res) => {
                if (res.status == 200) {
                    var resultMap = res.data;
                    success(resultMap)
                } else {
                    console.log(res.statusText,'error')
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        Vue.prototype.all = (urlMaps)=>{
            let https = [];
            urlMaps.forEach(item => {
                if(!item.data) {
                    https.push(axios.get(item.url));
                } else {
                    https.push(axios.post(item.url,item.data));
                }
            });
            return axios.all(https);
        }
    }
}

export default HttpFn;
