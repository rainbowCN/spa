/**
 * Parse all hash parameters and provide the accessor of parameter
 * 
 * @author James.Yu <yuzhenzhou@imxiaomai.com>
 * @update 2015-07-27
 */

function hashParser(hash){

    this.hash = hash;
    this.initialize();
    this.parse();

}

hashParser.prototype = {

    _contents: {},
    _handlers: [],

    initialize: function(){
        this.parse();
        this.addHandler(function(a, b, c){});
    },

    addHandler: function(handler){
        if(typeof handler !== 'function')
            return;
    },

    parse: function(){
        if(this.hash != null){
            var pureHash = this.hash.substr(1);
            var pairs = pureHash.split('&');
            for(var i = 0; i < pairs.length; i++){
                var pair = pairs[i];
                var parts = pair.split('=');
                if(parts.length>1){
                    this._contents[parts[0]] = parts[1];
                    this[parts[0]] = parts[1];
                }else{
                    this._contents[parts[0]] = true;
                    this[parts[0]] = true;
                }
            }
        }
    },

    get: function(key){
        if(this._contents[key])
            return this._contents[key];
        return null;
    }
};

function MainScreen(){

    this.initialize();

}

MainScreen.prototype = {

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
