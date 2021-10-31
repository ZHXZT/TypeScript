class Dog{
    name:string ;
    age:number;

// constructor被称为构造函数
// 构造函数会在对象创建是调用
    constructor (name:string,age:number) {
        // 在实例方法中,this表示当前的实例
        // 在构造函数中当前对象就是当前新建的那个对象
        // 可以通过this先新建对象添加属性
        this.name = name;
        this.age = age;
        
    }
    bark () {
        // 在方法中可以通过this来表示当前调用方法的对象
        alert('xxx');
    }
}
const dog = new Dog('xzt',87);