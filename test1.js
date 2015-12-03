var underscore=require('underscore');

!function(_){

	var arr=[
		{name:'xas',age:9},
		{name:'xsx',age:21},
		{name:'ad',age:18},
		{name:'sax',age:5},
		{name:'sa',age:25},
		{name:'aa',age:6}
	];

	/*
	函数式编程,采用谓语动词函数嵌套的方法,层层剥离,直到返回最终的结果。
	*/
	/*例1,将上述对象数组按照age字段的值逆序排序,并返回除了第一个以外的对象*/
	//sortBy返回的是list的拷贝副本
	//思路:用sortBy将数组正序排序,然后使用栈结构入栈出栈,即可实现将数组逆序,然后使用_.rest方法返回除了第一个
	// console.log( _.rest(_.pluck( _.sortBy(arr,'age'),'name')) );
	// var newArr=[];
	// _.each(_.sortBy(arr,'age'),function(obj){
	// 	newArr.unshift(obj);
	// });
	// console.log(_.rest(newArr));

	//返回age为3的倍数的arr中的名字,按从小到大的顺序排序
	console.log(arr);
	console.log('返回age为3的倍数的arr中的名字、年龄,按从小到大的顺序排序:');
	_.each(_.sortBy(_.filter(arr,function(people){return people.age%3==0}),'age'),function(ele,idx){
		console.log([idx+1,'、',ele.name,'age:',ele.age].join(''));
	});
}(underscore);