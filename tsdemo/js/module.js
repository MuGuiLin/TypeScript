"use strict";
/**
 * 什么是模块：
 *      在TS中，模块可分为两类：
 *          1、内部模块（又叫命名空间）
 *          2、外部模块（简称模块）：模块在自身的作用域中执行，而是在全局作用域中，它是一个独立的文件。
 *
 * 实际作用：
 *      1、在工作中可以把一些公共的功能单独抽离成一个独立文件作为一个模块。
 *      2、模块里的变量、函数、类等 默认都是私有的，外部是不能访问的。
 *      3、要在外部访问里面的数据如变量(属性)、函数(方法)、类等等，就要通过export向外一一暴露，并在引用的地方通过import来引入模块。
 *
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 引入模块：import from 
// 引入方式1：默认引用【注：在模块中暴露 只能有一个export defaule，在引用 import时，接收变量可任意起名】
console.log('\n\n\n 引入方式1：默认引用【注：在模块中暴露 只能有一个export defaule，，在引用 import时，接收变量可任意起名】');
var export_test_1 = __importDefault(require("./modules/export-test"));
console.log(export_test_1.default);
// default 默认引用函数
// console.log(mupiao(12, 33));
// default 默认类
console.log(new export_test_1.default().Max(100, 200));
// 引入方式2：用哪个就引哪个【注：{}中的变量名，一定要和模块中暴露的(变量名，函数名，类名等)一样哦，如果太长或有重名，可以用 as 来起别名】
console.log('\n\n\n 引入方式2：用哪个就引哪个【注：{}中的变量名，一定要和模块中暴露的(变量名，函数名，类名等)一样哦，如果太长或有重名，可以用 as 来起别名】');
var export_test_2 = require("./modules/export-test");
// 这里的name === user，name 就是user的别名
console.log(export_test_2.user, export_test_2.age, export_test_2.job);
export_test_2.hobby();
// 引入方式3：把模块暴露出来的数据，全部赋到一个变量对象上，通过 变量对象.xxx去访问或调用
console.log('\n\n\n 引入方式3：把模块暴露出来的数据，全部赋到一个变量对象上，通过 变量对象.xxx去访问或调用');
var mu = __importStar(require("./modules/export-test"));
console.log(mu);
mu.hobby();
// default 默认引用函数
// console.log(mu.default(12, 33));
// default 默认类
console.log(new mu.default().Max(24, 12));
