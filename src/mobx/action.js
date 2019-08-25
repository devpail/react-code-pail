import {default as action, observable} from "mobx";

class Ticker{
    @observable tick = 0;

    //this指向的是全局的Windows对象
    @action
    increment(){
        this.tick++;
    }

    //解决this绑定的问题
    @action.bound
    increment(){
        this.tick++;
    }
}

const ticker = new Ticker();
setInterval(ticker.increment, 1000);