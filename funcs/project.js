// 抽取表状数据中部分字段值,并保持表的抽象
// var _ = require('lodash');
var _ = require('underscore');
var construct = require('./mapcat').construct;

// var table = [
// 	{ id: 0, uname: 'xiongxiong109', age: 20 },
// 	{ id: 1, uname: 'xiongxiong10', age: 15 },
// 	{ id: 2, uname: 'xiongxiong085', age: 23 },
// 	{ id: 3, uname: 'qiaoqiao', age: 32 }
// ]

function project(table, keys) {
	return _.map(table, (row) => {
		// console.log(construct(row, keys)) // [row, keys]
		return _.pick.apply(null, construct(row, keys)) // 相当于_.pick(row, [key0, key1, ...])
		// return _.pick(row, keys)
	})
}

// console.log(project(table, ['uname', 'age']));
// console.log(_.pluck(table, 'uname'));
module.exports = project;