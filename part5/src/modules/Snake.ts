class Snake{
    // 蛇头元素
    head:HTMLElement;
    // 蛇的身体，包括蛇头
    bodies:HTMLCollection;
    // 获取蛇的容器
    element:HTMLElement;

    constructor () {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }
    // 获取蛇头坐标
    get X () {
        return this.head.offsetLeft; 
    }
    get Y () {
        return this.head.offsetTop;
    }

    // 设置蛇头坐标
    set X (value) {
        // 若新值和旧值相同，直接返回不修改
        if(this.X === value){
            return;
        }
        if(value < 0 || value > 290 ){
            throw new Error('蛇撞墙了！');
        }

        // 修改x时，蛇在向左移动时，不能向右掉头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            // 若发生掉头，让蛇反方向移动
            if(value > this.X) {
                value = this.X - 10;
            }else{
                value = this.X + 10;
            }
        }

        // 移动身体
        this.movebody();
        this.head.style.left = value + 'px';
         // 检查有没有撞到自己
        this.checkheadbody();
    }
    set Y (value) {
        // 若新值和旧值相同，直接返回不修改
        if(this.Y === value){
            return;
        }
        if(value < 0 || value > 290 ){
            throw new Error('蛇撞墙了！');
        }

         // 修改y时，蛇在向上移动时，不能向下掉头
         if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            // 若发生掉头，让蛇反方向移动
            if(value > this.Y) {
                value = this.Y - 10;
            }else{
                value = this.Y + 10;
            }
        }

        // 移动身体
        this.movebody();
        this.head.style.top = value + 'px';
        // 检查有没有撞到自己
        this.checkheadbody();
    }
    // 蛇增加身体
    addBody () {
        this.element.insertAdjacentHTML("beforeend","<div></div>");
    }
    // 蛇身体移动方法
    movebody () {
        // 将后边的身体设置为前边身体的位置
        // 遍历获取所有的身体
        for(let i=this.bodies.length-1;i>0;i--){
            // 获取前边身体位置
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
            // 将值设置到身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
    // 检查蛇头撞到身体
    checkheadbody() {
        for(let i=1;i<this.bodies.length;i++){
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                throw new Error('YOU KILL YOURSELF!');
                
            }
        }
    }
}
export default Snake;