/**
 * new实现
 * @param {*} fun 
 * @param  {...any} args 
 */
function myNew(fun, ...args) {
    let obj = {}
    fun.call(obj, ...args)
    obj.__proto__ = fun.prototype
    return obj
}

function Puppy(age){
  this.age = age
}
Puppy.prototype.say =function(){
    console.log('哈哈哈')
}

let test = myNew(Puppy,12)
test.say()
console.log(test.age)
