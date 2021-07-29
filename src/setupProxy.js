const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    
    createProxyMiddleware(['/getDataDesign','/getDataFontend','/AllBackEnd','/Lotrinh','/BackEndNodeJsReactJs','/BackEndPHP','/BackEndWordPress','/All'],{
      target: 'https://projectfedu.herokuapp.com',
      changeOrigin: true,
    })
  );
};
