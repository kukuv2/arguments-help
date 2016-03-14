(function() {

    // Baseline setup
    // --------------

    // Establish the root object, `window` in the browser, or `exports` on the server.
    var root = this;

    // Save the previous value of the `Ah` variable.
    var previousUnderscore = root.Ah;

    function extend(obj,source){
        for(var key in source){
            obj[key]= source[key]
        }
        return obj;
    }

    function isArray(arr){
        return toString.call(arr) === '[object Array]'
    }


    //TODO 生成错误信息
    function typeEqual(type,arg,executeReportFunction){
        if(arg === undefined || arg === null){
            if(arg === type){
                return true;
            }else{
                 executeReportFunction('type error');
            }
        }else if(toString.call(arg) !== '[object Object]'){
            if(toString.call(type) === toString.call(arg)){
                return true;
            }else {
                executeReportFunction('type error');
            }
        }else{
            if(arg instanceof type){
                return true;
            }else {
                executeReportFunction('type error');
            }
        }

    }

    function checkUnitType(argType, arg, executeReportFunction) {

        if(isArray(argType)){
            argType.some(function (item) {
                return typeEqual(item,arg,executeReportFunction);
            })
        }else{
            return typeEqual(argType,arg,executeReportFunction)
        }
    }


    function checkType(argsType,args,executeReportFunction){
        if(!isArray(argsType)){
            argsType=[argsType];
        }
        for(var i = 0;i<args.length;i++){
            if(!checkUnitType(argsType[i],args[i],executeReportFunction)){
                return false;
            }
        }
    }



    var Ah = function(args,overLoadings,reportFunction) {
        return new AhInstance.apply(null,arguments)(overLoadings);

    };

    Ah.AlertType = console.error;

    function AhInstance(args,overLoading,reportFunction){
        var thiz = this;
        thiz.args = args;
        thiz.overLoading = overLoading;
        thiz.reportFunction = reportFunction;
        return function execute (overLoading,reportFunction) {
            if(reportFunction){
                thiz.reportFunction = reportFunction
            }
            if(overLoading){
                overLoading = extend(thiz.overLoading,overLoading);
            }

            var argsLength = thiz.args.length;
            var executeItem = overLoading[argsLength];
            if(executeItem){
                if(!isArray(executeItem)){
                    executeItem.apply(null,thiz.args);
                }else{
                    var executeReportFunction  = executeItem[3] ? executeItem[3] : thiz.reportFunction ? thiz.reportFunction : Ah.AlertType;
                    if(checkType(executeItem[0],thiz.args,executeReportFunction)){
                        executeItem.apply(null,thiz.args)
                    }
                }
            }



            return execute

        }
    }

    AhInstance.

    Ah.global = function (setting) {
      for(var i in setting){
        Ah[i]=setting[i];
      }
    };

    // Export the arguments-help object for **Node.js**, with
    // backwards-compatibility for the old `require()` API. If we're in
    // the browser, add `Ah` as a global object.
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = Ah;
        }
        exports.Ah = Ah;
    } else {
        root.Ah = Ah;
    }


    if (typeof define === 'function' && define.amd) {
        define('arguments-help', [], function() {
            return Ah;
        });
    }
}.call(this));
