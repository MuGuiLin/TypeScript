
/**
 * 节流（减少执行次数）
 * @param fn 
 * @param time 
 * @returns fn
 */
function throttle(fn: any, time: number = 16) {
    let open = true;;
    return () => {
        if (!open) {
            return
        }
        open = false;
        fn();
        const now = new Date().getTime();
        const run = now % time;
        setTimeout(() => {
            open = true;
        }, time - run);
    }
};

let interval = null;
interval = setInterval(() => {
    throttle(function () {
        console.log();
        
    })
}, 10);



/**
 * 柯里化
 * @param fn 
 * @returns fn
 */
declare type FNCrry = (...args: Array<any>) => any;
function curry(fn: FNCrry) {
    const g = (...args: Array<any>) => {
        if (args.length >= fn.length) {
            return fn(...args);
        }
    }
    return (...left: Array<any>) => {
        return g(...args, ...left)
    };
};
function _add(a: number, b: number, c: number, d: number) {
    return a + b + c + d;
};

// 柯里化调用
const add = curry(_add);
console.log(add(1, 2));
console.log(add(1, 2, 3, 4));
console.log(add(1)(2)(3)(4));
console.log(add(1, 2)(3)(4));
