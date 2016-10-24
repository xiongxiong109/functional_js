// 利用reduce、reduceRight构造一个返回验证结果一致的函数 allof
"use strict";

const _ = require('lodash');

/*
	allOf函数, 接收一组任意数量的函数参数, 这些函数的返回值如果都为同一个值
*/

function allOf () {

	let args = _.toArray(arguments);

	/*
		reduce函数接收一个集合，把集合中元素归结为一个单独的数值
		memorey是程序的初始值, 每一次的返回都由迭代器的结果产生
	*/

	return _.reduce(args, function(result, func) {
		return result && func();
	});

}

// let rst = allOf(function() {return true}, function() {return false});
// console.log(rst);
module.exports = allOf;