/*
	anyof 创建一个函数，接收任意个函数作为参数, 其中任何一个函数的值返回true, 则返回true
*/
"use strict";

const _ = require('lodash');

function _anyOfTrue(truth , fn) {
	return truth || fn();
}

/*
	reduceRight和reduce的第三个参数可以设置一个起始值
*/
function anyOf() {
	return _.reduceRight(_.identity(_.toArray(arguments)), _anyOfRight, false);
}

module.exports = anyOf;