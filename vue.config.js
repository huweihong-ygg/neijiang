module.exports = {
    //基本路径
    publicPath:"./",
    //构建时的输出目录
    outputDir:"dist",
    //放置静态资源的目录
    assetsDir:"static_qd",
   //html的输出路径
   indexPath:"index.html",
   devServer: {
    port: '',
    proxy: {
        '/apis': {
            target: 'https://pea.cdls666.com/pea-api',  // target host
            ws: true,  // proxy websockets
            changeOrigin: true,  // needed for virtual hosted sites
            pathRewrite: {
                '^/apis': ''  // rewrite path
            }
        },
    }
},
    lintOnSave: false
};