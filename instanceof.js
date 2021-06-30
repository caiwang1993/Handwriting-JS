/**
 * 手动实现instanceof
 * @param {*} targetObj 
 * @param {*} targetClass 
 */
function myInstanceof(targetObj, targetClass) {
    //检查参数
    if (!targetObj || !targetClass || !targetObj.__proto__ || !targetClass.prototype) {
        return false
    }
    let current = targetObj;
    while (current) {  //一直往原型链上找
        if (current.__proto__ === targetClass.prototype) {
            return true
        }

        current = current.__proto__;
    }

    return false
}

//测试
function Parent() { };
function Child() { };

Child.prototype.__proto__ = Parent.prototype;
const obj = new Child();
console.log(myInstanceof(obj, Child))
console.log(myInstanceof(obj, Parent))
console.log(myInstanceof({}, Parent))