# arguments-help

javascript中并没有重载这个概念,通用的做法一般是在函数内部去判断参数的个数和类型并以此进行不同的操作.

在许多开源项目中经常能看到大段的判断参数类型和参数个数的代码,个人觉得这些代码不规范的存在于函数的内部,极大的影响了代码的可读性,所以arguments-help就是为了减少大家的重复代码,提高JavaScript的开发效率和可读性而存在的.
仍有部分功能未开发完.
### arguments-help能够帮助你检查参数类型
```JavaScript
var Ah = require('arguments-help');
function wrappedFunction(){
  //参数类型可以是原生的Number,String,Array等,也可以是自定义的对象类型.同时还支持类型范围(也就是只要满足其中一种设定的类型即可),如果设定为undefined,或者没有传参将不会进行类型检查.
  var intArg = 0,
      strArg = '',
      funArg = Function,
      definedTypeArg = definedType,
      undefinedType,
      rangeType = [Number,String];
  var ah = Ah(arguments,{
        1:[[intArg],function(intArg){

        }],
        2:[[strArg,rangeType],function(strArg,rangeType){

        }]
      });
    }
```

### arguments-help能够根据参数的个数来执行不同的代码块.
```JavaScript
//第一次定义取的实例后,可以在之后追加定义
var ah = Ah(arguments,{
      1:[[intArg],function(intArg){

      }],
      2:[[strArg,rangeType],function(strArg,rangeType){

      }]
    });
  }

  ah({
    3:[[definedType,funArg],function(definedType,funArg,undefinedType){

    },alert]
  });
```
### arguments-help的报错方式.

默认是以浏览器端的console.error来提示类型检查错误,你可以设定你自己的提示错误方式.
```JavaScript
var Ah = Ah(arguments,{
    1:[[intArg],function(intArg){

    }],
    2:[[strArg,rangeType],function(strArg,rangeType){

    },alert]
  },alert);
\\or set in global
Ah.global({
  AlertType:alert
})
```
## en
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
  var ah = Ah(arguments,{
        1:[[intArg],function(intArg){

        }],
        2:[[strArg,rangeType],function(strArg,rangeType){

        }]
      });

//you can make report type errors in you own way ,just pass third argument.default is console.error().for example:
//   var Ah = Ah(arguments,{
//       1:[[intArg],function(intArg){
//   
//       }],
//       2:[[strArg,rangeType],function(strArg,rangeType){
//   
//       }]
//     },alert);
// or set in global
//   Ah.global({
//     AlertType:alert
//   })

      ah({
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
