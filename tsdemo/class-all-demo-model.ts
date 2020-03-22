/**
 * TypeScript 数据类型、接口、类、泛型的综合实例 之 模块化。
 */

 // 引入 db-user 操作用户数据模块
import { User, UserModel } from "./modules/model/db-user";


// 实例化User类，并添加初始化默认数据
const U = new User();
U.username = '佚名';
U.password = '000000';


//插入数据 User类 作为参数来约束
// UserModel.insert(U);

// 自定义插入数据
// UserModel.insert({ username: '李四', password: '123456' });
// UserModel.insert({ user: '李四', password: '123456' });  // 字段名不对
// UserModel.insert({ username: '李四', password: 123456 });  // 数据类型不对

const insert: any = $('#insert');
insert.onclick = function () {
    let id: number = $('#userId').value;
    let name: string = $('#name').value;
    let pswd: string = $('#pswd').value;

    if (name && pswd) {
        U.username = name;
        U.password = pswd;
        UserModel.insert(U, id, function () {
            alert('OK 添加成功！');
            // $.resetId();
            // $('#name').value = '';
            // $('#pswd').value = '';
            // Select();
            window.location.reload();
        });
    } else {
        alert('用户 或 密码 不能为空！');
    }
};




// 查询数据
// console.log(UserModel.select(1583999437003));
function Select(): void {
    const data: any = UserModel.getAll();

    if (data) {
        let dom: string = ``;
        for (const key in data) {
            if ('string' == typeof data[key]) {
                // let str: string = `'${data[key]}'`;
                let obj: any = eval('(' + data[key] + ')');
                dom += `<tr><td>${key}</td><td>${obj.username}</td><td>${obj.password}</td><td><button type="button" onClick="Remove(${key})">删 除</button></td><td></td></tr>`;
            }
        }
        $('#tbody').innerHTML = dom;
    }
};
const select: any = $('#select');
select.onclick = function () {
    Select();
};




// 更新数据
// UserModel.update({ username: '沐枫', password: '666888' }, 1583999437003);
const update: any = $('#update');
update.onclick = function () {
    let id: number = $('#userId').value;
    let name: string = $('#name').value;
    let pswd: string = $('#pswd').value;

    if (name && pswd) {
        U.username = name;
        U.password = pswd;
        UserModel.update(U, id, function () {
            alert('OK 修改成功！');
            window.location.reload();
        });
    } else {
        alert('用户 或 密码 不能为空！');
    }
};




// 删除数据
// UserModel.delete(1584000362256);
const Remove: any = function (id: number): void {
    if (confirm('您确定要删除该用户吗？')) {
        UserModel.delete(id, function () {
            alert('OK 删除成功！');
            window.location.reload();
        });
    }
};



// 公共方法
function $(el: string, doc: any = document): any {
    return doc.querySelector(el);
};


$.resetId = function () {
    Select();
    $('#userId').setAttribute('value', Date.now());
};


$.resetId();