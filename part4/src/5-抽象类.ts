(function () {
    // 以abstract开头创建的类是抽象类，不能用来创建对象，是专门用来继承的类
    // 抽象类能添加抽象方法
    abstract class Animal{
        name:string;

        constructor(name:string){
            this.name = name;
        }
        // 定义抽象方法，走向方法智能定义在抽象类中，没有方法体，子类必须对抽象方法进行重写
        abstract say () :void;
    }
    class Dog extends Animal {
        say() {
            console.log('x');
        }
    }

})()