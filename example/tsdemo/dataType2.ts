
/**
 * 【TS高级类型特性】：
 * 
 * 1、交叉类型(合并类型)，2、联合类型(多选类型)，3、字面量类型，
 * 
 * 4、类型名别，5、类型推导，6、类型断言
 */


/**
 * 1、【交叉类型(合并类型)】 & 与
 * 用于将多和类型合并到一起，成为一种新的类型！！
 */
interface o1 {
    x: number;
    y: string;
};

interface o2 {
    z: number;
}

let o: o1 & o2 = Object.assign({}, { x: 1, y: '2' }, { z: 100 })
console.log(o);



/**
 * 2、【联合类型(多选类型)】 | 或
 * 用于标注在变量、参数的类型为多个数据类型时！！
 * 注：如果变量或参数的数据类型只有1种，那就没必要使用联合类型了！！
 */

// 变量
let val: number | string = 0;
    val = 0 || '1';

// 函数
function css(ele: Element, attr: string, value: string | number) {
    // ...
};




/**
 * 3、【字面量类型】
 * 用于在 希望标注的不是某个数据类型，而是一个自定义指定的 或 固定的值时，
 */
function setPosition1(place: 'top' | 'right' | 'bottom' | 'left') {
    // ...
};
console.log(setPosition1(123));
console.log(setPosition1('righ'));
console.log(setPosition1('rights'));
console.log(setPosition1('right'));



/**
 * 4、【类型名别】 type
 * 类型名别是联合类型(多选类型) 的升级版，将类型标注单独交给一个变量来管理。
 * 同样注：如果变量或参数的数据类型只有1种，那就没必要使用类型名别了！！
 */

// 声明方式1
type mupaio = 'top' | 'right' | 'bottom' | 'left';

// 声明方式2 
type mupaio2 = {
    model: Record<string, unknown>
    rules?: any
};

// 使用方式1
function setPosition2(ele: Element, place: mupaio) {
    // ...
};

// 使用方式2 使用类型别名来定义函数
type callback = (tf: boolean) => boolean;
const fn: callback = function (tf) {
    return true;
};

// 或者直接
let fn2: (tf: string) => string = function (ft) {
    return 'false';
};
console.log(fn, fn2);

/**
 *  interface 接口 与 type 类型别名 的优缺点区别
 *  interface  接口
 *      缺点：只能描述 object / class / function 的数据类型。
 *      优点：相同名字的interface 会自动合并，这样有利于扩展。
 *
 *  type 类型别名
 *      缺点：不能重名(和interface刚好相反)。
 *      优点：能够描述所有的数据类型。
 */



/**
 * 5、【类型推导】
 * 如果：每次声明变量 或 函数都要显式地标注数据类型的话会比较麻烦。
 * 所以：TS提供了一种更加方便的特性 "类型推导"，来为开发者减少代码量提高开发效率。
 *      类型推导 就是TS编译器会自动根据代码上下文推导出对应的类型标注！！
 *      这个过程发生在：
 *          1、在初始化变量时
 *          2、在设置函数默认参数值时
 *          3、返回函数值时
 */

// 变量
let x = 1;  // TS编译器会自动推断为 x 为 number类型
x = '1' // 所以当给 x 赋值为字符串时就会报错！！

// 函数
function fn1(a = 1) { }; // TS编译器会自动推断为 function fns(a?: number): void
function fn2(a = 1) {   // TS编译器会自动推断为 function fns2(a?: number): number
    return 10;
};
function fn3(a = 1) {  // function fn3(a?: number): 666 | "666"
    if (true) {
        return 666;
    } else {
        return '666';
    }
};


/**
 * 【6、类型断言】
 * 有时候，我们可能会遇到给变量标注一个非常精确的数据类型(就是缩小类型标注范围)
 * 如：
 *   const id = document.querySelector('#div1');
 * 注：
 *      类型断言只是一种预判，并不会在数据本身产生实际的作用，就像是：类似转换，但并真的转换！！
 *      也就是显示地告诉TS编译器以什么类型去进行后续检测。
 * 
 * Element类型：
 *      是一种DOM元素的通用类型！！
 */

// 默认就是：Element类型
const id1 = document.querySelector('#div1'); // const id: Element | null
// 应该是
const id2 = <HTMLDivElement>document.querySelector('#div1');
// 或者是(上面的简写，推荐)
const id3 = document.querySelector('#div1') as HTMLDivElement;


let img = document.querySelector('#img');
img.src = './img.jpg'; // 如果：修改图片的src属性时就会报错，
/**
 *                        因为：TS编译器会自动把img变量 推断为Element类型，
 *                        所以：Element类型上不存在属性src，导致报错！！
 */

// 所以应该是
let img1 = <HTMLImageElement>document.querySelector('#img');
img1.src = './img.jpg';

// 或者是
let img2 = document.querySelector('#img') as HTMLImageElement;
img2.src = './img.jpg';

// 再或者是
let img3 = document.querySelector('#img');
(<HTMLImageElement>img3).src = './img.jpg';

// 再再或者是
(img3 as HTMLImageElement).src = './img.jpg';


// 断言函数
function assertionFunction(arg: unknown): asserts arg is RegExp {
    if (! (arg instanceof RegExp)) {
        throw new TypeError('Not a RegExp: ' + arg);
    }
};

function func(value: unknown) {
    // @ts-ignore: Object is of type 'unknown'.
    value.test('abc');
   
    assertionFunction(value);
   
    // %inferred-type: RegExp
    value;
   
    value.test('abc'); // OK
};
   
  
  
