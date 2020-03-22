
// ts中的类
{
    /**
     * typeScript 在定义属性时提供了三种修饰符：
     *      1、public 公有的，在类里面、类外面、子类都可访问
     *      2、protected 保护的，在类里面、子类里面能访问，类外面不能访问
     *      3、private 私有的，只能在当前自己类里面访问
     */

    console.log('\n\n---------------------- 类 class -------------------------\n\n');

    // 类 class
    class Person {

        // 公有属性【在类里面、类外面、子类都可访问】
        public name: string;
        age: number = 29;     // 注：public 关键字可忽略不写【没有加修饰符时，默认为public】
        public getAge(): void {
            console.log(this.age);
        };

        // 保护属性【在类里面、子类里面能访问，类外面不能访问】
        protected job: string = 'Web前端开发！';

        // 私有属性【只能在类里面访问】
        private rmb: number = 9806502.68;


        // 【注: 在类中：静态属性和方法不能访问this, 其他都可以：如 加修饰符的属性和方法，实例属性和方法，原型属性和方法】


        // 静态属性
        static newIndex: number = 0;

        // 静态方法
        static myClass(): any {
            console.log('我是静态方法！我不能访问，类、构造函数属性 和 方法，但可以访问静态属性 和 静态方法：', Person.newIndex);
        };

        // 构造函数(在实例化 new 时会被触发)
        constructor(props: any, public sex: string) {
            // super(props); super() 在没有继承时，不用

            // 实例属性
            this.age = props.age;
            this.name = props.name || '佚名';

            // 实例方法
            this.init = () => {
                console.log('public sex: string', this.sex)

                console.log('init初始化方法, 调用静态属性：', Person.newIndex++, '次');

                // 调用静态方法
                Person.myClass();
            };

            this.init();
        };

        // 原型方法
        setName(name: string): void {
            this.name = name;
        };

        // 原型方法
        getName(): string {
            return this.name;
        };

    };

    const mu = new Person({ age: 28 }, '男');
    console.log(mu)
    console.log(mu.getName());

    mu.setName('沐枫');
    console.log(mu.getName());

    console.log(mu.age, mu.rmb); // private 私有属性只以在类中自己调用



    console.log('\n\n------------------- 类 -> 继承 extends ---------------------\n\n');


    // 类 继承 extends
    class Web extends Person {
        constructor(props) {

            super(props); // 初始化父类构造函数
        };

        getName(): string {
            console.log(this.rmb)  //属性“job”受保护，只能在类“Person”及其子类中访问

            return '如果子类和父类中，有相同名的方法时，子类会首先在子类中查找，没有时再去父类找！';
        };

        getJob(): string {
            return this.job;
        };

    };

    let myweb = new Web({ name: 'MuGuiLin', age: 30 });
    let name = myweb.getName();

    console.log(name);

    console.log(myweb.getJob());

    console.log(myweb.job) // 属性“job”受保护，只能在类“Person”及其子类中访问


};


console.log('\n\n------------------- 类 -> 继承 -> 多态 ---------------------\n\n');
{
    // 类 多态：（多态也是继承的一种表现，多态属于继承，多态 == 子类重写）

    //   多态：简单来说，就是 父类先定义一个方法但不去做具体实现，让继承它的子类(派生类)去实现，继承的每个子类有不同的表现、不同的功能！
    //   多态：再简单来说，就是 子类 重写 父类 的方法。

    // 创建一个动物类
    class Animal {
        // 公有属性
        public name: string;

        // 公有方法
        public getName() {
            console.log(this.name);
        };

        constructor(name: string, age: number, job: string) {
            this.name = name;
            this.age = age;
            this.job = job;
        };

        // 原型方法  
        // 多态：父类只是定义方法，不实现方法【类似于抽象类】
        Eat() {
            console.log('动物吃的东西的方法，具体吃什么我不管！让继承我的子类去实现去吧！当然，子类也可以不去实现(那就不是多态了)')
        };
    };

    const ani = new Animal('父类', 0, '定义多态方法');
    ani.getName();


    // 创建一个狗类，继承动物类
    class Dog extends Animal {

        public age:number;
        constructor(name: string, age: number, job: string) {
            super(name, age, job);
        };


        Eat() {
            console.log(`我是属狗的，我叫${this.name}，今年${this.age}岁，我是${this.job}，我喜欢啃骨头，我具体实现了父类的Eat方法！`)
        };
    };

    const hh = new Dog('欢欢', 3, '看门的');
    hh.getName();
    hh.Eat();


    // 创建一个猫类，继承动物类
    class Cat extends Animal {

        constructor(name: string, age: number, job: string) {
            super(name, age, job);
        };

        Eat() {
            console.log(`我是属猫的，我叫${this.name}，今年${this.age}岁，我是${this.job}，我喜欢吃老鼠，我也具体实现了父类的Eat方法！`)
        };

    };

    const kt = new Cat('柯提', 2, '抓老鼠的');
    kt.getName();
    kt.Eat();
};


console.log('\n\n---------------------- 类 -> 抽象类 ------------------------\n\n');
{
    /**
     * ts中的抽象类：
     *      1、用abstract关键字来定义抽象类 和 抽象方法，抽象类中的抽象方法不包含具体实现，主要用来定义标准的。
     *      2、并且在有子类(派生类)继承抽象类以后，子类中必须实现抽象类中的抽象方法。
     *      3、abstract抽象类：是用来供子类继承的基类，抽象类不能被实例化 new 。
     *      4、abstract抽象方法: 是用来定义标准的，在子类中必须实现抽象方法。
     *      5、用abstract关键字声明的抽象方法，必须放在abstract关键字声明抽象类里面
     *      6、在抽象类中 可以有抽象方法 和 非抽象方法
     */

    // 抽象类
    abstract class Animal {

        public name: string;

        constructor(name: string) {
            this.name = name;
            this.init();
        };

        // 抽象方法
        abstract Eat(): any; // 不包含具体实现，并在现派生类中实现

        // 抽象方法
        abstract Jiao(): any; // 不包含具体实现，并在现派生类中实现

        //这时，在子类(派生类)中，必须实现 Eat() 和 Jiao() 方法

        // 非抽象方法
        init() {
            console.log(this.name, '我是在抽象类中的非抽象方法，我可以不用实现！');
        };
    };

    // const a = new Animal();  这是错误的：因为抽象类不能被实例化


    // 继承抽象类
    class Dog extends Animal {

        constructor(name: string) {
            super(name);
        };

        // 如果没有Eat方法就会报错
        Eat() {
            console.log('子类继承 抽象类以后，必须在子类中实现抽象类中的抽象方法！')
        };

        // 如果没有Jiao方法也会报错
        Jiao() {
            console.log(`我是小狗，我叫${this.name}，我的叫声是 "汪汪汪"`);
        };

    };

    const d = new Dog('欢欢');
    d.Eat();
    d.Jiao();



    // 继承抽象类
    class Cat extends Animal {

        constructor(name: string) {
            super(name);
        };

        // 如果没有Eat方法就会报错
        Eat() {
            console.log('子类继承 抽象类以后，必须在子类中实现抽象类中的抽象方法！')
        };

        // 如果没有Jiao方法也会报错
        Jiao() {
            console.log(`我是小猫，我叫${this.name}，我的叫声是 "喵喵喵"`);
        };

    };

    const c = new Cat('京京');
    c.Eat();
    c.Jiao();
};

