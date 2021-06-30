/**
 * 手动实现apply方法
 * @param {*} context 
 * @param {*} args 
 */
Function.prototype.myApply = function (context, args = []) {
    let ctx = context || window;

    let func = Symbol()

    ctx[func] = this;

    const res = ctx[func](...args)
    console.log(res)
    return res

}

function f(c, d) {
    return this.a + this.b + c + d
}

let e = { a: 3, b: 4 }

f.myApply(e, [1, 2])