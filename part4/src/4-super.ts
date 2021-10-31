(function () {
    class Animal{
        name:string;

        constructor(name:string){
            this.name = name;
        }
        say () {
            console.log('jiao');
        }
    }
    class Dog extends Animal {
        age :number;
        constructor(name:string,age:number) {
            // 如果在子类写了构造函数，子类的构造函数必须对父类的构造函数调用
            super(name);
            this.age = age;
        }
        say() {
            // 在类方法中super就代表当前类的父类
            // super.say();
        }
    }

})()