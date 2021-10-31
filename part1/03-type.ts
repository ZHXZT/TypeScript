// 可以使用|来链接多个类型（联合类型）
let b :"male" | "famale";
b = "male";
b = "famale";

let c :boolean | string;
c = true;
c = 'xzt';

// any表示任意类型，声明变量不指定类型，ts解析器会自动判断变量的类型为any
let d;
d = 1;
d = 'xzx';
d = true;

// unknown 表示未知类型的值
let e:unknown;
e = 10;
e = 'xz';
e = true;

let s: string;
// d的类型为any，可以复制给任意变量
e = 'hello';

// unknown实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
if(typeof e === "string") {
    s = e;
}
// 类型断言，用来告诉解析器变量的实际类型
s = e as string;
s = <string> e; 

// void用来表示为空，函数为例，表示没有返回值的函数
function fn() :void {
}

// never用来表示永远不会返回结果
function fn1() :void {
}

// object表示一个对象
 let f : object;
f={};
f = function () {    
};

// {}用来指定对象中可以包含哪些属性
// 语法{属性名：属性值，属性名：属性值}
// 在属性后加上？表示属性是可选的
let g : {name: string,age? :number};
g = {name:'xzt'};

// [propname:string]:any表示任意类型的属性
let h:{name:string,[propname:string]:any};

// 设置函数结构的类型声明：
// 语法：（形参：类型，形参：类型。。。）=》返回值
let i :(a:number,b:number)=>number;

// 数组类型声明：1-类型【】  2-array<类型>
// string【】表示字符串数组
let j :string[];
j = ['a','b','c'];
// number[]表示数字数组
let k :number[];

let l : Array<number>;
l = [1,2,3];

// 元组就是固定长度的数组
let m :[string,number];
m = ['xzt',123];

// enum枚举
enum Gender {
    male = 0,
    female =1
}

let n:{name:string,gender:Gender};
n = {
    name:'xzt',
    gender:Gender.female
}

// &表示同时
let o:{name:string}&{age:number};

// 类型的别名
type mytype  = 1|2|3|4;
let p:mytype;
