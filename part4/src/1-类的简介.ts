 //使用class关键字来定义一个类
//  对象中主要包含两个部分：1属性2方法
 class Person {
    // 直接定义的属性是实例属性，需要通过对象的实例访问 const per = new Person();  per.name
    // 使用static开头的属性是实例属性,可以直接通过类去访问 Person.name

    // readonly表示一个制度的属性,无法修改

    //  定义属性 
   readonly name:string = 'xzt';
    //在属性前使用static关键字可以定义类属性（静态属性）
    age:number = 18;

    // 定义方法
    // 若以static开头则为类方法,可以直接通过类去调用
    sayhello() {
        console.log('hello');
        

    }

 }
 const per = new Person();