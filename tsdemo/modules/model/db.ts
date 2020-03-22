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


// 定义泛型T接口
interface DBI<T> {

    insert(obj: T): boolean;

    delete(id: number): boolean;

    select(id: number): any[];

    update(obj: T, id: number): boolean;
};


// 定义操作LocalDB数据库的类，注：由于用了泛型接口来定义方法，所以类也一定是一个泛型类，并且要在类中实现接口的所有定义属性 或 方法！！
export class LocalDB<T> implements DBI<T> {

    private DB: any;

    static index: number = 0;

    static run: any = function (par: string): void {

    };

    constructor() {
        this.DB = window.sessionStorage;
        this.init();
    };

    init() {
        if (this.DB) {
            console.log('Mysql数据库链接成功！');
        } else {
            console.log('Mysql数据库链接失败！');
        }
    };

    insert(obj: T, id: number = Date.now(), cb?: any): boolean {
        if (obj) {
            this.DB.setItem(id, JSON.stringify(obj));
            console.log('新增成功：', obj);
            cb && cb();
            return true;
        } else {
            throw new Error("对不起：新增失败！");
        }
    };

    delete(id: number, cb?: any): boolean {
        if (id) {
            this.DB.removeItem(id)
            console.log(`用户${id}已删除成功！`);
            cb && cb();
            return true;
        } else {
            throw new Error("对不起：删除失败！");
        };

    };

    select(id: number): any[] {
        const data = this.DB.getItem(id);
        // console.log(this.DB)

        if (data) {
            return [data];
        } else {
            throw new Error("对不起：没有找到" + id + "用户的相关信息！");
        }

    };

    // getAll(): any[] {
    getAll(): any {

        // const arr: any[] = [];

        // for (const key in this.DB) {
        //     arr.push(this.DB[key]);
        //     console.log(this.DB[key]);
        // }
        //     return arr;
        return this.DB;
    };

    update(obj: T, id: number, cb?: any): boolean {
        const data = this.DB.getItem(id);
        if (data) {
            this.DB.setItem(id, JSON.stringify(obj));
            console.log(`用户${id}已更新成功！`);
            cb && cb();
            return true;

        } else {
            throw new Error("对不起：更新失败！");
        }

    };

};

// 定义操作MysqlDB数据库的类
export class MysqlDB<T> implements DBI<T>{

    constructor() {

    };

    insert(obj: any): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    select(id: number): any[] {
        throw new Error("Method not implemented.");
    }
    update(obj: any, id: number): boolean {
        throw new Error("Method not implemented.");
    }

};

// 定义操作MongoDB数据库的类
export class MongoDB<T> implements DBI<T>{

    constructor() {

    };

    insert(obj: any): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    select(id: number): any[] {
        throw new Error("Method not implemented.");
    }
    update(obj: any, id: number): boolean {
        throw new Error("Method not implemented.");
    }

};


// 集中导出
// export {LocalDB, MysqlDB, MongoDB };