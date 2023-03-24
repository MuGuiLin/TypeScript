console.log('Hello TypeScript');

const PI = Math.PI;

let hello:string = '你好啊，TS - ' + PI;

alert(hello);

// TypeScript中的数据类型
// 在TS中为使编写的代码更加规范、更有利于维护，故增加了数据类型校验

// 1、字符串类型 String
let str:string = 'muguilin' || "mupiao" || `mulin`;
    // str = 123; 错误的写法 （在ES5中是正确的），（但是在TS中这是错误的赋值，因为不所赋的值不是声明时的数据类型）
    // str = {}; 错误的写法
    // str = []; 错误的写法
    // str = false; 错误的写法
    str = '沐枫';
    console.log(str);

// 2、数字类型 Number错误的写法 
let num:number = 1024;
    // num = 'str'; 错误的写法
    // num = true; 错误的写法
    num = 2048
    console.log(num);


// 3、布尔类型 Boolean
let flag:boolean = true;
    // flag = 666; 
    flag = false;
    console.log(flag);


// 4、数组类型 Array
let numArr:Array<number> = [123, 456, 888];
let strArr:Array<string> = ['123', '456', '888'];

    numArr[1] = 666;
    // numArr[1] = '666'; 错误的写法

    strArr[1] = '666';
    // strArr[1] = 666; 错误的写法


// 5、元组类型 Tuple

let allArr:[number, string] = [123, '666'];


// 6、枚举类型 Enum
{
    let enu:enum {success = 1, error = -1};
}
// 7、任意类型 Any
// 8、void类型
// 9、never类型
// 10、undefined
// 11、null

