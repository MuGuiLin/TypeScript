/**
 * TypeScript 数据类型、接口、类、泛型的综合实例 之 模块化。
 */


// 引入 db 数据库基础 模块中的 LocalDB 类
import { LocalDB } from "./db";


// 操作用表：定义一个User类 和 数据表做映射
class User {

    public username: string | undefined;

    // protected password: string | undefined;
    public password: string | undefined;

    constructor() {

    };
};


// 实例化LocalDB数据库类，并将User类 作为参数来约束 所传入的数据类型！
const UserModel = new LocalDB<User>();


// 向外暴露操作用户的相关功能模块
export { User, UserModel };



