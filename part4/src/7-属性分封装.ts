(function () {
    class Person {
        // ts可以在属性前添加属性的修饰符
        // public 修饰的属性可以在任意位置修改
        // private 私有属性 ，只能在类内部修改
            // 通过在类中添加方法使得私有属性可以被外部访问
        name:string;
        age:number;

        constructor (name:string,age:number) {
            this.name = name;
            this.age = age;
        }
        // 定义方法，用来设置name属性
        getname() {
            return this.name;
        }
        // 定义方法，用来设置name属性
        setname(value:string) {
            this.name = value;
        }
        getage() {
            return this.age;
        }
        setage(value:number) {
            // 判断年龄是否合法
            if(value >= 0){
                this.age = value;
            }
        }
    }
    // const per = new Person (name:'xzt',age:20);
    // 现在属性是在对象设置的，属性可以任意修改
    // 会导致数据不安全
    // per.setname('qwe');
    // per.setage(-66);

})()