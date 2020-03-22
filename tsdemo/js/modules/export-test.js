"use strict";
// export 导出，直接在变量、函数、类等 前面加上 export 就可以向外暴露、导出了!
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = '沐枫';
var age = 29;
exports.age = age;
var job = 'Web全栈工程师';
exports.job = job;
function hobby() {
    var text = '我是一个函数，我喜欢写程序！';
    console.log(text);
    return text;
}
exports.hobby = hobby;
;
;
var MyData = /** @class */ (function () {
    function MyData(name, pwd) {
        this.color = '#666';
        this.name = name;
        this.pwds = pwd;
    }
    ;
    MyData.prototype.getData = function (id) {
        // 实现接口定义的函数
        throw new Error("Method not implemented.");
    };
    ;
    MyData.prototype.Max = function (n1, n2) {
        return Math.max(n1, n2);
    };
    ;
    MyData.numIndex = function (par) {
        return [];
    };
    return MyData;
}());
;
// export default 默认导出 【注：default在模块文件中，只能有一个default默认导出】
exports.default = MyData;
// export default MyData;  //错误：一个模块不能具有多个默认导出。
// 另一种 export default 默认导出方式
// 直接默认导出 变量
// export default Math.PI;
// 直接默认导出 函数（函数名 Min 可选）
// export default function Min (n1:number, n2:number):number {
//     return Math.min(n1, n2);
// };
// 直接默认导出 类（类名 Max 可选）
// export default class Max {
//     constructor() {
//     };
//     Max(n1: number, n2: number) {
//         return Math.max(n1, n2);
//     };
// };
