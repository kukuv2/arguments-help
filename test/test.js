var assert = require('assert');
var Ah     = require('../index');
describe('arguments-help', function () {
    it('检查参数类型和处理可选参数', function () {
        function wrappedFunction() {
            var intArg = 0, strArg = '', funArg = Function, undefinedType, rangeType = [Number, String];
            var ah     = Ah(arguments, {
                1: [[intArg], function (intArg) {
                    assert(1===arguments.length);
                    assert(toString.call(arguments[0]) === '[object Number]')

                }]
            });
        }
        wrappedFunction(1)

    });
});