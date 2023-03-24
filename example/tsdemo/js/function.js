"use strict";
var _this = this;
// 在js中 定义函数
{
    // 普通函数
    function Sum(a, b) {
        return a + b;
    }
    ;
    // 匿名函数
    var addDom = function () {
        return '<h1>dom</h1>';
    };
    // 立即执行函数
    (function (self) {
        console.log(self);
    }(this));
}
;
// 在ts中定义函数
{
    // 函数返回类型
    function Show() {
        // return 1024;  // 返回类型错误
        return 'Hello Worald!';
    }
    ;
    console.log(Show());
    // 函数没有返回类型
    function Noet() {
        //    throw "我是一个没有返回类型的函数！";
        //    throw new Error("我是一个没有返回类型的函数！");
        console.log('我是一个没有返回类型的函数 void！');
    }
    ;
    Noet();
}
;
// ts中定义函数传参
{
    // 函数传参【参数类型统一】
    function Run(a, b) {
        // return 'Hello Worald!'; // 返回类型错误
        return a + b;
    }
    ;
    console.log(Run(100, 200));
    // 函数传参【参数类型混合】
    function Push(a, b) {
        return "\u6211\u53EB\uFF1A" + a + "\uFF0C\u4ECA\u5E74\uFF1A" + b + "\u5C81\uFF01";
    }
    ;
    console.log(Push('沐枫', 28));
    console.log(Push(9527, 32)); // 传递参数类型错误
    // 函数【?可选参数】（可传可不传）在函数参数中后加上? 表示该参数为可选参数，
    // 注：？可选参数 必须加从右向左加，（也就是从最后一个开开始加）
    function Pull(a, b) {
        return b ? "\u6211\u53EB\uFF1A" + a + "\uFF0C\u4ECA\u5E74\uFF1A" + b + "\u5C81\uFF01" : "\u6211\u53EB\uFF1A" + a + "\uFF0C\u5E74\u9F84\uFF1A\u672A\u77E5\uFF01";
    }
    ;
    console.log(Pull('小英', 28));
    console.log(Pull('小明')); // 第2个参数可以不用传
    // 函数【默认参数】
    function Add(a, b) {
        if (a === void 0) { a = '佚名'; }
        if (b === void 0) { b = 24; }
        return "\u6211\u53EB\uFF1A" + a + "\uFF0C\u4ECA\u5E74\uFF1A" + b + "\u5C81\uFF01";
    }
    ;
    console.log(Add('小强', 12));
    console.log(Add()); // 不传参数时，默认为佚名 和 24 
    // 函数【...剩余参数】
    function Computer1(a, b, c, d) {
        if (a === void 0) { a = 0; }
        return a + b + c + d;
    }
    ;
    console.log(Computer1(1, 2, 3, 4)); // 这里最多只能传4个参数
    // 注：...剩余参数 是一个数组！
    function Computer2() {
        var num = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            num[_i] = arguments[_i];
        }
        var temp = 0;
        num.forEach(function (o, i) {
            temp += o;
        });
        return temp;
    }
    ;
    console.log(Computer2(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 这里随别传
    // 注：还可以混合：参数1 参数2 ...剩余参数 一起使用！
    // ...剩余参数 必须放在最后面
    function Computer3(a, b) {
        var num = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            num[_i - 2] = arguments[_i];
        }
        var temp = a + b;
        num.forEach(function (o, i) {
            temp += o;
        });
        return temp;
    }
    ;
    console.log(Computer3(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 这里随别传
}
;
// ts函数重载
{
    function fun(par) {
        if ('string' === typeof par) {
            return "\u6211\u7684\u59D3\u540D\uFF1A" + par;
        }
        else {
            return "\u6211\u7684\u5E74\u9F84\uFF1A" + par;
        }
        ;
    }
    ;
    console.log(fun('张三'));
    console.log(fun(20));
    console.log(fun(true)); // 类型错误
}
;
// 箭头函数 注：箭头函数的this 指向当前上下文作用域！
{
    function mupiao() {
        var _this = this;
        setTimeout(function () {
            console.log(_this);
        }, 1000);
    }
    ;
    mupiao();
    setTimeout(function () {
        console.log(this);
    }, 1000);
    setTimeout(function () {
        console.log(_this);
    }, 1000);
}
;
