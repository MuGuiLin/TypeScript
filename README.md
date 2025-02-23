## TypeScript【JavaScript的超集】

> 1、TypeScript 是 JavaScript 的一个超集，支持 ECMAScript 6 - 10... 标准。
>
> 2、TypeScript 由微软开发的自由和开源的编程语言。
>
> 3、TypeScript 设计目标是开发大型应用，它最终是编译成标准的JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上、任何计算机和任何操作系统上运行，并且是开源的。

> 一、 Typescript 介绍
> 1. TypeScript 是由微软推出的一个开源的编程语言。
> 4、 TypeScript 是 Javascript 的超级，遵循最新的 ES6、Es5 规范。TypeScript 扩展了 JavaScript
> 的语法。
> 2. TypeScript 更像后端 java、C#这样的面向对象语言可以让 js 开发大型企业项目。
> 5、谷歌也在大力支持 Typescript 的推广，谷歌的 angular2.x+就是基于 Typescript 语法。
> 6、最新的 Vue 、React 也可以集成 TypeScript

> **[TypeScript 中文官网](https://www.tslang.cn/)**，**[TypeScript 英文官网](https://www.typescriptlang.org/)**



### TypeScript安装

	可用命令行的TypeScript编译器可以使用Node.js包来安装。
	
	全局安装
		如：npm install -g typescript
		
	局部安装
		如：npm i typescript



### 编译ts文件(输出对应的js文件)
```bash
在要编译ts文件的目录中打开DOS命令行工具，输入 tsc ts文件名 回车
	如：tsc xxx.ts

注：回车后系统会在当前目录，自动编译并生成一个对应文件名的js文件
```



### 监听ts文件(更新对应的js文件)

**（就是当ts文件变化时，自动生成、更新js文件）**

#####  以前做法：

> 1、在生成的tsconfig.json文件中，把 "outDir": "./js",  的注释取消，并指定输出js文件在当前路径下的js目录中
>
> 2、【注：这是在项目第一次的时候要操作的】在vsCode中选择终端菜单 -> 配置任务 -> 在弹出的列表中向下滑动选择 -> tsc:构建 - xx项目名/tsconfig.json
>
> 3、在vsCode中选择终端菜单 -> 运行任务 -> 在弹出的列表中选择 -> tsc:监视 - xx项目名/tsconfig.json
>
> 4、运行后系统会自动生成一个js目录，编译并生成一个对应的js文件，这个文件就是标准的、浏览器能识别的、能解析的js文件啦!
>
> 5、现在你修改ts文件时，系统会自动同步到对应的js文件中

**现在做法：**

```bash
* 监听单个ts文件
	如：tsc xxx.ts -w

* 监听xxx目录下所有的ts文件
	如：tsc
	注：直接在xxx目录下执行tsc命令【前提是：xxx目录下要有tsconfig.json 配置文件才行！！！】
```



### tsconfig.json 文件初始化

```bash
在项目根目录中，打开Dos命令工具 执行如下命令： 
	如：tsc --init 

命令执行后会自动生成一个tsconfig.json 的配置文件
```



### tsconfig.json 配置文件明说

```json
{
  "compilerOptions": {
    /* 访问 https://aka.ms/tsconfig.json 以阅读有关此文件的更多信息 */

    
    /* 基本选项 */
    // "incremental": true,                   /* 启用增量编译 */
    "target": "ESNEXT",                          /* 指定 ECMAScript 目标版本：'ES3'、'ES5'（默认）、'ES2015'、'ES2016'、'ES2017'、'ES2018'、'ES2019'、'ES2020' 或 'ESNEXT'。 */
    "module": "commonjs",                     /* 指定模块代码生成：“none”、“commonjs”、“amd”、“system”、“umd”、“es2015”、“es2020”或“ESNext”。 */
    // "lib": [],                             /* 指定要包含在编译中的库文件。 */
    // "allowJs": true,                       /* 允许编译 javascript 文件。 */
    // "checkJs": true,                       /* 报告 .js 文件中的错误。 */
    // "jsx": "preserve",                     /* 指定 JSX 代码生成：'preserve'、'react-native' 或 'react'。 */
    // "declaration": true,                   /* 生成相应的“.d.ts”文件。 */
    // "declarationMap": true,                /* 为每个对应的“.d.ts”文件生成一个源映射。 */
    // "sourceMap": true,                     /* 生成相应的“.map”文件。 */
    // "outFile": "./",                       /* 连接输出到单个文件。 */
    // "outDir": "./",                        /* 将输出结构重定向到目录。 */
    // "rootDir": "./",                       /* 指定输入文件的根目录。用于通过 --outDir 控制输出目录结构。 */
    // "composite": true,                     /* 启用项目编译 */
    // "tsBuildInfoFile": "./",               /* 指定文件存放增量编译信息 */
    // "removeComments": true,                /* 不要向输出发出注释。 */
    // "noEmit": true,                        /* 不发出输出。 */
    // "importHelpers": true,                 /* 从 'tslib' 导入发射助手。 */
    // "downlevelIteration": true,            /* 以“ES5”或“ES3”为目标时，为“for-of”、展开和解构中的迭代提供全面支持。 */
    // "isolatedModules": true,               /* 将每个文件转换为一个单独的模块（类似于 'ts.transpileModule'）。 */


    /* 严格的类型检查选项 */
    "strict": true,                           /* 启用所有严格的类型检查选项。 */
    // "noImplicitAny": true,                 /* 使用隐含的“任何”类型在表达式和声明上引发错误。 */
    // "strictNullChecks": true,              /* 启用严格的空检查。 */
    // "strictFunctionTypes": true,           /* 启用函数类型的严格检查。 */
    // "strictBindCallApply": true,           /* 在函数上启用严格的“绑定”、“调用”和“应用”方法。 */
    // "strictPropertyInitialization": true,  /* 启用对类中属性初始化的严格检查。 */
    // "noImplicitThis": true,                /* 使用隐含的“any”类型在“this”表达式上引发错误。 */
    // "alwaysStrict": true,                  /* 以严格模式解析并为每个源文件发出“使用严格”。 */


    /* 额外检查 */
    // "noUnusedLocals": true,                /* 报告未使用的本地人的错误。 */
    // "noUnusedParameters": true,            /* 报告未使用参数的错误。 */
    // "noImplicitReturns": true,             /* 不是函数中的所有代码路径都返回值时报告错误。 */
    // "noFallthroughCasesInSwitch": true,    /* 在 switch 语句中报告失败情况的错误。 */


    /* 模块分辨率选项 */
    // "moduleResolution": "node",            /* 指定模块解析策略：'node' (Node.js) 或 'classic' (TypeScript pre-1.6)。 */
    // "baseUrl": "./",                       /* 解析非绝对模块名称的基目录。 */
    // "paths": {},                           /* 一系列将导入重新映射到相对于“baseUrl”的查找位置的条目。 */
    // "rootDirs": [],                        /* 根文件夹列表，其组合内容代表运行时项目的结构。 */
    // "typeRoots": [],                       /* 包含类型定义的文件夹列表。 */
    // "types": [],                           /* 类型声明文件要包含在编译中。 */
    // "allowSyntheticDefaultImports": true,  /* 允许从没有默认导出的模块中默认导入。 这不会影响代码发出，只是类型检查。 */
    "esModuleInterop": true,                  /* 通过为所有导入创建命名空间对象，在 CommonJS 和 ES 模块之间启用发射互操作性。 暗示“allowSyntheticDefaultImports”。 */
    // "preserveSymlinks": true,              /* 不解析符号链接的真实路径。 */
    // "allowUmdGlobalAccess": true,          /* 允许从模块访问 UMD 全局变量。 */


    /* 源映射选项 */
    // "sourceRoot": "",                      /* 指定调试器应该定位 TypeScript 文件而不是源位置的位置。 */
    // "mapRoot": "",                         /* 指定调试器应该定位映射文件而不是生成位置的位置。 */
    // "inlineSourceMap": true,               /* 发出带有源映射的单个文件而不是单独的文件。 */
    // "inlineSources": true,                 /* 在单个文件中与源映射一起发出源； 需要设置“--inlineSourceMap”或“--sourceMap”。 */


    /* 实验选项 */
    // "experimentalDecorators": true,        /* 启用对 ES7 装饰器的实验性支持。 */
    // "emitDecoratorMetadata": true,         /* 为装饰器的发射类型元数据启用实验性支持。 */


    /* 高级选项 */
    "skipLibCheck": true,                     /* 跳过声明文件的类型检查。 */
    "forceConsistentCasingInFileNames": true  /* 禁止对同一文件的大小写不一致的引用。 */
  }
}

```



### TypeScript中的数据类型

> 在TS中为使编写的代码更加规范、更有利于维护，故增加了数据类型校验！！

| 类型        | 名称     | 实例                        | 描述                                                         |
| ----------- | -------- | --------------------------- | ------------------------------------------------------------ |
| string      | 字符串   | 'xxx'，"xxx"                | 任意字符                                                     |
| number      | 数字     | 1，-6，28.3                 | 任意数字                                                     |
| object      | 对象     | { key: value }              | js对象                                                       |
| boolean     | 布尔     | true，false                 | 真、假                                                       |
| array       | 数组     | [1, 2, 3]                   | js 数组                                                      |
| tuple       | 元组     | [123, '666', false]         | Tuple 它属性于 数组类型中的一种                              |
| enum        | 枚举     | enum { A, B='123'}          | 从0开始，如果没有给标识符赋值时，那标识符的值为对应所以的下标！ |
| any         | 任意类型 | *                           | 任意类型（注：如果都用any，那TS的类型系统就失去意义了）      |
| unknown     | 顶级类型 | *                           | 类型安全的any，每当想使用 any 时，应该先试着用 unknown       |
| never       | 没有值   | 其他类型                    | 它包括 null 和 undefined 两种类型，代表从来都不会出现的值    |
| void        | 空值     | undefined                   | 在ts中void表示没有任何类型，一般在定义方法的时候，而方法没有返回值时用 |
| null        | 是一个数 | null                        | null值的类型可能是：null 或 number 或 undefined              |
| undefined   | 不明确的 | var xxx; let xx; const: xxx | 常、变量已声明，但没赋任何值                                 |
| not defined | 未定义   | xxx                         | 连常、变量都没声明                                           |
| 字面量      | 字面量   | 其本身                      | 定义常、变量时，不加类型限制（TS会隐式的加上）               |

> 注：当把类型看作是值的集合时，any 和 unknown 是包含所有值的集合，因为 any 和 unknown 在 TypeScript 中是所谓的“顶部类型”。
>
>  \*  而：unknown 类型是 any 的类型安全版本。每当你想使用 any 时，应该先试着用 unknown。
>
>  \*  在 any 允许我们做任何事的地方，unknown 的限制则大得多。
