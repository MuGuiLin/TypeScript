"use strict";
/**
 * ts中的接口:interface (在现实生活中，接口也是很常见，如各种电子设备的连接，都有各自的接口类型和要求标准，而在ts中接口也是用来定义规范、定义标准的)
 *      主要用于在面向对象编程中，定义了行为和动作的规范，在程序设计里面，接口起到了一种限制和规范的作用
 *      接口不关心类 或 方法内部状态数据，也不关心这里类 或 方法的实现细节。
 *      在ts中的接口类似于java中的接口，同时ts还增加了更灵活的接口类型，如：属性、函数、类，可索引等。
 *      在ts中用 interface 关键字来定义接口
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
console.log('\n\n--------------------- 常规参数约束 ----------------------\n\n');
{
    //对传入的参数进行约束
    function printName(name) {
        console.log('传入的参数只能是一个字符串');
    }
    ;
    // printName(true);    // 错误
    // printName({});      // 错误
    // printName(123);     // 错误
    printName('123'); // 正确
    // 对函数参数 进行json约束
    function pringJson(obj) {
        console.log('传入的参数只能是一个json，并且key叫name', obj);
    }
    ;
    // pringJson('123');           // 错误
    // pringJson({nul: '123'});    // 错误
    pringJson({ name: '123' }); // 正确
}
console.log('\n\n------------------ interface 参数约束 -------------------\n\n');
{
    ;
    // 约束传入的对象 必须包含：firstName, secondName
    function printName(name) {
        console.log("\u59D3\uFF1A" + name.firstName + "\uFF0C\u540D\uFF1A" + name.secondName);
    }
    ;
    // printName(123);                     // 错误
    // printName('123');                   // 错误
    // printName({});                      // 错误
    // printName({key: 'value'});          // 错误
    // printName({firstName: '穆'});       // 错误
    printName({ firstName: '穆', secondName: '飘' }); // 正确
    // 约束传入的对象 必须包含：firstName, secondName
    function printInfo(info) {
        console.log("\u59D3\uFF1A" + info.firstName + "\uFF0C\u540D\uFF1A" + info.secondName + ", \u5E74\u9F84\uFF1A" + info.age);
    }
    ;
    var obj = {
        firstName: '张',
        secondName: '三',
        age: 28
    };
    printInfo(obj);
}
;
console.log('\n\n-------------- interface 参数可选 ? 约束 ----------------\n\n');
{
    ;
    // 约束传入的对象 必须包含：firstName；而secondName参数可不用传
    function printName(name) {
        console.log("\u59D3\uFF1A" + name.firstName + "\uFF0C\u540D\uFF1A" + name.secondName);
    }
    ;
    printName({ firstName: '穆' }); // 正确
    printName({ firstName: '穆', secondName: '飘' }); // 正确
}
;
console.log('\n\n---------------- interface 约束 ajax 实例 ---------------\n\n');
{
    ;
    function jQuery(el) {
        this.dom = document.querySelector(el);
        this.css = function (css, val) {
            this.dom.style[css] = val;
            return this;
        };
        this.html = function (html) {
            this.dom.innerHTML = html;
            return this;
        };
        this.text = function (text) {
            this.dom.innerText = text;
            return this;
        };
    }
    ;
    function $(el) {
        return new jQuery(el);
    }
    ;
    $.ajax = function (par) {
        var xhr = new XMLHttpRequest();
        xhr.open(par.type, par.url, true);
        xhr.send(par.data);
        xhr.onload = function (res) {
            if (4 == xhr.readyState && 200 == xhr.status) {
                par.success('JSON' == par.dataType ? JSON.parse(xhr.responseText) : xhr.responseText);
            }
            ;
        };
        // xhr.onreadystatechange = function(res) {
        //     if(4 == xhr.readyState && 200 == xhr.status) {
        //         par.success('JSON' == par.dataType ? JSON.parse(xhr.responseText) : xhr.responseText);
        //     };
        // };
    };
    $.ajax({
        type: 'GET',
        // url: 'https://www.baidu.com/s?word=123',
        url: 'http://a.itying.com/api/productlist',
        data: 'TS interface',
        dataType: 'JSON',
        success: function (data) {
            console.error('OK API请求成功：', data);
            $('h1').css('color', 'red');
            $('code').html(JSON.stringify(data)).css('color', 'blue');
        }
    });
}
;
console.log('\n\n---------- interface 函数类型接口 约束 MD5 实例 ----------\n\n');
{
    ;
    // md5方法 需要满足上面md5par的要求
    var md5 = function (key, value) {
        return key + value + Date.now();
    };
    console.log(md5('mu', 'piao'));
    var hash = function (key, value) {
        return key + value + '：Hash - ' + Date.now();
    };
    console.log(hash('zhang', 'san'));
}
;
console.log('\n\n--------- interface 可索引类型接口 约束数组和对象 --------\n\n');
{
    // ts数组的定义方式
    var arr_1 = [123, 1024, 888];
    var arr2 = ['a', 'b', 'c'];
    ;
    ;
    // var uArr: UserArr = [101, 102]; // 错误
    var uArr = ['qmjy-001', 'qmjy-002', 'qmjy-003']; //正确
    console.log(uArr[0]);
    var uArrAll = [1, 'qmjy-001', 102, 'qmjy-002', 'qmjy-003']; //正确
    console.log(uArrAll[3]);
    ;
    // var uObj: UserObj = {name: 123};   //错误
    var uObj = { name: '沐枫' }; //正确
    console.log(uObj);
}
;
console.log('\n\n------ interface  implements 类 的类型接口 和抽象类有点相似 --------\n\n');
{
    ;
    // 用 implements 关键字来实现 接口约束的 类
    var Dog = /** @class */ (function () {
        function Dog(name, age) {
            // super()
            this.name = name;
            this.age = age;
        }
        ;
        Dog.prototype.Eat = function (par) {
            console.log("\u6211\u662F" + this.name + "\uFF0C\u4ECA\u5E74" + this.age + "\u5C81\uFF0C\u6211\u559C\u6B22\u5403" + par);
        };
        ;
        return Dog;
    }());
    ;
    var d = new Dog('小黑', 2);
    d.Eat('骨头');
}
;
console.log('\n\n--------- interface 接口的扩展：接口可以继承接口 ---------\n\n');
{
    ;
    ;
    // 程序员 类
    var Programmer = /** @class */ (function () {
        /*
        public codeAge: number;

        constructor(age: number) {
            this.codeAge = age;
        };
        */
        function Programmer(codeAge) {
            this.codeAge = codeAge;
            // 这里是对上面代码的简写
            // 相当于直接声明了一个codeAge属性，实例化时必须指定codeAge属性，
            // 注意此处访问控制符public不能省略
        }
        ;
        Programmer.prototype.Coding = function () {
            console.log('我有' + this.codeAge + '年的编码年限啦！');
        };
        return Programmer;
    }());
    // 创建Web类，继承Programmer类 并实现Person接口
    var Web = /** @class */ (function (_super) {
        __extends(Web, _super);
        function Web(name, sex, age, sodeAge) {
            var _this = _super.call(this, sodeAge) || this;
            console.log(_this = _super.call(this, sodeAge) || this);
            _this.name = name;
            _this.age = age;
            _this.sex = sex;
            return _this;
        }
        ;
        /**
         * 吃的方法 是Animal接口的
         */
        Web.prototype.Eat = function (text) {
            console.log("\u6211\u559C\u6B22\u5403" + text);
            // 调用父类的方法
            _super.prototype.Coding.call(this);
            this.Coding();
        };
        ;
        /**
         * 工作的方法 是Person接口的
         */
        Web.prototype.Work = function (text) {
            console.log("\u6211\u53EB\uFF1A" + this.name + "\uFF0C\u6027\u522B\uFF1A" + this.sex + "\uFF0C\u4ECA\u5E74\uFF1A" + this.age + "\u5C81\uFF0C\u5DE5\u4F5C\uFF1A" + text + "\uFF01");
        };
        ;
        return Web;
    }(Programmer));
    ;
    var w = new Web('小李', '女', 24, 5);
    w.Eat('饭、面包、小吃');
    w.Work('Web全栈开发');
    w.Coding();
}
;
