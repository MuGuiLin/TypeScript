/**
 * 命名空间 NameSpace模块化【就是把命名空间当作模块导出】
 * 
 * 命名空间 NameSpace：
 *      在代码量较大的情况下，为了避免各种变量相冲突，可将相似功能的类、函数、接口、变量等放了命名空间中。
 *      和Java中的包、.Net中的命名空间一样，TS中的命名空间可以将代码包裹起来（注：默认在命名空间中的都是私有的，外部不能访问），如对外 用export暴露需要在外部访问的数据对象。
 *      
 *      注：默认在命名空间中的都是私有的，外部不能访问，如外部要访问，就在要访问的类、函数、接口、变量等前面加上 export 关键字，外就可访问了，
 * 
 * 命名空间 和 模块的区别：
 *      命名空间：内部模块，主要用于组织代码，避免命名冲突（在不同的命名空间中，可以有相同所有的变量名，类、函数、接口等，它们不会冲突，因为它们虽然相同，但是不是同一个命名空间！）。
 *      模    块：TS外部模块的简称，侧重代码的复用性，注：（在一个模块中可以包含1个或多个命名空间）。
 * 
 * TS声明命名空间的关键字：namespace
 * 
 */

// iHub的命名空间 向外部模块 暴露 命名空间
export namespace iHub {
    interface Config {
        __URL__: string;
        __WSS__: string;
        GetPar(): any;
    };

    export const PI:number = Date.now();

    export class Ihub implements Config {

        __URL__: string;
        __WSS__: string;

        static index: number = 0;
        static SumIndex = (): number => {
            console.log(++Ihub.index);
            return Ihub.index;
        }
        constructor() {
            this.__URL__ = 'https://ihub.smgtech.net';
            this.__WSS__ = 'http://10.1.2.68:2125';
        };

        GetPar(): string {
            const search = window.location.search;
            if (search) {
                return search;
            } else {
                throw new Error("对不起：URL地址栏 网址?后面没有参数！");
            }
        };

        GteUrl(): string {
            return this.__URL__;
        };

        Show(par: any): void {
            window.alert(par)
        };
    };

    class Alert {
        constructor() {

        };

        show(par: any): void {
            alert(par);
        };
    };

    export class UpImage extends Ihub {

        // private xhr: any = new XMLHttpRequest();
        private xhr: any = {};

        constructor() {
            super();
            this.__URL__ = 'https://fddp.smgtech.net/index.php?r=site/doutoutiao';
            this.GteUrl();
        };

        GteUrl(): any {
            console.log(super.GteUrl)
            console.log('调用父类同名方法：', super.GteUrl());
            console.log('自己的属性：', this.__URL__);
            
            return this.__URL__;
        }

        Image() {
            this.xhr.open('GET', this.__URL__, true);
            this.xhr.send();
            this.xhr.onloand = () =>{};
            this.xhr.onreadystatechange = () =>{
                if (200 === this.xhr.status && 4 == this.xhr.readyState) {
                    console.log(JSON.parse(this.xhr.responseText));
                }
            };
        }
    }

};

// 访问命名空间中的数据


// 实例化类
const I:any = new iHub.Ihub();

// 实例化类
const I2:any = new iHub.Ihub();

// 访问实例的属性
console.log(I.__WSS__);

// 访问类的静态属性
console.log(iHub.Ihub.index);

// 调用类的静态方法
iHub.Ihub.SumIndex();




const Up:any = new iHub.UpImage();

// 调用实例的方法
Up.Image()



// iDitor的命名空间
namespace iDitor {
    interface Config {
        __URL__: string;
        __WSS__: string;
        GetPar(): any;
    };

    export const PI:number = Math.PI;

    export class Iditor implements Config {

        __URL__: string;
        __WSS__: string;

        static index: number = 0;
        static SumIndex = (): number => {
            return Iditor.index++;
        }
        constructor() {
            this.__URL__ = 'https://iDitor.smgtech.net';
            this.__WSS__ = 'http://91.0.2.29:2120';
        };

        GetPar(): string {
            const search = window.location.search;
            if (search) {
                return search;
            } else {
                throw new Error("对不起：URL地址栏 网址?后面没有参数！");
            }
        };

        GteUrl(): string {
            return this.__URL__;
        };

        Show(par: any): void {
            window.alert(par)
        };
    };

    class Alert extends Iditor {
        constructor() {
            super()
        };

        show(par: any): void {
            alert(par);
        };
    };
};

// 实例化类
const D:any = new iDitor.Iditor();

// 调用实例的方法
console.log(D.GteUrl());

// 访问命名空间中的变量
console.log('iHub名空间中的变量', iHub.PI)
console.log('iDitor名空间中的变量', iDitor.PI);



// 以上在不同的命名空间中，都有相同名的变量名，类名、函数名、接口名等，它们不会冲突，这样就是 空间 避免命名冲突的作用所在！

export { iDitor}