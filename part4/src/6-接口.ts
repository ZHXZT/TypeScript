(function () {
    // 描述一个对象的类型
    type mytype = {
        name:string;
        age :number;
    };
    // 接口用来定义一个类结构，定义一个类中应该包含哪些属性和方法
    // 同时接口也可以当成类型声明去使用
    interface myinterface {
        name :string;
        age :number;
    }
    const obj :myinterface = {
        name:'xzt',
        age:20
    }
    // 接口可以在定义类的时候去限制类结构
    // 接口值定义对象结构，所有属性不能有实际值
    // 接口中所有方法都是抽象方法
    interface myinter {
        name:string;
        say() :void;
    }
    // 定义类时，可以让类去实现一个接口
    // 实现接口就是让类满足接口的要求
    class myclass implements myinter {
        name:string;

        constructor(name :string) {
            this.name = name ;
        }
        say () {
            console.log('x')
        }
    }
})()