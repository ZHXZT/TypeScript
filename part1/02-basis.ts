//声明一个变量a，同时指定它的类型为number
let a: number;
// a 的类型设置为了number，在以后的使用过程中a的值只能是数字
a =10; 
// a = 'xz';   此行会报错，a为number，不能赋值字符串

//js中的函数是不考虑参数的类型和个数的
function sum (a,b) {
    return a+b;
}
sum(123,"456");
function sum1 (a:number,b:number):number {
    return a+b;
}
sum1(123,456);
