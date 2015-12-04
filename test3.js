var _=require('underscore');
var createObjArr=require('./createData');
//生成随机数组
// var dataArr=createObjArr(20);
// console.log(dataArr);
var dataArr=
[ { name: 'tRdxG', age: 39 },
  { name: 'yaELW', age: 7 },
  { name: 'uSFfd', age: 17 },
  { name: 'eXKgr', age: 45 },
  { name: 'xDNna', age: 10 },
  { name: 'eDRjs', age: 24 },
  { name: 'vuktj', age: 34 },
  { name: 'PAyWl', age: 11 },
  { name: 'tgcNT', age: 31 },
  { name: 'FjDky', age: 13 },
  { name: 'eKKfv', age: 29 },
  { name: 'haAsc', age: 6 },
  { name: 'CgffM', age: 45 },
  { name: 'IDKdO', age: 29 },
  { name: 'funLB', age: 47 },
  { name: 'eCGcB', age: 26 },
  { name: 'ANryH', age: 29 },
  { name: 'qaYil', age: 37 },
  { name: 'yScaR', age: 13 },
  { name: 'QqrfV', age: 20 } ];
  
console.log( 
	_.chain(dataArr)
	.filter(function(data){
		return data.age<=10;
	})
	.sortBy('age')
	.value()
);