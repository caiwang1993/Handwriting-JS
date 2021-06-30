/**
 * 手动实现bind函数
 * @param {*} context 
 * @param  {...any} args 
 * @returns 
 */
Function.prototype.myBind = function(context,...args){
    //新建一个变量赋值为this，表示当前函数
    const fn = this;
    //判断有没有参数传进来
    args = args || [];
    //返回一个新函数newFn,在里面调用fn
    return function newFn(...nweFnArgs){
      if(this instanceof newFn){
          return new fn(...args,...nweFnArgs)
      }
      return fn.apply(context,[...args,...nweFnArgs])
    }

}

//测试
let name = '小王',age =17;
let obj = {
    name:'小张',
    age: this.age,
    myFun: function(from,to){
        console.log(this.name + ' 年龄 ' + this.age+'来自 '+from+'去往'+ to)
    }
}
let db = {
    name: '德玛',
    age: 99
}

obj.myFun.myBind(db,'成都','上海')();       // 德玛 年龄 99  来自 成都去往上海
obj.myFun.myBind(db,['成都','上海'])();   // 德玛 年龄 99  来自 成都, 上海去往 undefined