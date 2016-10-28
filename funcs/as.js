// 读取一个表数组, 对表数组中的obj的特定字段进行提取, 并重命名相关字段, 以保持表结构的抽象

"use strict";
const rename = require('./rename');
const _ = require('lodash');
const project = require('./project');

// var table = [
// 	{
// 		id: 123,
// 		uname: 'xiongxiong109',
// 		uage: 23
// 	},
// 	{
// 		id: 10,
// 		uname: 'xxx',
// 		uage: 20
// 	}
// ];

function as (table, newNames) {
	return _.map(table, (obj) => {
		return rename(obj, newNames)
	})
}

// console.log(project( as(table, {'uage': 'age'}), ['age'])); // 这样可以提取所有的uage字段，并用age表示
module.exports = as;