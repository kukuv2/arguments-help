# arguments-help
javascript function arguments help module

```javascript
// arguments-help can check arguments's type and handle option arguments
var Ah = require('arguments-help');
function wrappedFunction(){
  var intArg = 0,
      strArg = '',
      funArg = Function,
      definedTypeArg = definedType,
      undefinedType,
      rangeType = [Number,String];
  var Ah = Ah(arguments,{
        1:[[intArg],function(intArg){

        }],
        2:[[strArg,rangeType],function(strArg,rangeType){

        }]
      });

//you can make report type errors in you own way ,just pass third argument.default is console.error().for example:
  // var Ah = Ah(arguments,{
  //     1:[[intArg],function(intArg){
  //
  //     }],
  //     2:[[strArg,rangeType],function(strArg,rangeType){
  //
  //     }]
  //   },alert);
// or set in global
  // Ah.global({
  //   AlertType:alert
  // })

      Ah({
        3:[[definedType,funArg],function(definedType,funArg,undefinedType){

        },alert]
      });

//or you can don't check arguments type ,just handle option arguments
    var Ah = Ah(arguments,{
      1:function(arg1){

      },
      2:[function(arg1,arg2){

      },alert]

    })

}
```
