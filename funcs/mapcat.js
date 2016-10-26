/*
	构造一个mapcat函数, 并学习真正意义上的函数式编程
*/

"use strict";
const _ = require('lodash') // lodash 的_.rest方法和underscore的不一样, 如果使用lodash, 应该用_.drop
const existy = require('./existy')

/*
	cat 函数, 接受一定数量的参数, 并把它们连接起来
	第一个参数类型必须为数组, 但是在cat中并不去验证这个字段类型, 而是在下面的construct函数中处理
	以保证传给cat函数的第一个参数一定是一个数组
*/
function cat() {
	var head = _.first(arguments);
	if (existy(head)) {
		return head.concat.apply(head, _.drop(arguments))
	}
	return []
}

// 接受两个参数, 一个是head元素, 一个是数组, 并调用cat方法, 把head和数组连接起来
function construct(head, arr) {
	return cat([head], _.toArray(arr))
}
// cat函数的参数数量是可变的，但是construct函数只会传给cat两个参数, 保证了参数的可控性
// 这两个函数都是这个模块的私有函数, 外部也不可直接访问或修改参数内容
// console.log(cat([45], [1, 2], [3, 4])); // [45, 1, 2, 3, 4]
// console.log(construct(45, [1,2]))

// 真正意义上的函数式编程，需要接收函数作为参数，并返回函数
function mapcat(args, func) {
	return cat.apply(null, _.map(args, func))
}

// let arrs = mapcat([1,2,3,4], (item) => {
// 	return construct(item, "&")
// });
// console.log(_.dropRight([1,2,3,4]));
// console.log(arrs);
// 在一个数组的每一个元素后面插入一个指定的标识符
function interpose(inter, arr) {
	// return ((arr.join(inter)).split('')) // 其实用这样一句话就可以搞定, 但是数据类型会被改变成string
	return (_.dropRight(mapcat(arr, (item) => { // 使用dropRight函数将数组的最后一个元素给删掉
		return construct(item, inter)
	})))
}

// console.log(interpose('&', [1,2,3]))

module.exports = {
	mapcat: mapcat,
	interpose: interpose,
	construct: construct
}