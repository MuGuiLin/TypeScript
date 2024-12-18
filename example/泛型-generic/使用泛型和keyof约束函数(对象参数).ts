const user = {
    name: '沐枫',
    age: 18,
    bool: true,
    list: [1, 2, 3],
    obj: {
        key: 666
    }
};


{
    // TS 普通写法
    // function handler1(obj: object, obj_key: string): any
    function handler1(obj: object, obj_key: string) {
        const res = obj[obj_key]
        console.log(res)
        return res;
    }
    handler1(user, 'name')
}

{
    // TS 推荐写法 使用泛型和keyof约束函数(对象参数)
    function handler2<T>(obj: T, obj_key: keyof T) {
        const res = obj[obj_key]
        console.log(res)
        return res;
    }
    // handler2函数的第2个参数 必须是user对象下的某个key名！
    // handler2(user, 'asdf'); // 报错 Argument of type '"asdf"' is not assignable to parameter of type '"name" | "age" | "bool" | "list" | "obj"'.
    handler2(user, 'list')
}