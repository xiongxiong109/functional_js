/*
	finder函数, 用来获取一个比较后的最佳值
	@ currentFun: 比较函数
	@ bestFun: 最佳值函数
	@ vColl: 需要做比较的集合
*/
"use strict";
const _ = require('underscore');
const plucker = require('./plucker');

// let person = [
// 	{}
// ]

function finder(currentFun, bestFun, vColl) {

	return _.reduce(vColl, (bestColl, currentColl) => {

		var bestValue = currentFun(bestColl);
		var currentValue = currentFun(currentColl);

		return (bestValue === bestFun(bestValue, currentValue) ? bestColl : currentColl)

	})

}

// console.log(finder(_.identity, Math.max, [1,2,3,4,5]))

let person = [
	{
		uname: 'xiong',
		uage: 21
	},
	{
		uname: 'jian',
		uage: 18
	}
]

// let getAge = plucker('uage');

// console.log(finder(getAge, Math.max, person));
/*
	reduce的方法是比较抽象的
	我们应该把它的归一化参数理解为一个reduce后的
	理想结果, 这个结果是未知的, 也是很难看到的
*/
// let p = _.reduce(person, (finalColl, cColl) => {

// 	let curAge = cColl.uage;
// 	let maxAge =finalColl.uage;

// 	return Math.min(curAge, maxAge)

// });

// console.log(p);

module.exports = finder;
