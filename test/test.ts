interface IpropsType {
    key: string;
    value: number;
    is: boolean;
    fn: Function
}

const str: string = 'Hello World！';
const num: number = Math.PI;

const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["a", "b", "c"];

const objArr: IpropsType[] = [{
    key: 'key', value: 666, is: false, fn: function () {
        alert(666)
    }
}];

console.log('str', str);
console.log('num', num);
console.log('numArr', numArr);
console.log('strArr', strArr);
console.log('objArr', objArr);