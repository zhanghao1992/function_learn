/*
 * @Author: zhanghao23
 * @LastEditors: zhanghao23
 * @Description: file content
 */
const forEach = (arr, fn) => {
    let i = 0;
    while (i < arr.length) {
        fn(arr[i]);
        i++;
    }
}

const map = (arr, fn) => {
    let i = 0;
    let result = [];
    while (i < arr.length) {
        result[i] = fn(arr[i]);
        i++;
    }
    return result;
}

const filter = (arr, fn) => {
    let i = 0;
    let result = [];
    while (i < arr.length) {
        fn(arr[i]) && result.push(arr[i]);
        i++;
    }
    return result;
}

const sort  = (arr, fn) => {
    let i = 0;
    let result = arr.slice();
    while (i < result.length - 1) {
        if (fn(result[i], result[i+1]) < 0) {
            let a = result[i];
            result[i] = result[i + 1]
            result[i + 1] = a
        }
        i++;
    }
    return result;
}

const unary = fn => 
    fn.length === 1 ? 
        fn :
        arg => fn(arg) 

const once = fn => {
    let done = false;
    return function() {
        return done ? undefined : (done = true, fn.apply(this, arguments));
    }
}

const memoized = (fn) => {
    let lookupTable = {};
    return (arg) => lookupTable[arg] || (lookupTable[arg] = fn(arg))
}

const concatAll = array => {
    let result = [];
    for(let v of array) {
        Object.prototype.toString.call(v) === '[object Array]' ? 
        result.push.apply(result, v) :
        result.push(v)
    }
    return result;
}

const reduce = (arr, fn, o) => {
    let r = o
    for(let v of arr) {
        r = fn(r, v)
    }
    return r
}

export {
    forEach,
    map,
    filter,
    sort,
    unary,
    once,
    memoized,
    concatAll,
    reduce
}