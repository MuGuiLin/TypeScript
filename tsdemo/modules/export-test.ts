
// export 导出，直接在变量、函数、类等 前面加上 export 就可以向外暴露、导出了!


export var user: string = '沐枫';

let age: number = 29;

const job: string = 'Web全栈工程师';

export function hobby(): string {
    let text = '我是一个函数，我喜欢写程序！';
    console.log(text);
    return text;
};

// import 引用, 在需要的模块中用 import { user, hobby } from "./ts/export-test"; 就以访问这两个变量和函数了，注：age 和 job因为没的向外暴露，所以在外面是不能访问的！


// 另一种 export 导出，向外暴露的方法

export { age, job };






interface JIEKOU<T> {
    name: string;
    pwds: number;

    getData(id: T): any[];
};

class MyData<T> implements JIEKOU<T>{
    public color: string = '#666';


    static index: number;
    static numIndex = function (par: number): number[] {
        return [];
    };

    public name: string;
    public pwds: number;

    constructor(name: string, pwd: number) {
        this.name = name;
        this.pwds = pwd;
    };

    getData(id: T): any[] {
        // 实现接口定义的函数
        throw new Error("Method not implemented.");
    };

    Max(n1: number, n2: number) {
        return Math.max(n1, n2);
    };

};

// export default 默认导出 【注：default在模块文件中，只能有一个default默认导出】
export default MyData;

// export default MyData;  //错误：一个模块不能具有多个默认导出。



// 另一种 export default 默认导出方式

// 直接默认导出 变量
// export default Math.PI;


// 直接默认导出 函数（函数名 Min 可选）
// export default function Min (n1:number, n2:number):number {
//     return Math.min(n1, n2);
// };


// 直接默认导出 类（类名 Max 可选）
// export default class Max {
//     constructor() {
        
//     };

//     Max(n1: number, n2: number) {
//         return Math.max(n1, n2);
//     };

// };