"use strict";
/**
 * TypeScript 数据类型、接口、类、泛型的综合实例 --> 封装一个可用于操作local、Mongodb、Mysql的底层库。
 *
 * 要求：1、有insert、delete、select、update方法，可用于增、删、查、改用户数据。
 *       2、约束统一规范、代码可重用。
 *
 * 思路：需要约束规范所以用 接口来做规范，代码重用 泛型的做。
 *      1、接口：在面向对象编程中，接口是一种规范的定义 如：数据类型、方法、行为等。
 *      2、泛型：简单来说，泛型就是解决类、方法、接口的复用（重用）性问题的。
 */
;
// 定义操作LocalDB数据库的类，注：由于用了泛型接口来定义方法，所以类也一定是一个泛型类，并且要在类中实现接口的所有定义属性 或 方法！！
var LocalDB = /** @class */ (function () {
    function LocalDB() {
        this.DB = window.sessionStorage;
        this.init();
    }
    ;
    LocalDB.prototype.init = function () {
        if (this.DB) {
            console.log('Mysql数据库链接成功！');
        }
        else {
            console.log('Mysql数据库链接失败！');
        }
    };
    ;
    LocalDB.prototype.insert = function (obj, id, cb) {
        if (id === void 0) { id = Date.now(); }
        if (obj) {
            this.DB.setItem(id, JSON.stringify(obj));
            console.log('新增成功：', obj);
            cb && cb();
            return true;
        }
        else {
            throw new Error("对不起：新增失败！");
        }
    };
    ;
    LocalDB.prototype.delete = function (id, cb) {
        if (id) {
            this.DB.removeItem(id);
            console.log("\u7528\u6237" + id + "\u5DF2\u5220\u9664\u6210\u529F\uFF01");
            cb && cb();
            return true;
        }
        else {
            throw new Error("对不起：删除失败！");
        }
        ;
    };
    ;
    LocalDB.prototype.select = function (id) {
        var data = this.DB.getItem(id);
        // console.log(this.DB)
        if (data) {
            return [data];
        }
        else {
            throw new Error("对不起：没有找到" + id + "用户的相关信息！");
        }
    };
    ;
    // getAll(): any[] {
    LocalDB.prototype.getAll = function () {
        // const arr: any[] = [];
        // for (const key in this.DB) {
        //     arr.push(this.DB[key]);
        //     console.log(this.DB[key]);
        // }
        //     return arr;
        return this.DB;
    };
    ;
    LocalDB.prototype.update = function (obj, id, cb) {
        var data = this.DB.getItem(id);
        if (data) {
            this.DB.setItem(id, JSON.stringify(obj));
            console.log("\u7528\u6237" + id + "\u5DF2\u66F4\u65B0\u6210\u529F\uFF01");
            cb && cb();
            return true;
        }
        else {
            throw new Error("对不起：更新失败！");
        }
    };
    ;
    LocalDB.index = 0;
    LocalDB.run = function (par) {
    };
    return LocalDB;
}());
;
// 定义操作Mysql数据库的类
var Mysql = /** @class */ (function () {
    function Mysql() {
    }
    ;
    Mysql.prototype.insert = function (obj) {
        throw new Error("Method not implemented.");
    };
    Mysql.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    Mysql.prototype.select = function (id) {
        throw new Error("Method not implemented.");
    };
    Mysql.prototype.update = function (obj, id) {
        throw new Error("Method not implemented.");
    };
    return Mysql;
}());
;
// 定义操作MongoDB数据库的类
var MongoDB = /** @class */ (function () {
    function MongoDB() {
    }
    ;
    MongoDB.prototype.insert = function (obj) {
        throw new Error("Method not implemented.");
    };
    MongoDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MongoDB.prototype.select = function (id) {
        throw new Error("Method not implemented.");
    };
    MongoDB.prototype.update = function (obj, id) {
        throw new Error("Method not implemented.");
    };
    return MongoDB;
}());
;
// 操作用表：定义一个User类 和 数据表做映射
var User = /** @class */ (function () {
    function User() {
    }
    ;
    return User;
}());
;
var U = new User();
U.username = '张三';
U.password = '123456';
// 实例化LocalDB数据库类，并将User类 作为参数来约束 所传入的数据类型！
var Local = new LocalDB();
//插入数据 User类 作为参数来约束
// Local.insert(U);
// 自定义插入数据
// Local.insert({ username: '李四', password: '123456' });
// Local.insert({ user: '李四', password: '123456' });  // 字段名不对
// Local.insert({ username: '李四', password: 123456 });  // 数据类型不对
var insert = $('#insert');
insert.onclick = function () {
    var id = $('#userId').value;
    var name = $('#name').value;
    var pswd = $('#pswd').value;
    if (name && pswd) {
        U.username = name;
        U.password = pswd;
        Local.insert(U, id, function () {
            alert('OK 添加成功！');
            // $.resetId();
            // $('#name').value = '';
            // $('#pswd').value = '';
            // Select();
            window.location.reload();
        });
    }
    else {
        alert('用户 或 密码 不能为空！');
    }
};
// 查询数据
// console.log(Local.select(1583999437003));
function Select() {
    var data = Local.getAll();
    if (data) {
        var dom = "";
        for (var key in data) {
            if ('string' == typeof data[key]) {
                // let str: string = `'${data[key]}'`;
                var obj = eval('(' + data[key] + ')');
                dom += "<tr><td>" + key + "</td><td>" + obj.username + "</td><td>" + obj.password + "</td><td><button type=\"button\" onClick=\"Remove(" + key + ")\">\u5220 \u9664</button></td><td></td></tr>";
            }
        }
        $('#tbody').innerHTML = dom;
    }
}
;
var select = $('#select');
select.onclick = function () {
    Select();
};
// 更新数据
// Local.update({ username: '沐枫', password: '666888' }, 1583999437003);
var update = $('#update');
update.onclick = function () {
    var id = $('#userId').value;
    var name = $('#name').value;
    var pswd = $('#pswd').value;
    if (name && pswd) {
        U.username = name;
        U.password = pswd;
        Local.update(U, id, function () {
            alert('OK 修改成功！');
            window.location.reload();
        });
    }
    else {
        alert('用户 或 密码 不能为空！');
    }
};
// 删除数据
// Local.delete(1584000362256);
var Remove = function (id) {
    if (confirm('您确定要删除该用户吗？')) {
        Local.delete(id, function () {
            alert('OK 删除成功！');
            window.location.reload();
        });
    }
};
// 公共方法
function $(el, doc) {
    if (doc === void 0) { doc = document; }
    return doc.querySelector(el);
}
;
$.resetId = function () {
    Select();
    $('#userId').setAttribute('value', Date.now());
};
$.resetId();
