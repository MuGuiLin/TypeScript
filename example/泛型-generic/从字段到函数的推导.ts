
// TS 普通写法
type WatcherType1 = {
    on(
        eventName: string,
        callback: (oldVal: any, newVal: any) => void): void;
}

declare function watch1(obj: object): WatcherType1;

const personWatcher1 = watch1({
    name: '沐枫',
    age: 18,
    bool: true,
    list: [1, 2, 3],
    obj: {
        key: 666
    }
});

personWatcher1.on('name', (oldVal, newVal) => {
    console.log(oldVal, newVal)
})
// 
personWatcher1.on('asdf', (oldVal, newVal) => {
    console.log(oldVal, newVal)
})



// TS 推荐写法
type WatcherType2<T> = {
    on<K extends keyof T & string>(
        // eventName: `${string & keyof T}Change`, // eventName 应该只能是："name" | "age" | "bool" | "list" | "obj"
        eventName: `${K}Change`, // eventName 应该只能是："name" | "age" | "bool" | "list" | "obj"
        callback: (oldVal: T[K], newVal: T[K]) => void): void;
}

declare function watch2<T>(obj: T): WatcherType2<T>;

const personWatcher2 = watch2({
    name: '沐枫',
    age: 18,
    bool: true,
    list: [1, 2, 3],
    obj: {
        key: 666
    }
});

// 报错 Argument of type '"asdf"' is not assignable to parameter of type '"nameChange" | "ageChange" | "boolChange" | "listChange" | "objChange"'.
// personWatcher2.on('asdf', (oldVal, newVal) => {
//     console.log(oldVal, newVal)
// })

// 报错 Argument of type '"ageChange"' is not assignable to parameter of type '"nameChange"'.
// personWatcher2.on<'name'>('ageChange', (oldVal, newVal) => {
//     console.log(oldVal, newVal)
// })

personWatcher2.on<'age'>('ageChange', (oldVal, newVal) => {
    console.log(oldVal, newVal)
})

// 可以自动推导
personWatcher2.on('boolChange', (oldVal, newVal) => {
    console.log(oldVal, newVal)
})