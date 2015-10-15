
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
        this._container = $("#module");
    },

    _initData: function() {},

    _bindEvent: function() {
        $(".canBack").click(function(){
            window.history.back(-1);
        }); 
    },

    display: function() {
        var content = 
        '<div class="container" id="deliveryDetailPage"><header class="fixHeader"><div class="wrap_title"><i class="i_back canBack"></i><h2>物流状态更新</h2></div></header></div>';
        
        this._container.html(content);

        this._bindEvent();
    }
}

