// 引入其他类
import Snake  from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

var kc = "";

// 游戏控制器
class GameControl {
    // 定义三个属性
    // 蛇
    snake:Snake;
    // 食物
    food:Food;
    // 记分牌
    scorepanel:ScorePanel;
    // 创建一个属性来存储蛇的移动方法
    direction:string ='';
    // 创建一个属性记录游戏是否结束
    islive = true;


    constructor() {
        this.snake = new Snake();
        this.food = new Food(); 
        this.scorepanel =new ScorePanel(11,1);

        this.init();
    }
    // 游戏初始化,游戏开始
    init(){
        this.food.change();
        // 绑定按键按下事件
      document.addEventListener('keydown',this.keydownhandler.bind(this));  
    //   调用run方法,让蛇移动
    this.run();
    }

    keydownhandler(event:KeyboardEvent){
        // 检查eventhis.key的值是否合法
        if(event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "ArrowLeft" || event.key === "ArrowRight" ){
            this.direction = event.key;
        }

    }
    // 创建控制蛇移动的方法
    run () {
        // 获取蛇现在坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        

        // 根据按键方向来修改X值和Y值
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                // 向上移动 top 减少
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                // 向下移动 top 增加
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                // 向左移动 left 减少
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                // 向右移动 left 增加
                X += 10;
                break;
        }

        // 检查蛇吃到食物
        this.checkeat(X,Y);
        
        try{
        // 修改蛇的位置
        this.snake.X = X;
        this.snake.Y = Y;
        }catch (e){
            alert('GAME OVER!')
            this.islive = false;
        }

        // 开启一个定时调用
        this.islive && setTimeout(this.run.bind(this),300 -(this.scorepanel.level-1) *30);
    }
    // 定义一个方法，检查蛇迟到食物
    checkeat(X:number,Y:number) {
        if (X === this.food.X && Y === this.food.Y){
            // 食物位置重置
            this.food.change();
            // 分数增加
            this.scorepanel.addscore();
            // 蛇增加一节
            this.snake.addBody();
        }
    }
}
export default GameControl;