
// es5中的类
{

    // 类 -> 构造函数
    function Person(par) {
        // 属性
        this.name = par.name;
        this.age = par.age;
        this.job = par.job;

        // 方法
        this.init = function () {
            console.log(par);
            Person.mupiao();
        };

        this.init();

        this.numSum();
    };

    // 静态属性
    Person.index = 0;
    
    // 静态方法
    Person.mupiao = function() {
        
        console.log('我是静态方法！');
        console.log(this.name);  // 注：在静态方法中不能访问类、构造函数的属性
        console.log('但我可以访问，静态属性 和 静态方法', Person.index);
    };

    // jquery 中的 $.xxx 就是静态方法以！如：$.ajax(); $.get(); ...; 如把上面Person换成$，就是$.mupiao() 一个道理！

    // 注：静态属性 或 静态方法 不用实例化 直接调用，调用时用类名.xxx 如：Person.mupiao();

    // 原型属性
    Person.prototype.pwd = 888;

    // 原型(原型链) 【在原型链上的属性 或 方法 被多个实例所共享，注：构造函数不会！，还有这样写上面原型中就木有pwd属性了(方法也一样)，完全重构。】
    Person.prototype = {
        // 原型属性
        sex: '先生',

        // 原型方法
        alert: function (text) {
            window.alert(text);
        },
        numSum: function () {

            console.log(Person.index++);
        }
    };

    // 原型属性
    Person.prototype.num = 666;

    // 原型方法
    Person.prototype.jsonToString = function(json) {
        return JSON.stringify(json);
    };

    // 类实例化：
    var mupiao = new Person({ name: '沐枫', age: 29, job: 'Web前端开发' });
    mupiao.alert('Hello World!');

    var muguilin = new Person({ name: '沐枫自然', age: 29, job: 'Web全栈开发' });
    muguilin.alert('OK 123 666');

    console.log('查看实例对象：', muguilin);

    // 类的继承
    // 方式1：【对象冒充：注：只能继承构造函数中的属性 和 方法，不能继承原型链上的 属性 和 方法】
        // function Web(par) {
        //     Person.call(this, par);
        // };

        // var myweb = new Web({ name: '百度', age: 20, job: '搜索引擎' });
        // console.log('继承Person类：', myweb);


    // 方式2：【原型链继承：注：构造函数 和 原型链上的 属性 和 方法都可以继承！注：在类子在实例化时，子类没法给父类传参】
        // function Web2(par) {
        //     this.admin = par.name;
        // };

        // Web2.prototype = new Person();      // 注：这里相当于重写了Web2.prototype，所以constructor属性就会改变 

        // Web2.prototype.constructor = Web2;  // 原以要还原constructor属性

        // var myweb2 = new Web2({ name: '百度', age: 20, job: '搜索引擎' });
        // console.log('继承Person类：', myweb2);


    // 方式3：【对象冒充 + 原型链 组合继承：这样就 构造函数 和 原型链上的 属性 和 方法都可以继承，而且在类子在实例化时，子类可以给父类传参】
        function Web3(par) {
            this.newName = par.newName;
            Person.call(this, par);         // 1、这里继承父类构造函数中的原型链上的 属性 和 方法，并且将子类传参给父类
        };

        Web3.prototype = Person.prototype;  // 2、这里继承父类原型链上的 属性 和 方法

        var myweb3 = new Web3({ name: '百度', age: 20, job: '搜索引擎', newName: '百度云' });
        console.log('继承Person类：', myweb3);



        

        


};

{
    /*
    问：类在被new时，做了什么？

        • 创建一个空对象，将它的引用赋给 this，继承函数的原型。
        • 通过 this 将属性和方法添加至这个对象
        • 最后返回 this 指向的新对象，也就是实例（如果没有手动返回其他的对象）

    */


// 【实现一个简单的new方法】

    // 构造器函数
    let Parent = function (name, age) {
        this.name = name;
        this.age = age;
    };
    Parent.prototype.sayName = function () {
        console.log(this.name);
    };
    //自己定义的new方法
    let newMethod = function (Parent, ...rest) {
        // 1.以构造器的prototype属性为原型，创建新对象；
        let child = Object.create(Parent.prototype);
        // 2.将this和调用参数传给构造器执行
        Parent.apply(child, rest);
        // 3.返回第一步的对象
        return child;

    };
    //创建实例，将构造函数Parent与形参作为参数传入
    const child = newMethod(Parent, 'echo', 26);  // 注：这里的newMethod(Parent, 'echo', 26) === new Parent('echo', 26)
    child.sayName() //'echo';

    //最后检验，与使用new的效果相同
    child instanceof Parent//true
    child.hasOwnProperty('name')//true
    child.hasOwnProperty('age')//true
    child.hasOwnProperty('sayName')//false

};

// es5中静态方法实例
{
    // 构造函数
    function Base(el) {
        this.el = document.querySelector(el);

        this.css = function (arr, val) {

            this.el.style[arr] = val;
        };
    };

    function $(el) {
        return new Base(el)
    };

    // 静态方法
    $.ajax = function (obj) {

        console.log('静态方法不能访问，构造函数属性 和 方法：', this.el);

        var opt = {
            url: obj.url || '',
            type: obj.type || 'GET',
            data: obj.data || {},
            dataType: obj.dataType || 'JSON'
        };

        var xhr = new XMLHttpRequest();

        xhr.open(opt.type, opt.url, true);

        xhr.onload = function (e) {
            if (this.status == 200 || this.status == 304) {
                obj.success(this.responseText);
            };
        };
        xhr.onreadystatechange = function (e) {
            if (this.readyState == 4 && this.status == 200) {
                obj.success(JSON.parse(this.responseText));
            };
        };
        xhr.onerror = function (e) {
            obj.error(e);
        };
        xhr.upload.onprogress = function (e) {
            console.log(e);
        };

        var data = 'GET' == opt.type ? new FormData() : JSON.stringify(opt.data);

        if ('GET' == opt.type) {
            Object.getOwnPropertyNames(opt.data).forEach(function (key) {
                data.append(key, opt.data[key]);
                console.log(key + ': ' + opt.data[key]);
            });
        };

        console.log(data)

        xhr.send(data);

    };

    $('#h1').css('color', 'red');

    $.ajax({
        url: 'https://iniditorbesd.smgtech.net/index.php/api/index',
        type: 'POST',
        data: {
            name: 'admin',
            pwd: '666'
        },
        success: function (data) {
            console.log(data)
        }
    });

};