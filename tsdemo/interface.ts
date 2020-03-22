/**
 * ts中的接口:interface (在现实生活中，接口也是很常见，如各种电子设备的连接，都有各自的接口类型和要求标准，而在ts中接口也是用来定义规范、定义标准的)
 *      主要用于在面向对象编程中，定义了行为和动作的规范，在程序设计里面，接口起到了一种限制和规范的作用
 *      接口不关心类 或 方法内部状态数据，也不关心这里类 或 方法的实现细节。
 *      在ts中的接口类似于java中的接口，同时ts还增加了更灵活的接口类型，如：属性、函数、类，可索引等。
 *      在ts中用 interface 关键字来定义接口
 */

console.log('\n\n--------------------- 常规参数约束 ----------------------\n\n');
{
    //对传入的参数进行约束
    function printName(name: string): void {
        console.log('传入的参数只能是一个字符串')
    };

    // printName(true);    // 错误
    // printName({});      // 错误
    // printName(123);     // 错误
    printName('123');   // 正确



    // 对函数参数 进行json约束
    function pringJson(obj: { name: string }): void {

        console.log('传入的参数只能是一个json，并且key叫name', obj)
    };

    // pringJson('123');           // 错误
    // pringJson({nul: '123'});    // 错误
    pringJson({ name: '123' });   // 正确
}


console.log('\n\n------------------ interface 参数约束 -------------------\n\n');
{
    //  接口：行为和动作的规范，对批量方法进行约束

    interface FullName {

        firstName: string; // 注以分号 ; 结束
        secondName: string;

    };

    // 约束传入的对象 必须包含：firstName, secondName
    function printName(name: FullName): void {

        console.log(`姓：${name.firstName}，名：${name.secondName}`);
    };

    // printName(123);                     // 错误
    // printName('123');                   // 错误
    // printName({});                      // 错误
    // printName({key: 'value'});          // 错误
    // printName({firstName: '穆'});       // 错误
    printName({ firstName: '穆', secondName: '飘' }); // 正确


    // 约束传入的对象 必须包含：firstName, secondName
    function printInfo(info: FullName): void {

        console.log(`姓：${info.firstName}，名：${info.secondName}, 年龄：${info.age}`);
    };

    let obj = {
        firstName: '张',
        secondName: '三',
        age: 28
    };

    printInfo(obj);
};

console.log('\n\n-------------- interface 参数可选 ? 约束 ----------------\n\n');
{
    //  接口：行为和动作的规范，对批量方法进行约束

    interface FullName {

        firstName: string;
        secondName?: string; // 加上 ? 就是可选参数，该参数可传可不传

    };

    // 约束传入的对象 必须包含：firstName；而secondName参数可不用传
    function printName(name: FullName): void {

        console.log(`姓：${name.firstName}，名：${name.secondName}`);
    };

    printName({ firstName: '穆' });                     // 正确
    printName({ firstName: '穆', secondName: '飘' }); // 正确

};


console.log('\n\n---------------- interface 约束 ajax 实例 ---------------\n\n');
{
    // 约束 ajax参数
    interface config {
        type: string;
        url: string;
        data?: string | object;
        dataType: string;
    };

    function jQuery(el) {
        this.dom = document.querySelector(el);

        this.css = function (css, val) {
            this.dom.style[css] = val;
            return this;
        };

        this.html = function (html) {
            this.dom.innerHTML = html;
            return this;
        };

        this.text = function (text) {
            this.dom.innerText = text;
            return this;
        };
    };

    function $(el) {
        return new jQuery(el);
    };

    $.ajax = function (par: config) {

        const xhr = new XMLHttpRequest();

        xhr.open(par.type, par.url, true);

        xhr.send(par.data);

        xhr.onload = function (res) {
            if (4 == xhr.readyState && 200 == xhr.status) {
                par.success('JSON' == par.dataType ? JSON.parse(xhr.responseText) : xhr.responseText);
            };
        };

        // xhr.onreadystatechange = function(res) {
        //     if(4 == xhr.readyState && 200 == xhr.status) {
        //         par.success('JSON' == par.dataType ? JSON.parse(xhr.responseText) : xhr.responseText);
        //     };
        // };

    };

    $.ajax({
        type: 'GET',
        // url: 'https://www.baidu.com/s?word=123',
        url: 'http://a.itying.com/api/productlist',
        data: 'TS interface',
        dataType: 'JSON',
        success: function (data) {
            console.error('OK API请求成功：', data)
            $('h1').css('color', 'red');
            $('code').html(JSON.stringify(data)).css('color', 'blue');
        }
    });
};


console.log('\n\n---------- interface 函数类型接口 约束 MD5 实例 ----------\n\n');
{
    // 函数类型接口：
    // 对方法传入的参数、返回值 进行约束
    interface md5par {

        //约束参数、类型            约束返回值类型
        (key: string, val: string): string;
    };

    // md5方法 需要满足上面md5par的要求
    const md5: md5par = function (key: string, value: string): string {

        return key + value + Date.now();
    };

    console.log(md5('mu', 'piao'));

    const hash: md5par = function (key: string, value: string): string {
        return key + value + '：Hash - ' + Date.now();
    };

    console.log(hash('zhang', 'san'));

};


console.log('\n\n--------- interface 可索引类型接口 约束数组和对象 --------\n\n');
{
    // ts数组的定义方式
    let arr: number[] = [123, 1024, 888];
    let arr2: Array<string> = ['a', 'b', 'c'];


    // 可索引类型接口 对数组的约束
    interface UserArr {
        // 数组索引[下标]  数组的值必须为字符类型
        [index: number]: string;
    };

    // 可索引类型接口 对数组的约束
    interface UserArrAll {
        // 数组索引[(下标 数组的值为任意类型
        [index: number]: any;
    };

    // var uArr: UserArr = [101, 102]; // 错误
    var uArr: UserArr = ['qmjy-001', 'qmjy-002', 'qmjy-003']; //正确
    console.log(uArr[0]);

    var uArrAll: UserArrAll = [1, 'qmjy-001', 102, 'qmjy-002', 'qmjy-003']; //正确
    console.log(uArrAll[3]);



    // 可索引类型接口 对 对象的约束

    interface UserObj {
        [index: string]: string;
    };

    // var uObj: UserObj = {name: 123};   //错误
    var uObj: UserObj = { name: '沐枫' }; //正确
    console.log(uObj);

};


console.log('\n\n------ interface  implements 类 的类型接口 和抽象类有点相似 --------\n\n');
{
    // 对 类 的类型接口 和抽象类有点相似 用于定义标准的
    // 这里是约束 实现Animal接口的类，必须有以下约束的 属性 和 方法
    interface Animal {

        // 约束类的属性
        name: string;
        age: number;

        // 约束类的方法
        Eat(txt: string): void;

    };

    // 用 implements 关键字来实现 接口约束的 类
    class Dog implements Animal {
        public name: string;
        public age: number;

        constructor(name: string, age: number) {
            // super()
            this.name = name;
            this.age = age;
        };

        Eat(par: string) {
            console.log(`我是${this.name}，今年${this.age}岁，我喜欢吃${par}`);
        };
    };

    const d = new Dog('小黑', 2);
    d.Eat('骨头');

};


console.log('\n\n--------- interface 接口的扩展：接口可以继承接口 ---------\n\n');
{
    // 定义动物接口
    interface Animal {

        // 约束必须要有名字
        name: string;

        // 约束必须有吃的方法
        Eat(par?: string): void;
    };

    // 【注：接口也是可以相互继承的，用extends】
    // 定义人的接口 并 继承动物接口
    interface Person extends Animal {

        // 约束必须要有性别
        sex: string;

        // 约束必须要有年龄
        age: number;

        // 约束必须要有工作的方法
        Work(par?: any): void;
    };

    // 程序员 类
    class Programmer {
        /*
        public codeAge: number;

        constructor(age: number) {
            this.codeAge = age;
        };
        */

        constructor(public codeAge: number) {
            // 这里是对上面代码的简写
            // 相当于直接声明了一个codeAge属性，实例化时必须指定codeAge属性，
            // 注意此处访问控制符public不能省略
        };


        Coding() {
            console.log('我有' + this.codeAge + '年的编码年限啦！');
        }
    }


    // 创建Web类，继承Programmer类 并实现Person接口
    class Web extends Programmer implements Person {

        public name: string;
        public age: number;
        public sex: string;

        constructor(name: string, sex: string, age: number, sodeAge: number) {
            super(sodeAge);
            console.log(super(sodeAge));

            this.name = name;
            this.age = age;
            this.sex = sex;

        };

        /**
         * 吃的方法 是Animal接口的
         */
        Eat(text: string): void {
            console.log(`我喜欢吃${text}`);

            // 调用父类的方法
            super.Coding();
            this.Coding()
        };

        /**
         * 工作的方法 是Person接口的
         */
        Work(text?: any): any {
            console.log(`我叫：${this.name}，性别：${this.sex}，今年：${this.age}岁，工作：${text}！`);
        };
    };

    const w = new Web('小李', '女', 24, 5);
    w.Eat('饭、面包、小吃');
    w.Work('Web全栈开发');
    w.Coding();

};