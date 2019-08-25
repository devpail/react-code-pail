import {computed, when} from "mobx";


// when(() => condition, () => {
//     sideEffect
// });
//condition会自动响应它使用的任何state的变化，当condition返回true时，函数sideEffect会执行，且只执行一次。
//when也会返回一个清除函数disposer。when非常适合用在以响应式的方式执行取消或清楚逻辑的场景
class MyResource{
    constructor() {
        when(
            () => !this.isVisible,
            () => this.dispose()
        );
    }

    @computed get isVisible(){
        //判断某个元素是否可见
    }

    dispose(){
        //清楚逻辑
    }

}