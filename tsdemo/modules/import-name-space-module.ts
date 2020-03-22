import { iHub as H, iDitor } from "./export-name-space-module";

console.log(H);

console.log(iDitor);


const hh:any = new H.Ihub();
hh.Show('我是iHub命名空间中，Ihub类中，的Show方法');
console.log( hh.__URL__);



const dd:any = new iDitor.Iditor();
dd.Show('我是iDitor命名空间中，Iditor类中，的Show方法');
console.log(dd.__URL__);


// 注：模块化 在node.js中运行才可以，浏览器不支持 exports  会报：ReferenceError: exports is not defined的错误！！
