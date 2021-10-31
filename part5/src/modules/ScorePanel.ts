
class ScorePanel{
    score = 0;
    level = 1;
    scoreele:HTMLElement;
    levelele:HTMLElement;
    // 设置一个变量限制等级
    maxlevel: number;
    // 设置一个变量表示多少分时升级
    upscore: number;

    constructor(maxlevel:number = 10,upscore:number = 10) {
        this.scoreele = document.getElementById('score')!;
        this.levelele = document.getElementById('level')!;
        this.maxlevel = maxlevel;
        this.upscore = upscore;

    }
    // 加分方法
    addscore(){
        this.scoreele.innerHTML = ++this.score+'';
        //  分数增加，升级
        if(this.score % this.upscore ===0){
            this.levelup();
        }
    }
    // 升级方法
    levelup(){
        if(this.level < this.maxlevel){
            this.levelele.innerHTML = ++this.level+'';
        }
    }
}
export default ScorePanel;