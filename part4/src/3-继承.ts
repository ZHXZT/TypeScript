(function () {

    class Animal{
        name:string;
        age:number;

        constructor(name:string,age:number){
            this.age = age;
            this.name = name;
        }
        say () {
            console.log('jiao');
        }
    }

    // 让dog类继承animal类
    // 此时animal称为父类，aog称为子类
    // 使用继承后，子类会拥有父类所有父类方法和属性
    // 如果子类中有和父类一样的方法，子类方法会覆盖父类方法
    class Dog extends Animal {
       run() {
           console.log('qqq');
       }
    }

    class Cat extends Animal {
       
    }

    const dog = new Dog('xzt',8);
    const cat = new Cat('lyh',11); 
    console.log(dog);
    console.log(cat);
    dog.say();
    cat.say();
})();