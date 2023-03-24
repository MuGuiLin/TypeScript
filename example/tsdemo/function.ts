// 在js中 定义函数
{
    // 普通函数
    function Sum(a, b) {
        return a + b;
    };


    // 匿名函数
    var addDom = function () {
        return '<h1>dom</h1>'
    };

 
    // 立即执行函数
    (function(self){
        console.log(self);
    }(this));
};
    


// 在ts中定义函数
{
    // 函数返回类型
    function Show():string{
        // return 1024;  // 返回类型错误
        return 'Hello Worald!';
    };
    console.log(Show());



    // 函数没有返回类型
    function Noet():void{
    //    throw "我是一个没有返回类型的函数！";
    //    throw new Error("我是一个没有返回类型的函数！");
        console.log('我是一个没有返回类型的函数 void！')
    };
    Noet()

};



// ts中定义函数传参
{
    // 函数传参【参数类型统一】
    function Run(a:number, b:number|null):number{
        // return 'Hello Worald!'; // 返回类型错误
        return a + b;
    };
    console.log(Run(100, 200));



    // 函数传参【参数类型混合】
    function Push(a:string, b:number):string{

        return `我叫：${a}，今年：${b}岁！`;
    };
    console.log(Push('沐枫', 28));
    console.log(Push(9527, 32)); // 传递参数类型错误



    // 函数【?可选参数】（可传可不传）在函数参数中后加上? 表示该参数为可选参数，
    // 注：？可选参数 必须加从右向左加，（也就是从最后一个开开始加）
    function Pull(a:string, b?:number):string{

        return b ? `我叫：${a}，今年：${b}岁！` : `我叫：${a}，年龄：未知！`;
    };
    console.log(Pull('小英', 28));
    console.log(Pull('小明')); // 第2个参数可以不用传


    
    // 函数【默认参数】
    function Add(a:string = '佚名', b:number = 24):string{

        return `我叫：${a}，今年：${b}岁！` ;
    };
    console.log(Add('小强', 12));
    console.log(Add()); // 不传参数时，默认为佚名 和 24 
    
    
    
    // 函数【...剩余参数】
    function Computer1(a:number = 0, b:number, c:number, d:number):number{
        return a + b + c + d;
    };
    console.log(Computer1(1, 2, 3, 4)); // 这里最多只能传4个参数

    // 注：...剩余参数 是一个数组！
    function Computer2(...num:number[]):number{
        let temp = 0;
        num.forEach((o, i) => {
            temp += o;
        })
        return temp;
    };
    console.log(Computer2(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 这里随别传

    // 注：还可以混合：参数1 参数2 ...剩余参数 一起使用！
    // ...剩余参数 必须放在最后面
    function Computer3(a, b, ...num:number[]):number{
        let temp = a + b;
        num.forEach((o, i) => {
            temp += o;
        })
        return temp;
    };
    console.log(Computer3(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 这里随别传
};



// ts函数重载
{
    // 在java中方法的重载：指有两个或两个以上的函数名相同，但它们所传递的参数不同，这时就是函数重载！

    // 在es5中，如果有两个相同名的函数时，后面的函数会覆盖前面的函数！
    /**
     * function fun(par){
     *      console.log(par)
     * };
     * 
     * function fun(par1, par2, par3) {
     *      console.log(par1, par2, par3);
     * };
     */

    //  在ts中 的函数重载
    function fun(par:string):string;
         
    function fun(par:number):number;

    function fun(par:any):any {
        if('string' === typeof par) {
            return `我的姓名：${par}`;
        } else {
            return `我的年龄：${par}`;
        };
    };

    console.log(fun('张三'));
    console.log(fun(20));

    console.log(fun(true)); // 类型错误
};



// 箭头函数 注：箭头函数的this 指向当前上下文作用域！
{
    function mupiao() {
        setTimeout(() => {

            console.log(this);
        }, 1000);
    };
    mupiao();


    setTimeout(function() {

        console.log(this);
    }, 1000);
    

    setTimeout(() => {

        console.log(this);
    }, 1000);

};