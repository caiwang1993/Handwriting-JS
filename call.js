/**
 * call方法的实现
 * @param {this指向*} context 
 * @param  {...any} arg 
 */

Function.prototype.myCall = function (context, ...args) {
    let cxt = context || window;
    //将当前被调用的方法定义在cxt.func上。（为了能以对象调用形式绑定this）
    //新建一个唯一的Symbol变量避免重复
    let func = Symbol();
    cxt[func] = this;
    arg = args || [];
    //以对象形式调用func，此时this指向cxt，也就是传入的需要绑定的this指向
    const res = args.length > 0 ? cxt[func](...args) : cxt[func]()
    console.log(cxt)
    //删除该方法，不然会对传入对象造成污染
    delete cxt[func]
    console.log(res)
    return res
}


//实现call方法
function f(c,d) {
    return this.a + this.b + c +d
}
let e = { a: 3, b: 4 }
f.myCall(e,1,2)
