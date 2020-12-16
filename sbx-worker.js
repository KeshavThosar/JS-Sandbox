self.addEventListener("message", function(e){
    var code = e.data.code;
    var context = e.data.context;
    for(var i in context){
        self[i] = new Object(context[i]);
    }
    var data, err;
    try{
        var f = new Function(code);
        data = f();
    }catch(error){
        err = error.message;
    }
    self.postMessage({err, data})
})
