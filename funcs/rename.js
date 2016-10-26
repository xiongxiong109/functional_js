// rename函数, 给一个obj对象的某些属性字段进行重命名
// 如 {a: '123', b: 321} => rename a: 'aaa'  =>  {aaa: '123', b: 321}

var _ = require('underscore');
var construct = require('./mapcat').construct;

var oldObj = {
	a: '123',
	b: 'xxx',
	c: 'asdf',
	d: 'sdf21'
};

// low 逼版rename
function lowRename(obj, newNames) {
	for (var key in newNames) {
		if (obj[key]) {
			var v = obj[key];
			delete obj[key];
			obj[newNames[key]] = v;
		}
	}
}

// 函数式版
function rename(obj, newNames) {
	// reduce方法遍历集合时
	// 迭代传递4个参数：memo,value 和 迭代的index（或者 key）和最后一个引用的整个 list
	return _.reduce(newNames, (memo, value, key, o) => {
		if (_.has(obj, key)) {
			memo[value] = obj[key];
			// return memo
		}
		return memo
	}, _.omit.apply(null, construct(obj, _.keys(newNames))));
}

var newObj = rename(oldObj, {
	'a': 'xiong',
	'b': 'jian',
	'c': 'qiao'
})

console.log(newObj)