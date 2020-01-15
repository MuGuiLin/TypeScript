### TypeScript
	1、TypeScript 是 JavaScript 的一个超集，支持 ECMAScript 6 标准。

	2、TypeScript 由微软开发的自由和开源的编程语言。

	3、TypeScript 设计目标是开发大型应用，它最终是编译成标准的JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上。

### TypeScript安装
	1、全局安装 用命令行的TypeScript编译器可以使用Node.js包来安装。
		npm install -g typescript

	2、编译生成js文件
		tsc xxx.ts

### 直接输出js文件
	1、新建一个ts文件 

	2、在当前目录中打开DOS命令行工具，输入 tsc ts文件名 回车
	
	3、回车后系统会自动编译生成一个对应文件名的js文件

### tsconfig.json 初始化

	1、在当前项目目录中，打开dos命令工具 执行： tsc --init 此时会自动生成一个tsconfig.json的配置文件

	2、在生成的tsconfig.json文件中，把 "outDir": "./js",  的注释取消，并指定输出js文件在当前路径下的js目录中

	3、【注：这是在项目第一次的时候要操作的】在vsCode中选择终端菜单 -> 配置任务 -> 在弹出的列表中向下滑动选择 -> tsc:构建 - xx项目名/tsconfig.json

	4、在vsCode中选择终端菜单 -> 运行任务 -> 在弹出的列表中选择 -> tsc:监视 - xx项目名/tsconfig.json

	5、运行后系统会自动生成一个js目录，编译并生成一个对应的js文件，这个文件就是标准的、浏览器能识别的、能解析的js文件啦!

	6、现在你修改ts文件时，系统会自动同步到对应的js文件中


### TypeScript中的数据类型
	- 在TS中为使编写的代码更加规范、更有利于维护，故增加了数据类型校验

	1、字符串类型 String
	2、数字类型 Number
	3、布尔类型 Boolean
	4、数组类型 Array
	5、元组类型 Tuple
	6、枚举类型 Enum
	7、任意类型 Any
	8、void类型
	9、never类型
	10、undefined
	11、null

