"use strict";
/**
 * TypeScript 数据类型、接口、类、泛型的综合实例 之 模块化。
 */
Object.defineProperty(exports, "__esModule", { value: true });
// 引入 db-user 操作用户数据模块
var db_user_1 = require("./modules/model/db-user");
// 实例化User类，并添加初始化默认数据
var U = new db_user_1.User();
U.username = '佚名';
U.password = '000000';
//插入数据 User类 作为参数来约束
// UserModel.insert(U);
// 自定义插入数据
// UserModel.insert({ username: '李四', password: '123456' });
// UserModel.insert({ user: '李四', password: '123456' });  // 字段名不对
// UserModel.insert({ username: '李四', password: 123456 });  // 数据类型不对
var insert = $('#insert');
insert.onclick = function () {
    var id = $('#userId').value;
    var name = $('#name').value;
    var pswd = $('#pswd').value;
    if (name && pswd) {
        U.username = name;
        U.password = pswd;
        db_user_1.UserModel.insert(U, id, function () {
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
// console.log(UserModel.select(1583999437003));
function Select() {
    var data = db_user_1.UserModel.getAll();
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
// UserModel.update({ username: '沐枫', password: '666888' }, 1583999437003);
var update = $('#update');
update.onclick = function () {
    var id = $('#userId').value;
    var name = $('#name').value;
    var pswd = $('#pswd').value;
    if (name && pswd) {
        U.username = name;
        U.password = pswd;
        db_user_1.UserModel.update(U, id, function () {
            alert('OK 修改成功！');
            window.location.reload();
        });
    }
    else {
        alert('用户 或 密码 不能为空！');
    }
};
// 删除数据
// UserModel.delete(1584000362256);
var Remove = function (id) {
    if (confirm('您确定要删除该用户吗？')) {
        db_user_1.UserModel.delete(id, function () {
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
