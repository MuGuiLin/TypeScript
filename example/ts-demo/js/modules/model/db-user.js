"use strict";
/**
 * TypeScript 数据类型、接口、类、泛型的综合实例 之 模块化。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.User = void 0;
// 引入 db 数据库基础 模块中的 LocalDB 类
var db_1 = require("./db");
// 操作用表：定义一个User类 和 数据表做映射
var User = /** @class */ (function () {
    function User() {
    }
    ;
    return User;
}());
exports.User = User;
;
// 实例化LocalDB数据库类，并将User类 作为参数来约束 所传入的数据类型！
var UserModel = new db_1.LocalDB();
exports.UserModel = UserModel;
