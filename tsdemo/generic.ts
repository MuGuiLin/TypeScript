{
    /**
     * 泛型：Generic
     *      在软件工程中，我们不仅要创建和定义好的API(接口)，同时还也要考虑可重用性(复用性)。
     *      组件不仅能够支持当前的数据类型，同时还能支持未来的、未知的数据类型，这样在做大型项目时，才能提供灵活的功能。
     *      
     * 在C#、Java等这样的语言中，可以使用泛型来创建可重用的组件(一个组件可以支持多种类型的数据)，这样其他程序员就可以用自己的数据类型来使用组件了。
     * 
     * 简单理解：泛型就是用来解决：类、接口、方法 的可复用(重用)性，以及对不特定的、未来的数据类型、参数等给于支持。
     */


    // 现在，有这样的一个功能，要求一个方法做到，传入的参数是什么类型，就返回什么类型。

    // 1、只能返回string类型的数据
    function getString(val: string): string {
        return val;
    };
    getString(123);     // 错误
    getString('123');   // 正确

    // 2、同时返回string类型 和number类型 (这样会代码冗余)
    function getString1(val: string): string {
        return val;
    };
    function getNumber2(val: number): number {
        return val;
    };

    // 3、可返回任意类型 (这样就相当于放弃了类型检测了)
    function getData(val: any): any {
        return val;
    };
    getData(123);     // 正确
    getData('123');   // 正确




    console.log('\n\n------------ 泛型方法(函数) 的定义 ------------\n\n');

    // 所以，这时候 泛型就可以很轻松的解决这个问题了


    // 泛型方法(函数)的定义：<T>
    console.log(`这里用 <T> 来表示泛型（注：这个T是可以自定义的，但一般都用T来表示泛型）`);

    function getDatas<T>(val: T): T {

        // 这里就是 根据所传入的数据类型，返回对应的数据类型

        return val;
    };

    // 不指定返回类型
    getDatas(123);     // 正确
    getDatas('123');   // 正确
    getDatas(true);    // 正确
    getDatas({});      // 正确

    // 指返回类型
    getDatas<string>(123);      // 错误 参数据必须是字符串类型
    getDatas<string>('123');    // 正确
    getDatas<number>(123);      // 正确 参数据必须是数字类型

};


console.log('\n\n---------------- 泛型类 的定义 ----------------\n\n');
{
    // 实现最小堆算法：要求支持返回数字，这里只能用普通的类来实现。
    class MinClass {

        public list: number[] = [];

        constructor() {

        };

        // 返回堆数据
        get(): any {
            return this.list;
        }

        // 添加堆数据
        add(num: number): void {
            this.list.push(num);
        };

        // 求最小堆数据
        min(): number {
            let minNum = this.list[0];

            for (let i = 0; i < this.list.length; i++) {
                // 求最小数
                if (minNum > this.list[i]) {
                    minNum = this.list[i];
                };
            };
            return minNum;
        };
    };

    const m = new MinClass();
    m.add(31);
    m.add(2.5);
    m.add(16);
    m.add(102);
    m.add(-1);
    m.add(75);

    console.log(`堆：${m.get()}`);
    console.log(`最小数据是：${m.min()}`);



    // 创建泛型类：实现最小堆算法：要求需要同时支持返回数字 和 字符串(a - z) 两种数据类型，用泛型类来实现。
    class MinNumStr<T> {

        public list: T[] = [];

        constructor() {

        };

        // 返回堆数据
        get(): any {
            return this.list;
        };

        // 添加堆数据
        add(val: T): void {
            this.list.push(val);
        };

        // 求最小堆数据
        min(): T {
            let minNum = this.list[0];

            for (let i = 0; i < this.list.length; i++) {
                // 求最小数（注：如果是计算值是：a-z, 系统会以ASCII码来计算）
                if (minNum > this.list[i]) {
                    minNum = this.list[i];
                };
            };
            return minNum;
        };
    };

    // 实例化泛型类：指定类型为number (这样MinNumStr类的T就是number了)
    const mn = new MinNumStr<number>();

    // mn.add('102'); //错误
    mn.add(102);
    mn.add(2.5);
    mn.add(31);
    mn.add(16);
    mn.add(75);
    mn.add(0.5);

    console.log(`堆：${mn.get()}`);
    console.log(`最小数据是：${mn.min()}`);


    // 实例化泛型类：指定类型为string (这样MinNumStr类的T就是string了)
    const ms = new MinNumStr<string>();

    // ms.add(102); //错误
    ms.add('n');
    ms.add('t');
    ms.add('y');
    ms.add('b');
    ms.add('a');
    ms.add('r');
    ms.add('o');

    console.log(`堆：${ms.get()}`);
    console.log(`最小数据是：${ms.min()}`);
};


console.log('\n\n---------------- 泛型接口 的定义 ----------------\n\n');
{
    // 实现函数类型的接口
    interface ConfigFun {
        (val1: string, val2: string): string;
    };

    const setData: ConfigFun = function (v1: string, v2: string): string {
        return v1 + v2;
    };

    console.log(setData('沐', '枫'));




    // 实现1、 函数类型的 泛型接口
    interface ConfigFun2 {
        <T>(val1: T, val2: T): T;
    };

    const setData2: ConfigFun2 = function <T>(v1: T, v2: T): T {
        return v1 || v2;
    };

    // console.log(setData2<string>('张', 3)); // 错误
    console.log(setData2<string>('张', '三'));
    console.log(setData2<number | string>(123, '三'));


    // 实现2、 函数类型的 泛型接口
    interface fanxin<T> {
        (value: T): T;
    };

    function getData<T>(value: T): T {
        return value;
    };

    // 指定为字符串类型
    let myGetStr: fanxin<string> = getData;

    // console.log(myGetStr(123));       // 错误
    console.log(myGetStr('123'));        // 正确
    console.log(myGetStr('壹贰叁'));      // 正确


    // 指定为数字类型
    let myGetNum: fanxin<number> = getData;

    console.log(myGetNum(123));          // 正确
    console.log(myGetNum(1024));         // 正确
    // console.log(myGetNum('123'));     // 错误


};


console.log('\n\n---------------- 把 类 作为参数，来约束数据传入的类型  ----------------\n\n');
{
    // 大概实现：
    /**
     * 1、先创建一个类。
     * 2、把 类 作为参数，来约束数据传入的类型。
     */

    // 具体实现：实例
    /**
     * 1、定义一个User的类，用于映射数据库字段。
     * 2、再定义一个MysqlDB的类，用于操作数据库。
     * 3、把User类 作为参数 传入到MysqlDB类中。
     */


    //定义一个User的类，用于映射数据库字段
    class User {
        public username: string | undefined;
        password: string | undefined;
    };

    //定义一个News的类，用于映射数据库字段
    class News {
        public title: string | undefined;
        public content: string | undefined;
        desc: string | undefined;
        status: number | undefined;
        time: string | undefined;
    };

    // 定义一个MysqlDB的类，用于操作数据库
    class MysqlDB {

        public userList: any[] = [];

        constructor(public newsList?: any[]) {

        };

        // 增加用户 (这里的data: 是用User类来检验 所传数据的合法性)
        insertUser(data: User): boolean {

            console.log(data);

            this.userList.push(data);

            return true; //假设增加成功
        };

        // 增加新闻 (这里的data: 是用News类来检验 所传数据的合法性)
        insertNews(data: News): boolean {

            console.log(data);

            this.newsList.push(data);

            return true; //假设增加成功
        };

        //删
        delete() {

        };

        // 查
        select(type: string): any {
            return this[type];
        };

        // 改
        update() {

        };

    };

    // 实例化User类 并添加参数
    const us = new User();
    us.username = '沐枫';
    us.password = '123456';

    // 实例化News类 并添加参数
    const ns = new News();
    ns.title = '春天来了，去哪旅游最好';
    ns.content = '其实，春回大地，去哪里旅行都很好，来一场说走就走的旅行吧！';
    ns.desc = '旅行、春游、去哪里最好'
    ns.time = '2010-03-08'
    ns.status = 1;


    // 实例化MysqlDB类
    const db = new MysqlDB([]);

    db.insertUser(us);
    console.log(db.select('userList'));

    db.insertNews(ns);
    console.log(db.select('newsList'));


};


console.log('\n\n---------------- 用泛型 把 类 作为参数，来约束数据传入的类型  ----------------\n\n');
{
    // 用泛型可解决上面MysqlDB类的insert复用问题

    // 定义一个MysqlDB的 泛型类，用于操作数据库
    class MysqlDB<T> {

        public list: any[] = [];

        constructor() {

        };

        // 增加用户 (这里的data: 是用User类来检验 所传数据的合法性)
        insert(data: T): boolean {

            console.log(data);

            this.list.push(data);

            return true; //假设增加成功
        };


        // 查
        select(): any {
            return this.list;
        };

        // 改
        update(info: T, id: number): boolean {
            console.log(id);
            console.log(info);

            return true; //假设修改成功 
        };


    };

    //定义一个User的类，用于映射数据库字段
    class User {
        username: string | undefined;
        password: string | undefined;
    };

    // 实例化User类 并添加参数
    const us = new User();
    us.username = '沐枫';
    us.password = '123456';


    // 实例化MysqlDB类 类型为User
    const db = new MysqlDB<User>();
    db.insert(us);
    console.log(db.select());



    //定义一个News的类，用于映射数据库字段 在构造函数中赋值
    class News {
        public id: number = Date.now();
        public time: any = new Date();

        title: string | undefined;
        content: string | undefined;
        desc: string | undefined;
        status: number | undefined;

        constructor(public par: {
            title: string,
            content: string,
            desc?: string,
            status?: number,
        }) {
            this.title = par.title;
            this.content = par.content;
            this.desc = par.desc;
            this.status = par.status;

            this.init();
        };

        init(): void {
            console.log(this.par)
        }

    };

    // 实例化News类 并添加参数
    const ns = new News({
        title: '春天来了，去哪旅游最好',
        content: '其实，春回大地，去哪里旅行都很好，来一场说走就走的旅行吧！',
        desc: '旅行、春游、去哪里最好',
        status: 1
    });


    // 实例化MysqlDB类 类型为News
    const db2 = new MysqlDB<News>();

    // 增加数据
    db2.insert(ns);
    console.log(db2.select());


    // 实例化News类 并修参数
    const ns2 = new News({
        title: '秋天来了，去哪旅游最好',
        content: '其实，秋高气爽，携程在手，说走就走！',
    });

    // 增加数据
    db2.update(ns2, 1583601564976);
    console.log(db2.select());


};
