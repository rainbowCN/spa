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