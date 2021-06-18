"use strict";
/**
 * TypeScript 数据类型、接口、类、泛型的综合实例 --> 之 【模块化】 封装一个可用于操作LocalDB、MysqlDB、MongoDB的底层库。
 *
 * 要求：1、有insert、delete、select、update方法，可用于增、删、查、改用户数据。
 *       2、约束统一规范、代码可重用。
 *
 * 思路：需要约束规范所以用 接口来做规范，代码重用 泛型的做。
 *      1、接口：在面向对象编程中，接口是一种规范的定义 如：数据类型、方法、行为等。
 *      2、泛型：简单来说，泛型就是解决类、方法、接口的复用（重用）性问题的。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDB = exports.MysqlDB = exports.LocalDB = void 0;
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
exports.LocalDB = LocalDB;
;
// 定义操作MysqlDB数据库的类
var MysqlDB = /** @class */ (function () {
    function MysqlDB() {
    }
    ;
    MysqlDB.prototype.insert = function (obj) {
        throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.select = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.update = function (obj, id) {
        throw new Error("Method not implemented.");
    };
    return MysqlDB;
}());
exports.MysqlDB = MysqlDB;
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
exports.MongoDB = MongoDB;
;
// 集中导出
// export {LocalDB, MysqlDB, MongoDB };
