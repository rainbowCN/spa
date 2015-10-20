/**
 * Parse all hash parameters and provide the accessor of parameter
 * 
 * @author James.Yu <yuzhenzhou@imxiaomai.com>
 * @update 2015-07-27
 */



function DirectorJS(){

    this.initialize();

}

DirectorJS.prototype = {

    content: null,

    indexPage: null,

    collegePage: null,

    historyPage: null,

    initialize: function(){

        this.content = $("#app");

        // 暂未使用, 扩展2级
        this.indexPage = $("#mod_index");

        this.initializeMain();

        this.thisChangeHash();

    },

    initializeMain: function(){
        console.log("initialized");
    },


    thisChangeHash: function(){

        var self = this;

        var index = new Index();
        index.display();

        window.onhashchange = function(){
            
            var url = window.location.hash;

            console.log("onhashchange", url);

            //var parser = new hashParser(url);

            //var module = parser.get("module");

            var module =  url.substr(1);

            if(!module) {
                var index = new Index();
                index.display();
            } else {
                // 加载类目下数据
                var a = new A();
                a.display();
            }
        }
    }
}
