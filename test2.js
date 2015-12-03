/*javascript 函数式编程*/
/*
functional Javascript
*/
var underscore=require('underscore');
(function(_){
	/*实例:
	将下列数组按照时间由小到大排序,并将一条标准数据正确地(依然按照时间顺序)插入到
	排序好的数组中
	*/
	var rankData=[
		{name:'x',age:18},
		{name:'xx',age:8},
		{name:'xa',age:15},
		{name:'qx',age:6},
		{name:'xad',age:28},
		{name:'xdas',age:22},
		{name:'aswx',age:23},
	];
	var baseLine={name:'房品君',age:10};
	/*
	_.find()方法
	*/
	//sort排序
	var sortData=
	_.chain(rankData)
	.sortBy('age')
	.value();
	//找到插入位置
	var insertId=
	_.chain(sortData)
	.indexOf(
		_.find(sortData,function(data){
			return data.age>baseLine.age;
		})
	)
	.value();
	console.log('原始数组为:');
	console.log(rankData);
	sortData.splice(insertId,0,baseLine);
	console.log('排序并插入baseLine后的数组为:');
	console.log(sortData);

})(underscore);