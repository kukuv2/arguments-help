var assert = require('assert');
var Ah     = require('../index');
var intArg = 0, strArg = '', funArg = Function, undefinedType, rangeType = [Number, String];
describe('检查参数类型和处理可选参数', function () {
    it('当只有一个参数,并且参数为Number时', function () {
        function wrappedFunction() {
            var ah     = Ah(arguments, {
                1: [[intArg], function (intArg) {
                    assert(1===arguments.length);
                    assert(toString.call(arguments[0]) === '[object Number]')

                }]
            });
        }
        wrappedFunction(1)
    });
    it('当只有两个及以上参数', function () {
        function wrappedFunction() {
            var ah     = Ah(arguments, {
                1:[[intArg], function () {
                    assert(false);
                }],
                2: [[intArg], function (intArg,str) {
                    assert(2===arguments.length);
                    assert(toString.call(arguments[0]) === '[object Number]');
                    assert(toString.call(arguments[1]) === '[object String]')
                }]
            });
        }
        wrappedFunction(1,'str')
    });
});