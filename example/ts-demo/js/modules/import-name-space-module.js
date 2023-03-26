"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var export_name_space_module_1 = require("./export-name-space-module");
console.log(export_name_space_module_1.iHub);
console.log(export_name_space_module_1.iDitor);
var hh = new export_name_space_module_1.iHub.Ihub();
hh.Show('我是iHub命名空间中，Ihub类中，的Show方法');
console.log(hh.__URL__);
var dd = new export_name_space_module_1.iDitor.Iditor();
dd.Show('我是iDitor命名空间中，Iditor类中，的Show方法');
console.log(dd.__URL__);
// 注：模块化 在node.js中运行才可以，浏览器不支持 exports  会报：ReferenceError: exports is not defined的错误！！
