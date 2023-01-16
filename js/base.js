var namedModule;
// serve per importare e crere query
requirejs.config({
    enforceDefine: true,
    paths: {
        jquery: 'node_modules/jquery/dist/jquery.min'
    }
});



require(['require', 'jquery'], function (require) {
    namedModule = require('jquery');
});
