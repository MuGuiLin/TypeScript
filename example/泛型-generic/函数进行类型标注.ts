function handler(num1: number, num2: number) {
    return num1 + num2;
}

declare function debounce<A extends any[], R>(fn: (...args: A) => R, duration: number): (...args: A) => R;

const fun = debounce(handler, 1000)

console.log(fun(1, 2));
