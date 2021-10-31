// 在定义函数或者类时，如果遇到类型不明可以使用泛型
function fn<T>(a: T): T {
return a;
}
// 可以直接调用具有泛型的函数
let res = fn(10);//不指定泛型，ts自动对类型进行判断
let res2 = fn<string>('xzt'); //指定泛型

// 泛类可以同时指定多个
function fn2<T,K>(a:T,b:K) {
    console.log(b);
    return a;
}
fn2<number,string>(123,'xzt');

interface inter{
    length:number;
}
// T extends Inter 表示泛型t必须inter实现类
function fn3<T extends inter>(a:T):number {
    return a.length;
}
