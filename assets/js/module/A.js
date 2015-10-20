
/*************************************************

Version:
Create: 06-05-15
Update: 
Description: 首页-运营-类目SkuList
Reference: 
    fn:loadSkuDetail
    tpl:tplCategoriesSkuList
Author: James.Yu

*************************************************/


function A() {
    this.initialize();
};

A.prototype = {

    _container: null,
    _data: null,
    _tmpl: null,

    initialize: function() {        
        this._container = $("#app");
    },

    _initData: function() {},

    _bindEvent: function() {
        $(".canBack").click(function(){
            window.history.back(-1);
        }); 
    },

    display: function() {

        var self = this;

        var dataHTML = tmpl("tplModuleA", {});

        this._container.html(dataHTML);

        var callback = function() {
            self._bindEvent(); 
            console.log("call callbak");
        };

        $( ".container" ).effect( "slide", {"direction":"right"}, 400, callback );

    }
}

