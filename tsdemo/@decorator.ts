/**
 * 装饰器：装饰器是一种特殊类型的声明，它能够被了附加到类、方法、属性、参数上，它能修改类的行为，是js最大成就之一，现已经是ES7的标准特性了。
 * 
 * 简单讲：装饰器其实就是一个方法(函数)，可以注入到类、方法、属性、参数等上面，并可以扩展(添加属性、参数等)它们。
 * 
 * 常见的装饰器有：类装饰器、方法装饰器、属性装饰器、参数装饰器
 * 
 * 装饰器的写法：
 *          1、普通装饰器，不能传参
 *          2、装饰器工厂，可以传参
 */



console.log(`---------------- 普通装饰器(不能传参) ----------------`);

// 类装饰器：在类声明之前声明【用@开头，紧靠着类声明处】，它用于类构造器函数，可在不修改原来类的基础上：监视、修改、替换类的定义。

// 类装饰器
function showClient(par: any) {

    // par参数名是自定义的，它就是当前被监视类
    console.log(par);

    // 动态扩展类的属性
    par.prototype.apiUrl = 'https://nbrecsys.4paradigm.com';

    // 动态扩展类的方法
    par.prototype.showData = function () {
        console.log(this);
        console.log('我是动态扩展类的方法', this.name, this.apiUrl);
    }
};

//调用类装饰器: 普通装饰器(不能传参)【注：一定要紧靠着类声明处在类名的上面，后面不能加 ; 分号！！！】
@showClient
class HttpClient {

    public name: string | undefined;
    constructor() {
        this.name = '沐枫';
    };

    getData() {

    };

    delData() {

    };
};

const http: any = new HttpClient();

console.log(http.apiUrl);

http.showData();






console.log(`\n\n---------------- 装饰器工厂(可以传参) ----------------`);
//类装饰器：装饰器工厂(可以传参)

function logClass(par: string, url?: string) {

    return function (tag: any) {

        console.log('调用类装饰器工厂时传来的参数', par);
        console.log('调用类装饰器工厂的 类', tag);

        tag.prototype.mupiao = url;
    }
};

// 调用类装饰器工厂
@logClass('hello', 'http://www.baidu.com')
class WssClient {

    constructor() {

    };

    showUrl() {
        console.log('我是在装饰器工厂 赋值的：', this.mupiao);
    }

};

const wss = new WssClient();
wss.showUrl();
console.log('我是在实例化后才访问的：', wss.mupiao);






console.log(`\n\n---------------- 类装饰器 重载类 构造函数实例  ----------------`);
/**
 * 类装饰器除了能修改和扩展类的属性、方法等行为以外，还能监视、修改、替换类的构造函数。
 * 
 * 类装饰器表达式会在运行时，当作函数被调用，类的构造函数作为其唯一的参数。
 * 
 * 如果类装饰器返回一个值，它会使用提供的构造函数，来替换类的声明。
 */

function classZsq(obj: any) {

    console.log(obj);
    return function (tag: any) {

        // 注：tag 就是Person类

        return class extends tag {

            // 重载属性
            name: any = '修改构造函数中name 属性赋值';

            public text: string | undefined;

            constructor() {
                super();
            }

            // 重载类的方法
            getData() {
                this.text = this.text + '，现在在装饰器被修改了！！！';
                console.log(this.text);

            }
        }
    }
};

@classZsq({ key: 'value' })
class Person {

    public name: string

    public text: string | undefined;;

    private init(): any { };

    constructor() {
        this.name = '沐枫，我是在类 构造函数中赋值的 属性 name';

        this.init = function () {
            console.log(this.name);

            console.log('我是在类 构造函数中的方法 init');
        };

        this.init();
        this.getData();
    };

    getData() {
        this.text = '我是在类 中的原型方法 getData';
        console.log(this.text);
    }
};

const P = new Person();
console.log(P);
console.log(P.name);
// P.init()

P.getData();









console.log(`\n\n---------------- 属性装饰器 ----------------`);
/**
 * 属性装饰器：属性装饰器表达式会在运行时当作函数来调用(需传入2个参数)
 * 
 *      参数1、对于静态成员来说（它[参数1]是类的构造函数），对于实例成员来讲（它是类的原型对象）。
 *      参数2、成员（方法、属性）的名字。
 */

// 类装饰器
function classZsq(par: string) {

    return function (tag: any) {
        console.log(par);
        console.log(tag);

    };
};

// 属性装饰器
function attrZsq(par?: any) {

    console.log('我是调用属性装饰器时传过来的：', par);

    return function (tag: any, attr: any) {
        // 参数1、对于静态成员来说（它[参数1]是类的构造函数），对于实例成员来讲（它是类的原型对象）。
        // 参数2、成员（属性）的名字。


        console.log('\n\n参数1：', tag, '参数2：', attr);

        // 重新给类的url属性赋值
        tag[attr] = par;

    };
};

// 调用类装饰器
@classZsq('class')
class Attr {

    // 调用属性装饰器【注：一定要紧靠着属性名的上面，后面不能加 ; 分号！！！】
    @attrZsq('http://www.2345.com/?kmupiao')
    public url: string | undefined; // 声明url属性没赋值，等着在属性装饰器中去赋值

    // 调用属性装饰器
    @attrZsq('佚名')
    public name: string = '张三';

    constructor() {

    }

    getData() {
        console.log(this.url);

    }
};

const A: any = new Attr();
// A.run('666');

console.log(A.six);

A.getData();






console.log(`\n\n---------------- 方法装饰器 ----------------`);
/**
 * 方法装饰器：方法装饰器会被应用到方法的 属性描述符上，可用来监视、修改、替换方法的定义 (需传入3个参数)
 *
 *      参数1、对于静态成员来说（它[参数1]是类的构造函数），对于实例成员来讲（它是类的原型对象）。
 *      参数2、成员（方法）的名字。
 *      参数3、成员（属性）的描述。
 * 
 * 方法装饰器可以修改、替换、扩展，当前类（实例）的属性 或 方法
 */


// 方法装饰器
function getFn(par: any, funName?: any) {

    console.log('\n\n调用方法装饰器时，传过来的参数：', par, '\n\n');


    return function (tag: any, methodName: any, desc: any) {
        console.log('原型对象：', tag);
        console.log('成员方法的名字：', methodName);
        console.log('成员属性描述：', desc);

        // 修改类属性
        tag.url = 'www.2345.com';

        /**
         * 修改类方法 (之前有的，方法 或 属性)
         * 以修改参数类型为例：要求把原来的方法里面传入的所有参数都改为string类型
         **/

        // 注：先保存类当前（调用方法装饰器的方法）的方法 --> desc.value
        let selfMethod = desc.value;
        console.log('\n\n当前（调用方法装饰器的方法）的方法', selfMethod);

        // 替换方法（类原有的方法），【注：由于类中有多个方法调用了这个方法装饰器，所有加了一个if判断】
        if ('getData' == funName) {

            desc.value = function (...args: any[]) {
                args = args.map((item, index) => {
                    return String(item)
                });
                console.log('我替换了getData方法', args);
            }
        }

        // 修改方法
        if ('getWss' == funName) {
            desc.value = function (...args: any[]) {

                selfMethod.apply(this, args);
                console.log('我修改了getWss', args);
            }
        }



        /**
         * 扩展(之前没的，现在新加)类的属性 或 方法
         **/

        // 扩展属性
        tag.wss = '192.168.0.1:80';
        tag.age = 29;
        tag.six = '男';


        //扩展方法
        tag.run = function () {
            console.log('我是方法装饰器，扩展的方法！', this);

        }
        tag.log = function (str?: any) {
            console.log('我是扩展的run方法', str);
        };

    };
};


class FangFa {

    public url: any | undefined;

    constructor() {

    };

    // 调用方法装饰器
    @getFn('http://www.baidu.com', 'getData')
    getData() {
        console.log('我是类里面的原型方法：getData()， 我在方法装饰器中被替换了，所以我不会执行了！！！');
    };

    // 调用方法装饰器
    @getFn('http://www.weibo.com', 'getWss')
    getWss(...par:any) {
        console.log('在原型方法getWss中打印', par);
        console.log('我也是类里面的原型方法：getWss()，我在方法装饰器中被修改了，但我是可以执行的！！！');
    };
};

const F = new FangFa();

console.log(F.url);
F.run();
F.log('666');

F.getData('abc', 888);
F.getWss('修改方法', 666);





console.log(`\n\n---------------- 方法参数装饰器 ----------------`);
/*
 * 方法参数装饰器：参数装饰器表达会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据 (需传入3个参数)
 *
 *      参数1、对于静态成员来说（它[参数1]是类的构造函数），对于实例成员来讲（它是类的原型对象）。
 *      参数2、参数的名字。
 *      参数3、参数在函数(参数列表)中的索引。
 *  
 */