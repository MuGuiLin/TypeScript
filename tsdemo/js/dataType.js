"use strict";
/**
 * TS中的数据类型：10种，【注：tuple: 元组类型（属于数组）】
 *  string: 字符串类型,
 *  number: 数字类型,
 *  boolean: 布尔类型,
 *  array: 数组类型,
 *  tuple: 元组类型（属于数组）
 *  enum: 枚举类型,
 *  any: 任意类型,
 *  null: 空类型,
 *  undifined: 未定义类型,
 *  void: 没有类型,
 *  never: 其他类型
 */
console.log('Hello TypeScript');
var PI = Math.PI;
var hello = '你好啊，TS - ' + PI;
alert(hello);
// TypeScript中的数据类型
// 在TS中为使编写的代码更加规范、更有利于维护，故增加了数据类型校验
// 1、字符串类型 String
var str = 'muguilin' || "mupiao" || "mulin";
// str = 123; 错误的写法 （在ES5中是正确的），（但是在TS中这是错误的赋值，因为不所赋的值不是声明时的数据类型）
// str = {}; 错误的写法
// str = []; 错误的写法
// str = false; 错误的写法
str = '沐枫';
console.log(str);
// 2、数字类型 Number错误的写法 
var num = 1024;
// num = 'str'; 错误的写法
// num = true; 错误的写法
num = 2048;
console.log(num);
// 3、布尔类型 Boolean
var flag = true;
// flag = 666; 
flag = false;
console.log(flag);
// 4、数组类型 Array
var numArr = [123, 456, 888];
numArr[1] = 666;
// numArr[1] = '666'; 错误的写法
var strArr = ['123', '456', '888'];
strArr[1] = '666';
// strArr[1] = 666; 错误的写法
// 任意类型的数组
var arr = [123, '666', false, true, undefined, null, [1, 2, 3]];
console.log(arr);
// 5、元组类型 Tuple 它属性于 数组类型中的一种
var allArr = [123, '666', false];
// 6、枚举类型 Enum
/*
    语法：
        enum 枚举名 {标识符[=整数常数]，标识符[=整数常数] ...标识符[=整数常数]}

    注：默认下标：从0开始，如果没有给标识符赋值时，那标识符的值为对应所以的下标！
*/
{
    var state = void 0;
    (function (state) {
        state[state["success"] = 0] = "success";
        state["error"] = "\u5931\u8D25";
    })(state || (state = {}));
    ;
    var ok = state.success;
    var err = state.error;
    console.log(ok); // 0
    console.log(err); // 失败
    //   101， 102， 103
    var Color = void 0;
    (function (Color) {
        Color[Color["red"] = 0] = "red";
        Color[Color["orange"] = 1] = "orange";
        Color[Color["yellow"] = 2] = "yellow";
        Color[Color["green"] = 100] = "green";
        Color[Color["cyan"] = 101] = "cyan";
        Color[Color["blue"] = 102] = "blue";
        Color[Color["purple"] = 103] = "purple";
    })(Color || (Color = {}));
    ;
    console.log(Color.green, Color.purple);
    //注意：改变下标后，后面的下标都会被影响。
    var Err = void 0;
    (function (Err) {
        Err[Err["undefined"] = -1] = "undefined";
        Err[Err["null"] = -2] = "null";
        Err[Err["seuccess"] = 1] = "seuccess";
        Err["error"] = "\u9519\u8BEF";
    })(Err || (Err = {}));
    ;
    var n = Err.null;
    var e = Err.error;
    console.log(n, e); // -2, 0
}
// 7、任意类型 Any
var h1 = document.querySelector('#h1');
// let h1:Object = document.querySelector('#h1'); 在ts中没有Object类型
h1.style.color = 'blue'; // 由于，h1是一个对象，给它赋字符串就会报错
var h2 = document.querySelector('#h1'); // 所有在这里加上 any类型就不报错了
h2.style.background = 'black';
// 8、void类型 在ts中void表示没有任何类型，一般在定义方法的时候，而方法没有返回值时用！
// 在js中
function fun() {
    console.log('我是一个没有返回值的方法！');
}
;
fun();
// 在ts中
function fun2() {
    console.log('我是一个没有返回值的方法，我是void类型！我不属于任何类型');
}
;
fun2();
function fun3() {
    return 3 + 2 - 5 * 0;
}
;
console.log(fun3());
// 9、undefined
var num2;
console.log(num2); // 变量定义 但没赋值 就是undefined! 会报错
var num3;
console.log(num3); // undefined
var numRostr; // 可以是数字 或 字符 或 undefined 类型
console.log(numRostr);
numRostr = '我是字符串类型';
console.log(numRostr);
numRostr = 1024;
console.log(numRostr);
// numRostr:Array[number, string] = [1, 'str'];
// console.log(numRostr);
// 10、null 是一个数
var nu;
nu = null;
//null值的类型可能是：null 或 number 或 undefined
var nu2;
nu2 = 2048;
// 11、never类型 是其他类型，它包括 null 和 undefined 两种类型，代表从来都不会出现的值
var show;
show = (function () {
    throw new Error('抛出一个错误信息！');
})();
