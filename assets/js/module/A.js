
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

    exchange: function() {

    },


    display: function() {

        var self = this;

        var options = {};

        var callback = function() {

            console.log("call callbak");

            //var dataHTML = tmpl("tplModuleA", {});

            //self._container.html("").html(dataHTML);

            //self._bindEvent();            
        };

        $( "#app" ).effect( "bind", options, 1000, callback );

    }
}

