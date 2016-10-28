// 提供一个操作数据表结构的函数restrict, 该函数提供抽象方法, 在具体的方法中会根据
"use strict";

const _ = require('lodash');
const truthy = require('./truthy');
const project = require('./project');
const as = require('./as');

/*
	@table: 操作表
	@op: 操作函数: return: boolean, 根据boolean返回值的情况, 得到需要的数据
*/
function restrict(table, op) {
	return _.reduce(table, (operedTable, obj) => {
		if( truthy( op(obj) ) ) { // 如果某一项满足筛选条件, 则返回筛选项
			return operedTable
		} else { // 否则返回不包含obj的newTable
			return _.without(operedTable, obj)
		}
	}, table)
}

let table = [
	{id: 0, uname: 'xx'},
	{id: 1, uname: 'jj'},
	{id: 2, uname: 'qq'}
];

// let x = restrict(table, (obj) => {
// 	return obj.id < 2
// });

// console.log(x);

// let x = restrict(
// 	project(as(table, {'id': 'uid'}), ['uid', 'uname']),
// 	(obj) => obj.uid >= 2
// );
// console.log(x) // [{uid: 2, uname: 'qq'}]

// 函数式的风格, 会利用各种单个的函数对数据结构一层一层往下分解

module.exports = restrict;