"use strict";
{
    /**
     * 泛型：Generic
     *      在软件工程中，我们不仅要创建和定义好的API(接口)，同时还也要考虑可重用性(复用性)。
     *      组件不仅能够支持当前的数据类型，同时还能支持未来的、未知的数据类型，这样在做大型项目时，才能提供灵活的功能。
     *
     * 在C#、Java等这样的语言中，可以使用泛型来创建可重用的组件(一个组件可以支持多种类型的数据)，这样其他程序员就可以用自己的数据类型来使用组件了。
     *
     * 简单理解：泛型就是用来解决：类、接口、方法 的可复用(重用)性，以及对不特定的、未来的数据类型、参数等给于支持。
     */
    // 现在，有这样的一个功能，要求一个方法做到，传入的参数是什么类型，就返回什么类型。
    // 1、只能返回string类型的数据
    function getString(val) {
        return val;
    }
    ;
    getString(123); // 错误
    getString('123'); // 正确
    // 2、同时返回string类型 和number类型 (这样会代码冗余)
    function getString1(val) {
        return val;
    }
    ;
    function getNumber2(val) {
        return val;
    }
    ;
    // 3、可返回任意类型 (这样就相当于放弃了类型检测了)
    function getData(val) {
        return val;
    }
    ;
    getData(123); // 正确
    getData('123'); // 正确
    console.log('\n\n------------ 泛型方法(函数) 的定义 ------------\n\n');
    // 所以，这时候 泛型就可以很轻松的解决这个问题了
    // 泛型方法(函数)的定义：<T>
    console.log("\u8FD9\u91CC\u7528 <T> \u6765\u8868\u793A\u6CDB\u578B\uFF08\u6CE8\uFF1A\u8FD9\u4E2AT\u662F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u7684\uFF0C\u4F46\u4E00\u822C\u90FD\u7528T\u6765\u8868\u793A\u6CDB\u578B\uFF09");
    function getDatas(val) {
        // 这里就是 根据所传入的数据类型，返回对应的数据类型
        return val;
    }
    ;
    // 不指定返回类型
    getDatas(123); // 正确
    getDatas('123'); // 正确
    getDatas(true); // 正确
    getDatas({}); // 正确
    // 指返回类型
    getDatas(123); // 错误 参数据必须是字符串类型
    getDatas('123'); // 正确
    getDatas(123); // 正确 参数据必须是数字类型
}
;
console.log('\n\n---------------- 泛型类 的定义 ----------------\n\n');
{
    // 实现最小堆算法：要求支持返回数字，这里只能用普通的类来实现。
    var MinClass = /** @class */ (function () {
        function MinClass() {
            this.list = [];
        }
        ;
        // 返回堆数据
        MinClass.prototype.get = function () {
            return this.list;
        };
        // 添加堆数据
        MinClass.prototype.add = function (num) {
            this.list.push(num);
        };
        ;
        // 求最小堆数据
        MinClass.prototype.min = function () {
            var minNum = this.list[0];
            for (var i = 0; i < this.list.length; i++) {
                // 求最小数
                if (minNum > this.list[i]) {
                    minNum = this.list[i];
                }
                ;
            }
            ;
            return minNum;
        };
        ;
        return MinClass;
    }());
    ;
    var m = new MinClass();
    m.add(31);
    m.add(2.5);
    m.add(16);
    m.add(102);
    m.add(-1);
    m.add(75);
    console.log("\u5806\uFF1A" + m.get());
    console.log("\u6700\u5C0F\u6570\u636E\u662F\uFF1A" + m.min());
    // 创建泛型类：实现最小堆算法：要求需要同时支持返回数字 和 字符串(a - z) 两种数据类型，用泛型类来实现。
    var MinNumStr = /** @class */ (function () {
        function MinNumStr() {
            this.list = [];
        }
        ;
        // 返回堆数据
        MinNumStr.prototype.get = function () {
            return this.list;
        };
        ;
        // 添加堆数据
        MinNumStr.prototype.add = function (val) {
            this.list.push(val);
        };
        ;
        // 求最小堆数据
        MinNumStr.prototype.min = function () {
            var minNum = this.list[0];
            for (var i = 0; i < this.list.length; i++) {
                // 求最小数（注：如果是计算值是：a-z, 系统会以ASCII码来计算）
                if (minNum > this.list[i]) {
                    minNum = this.list[i];
                }
                ;
            }
            ;
            return minNum;
        };
        ;
        return MinNumStr;
    }());
    ;
    // 实例化泛型类：指定类型为number (这样MinNumStr类的T就是number了)
    var mn = new MinNumStr();
    // mn.add('102'); //错误
    mn.add(102);
    mn.add(2.5);
    mn.add(31);
    mn.add(16);
    mn.add(75);
    mn.add(0.5);
    console.log("\u5806\uFF1A" + mn.get());
    console.log("\u6700\u5C0F\u6570\u636E\u662F\uFF1A" + mn.min());
    // 实例化泛型类：指定类型为string (这样MinNumStr类的T就是string了)
    var ms = new MinNumStr();
    // ms.add(102); //错误
    ms.add('n');
    ms.add('t');
    ms.add('y');
    ms.add('b');
    ms.add('a');
    ms.add('r');
    ms.add('o');
    console.log("\u5806\uFF1A" + ms.get());
    console.log("\u6700\u5C0F\u6570\u636E\u662F\uFF1A" + ms.min());
}
;
console.log('\n\n---------------- 泛型接口 的定义 ----------------\n\n');
{
    ;
    var setData = function (v1, v2) {
        return v1 + v2;
    };
    console.log(setData('沐', '枫'));
    ;
    var setData2 = function (v1, v2) {
        return v1 || v2;
    };
    // console.log(setData2<string>('张', 3)); // 错误
    console.log(setData2('张', '三'));
    console.log(setData2(123, '三'));
    ;
    function getData(value) {
        return value;
    }
    ;
    // 指定为字符串类型
    var myGetStr = getData;
    // console.log(myGetStr(123));       // 错误
    console.log(myGetStr('123')); // 正确
    console.log(myGetStr('壹贰叁')); // 正确
    // 指定为数字类型
    var myGetNum = getData;
    console.log(myGetNum(123)); // 正确
    console.log(myGetNum(1024)); // 正确
    // console.log(myGetNum('123'));     // 错误
}
;
console.log('\n\n---------------- 把 类 作为参数，来约束数据传入的类型  ----------------\n\n');
{
    // 大概实现：
    /**
     * 1、先创建一个类。
     * 2、把 类 作为参数，来约束数据传入的类型。
     */
    // 具体实现：实例
    /**
     * 1、定义一个User的类，用于映射数据库字段。
     * 2、再定义一个MysqlDB的类，用于操作数据库。
     * 3、把User类 作为参数 传入到MysqlDB类中。
     */
    //定义一个User的类，用于映射数据库字段
    var User_1 = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    ;
    //定义一个News的类，用于映射数据库字段
    var News = /** @class */ (function () {
        function News() {
        }
        return News;
    }());
    ;
    // 定义一个MysqlDB的类，用于操作数据库
    var MysqlDB = /** @class */ (function () {
        function MysqlDB(newsList) {
            this.newsList = newsList;
            this.userList = [];
        }
        ;
        // 增加用户 (这里的data: 是用User类来检验 所传数据的合法性)
        MysqlDB.prototype.insertUser = function (data) {
            console.log(data);
            this.userList.push(data);
            return true; //假设增加成功
        };
        ;
        // 增加新闻 (这里的data: 是用News类来检验 所传数据的合法性)
        MysqlDB.prototype.insertNews = function (data) {
            console.log(data);
            this.newsList.push(data);
            return true; //假设增加成功
        };
        ;
        //删
        MysqlDB.prototype.delete = function () {
        };
        ;
        // 查
        MysqlDB.prototype.select = function (type) {
            return this[type];
        };
        ;
        // 改
        MysqlDB.prototype.update = function () {
        };
        ;
        return MysqlDB;
    }());
    ;
    // 实例化User类 并添加参数
    var us = new User_1();
    us.username = '沐枫';
    us.password = '123456';
    // 实例化News类 并添加参数
    var ns = new News();
    ns.title = '春天来了，去哪旅游最好';
    ns.content = '其实，春回大地，去哪里旅行都很好，来一场说走就走的旅行吧！';
    ns.desc = '旅行、春游、去哪里最好';
    ns.time = '2010-03-08';
    ns.status = 1;
    // 实例化MysqlDB类
    var db = new MysqlDB([]);
    db.insertUser(us);
    console.log(db.select('userList'));
    db.insertNews(ns);
    console.log(db.select('newsList'));
}
;
console.log('\n\n---------------- 用泛型 把 类 作为参数，来约束数据传入的类型  ----------------\n\n');
{
    // 用泛型可解决上面MysqlDB类的insert复用问题
    // 定义一个MysqlDB的 泛型类，用于操作数据库
    var MysqlDB = /** @class */ (function () {
        function MysqlDB() {
            this.list = [];
        }
        ;
        // 增加用户 (这里的data: 是用User类来检验 所传数据的合法性)
        MysqlDB.prototype.insert = function (data) {
            console.log(data);
            this.list.push(data);
            return true; //假设增加成功
        };
        ;
        // 查
        MysqlDB.prototype.select = function () {
            return this.list;
        };
        ;
        // 改
        MysqlDB.prototype.update = function (info, id) {
            console.log(id);
            console.log(info);
            return true; //假设修改成功 
        };
        ;
        return MysqlDB;
    }());
    ;
    //定义一个User的类，用于映射数据库字段
    var User_2 = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    ;
    // 实例化User类 并添加参数
    var us = new User_2();
    us.username = '沐枫';
    us.password = '123456';
    // 实例化MysqlDB类 类型为User
    var db = new MysqlDB();
    db.insert(us);
    console.log(db.select());
    //定义一个News的类，用于映射数据库字段 在构造函数中赋值
    var News = /** @class */ (function () {
        function News(par) {
            this.par = par;
            this.id = Date.now();
            this.time = new Date();
            this.title = par.title;
            this.content = par.content;
            this.desc = par.desc;
            this.status = par.status;
            this.init();
        }
        ;
        News.prototype.init = function () {
            console.log(this.par);
        };
        return News;
    }());
    ;
    // 实例化News类 并添加参数
    var ns = new News({
        title: '春天来了，去哪旅游最好',
        content: '其实，春回大地，去哪里旅行都很好，来一场说走就走的旅行吧！',
        desc: '旅行、春游、去哪里最好',
        status: 1
    });
    // 实例化MysqlDB类 类型为News
    var db2 = new MysqlDB();
    // 增加数据
    db2.insert(ns);
    console.log(db2.select());
    // 实例化News类 并修参数
    var ns2 = new News({
        title: '秋天来了，去哪旅游最好',
        content: '其实，秋高气爽，携程在手，说走就走！',
    });
    // 增加数据
    db2.update(ns2, 1583601564976);
    console.log(db2.select());
}
;
