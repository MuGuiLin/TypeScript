"use strict";
/**
 * 命名空间 NameSpace模块化【就是把命名空间当作模块导出】
 *
 * 命名空间 NameSpace：
 *      在代码量较大的情况下，为了避免各种变量相冲突，可将相似功能的类、函数、接口、变量等放了命名空间中。
 *      和Java中的包、.Net中的命名空间一样，TS中的命名空间可以将代码包裹起来（注：默认在命名空间中的都是私有的，外部不能访问），如对外 用export暴露需要在外部访问的数据对象。
 *
 *      注：默认在命名空间中的都是私有的，外部不能访问，如外部要访问，就在要访问的类、函数、接口、变量等前面加上 export 关键字，外就可访问了，
 *
 * 命名空间 和 模块的区别：
 *      命名空间：内部模块，主要用于组织代码，避免命名冲突（在不同的命名空间中，可以有相同所有的变量名，类、函数、接口等，它们不会冲突，因为它们虽然相同，但是不是同一个命名空间！）。
 *      模    块：TS外部模块的简称，侧重代码的复用性，注：（在一个模块中可以包含1个或多个命名空间）。
 *
 * TS声明命名空间的关键字：namespace
 *
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.iDitor = exports.iHub = void 0;
// iHub的命名空间 向外部模块 暴露 命名空间
var iHub;
(function (iHub) {
    ;
    iHub.PI = Date.now();
    var Ihub = /** @class */ (function () {
        function Ihub() {
            this.__URL__ = 'https://ihub.smgtech.net';
            this.__WSS__ = 'http://10.1.2.68:2125';
        }
        ;
        Ihub.prototype.GetPar = function () {
            var search = window.location.search;
            if (search) {
                return search;
            }
            else {
                throw new Error("对不起：URL地址栏 网址?后面没有参数！");
            }
        };
        ;
        Ihub.prototype.GteUrl = function () {
            return this.__URL__;
        };
        ;
        Ihub.prototype.Show = function (par) {
            window.alert(par);
        };
        ;
        Ihub.index = 0;
        Ihub.SumIndex = function () {
            console.log(++Ihub.index);
            return Ihub.index;
        };
        return Ihub;
    }());
    iHub.Ihub = Ihub;
    ;
    var Alert = /** @class */ (function () {
        function Alert() {
        }
        ;
        Alert.prototype.show = function (par) {
            alert(par);
        };
        ;
        return Alert;
    }());
    ;
    var UpImage = /** @class */ (function (_super) {
        __extends(UpImage, _super);
        function UpImage() {
            var _this = _super.call(this) || this;
            // private xhr: any = new XMLHttpRequest();
            _this.xhr = {};
            _this.__URL__ = 'https://fddp.smgtech.net/index.php?r=site/doutoutiao';
            _this.GteUrl();
            return _this;
        }
        ;
        UpImage.prototype.GteUrl = function () {
            console.log(_super.prototype.GteUrl);
            console.log('调用父类同名方法：', _super.prototype.GteUrl.call(this));
            console.log('自己的属性：', this.__URL__);
            return this.__URL__;
        };
        UpImage.prototype.Image = function () {
            var _this = this;
            this.xhr.open('GET', this.__URL__, true);
            this.xhr.send();
            this.xhr.onloand = function () { };
            this.xhr.onreadystatechange = function () {
                if (200 === _this.xhr.status && 4 == _this.xhr.readyState) {
                    console.log(JSON.parse(_this.xhr.responseText));
                }
            };
        };
        return UpImage;
    }(Ihub));
    iHub.UpImage = UpImage;
})(iHub = exports.iHub || (exports.iHub = {}));
;
// 访问命名空间中的数据
// 实例化类
var I = new iHub.Ihub();
// 实例化类
var I2 = new iHub.Ihub();
// 访问实例的属性
console.log(I.__WSS__);
// 访问类的静态属性
console.log(iHub.Ihub.index);
// 调用类的静态方法
iHub.Ihub.SumIndex();
var Up = new iHub.UpImage();
// 调用实例的方法
Up.Image();
// iDitor的命名空间
var iDitor;
(function (iDitor) {
    ;
    iDitor.PI = Math.PI;
    var Iditor = /** @class */ (function () {
        function Iditor() {
            this.__URL__ = 'https://iDitor.smgtech.net';
            this.__WSS__ = 'http://91.0.2.29:2120';
        }
        ;
        Iditor.prototype.GetPar = function () {
            var search = window.location.search;
            if (search) {
                return search;
            }
            else {
                throw new Error("对不起：URL地址栏 网址?后面没有参数！");
            }
        };
        ;
        Iditor.prototype.GteUrl = function () {
            return this.__URL__;
        };
        ;
        Iditor.prototype.Show = function (par) {
            window.alert(par);
        };
        ;
        Iditor.index = 0;
        Iditor.SumIndex = function () {
            return Iditor.index++;
        };
        return Iditor;
    }());
    iDitor.Iditor = Iditor;
    ;
    var Alert = /** @class */ (function (_super) {
        __extends(Alert, _super);
        function Alert() {
            return _super.call(this) || this;
        }
        ;
        Alert.prototype.show = function (par) {
            alert(par);
        };
        ;
        return Alert;
    }(Iditor));
    ;
})(iDitor || (iDitor = {}));
exports.iDitor = iDitor;
;
// 实例化类
var D = new iDitor.Iditor();
// 调用实例的方法
console.log(D.GteUrl());
// 访问命名空间中的变量
console.log('iHub名空间中的变量', iHub.PI);
console.log('iDitor名空间中的变量', iDitor.PI);
