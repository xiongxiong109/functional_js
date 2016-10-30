// 提取某一个obj中的对应字段(函数式写法)
"use strict";

function plucker(key) {

	return (obj) => {
		return obj[key]
	}

}

// let testJson = {
// 	'id': '123',
// 	'uname': 'xiongxiong'
// }

// let getId = plucker('id');

// console.log(getId(testJson));

module.exports = plucker;