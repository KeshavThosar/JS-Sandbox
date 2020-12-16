function JSSandbox(context, callback){
    var worker = new Worker('sbx-worker.js');
    worker.addEventListener('message', function(e) {
        var data = e.data.data;
        var err = e.data.err;
        if(err) throw err;
        callback(data);
    });   
    return {
        execute: function(code){
            worker.postMessage({code, context});
        }
    }
};
