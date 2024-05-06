Java.perform(function(){
    var Pinner = Java.use("classname");
    Pinner.a.overload('java.lang.String', '[Ljava.lang.String;').implementation = function(a, b)
    {
        console.log("Bypassing OKHTTP pinning " + a);
        return this;
    }
});
